import { useTheme } from "native-base";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory-native";

export type ChartDataType = {
  x: string;
  y: string;
};

type Props = {
  data: ChartDataType[];
  barWidth?: number;
  isDark?: boolean;
};

export function Chart({ data, barWidth, isDark }: Props) {
  const { colors } = useTheme();

  return (
    <VictoryChart domainPadding={{ x: 10 }} height={200}>
      <VictoryAxis
        style={{
          tickLabels: {
            angle: 60,
            padding: 14,
            fill: isDark ? colors.gray[700] : colors.gray[200],
          },
        }}
      />
      <VictoryAxis
        dependentAxis
        style={{
          tickLabels: { fill: isDark ? colors.gray[700] : colors.gray[200] },
        }}
      />
      <VictoryBar
        barWidth={barWidth}
        style={{
          data: {
            fill: isDark ? colors.purple[700] : colors.yellow[700],
            width: 16,
          },
        }}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        data={data}
      />
    </VictoryChart>
  );
}
