import React from 'react';
import Landing from '../components/Landing/Landing';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

describe("Landing", () => {
    it("renders without crashes", () => {
        const tree = renderer.create(<Landing/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("has figure tag", () => {
        const wrapper = shallow(<Landing />);
        expect(wrapper.find('figure').exists()).toEqual(true);
    });
    it("has figcaption tag", () => {
        const wrapper = shallow(<Landing />);
        expect(wrapper.find('figcaption').exists()).toEqual(true);
    });
    it("has h1 tag", () => {
        const wrapper = shallow(<Landing />);
        expect(wrapper.find('h1').exists()).toEqual(true);
    });
    it("has p tag", () => {
        const wrapper = shallow(<Landing />);
        expect(wrapper.find('p').exists()).toEqual(true);
    });
    it("has a title", () => {
        const wrapper = mount(<h1>Featured Products</h1>)
        expect(wrapper.text()).toEqual('Featured Products');
    });
    it("renders heading tag", () => {
        const wrapper = shallow(<Landing/>);
        expect(wrapper.find('h1')).toHaveLength(2);
    });
    it("has img tag", () => {
        const wrapper = shallow(<Landing />);
        expect(wrapper.find('img').exists()).toEqual(true);
    });
    it("has class card", () => {
        const wrapper = mount(<Landing />);
        expect(wrapper.find('.card').every('.card')).toEqual(true);
    });
    it("has class card-img-top", () => {
        const wrapper = mount(<Landing />);
        expect(wrapper.find('.card-img-top').every('.card-img-top')).toEqual(true);
    });
    it("has button to have class cart-btn", () => {
        const wrapper = mount(<Landing />);
        expect(wrapper.find('.cart-btn').every('.cart-btn')).toEqual(true);
    });
    it("has a cart icon", () => {
        const wrapper = mount(<Landing />);
        expect(wrapper.find('i').exists()).toEqual(true);
    });
    it("has button to have class cart-btn", () => {
        const wrapper = mount(<Landing />);
        expect(wrapper.find('.cart-btn').every('.cart-btn')).toEqual(true);
    });


})