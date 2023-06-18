import { act, fireEvent, render } from "@testing-library/react-native";
import { Button } from ".";

describe("Button", () => {
  it("must render correctly", async () => {
    const onSubmitMock = jest.fn();

    const { getByText } = render(<Button title="Teste 1" />);

    act(async () => {
      const El = await getByText("Teste 1");
      await fireEvent.press(El);
      expect(onSubmitMock).toBeCalledTimes(1);
    });
  });
});
