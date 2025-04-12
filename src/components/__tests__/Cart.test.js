import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
  const accordionText = screen.getByText("No Added Sugar Kulfi(3)");
  fireEvent.click(accordionText);
  expect(screen.getAllByTestId("foodItems").length).toBe(3);
});
