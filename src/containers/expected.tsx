import { Chart, ChartDataType } from "@components/chart";
import { ChartButton } from "@components/chartButton";
import { Header } from "@components/header";
import { StorageContext } from "@contexts/storageContext";
import { Entypo, Feather } from "@expo/vector-icons";
import { Center, HStack, VStack } from "native-base";
import { useContext } from "react";

export function ExpectedContainer() {
  const { totals, groupSelected, expected, chartSelected, setChartSelected } =
    useContext(StorageContext);

  return (
    <VStack space={2} px={6}>
      <HStack>
        <Header
          title="Total Esperado"
          value={`${totals.expected.toFixed(1)}`}
          unit="KW/H"
          isDark
        />
      </HStack>

      <Center>
        <Chart data={expected as ChartDataType[]} isDark type={chartSelected} />
      </Center>

      <Center mb={4}>
        <HStack bg="gray.600" roundedRight="full" roundedLeft="full" shadow="8">
          <ChartButton
            as={Feather}
            name="bar-chart-2"
            isActive={chartSelected === "bar"}
            onPress={() => setChartSelected("bar")}
          />

          <ChartButton
            as={Entypo}
            name="area-graph"
            isActive={chartSelected === "area"}
            onPress={() => setChartSelected("area")}
          />
        </HStack>
      </Center>
    </VStack>
  );
}
