import React from 'react';
import ChildrenSection from '../components/ChildrenSection/ChildrenSection';
import {shallow, mount} from 'enzyme';


describe("WomenSection", () => {
    it("renders heading tag", () => {
        const wrapper = shallow(<ChildrenSection/>);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
    it("has a name", () => {
         const wrapper = mount(<h1>Kids Collection</h1>)
         expect(wrapper.text()).toEqual("Kids Collection");
    });
 })