import React from 'react';
import Details from '../components/Details/Details';
import {shallow, mount} from 'enzyme';

describe("Details", () => {
    it("has a name", () => {
         const wrapper = mount(<p>some info about product</p>)
         expect(wrapper.text()).toEqual("some info about product");
    });
})