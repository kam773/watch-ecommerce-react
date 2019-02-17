import React from 'react';
import Modal from '../components/Cart/Modal';
import {shallow, mount} from 'enzyme';

describe("Modal", () => {
    it("has a name", () => {
        const wrapper = mount(<h5>price</h5>)
        expect(wrapper.text()).toEqual("price");
    });

    it("has a name", () => {
        const wrapper = mount(<h5>item added to the cart</h5>)
        expect(wrapper.text()).toEqual("item added to the cart");
    });
    it("has a title", () => {
        const wrapper = mount(<h5>title</h5>)
        expect(wrapper.text()).toEqual("title");
    });
})