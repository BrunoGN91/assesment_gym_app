import { render, screen } from '@testing-library/react';
import{ App }from './App';
import { MemoryRouter } from 'react-router-dom';


describe('renders learn react link', () => {

  beforeEach(() => {
    render(<App />, {wrapper: MemoryRouter});
  })
 
it("Testing App", () => {

  expect.toHaveClass('App');
})

});
