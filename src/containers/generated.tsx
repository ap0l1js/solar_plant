import { Chart, ChartDataType } from "@components/chart";
import { Group } from "@components/group";
import { Header } from "@components/header";
import { StorageContext } from "@contexts/storageContext";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Center, HStack, ScrollView, Text, VStack } from "native-base";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";

export function GeneratedContainer() {
  const { totals, groupSelected, setGroupSelected, generation, chartSelected } =
    useContext(StorageContext);

  const groups = [
    { key: "hourly", value: "Hora" },
    { key: "daily", value: "Dia" },
    { key: "monthly", value: "Mês" },
    { key: "yearly", value: "Ano" },
  ];

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  return (
    <VStack
      bg="purple.700"
      px={6}
      pt={16}
      pb={6}
      roundedBottomRight={50}
      roundedBottomLeft={50}
    >
      <VStack space={2}>
        <HStack>
          <Header
            title="Total Gerado"
            value={`${totals.kwh.toFixed(1)}`}
            unit="KW/H"
          />

          <TouchableOpacity onPress={() => navigation.navigate("welcome")}>
            <Text fontSize="sm" color="yellow.700" fontFamily="krona">
              Voltar
            </Text>
          </TouchableOpacity>
        </HStack>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {groups.map((group) => (
            <Group
              key={group.key}
              name={group.value}
              isActive={group.key === groupSelected}
              onPress={() => {
                setGroupSelected(group.key);
              }}
            />
          ))}
        </ScrollView>

        <Center>
          <Chart data={generation as ChartDataType[]} type={chartSelected} />
        </Center>
      </VStack>
    </VStack>
  );
}
