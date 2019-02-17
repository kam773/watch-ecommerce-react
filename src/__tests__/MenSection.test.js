import React from 'react';
import MenSection from '../components/MenSection/MenSection';
import {shallow, mount} from 'enzyme';


describe("WomenSection", () => {
   it("renders heading tag", () => {
       const wrapper = shallow(<MenSection />);
       expect(wrapper.find('h1')).toHaveLength(1);
   });
   it("has a name", () => {
        const wrapper = mount(<h1>Men Collection</h1>)
        expect(wrapper.text()).toEqual("Men Collection");
   });
})