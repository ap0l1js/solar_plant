import { useTheme } from "native-base";
import {
  VictoryArea,
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryZoomContainer,
} from "victory-native";

export type ChartDataType = {
  x: string;
  y: string;
};

type Props = {
  data: ChartDataType[];
  isDark?: boolean;
  type?: "bar" | "area";
};

export function Chart({ data, isDark, type = "bar" }: Props) {
  const { colors } = useTheme();

  return (
    <VictoryChart
      containerComponent={<VictoryZoomContainer zoomDomain={{ x: [0, 15] }} />}
      domainPadding={{ x: 10 }}
      style={{ parent: { paddingLeft: 32 } }}
      height={200}
    >
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
          tickLabels: {
            fill: isDark ? colors.gray[700] : colors.gray[200],
          },
        }}
      />
      {type === "area" ? (
        <VictoryArea
          style={{
            data: { fill: isDark ? colors.purple[700] : colors.yellow[700] },
          }}
          data={data}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
        />
      ) : (
        <VictoryBar
          barWidth={10}
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
      )}
    </VictoryChart>
  );
}
