import { ExpectedContainer } from "@containers/expected";
import { GeneratedContainer } from "@containers/generated";
import { Statistics } from "@containers/statistics";
import { ScrollView, VStack } from "native-base";
import { StatusBar } from "react-native";

export function Home() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} bg="yellow.700">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <VStack>
        <GeneratedContainer />

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Statistics />

          <ExpectedContainer />
        </ScrollView>
      </VStack>
    </ScrollView>
  );
}
