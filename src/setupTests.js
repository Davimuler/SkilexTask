import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

// Добавляем полифил ResizeObserver
global.ResizeObserver = require('resize-observer-polyfill');

// Настройка Testing Library
configure({ testIdAttribute: 'data-test-id' });