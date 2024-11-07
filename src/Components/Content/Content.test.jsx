import { render, screen, fireEvent } from '@testing-library/react';
import Content from './Content';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { UpdateIsLoading } from '../../Redux/SidebarReducer';
import Spinner from '../Spinner/Spinner';

const mockStore = createStore(() => ({
    SidebarReducer: {
        isLoading: false,
    },
}));

const mockStore = {
    getState: () => ({
        Sidebar: {
            filters: {
                search: '',
                category: 'Electronics',  // Убедитесь, что категория правильная
                brands: [],  // Пусть это будет пустой массив для начала
                rate: false,
                priceSlider: {
                    minPrice: 0,
                    maxPrice: 1000,
                },
            },
        },
        MainContent: {
            productsData: [
                {
                    id: 1,
                    name: "Wireless Headphones",
                    category: "Electronics",
                    brand: "Sony",
                    price: 99.99,
                    rating: 4.5,
                    imageUrl: "https://media.wired.com/photos/66abec9ccb172c2e5de763bf/master/w_960,c_limit/Edifier-Stax-Spirit-S5-Headphones-Offwhite-Background-SOURCE-Amazon.jpg",
                },
                {
                    id: 2,
                    name: "Bluetooth Speaker",
                    category: "Electronics",
                    brand: "JBL",
                    price: 49.99,
                    rating: 4.0,
                    imageUrl: "https://media.wired.com/photos/66abec9ccb172c2e5de763bf/master/w_960,c_limit/Edifier-Stax-Spirit-S5-Headphones-Offwhite-Background-SOURCE-Amazon.jpg",
                },
                {
                    id: 3,
                    name: "Smartphone Case",
                    category: "Accessories",
                    brand: "Apple",
                    price: 19.99,
                    rating: 4.8,
                    imageUrl: "https://media.wired.com/photos/66abec9ccb172c2e5de763bf/master/w_960,c_limit/Edifier-Stax-Spirit-S5-Headphones-Offwhite-Background-SOURCE-Amazon.jpg",
                },
            ],
        },
    }),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
};

describe('Content Component', () => {
    test('renders products correctly', () => {
        renderWithStore(<Content productsData={mockProducts} search="" isLoading={false} />);

        // Проверяем, что рендерятся продукты
        mockProducts.slice(0, 9).forEach((product) => {
            expect(screen.getByText(new RegExp(product.name, 'i'))).toBeInTheDocument();
        });
    });

    test('displays "No results found" message when there are no products', () => {
        renderWithStore(<Content productsData={[]} search="Product" isLoading={false} />);

        // Проверяем сообщение о том, что продуктов не найдено
        expect(screen.getByText('No results found for "Product"')).toBeInTheDocument();
    });

    test('renders spinner when loading is true', () => {
        renderWithStore(<Content productsData={mockProducts} search="" isLoading={true} />);

        // Проверяем, что отображается спиннер, когда идет загрузка
        expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });



});
