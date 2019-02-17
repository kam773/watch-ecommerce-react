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
    it("renders 3 div tag", () => {
        const wrapper = shallow(<ChildrenSection/>);
        expect(wrapper.find('div')).toHaveLength(3);
       });
    it("renders h1 tag with class", () => {
        const wrapper = shallow(<ChildrenSection/>);
        const post = wrapper.find('h1');
        expect(['text-center', 'text-black', 'text-capitalize', 'my-3'].every(c => post.hasClass(c))).toEqual(true);
    });
})