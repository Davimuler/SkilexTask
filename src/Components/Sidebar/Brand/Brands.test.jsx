import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Brand from './Brand';
import { UpdateBrands, UpdateIsLoading } from '../../../Redux/SidebarReducer';

const mockStore = configureStore([]);

describe('Brand Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            sidebar: { pickedBrands: [] },
        });
        store.dispatch = jest.fn();
    });

    test('renders dropdown button with correct initial text', () => {
        render(
            <Provider store={store}>
                <Brand options={['Brand A', 'Brand B']} pickedBrands={[]} UpdateBrands={UpdateBrands} />
            </Provider>
        );
        expect(screen.getByText('Brands')).toBeInTheDocument();
    });

    test('opens dropdown and shows options on button click', () => {
        render(
            <Provider store={store}>
                <Brand options={['Brand A', 'Brand B']} pickedBrands={[]} UpdateBrands={UpdateBrands} />
            </Provider>
        );

        fireEvent.click(screen.getByText('Brands'));
        expect(screen.getByText('Brand A')).toBeInTheDocument();
        expect(screen.getByText('Brand B')).toBeInTheDocument();
    });

    test('selects and deselects brand options', () => {
        render(
            <Provider store={store}>
                <Brand options={['Brand A', 'Brand B']} pickedBrands={[]} UpdateBrands={UpdateBrands} />
            </Provider>
        );

        fireEvent.click(screen.getByText('Brands'));

        const brandAOption = screen.getByLabelText('Brand A');
        fireEvent.click(brandAOption);

        expect(brandAOption.checked).toBe(true);

        fireEvent.click(brandAOption);
        expect(brandAOption.checked).toBe(false);
    });

    test('dispatches UpdateBrands after debounce time', async () => {
        jest.useFakeTimers();

        render(
            <Provider store={store}>
                <Brand options={['Brand A', 'Brand B']} pickedBrands={[]} UpdateBrands={UpdateBrands} />
            </Provider>
        );

        fireEvent.click(screen.getByText('Brands'));
        fireEvent.click(screen.getByLabelText('Brand A'));

        jest.advanceTimersByTime(500);
        await waitFor(() => {
            expect(store.dispatch).toHaveBeenCalledWith(UpdateBrands(['Brand A']));
        });

        jest.useRealTimers();
    });

    test('updates button text with selected brand count', () => {
        render(
            <Provider store={store}>
                <Brand options={['Brand A', 'Brand B']} pickedBrands={[]} UpdateBrands={UpdateBrands} />
            </Provider>
        );

        fireEvent.click(screen.getByText('Brands'));
        fireEvent.click(screen.getByLabelText('Brand A'));

        expect(screen.getByText('Selected: 1')).toBeInTheDocument();
    });
});
