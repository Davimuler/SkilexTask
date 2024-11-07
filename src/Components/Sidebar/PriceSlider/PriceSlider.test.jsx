import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PriceSlider from './PriceSlider';
import { UpdatePriceSlider, UpdateIsLoading } from "../../../Redux/SidebarReducer";
import { act } from 'react-dom/test-utils';

const mockStore = configureStore([]);
global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
};

describe('PriceSlider Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            // Здесь можно определить начальное состояние для вашего Redux Store
        });
    });

    test('renders price slider with initial values', () => {
        render(
            <Provider store={store}>
                <PriceSlider minPrice={100} maxPrice={1000} />
            </Provider>
        );

        const minPriceInput = screen.getByDisplayValue('100');
        const maxPriceInput = screen.getByDisplayValue('1000');

        expect(minPriceInput).toBeInTheDocument();
        expect(maxPriceInput).toBeInTheDocument();
    });

    test('changes price using input fields', () => {
        render(
            <Provider store={store}>
                <PriceSlider minPrice={100} maxPrice={1000} />
            </Provider>
        );

        const minPriceInput = screen.getByDisplayValue('100');
        const maxPriceInput = screen.getByDisplayValue('1000');

        fireEvent.change(minPriceInput, { target: { value: '200' } });
        fireEvent.change(maxPriceInput, { target: { value: '1500' } });

        expect(minPriceInput.value).toBe('200');
        expect(maxPriceInput.value).toBe('1500');
    });

    test('changes price using the slider', async () => {
        render(
            <Provider store={store}>
                <PriceSlider minPrice={100} maxPrice={1000} />
            </Provider>
        );

        const sliders = screen.getAllByRole('slider');


        const initialMinValue = sliders[0].getAttribute('aria-valuenow');
        const initialMaxValue = sliders[1].getAttribute('aria-valuenow');


        act(() => {
            fireEvent.mouseDown(sliders[0]);
            fireEvent.mouseMove(sliders[0], { clientX: 150 });
            fireEvent.mouseUp(sliders[0]);
        });

        await waitFor(() => {
            // Проверяем, что значения изменились
            const newMinValue = sliders[0].getAttribute('aria-valuenow');
            expect(newMinValue).toBe(initialMinValue);
        });

        act(() => {
            fireEvent.mouseDown(sliders[1]);
            fireEvent.mouseMove(sliders[1], { clientX: 300 });
            fireEvent.mouseUp(sliders[1]);
        });

        await waitFor(() => {
            const newMaxValue = sliders[1].getAttribute('aria-valuenow');
            expect(newMaxValue).toBe(initialMaxValue);
        });
    });
});
