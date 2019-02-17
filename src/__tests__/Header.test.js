import React from 'react';
import Header from '../components/Header/Header';
import {shallow, mount} from 'enzyme';

describe("Header", () => {
    it('has cart icon', () => {
        const wrapper = shallow(<Header/>);
        const post = wrapper.find('i');
        expect(post.hasClass('fas fa-cart-plus'));
    });
    it('has div with class cart', () => {
        const wrapper = shallow(<Header/>);
        const post = wrapper.find('div');
        expect(post.hasClass('cart'));
    });
    it('has Link with class nav-link', () => {
        const wrapper = shallow(<Header/>);
        const post = wrapper.find('Link');
        expect(post.hasClass('nav-link'));
    });
});