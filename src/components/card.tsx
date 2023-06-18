import { Heading, Text, VStack } from "native-base";
import { IVStackProps } from "native-base/lib/typescript/components/primitives/Stack/VStack";

type Props = IVStackProps & {
  title: string;
  description: string;
};

export function Card({ title, description, ...rest }: Props) {
  return (
    <VStack
      mr={2}
      w={27}
      h={20}
      space={2}
      bg="gray.600"
      rounded="lg"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      {...rest}
    >
      <Text
        color={"gray.200"}
        fontSize="2xs"
        fontWeight="bold"
        fontFamily="krona"
      >
        {description}
      </Text>
      <Heading fontSize="md" fontFamily="krona" color="gray.200">
        {title}
      </Heading>
    </VStack>
  );
}
