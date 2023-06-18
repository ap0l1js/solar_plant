import { render } from "@testing-library/react-native";
import { WrapperNativeBase } from "@utils/wrapper";
import { Button } from ".";

describe("Button", () => {
  it("must render correctly", async () => {
    const { getByText } = render(
      <WrapperNativeBase>
        <Button title="Teste 1" />
      </WrapperNativeBase>
    );

    expect(getByText("Teste 1")).toBeTruthy();
  });
});
