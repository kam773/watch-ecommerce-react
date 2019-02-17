import React from 'react';
import EmptyCart from '../components/Cart/EmptyCart';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

describe("CartColumnst", () => {
    it('render without crashes', () => {
        const tree = renderer.create(<EmptyCart />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render h1 tag', () => {
        const props = {
            text: 'Your cart is currently empty'
        }
        const wrapper = mount(<EmptyCart {...props}/>)
        expect(wrapper.text()).toEqual("Your cart is currently empty");
    })
    it('has a div with class', () => {
        const wrapper = shallow(<EmptyCart />)
        expect(wrapper.find('div').exists()).toEqual(true);
    });
    it('has a heading tag', () => {
        const wrapper = shallow(<EmptyCart />)
        expect(wrapper.find('h1').exists()).toEqual(true);
    });
});
