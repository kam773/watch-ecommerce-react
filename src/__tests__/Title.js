import React from 'react';
import Title from '../components/Title/Title';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';

describe("Title", () => {
    it('should render correctly', () => {
        const tree = renderer.create(<Title/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("renders heading tag", () => {
        const wrapper = shallow(<Title/>);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
    it("renders strong tag", () => {
        const wrapper = shallow(<Title/>);
        expect(wrapper.find('strong')).toHaveLength(1);
    });
    it("should has class text-blue", () => {
        const wrapper = shallow(<Title/>);
        expect(wrapper.find('strong').hasClass('text-blue')).toEqual(true);
    });
    it("has a name", () => {
        const wrapper = mount(<h1>your</h1>)
        expect(wrapper.text()).toEqual('your');
    })
    it("has a title", () => {
        const wrapper = mount(<h1>cart</h1>)
        expect(wrapper.text()).toEqual('cart');
    })
})
