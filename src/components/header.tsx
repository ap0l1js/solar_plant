import { Box, Heading, IBoxProps, Text } from "native-base";

type Props = IBoxProps & {
  title: string;
  value: string;
  unit: string;
  isDark?: boolean;
};

export function Header({ title, value, unit, isDark, ...rest }: Props) {
  return (
    <Box flex={1} {...rest}>
      <Text
        color={isDark ? "gray.700" : "gray.200"}
        fontSize="md"
        fontFamily="krona"
      >
        {title}
      </Text>
      <Heading
        color={isDark ? "black" : "white"}
        fontSize="4xl"
        fontFamily="krona"
      >
        {value}
        <Text fontSize="md" fontFamily="body">
          {unit}
        </Text>
      </Heading>
    </Box>
  );
}
