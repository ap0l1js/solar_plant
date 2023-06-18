import { Chart, ChartDataType } from "@components/chart";
import { Header } from "@components/header";
import { StorageContext } from "@contexts/storageContext";
import { Center, HStack, VStack } from "native-base";
import { useContext } from "react";

export function ExpectedContainer() {
  const { totals, groupSelected, expected } = useContext(StorageContext);

  return (
    <VStack space={4} px={6}>
      <HStack>
        <Header
          title="Total Esperado"
          value={`${totals.expected.toFixed(1)}`}
          unit="KW/H"
          isDark
        />
      </HStack>

      <Center>
        <Chart
          data={expected as ChartDataType[]}
          barWidth={groupSelected === "daily" ? 4 : 16}
          isDark
        />
      </Center>
    </VStack>
  );
}
