import LogoSvg from "@assets/logo_white.svg";
import BackgroundImg from "@assets/usina.png";
import { Button } from "@components/button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";

export function Welcome() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleStart() {
    navigation.navigate("home");
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} justifyContent="space-between" px={6} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="painel solar"
          resizeMode="cover"
          position="absolute"
          borderBottomLeftRadius={100}
        />

        <VStack space={4}>
          <Center>
            <LogoSvg width={180} />

            <Text color="gray.100" fontSize="sm">
              Soluções em Energia Sustentável
            </Text>
          </Center>

          <VStack space="10" mt={24}>
            <Heading color="gray.100" fontSize="4xl">
              Pra quem precisa de uma luz. A energia Yellot nunca tem fim.
            </Heading>

            <Button title="Começar" onPress={handleStart} />
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
