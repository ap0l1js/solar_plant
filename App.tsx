import { StorageContextProvider } from "@contexts/storageContext";
import { KronaOne_400Regular, useFonts } from "@expo-google-fonts/krona-one";
import { Routes } from "@routes/index";
import { THEME } from "@theme/index";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";
import { Loading } from "./src/components/loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    KronaOne_400Regular,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <StorageContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </StorageContextProvider>
    </NativeBaseProvider>
  );
}
