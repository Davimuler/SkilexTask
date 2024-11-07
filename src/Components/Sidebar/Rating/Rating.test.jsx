import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Rating from "./Rating";
import SidebarReducer, { UpdateIsLoading } from "../../../Redux/SidebarReducer";

const store = configureStore({
    reducer: {
        sidebar: SidebarReducer,
    },
});

describe("Rating Component", () => {
    test("renders the Rating component correctly", () => {
        render(
            <Provider store={store}>
                <Rating UpdateRate={() => {}} />
            </Provider>
        );

        const selectElement = screen.getByRole("combobox");
        expect(selectElement).toBeInTheDocument();

        expect(screen.getByText("Sort")).toBeInTheDocument();
        expect(screen.getByText("By rating")).toBeInTheDocument();
    });

    test("handles rating change correctly", async () => {
        const mockUpdateRate = jest.fn();

        render(
            <Provider store={store}>
                <Rating UpdateRate={mockUpdateRate} />
            </Provider>
        );

        // Находим элемент select и меняем его значение
        const selectElement = screen.getByRole("combobox");
        fireEvent.change(selectElement, { target: { value: "By rating" } });

        // Проверяем, что функция UpdateRate была вызвана с правильным значением
        await waitFor(() => {
            expect(mockUpdateRate).toHaveBeenCalledWith(true);
        });
    });

    test("dispatches UpdateIsLoading correctly", async () => {
        const mockUpdateRate = jest.fn();

        render(
            <Provider store={store}>
                <Rating UpdateRate={mockUpdateRate} />
            </Provider>
        );


        const dispatchSpy = jest.spyOn(store, 'dispatch');

        const selectElement = screen.getByRole("combobox");
        fireEvent.change(selectElement, { target: { value: "By rating" } });


        await waitFor(() => {
            expect(dispatchSpy).toHaveBeenCalledWith(UpdateIsLoading(false));
        });

        await waitFor(() => {
            expect(dispatchSpy).toHaveBeenCalledWith(UpdateIsLoading(false));
        });


        dispatchSpy.mockRestore();
    });
});
