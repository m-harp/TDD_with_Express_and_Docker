import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Book from '../Book';
import { shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps

Enzyme.configure({ adapter: new Adapter() });


describe('the app component', () => {

  it('should render the book component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Book)).toHaveLength(1)

  })
})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
