import React from 'react';
import Default from '../components/404/Default';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe("404", () => {
    it("renders without crashing", () => {
        const location = { pathname: '/ddd' };
        const tree = renderer.create(<Default location={location}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('has h1 tag with class display-3', () => {
        const location = { pathname: '/ddd' };
        const wrapper = shallow(<Default location={location}/>)
        expect(wrapper.find('h1')).toHaveLength(2);
    });
    it('has h2 tag', () => {
        const location = { pathname: '/ddd' };
        const wrapper = shallow(<Default location={location}/>)
        expect(wrapper.find('h2')).toHaveLength(1);
    });
    it('has h3', () => {
        const location = { pathname: '/ddd' };
        const wrapper = shallow(<Default location={location}/>)
        expect(wrapper.find('h3')).toHaveLength(1);
    })

})