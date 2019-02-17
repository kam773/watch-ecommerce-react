import React from 'react';
import Footer from '../components/Footer/Footer';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe("Footer", () => {
    it('render without crashes', () => {
        const tree = renderer.create(<Footer/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('has 4 h5 tags', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('h5')).toHaveLength(4);
    });
    it('has 4 ul tags', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('ul')).toHaveLength(4);
    });
    it('has 14 li elements', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('li')).toHaveLength(14);
    });
    it('has a form element', () => {
        const wrapper = shallow(<Footer />);
        const post = wrapper.find('form');
        expect(post.exists()).toEqual(true);
    });
    it('has input element', () => {
        const wrapper = shallow(<Footer />);
        const post = wrapper.find('input');
        expect(post.exists()).toEqual(true);
    });
    it('has button element', () => {
        const wrapper = shallow(<Footer />);
        const post = wrapper.find('button');
        expect(post.exists()).toEqual(true);
    });
})