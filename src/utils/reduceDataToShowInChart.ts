import { ChartDataType } from "@components/chart";

export function reduceDataToShowInChart(
  accumulator: {
    generation: ChartDataType[];
    expected: ChartDataType[];
  },
  currentValue: string,
  index: number,
  generationValues: [],
  expectedValues: [],
  groupSelected: string
) {
  switch (groupSelected) {
    case "hourly":
      accumulator.generation.push({
        x: `${currentValue.split(":")[0]}h`,
        y: generationValues[index],
      });

      if (expectedValues[index]) {
        accumulator.expected.push({
          x: `${currentValue.split(":")[0]}h`,
          y: expectedValues[index],
        });
      }

      break;
    case "daily":
      accumulator.generation.push({
        x: currentValue.split("-")[2],
        y: generationValues[index],
      });

      if (expectedValues[index]) {
        accumulator.expected.push({
          x: currentValue.split("-")[2],
          y: expectedValues[index],
        });
      }

      break;

    case "monthly":
      const year = String(currentValue.split("-")[0]).substring(2, 4);

      const month = currentValue.split("-")[1];

      accumulator.generation.push({
        x: `${month}/${year}`,
        y: generationValues[index],
      });

      if (expectedValues[index]) {
        accumulator.expected.push({
          x: `${month}/${year}`,
          y: expectedValues[index],
        });
      }

      break;
    case "yearly":
      accumulator.generation.push({
        x: `${currentValue.split("-")[0]}`,
        y: generationValues[index],
      });

      if (expectedValues[index]) {
        accumulator.expected.push({
          x: `${currentValue.split("-")[0]}`,
          y: expectedValues[index],
        });
      }

      break;

    default:
      break;
  }

  return accumulator;
}
