import { ChartDataType } from "@components/chart";
import { Loading } from "@components/loading";
import { api } from "@services/api";
import { reduceDataToShowInChart } from "@utils/reduceDataToShowInChart";
import { useToast } from "native-base";
import { createContext, ReactNode, useEffect, useState } from "react";

type DataType = {
  generation: ChartDataType[];
  expected: ChartDataType[];
  totals: {
    kwh: number;
    percentage: number;
    trees: number;
    co2: number;
    expected: number;
  };
};

type StorageContextProviderProps = {
  children: ReactNode;
};

export type StorageContextDataProps = DataType & {
  setGroupSelected: (group: string) => void;
  groupSelected: string;
};

export const StorageContext = createContext<StorageContextDataProps>(
  {} as StorageContextDataProps
);

export function StorageContextProvider({
  children,
}: StorageContextProviderProps) {
  const [data, setData] = useState<DataType>();
  const [groupSelected, setGroupSelected] = useState("hourly");
  const [isLoading, setIsLoading] = useState(true);

  const toast = useToast();
  function handleChangeSelectedGroup(group: string) {
    setGroupSelected(group);
  }

  async function fetchData() {
    try {
      const response = await api.get(`/test-2023?dataType=${groupSelected}`);

      const labels: [] = response.data.data.x_labels;
      const generationValues: [] = response.data.data.generation;
      const expectedValues: [] = response.data.data.expected;

      const chartDataReduced = labels.reduce(
        (accumulator, currentValue: string, index: number) =>
          reduceDataToShowInChart(
            accumulator,
            currentValue,
            index,
            generationValues,
            expectedValues,
            groupSelected
          ),
        {
          generation: Array<ChartDataType>(),
          expected: Array<ChartDataType>(),
        }
      );

      const expectedSum = chartDataReduced.expected.reduce(
        (accumulator: number, currentValue: ChartDataType) => {
          return (accumulator += Number(currentValue.y));
        },
        0
      );

      setData({
        expected: chartDataReduced.expected as ChartDataType[],
        generation: chartDataReduced.generation as ChartDataType[],
        totals: {
          ...response.data.data.totals,
          expected: expectedSum,
        },
      });
    } catch (error) {
      toast.show({
        title: "Erro ao carregar os dados",
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [groupSelected]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <StorageContext.Provider
      value={{
        ...(data as StorageContextDataProps),
        groupSelected,
        setGroupSelected: handleChangeSelectedGroup,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}
