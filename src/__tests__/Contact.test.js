import React from 'react';
import Contact from '../components/Contact/Contact';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

describe("Contact", () => {
    it("renders without crashes", () => {
        const tree = renderer.create(<Contact />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("has h1 tag with class", () => {
        const wrapper = shallow(<Contact/>);
        expect(wrapper.find('h1').hasClass('text-center')).toBeTruthy();
    });
    it('has h1 tag with class', () => {
        const wrapper = mount(<Contact/>);
        const post = wrapper.find('h1');
        expect(['text-center', 'text-black', 'text-capitalize', 'my-3'].every(c => post.hasClass(c))).toEqual(true);
    });
    it('has p tag', () => {
        const wrapper = mount(<Contact/>);
        const post = wrapper.find('p');
        expect(post.exists()).toEqual(true);
    });
    it('has a form element', () => {
        const wrapper = mount(<Contact/>);
        const post = wrapper.find('form');
        expect(post.exists()).toEqual(true);
    });
    it('has input element', () => {
        const wrapper = mount(<Contact/>);
        const post = wrapper.find('input');
        expect(post.exists()).toEqual(true);
    });
    it('has anchor element', () => {
        const wrapper = mount(<Contact/>);
        const post = wrapper.find('a');
        expect(post.exists()).toEqual(true);
    });
});