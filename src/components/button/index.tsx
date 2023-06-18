import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      bg={"yellow.700"}
      rounded="xl"
      _pressed={{
        bg: "gray.500",
      }}
      {...rest}
    >
      <Text color={"white"} fontFamily="heading" fontSize="sm">
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
