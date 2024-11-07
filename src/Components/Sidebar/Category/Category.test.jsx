import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Category from './Category';
import { UpdateIsLoading } from '../../../Redux/SidebarReducer';

const mockStore = configureStore([]);

describe('Category Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            sidebar: { isLoading: false },
        });
        store.dispatch = jest.fn();
    });

    test('renders dropdown with options', () => {
        render(
            <Provider store={store}>
                <Category
                    options={['Category 1', 'Category 2']}
                    selectedOption="Category"
                    onOptionSelect={jest.fn()}
                />
            </Provider>
        );

        expect(screen.getByText('Category 1')).toBeInTheDocument();
        expect(screen.getByText('Category 2')).toBeInTheDocument();
    });

    test('renders initial selected category', () => {
        render(
            <Provider store={store}>
                <Category
                    options={['Category 1', 'Category 2']}
                    selectedOption="Category 1"
                    onOptionSelect={jest.fn()}
                />
            </Provider>
        );

        expect(screen.getByDisplayValue('Category 1')).toBeInTheDocument();
    });

    test('calls onOptionSelect when category is changed', async () => {
        const mockOnOptionSelect = jest.fn();

        render(
            <Provider store={store}>
                <Category
                    options={['Category 1', 'Category 2']}
                    selectedOption="Category"
                    onOptionSelect={mockOnOptionSelect}
                />
            </Provider>
        );

        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Category 2' } });

        expect(mockOnOptionSelect).toHaveBeenCalledWith('Category 2');
    });

    test('dispatches UpdateIsLoading(true) and UpdateIsLoading(false)', async () => {
        jest.useFakeTimers();

        render(
            <Provider store={store}>
                <Category
                    options={['Category 1', 'Category 2']}
                    selectedOption="Category"
                    onOptionSelect={jest.fn()}
                />
            </Provider>
        );


        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Category 2' } });
        expect(store.dispatch).toHaveBeenCalledWith(UpdateIsLoading(true));

        jest.advanceTimersByTime(500);  // Имитация дебаунса
        await waitFor(() => {
            expect(store.dispatch).toHaveBeenCalledWith(UpdateIsLoading(false));
        });

        jest.useRealTimers();
    });
});
