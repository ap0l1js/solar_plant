import { fireEvent, render } from "@testing-library/react-native";
import { WrapperNativeBase } from "@utils/wrapper";
import { Welcome } from ".";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

describe("Welcome", () => {
  it("must navigate to home screen when click on button", async () => {
    const { getByText } = render(
      <WrapperNativeBase>
        <Welcome />
      </WrapperNativeBase>
    );

    const button = getByText("Começar");

    fireEvent.press(button);

    expect(mockedNavigate).toBeCalledWith("home");
  });
});
