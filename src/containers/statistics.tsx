import { Card } from "@components/card";
import { StorageContext } from "@contexts/storageContext";
import { ScrollView } from "native-base";
import { useContext } from "react";

export function Statistics() {
  const { totals } = useContext(StorageContext);

  return (
    <ScrollView px={6} my={4} horizontal showsHorizontalScrollIndicator={false}>
      <Card title={`${totals.trees.toFixed(1)}`} description="Árvores Salvas" />
      <Card title={`${totals.co2.toFixed(1)}`} description="Redução Co2" />
      <Card
        title={`${totals.percentage.toFixed(1)}`}
        description="Percentagem"
      />
    </ScrollView>
  );
}
