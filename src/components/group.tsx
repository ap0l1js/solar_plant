import { IPressableProps, Pressable, Text } from "native-base";

type Props = IPressableProps & {
  name: string;
  isActive: boolean;
};

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Pressable
      mr={2}
      w={20}
      h={10}
      bg="gray.600"
      rounded="full"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      isPressed={isActive}
      _pressed={{
        background: "yellow.700",
      }}
      {...rest}
    >
      <Text
        color={isActive ? "gray.700" : "gray.200"}
        fontSize="xs"
        fontWeight="bold"
        fontFamily="krona"
      >
        {name}
      </Text>
    </Pressable>
  );
}
