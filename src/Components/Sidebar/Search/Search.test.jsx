import { render, screen, fireEvent } from '@testing-library/react';
import {Provider, useDispatch} from 'react-redux';
import { createStore } from 'redux';
import Search from './Search';
import React from 'react';


const mockStore = createStore(() => ({
    sidebar: {
        search: '',
        isLoading: false,
    },
}));

jest.mock("../../../hooks/useDebounce", () => jest.fn().mockImplementation((value) => value));


describe('Search component', () => {
    test('renders correctly', () => {
        render(
            <Provider store={mockStore}>
                <Search />
            </Provider>
        );

        expect(screen.getByPlaceholderText('I am looking for...')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /OK/i })).toBeInTheDocument();
    });

    test('input value updates on change', () => {
        render(
            <Provider store={mockStore}>
                <Search />
            </Provider>
        );

        const input = screen.getByPlaceholderText('I am looking for...');
        fireEvent.change(input, { target: { value: 'laptop' } });
        expect(input.value).toBe('laptop');
    });
});
