import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Book from '../Book';
import { shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 --legacy-peer-deps

Enzyme.configure({ adapter: new Adapter() });


describe('get book content', () => {
    it('renders titles authors and due dates', () => {
        const bookData = [
            {
            "id": 0,
            "title": "Straloy",
            "author": "Mavis Henderson",
            "isbnNumber": "3,442",
            "isCheckedOut": false,
            "checkedOutBy": 0,
            "dateDue": ""
          },
          {
            "id": 1,
            "title": "Kidgrease",
            "author": "Marla Carr",
            "isbnNumber": "2,322",
            "isCheckedOut": false,
            "checkedOutBy": 2,
            "dateDue": ""
          }]

        const htmlExample = (    
          <ul>
              <li>Straloy Mavis Henderson 3,442</li>
              <li>Kidgrease Marla Carr 2,322</li>
          </ul> 
        );
        const wrapper = shallow(<Book books={bookData} />);
        expect(wrapper.contains(htmlExample)).toEqual(true);
    
    });
});