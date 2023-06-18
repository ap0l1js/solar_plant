import { Icon, IPressableProps, Pressable } from "native-base";

type Props = IPressableProps & {
  name: string;
  isActive?: boolean;
  as: any;
};

export function ChartButton({ name, isActive, as, ...rest }: Props) {
  return (
    <Pressable
      px={5}
      py={2}
      rounded="full"
      justifyContent="center"
      alignItems="center"
      isPressed={isActive}
      _pressed={{
        background: "purple.700",
      }}
      {...rest}
    >
      <Icon as={as} name={name} color="gray.200" size={7} />
    </Pressable>
  );
}
