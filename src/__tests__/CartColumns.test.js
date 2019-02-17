import React from 'react';
import CartColumns from '../components/Cart/CartColumns';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe("CartColumnst", () => {
    it('renders without crashing', () => {
        const tree = renderer.create(<CartColumns />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('has div with class row', () => {
        const wrapper = shallow(<CartColumns/>)
        expect(wrapper.find('.row').every('.row')).toEqual(true);
    });
    it('has p tag', () => {
        const wrapper = shallow(<CartColumns/>)
        expect(wrapper.find('p').every('p')).toEqual(true);
    });
})