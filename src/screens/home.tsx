import { ExpectedContainer } from "@containers/expected";
import { Statistics } from "@containers/statistics";
import { VStack } from "native-base";
import { StatusBar } from "react-native";
import { GeneratedContainer } from "../containers/generated";

export function Home() {
  return (
    <VStack flex={1} bg="yellow.700">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <VStack>
        <GeneratedContainer />

        <Statistics />

        <ExpectedContainer />
      </VStack>
    </VStack>
  );
}
