import React from 'react';
import Form from '../components/Form/Form';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe("Form", () => {
    it('should render without crash', () => {
        const tree = renderer.create(<Form/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('has a form element', () => {
        const wrapper = shallow(<Form/>);
        const post = wrapper.find('form');
        expect(post.exists()).toEqual(true);
    });
    it('has input element', () => {
        const wrapper = shallow(<Form/>);
        const post = wrapper.find('input');
        expect(post.exists()).toEqual(true);
    });
    it('has button element', () => {
        const wrapper = shallow(<Form/>);
        const post = wrapper.find('button');
        expect(post.exists()).toEqual(true);
    });
    it('has icon with class', () => {
        const wrapper = shallow(<Form/>);
        const post = wrapper.find('i');
        expect(post.hasClass('fas fa-search')).toEqual(true);
    });
})
