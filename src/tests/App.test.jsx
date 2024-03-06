import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HomePage from '../component/HomePage';
import * as jest from 'jest';

test('setSearchCategory function is called correctly', () => {
 
  // Mock setSearchCategory function
  const setSearchCategoryMock = jest.fn();

  // Render HomePage component with setSearchCategory mock
  const { getByLabelText } = render(
    <HomePage
      apiKeys="6a40dfe7fefa4ccf78fdca616d52403e"
      formatStartDate="2024-03-05"
      formatEndDate="2024-03-05"
      searchCategory="none"
      setSearchCategory={setSearchCategoryMock}
      searchNews={{}}
      setSearchNews={() => {}}
      news={{}}
      setNews={() => {}}
      favorites={[]}
      setNewsInFavorite={() => {}}
    />
  );

  // Get the select element by its label text
  const selectElement = getByLabelText('Category:');

  // Fire change event on the select element
  fireEvent.change(selectElement, { target: { value: 'business' } });

  // Check if setSearchCategory was called with the correct value
  expect(setSearchCategoryMock).toHaveBeenCalledWith('business');
});