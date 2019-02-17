import React from 'react';
import Product from '../components/Product/Product';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router'
import { Link } from 'react-router-dom';

describe("Product", () => {
    it("renders without crashes", () => {
        const props = {
            product: {}
        }
        const tree = renderer.create(
            <StaticRouter>
                <Product {...props}/>
            </StaticRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('has div with class', () => {
        const props = {
            product: {}
        };
        const wrapper = shallow(<Product {...props}/>)
        expect(wrapper.find('.card').exists()).toEqual(true);
    });
    it('should contain  link', () => {
        const props = {
            product: {}
        };
        const wrapper = shallow(<Product {...props}/>);
        expect(wrapper.find(Link).filter({ to: '/details' })).toBeTruthy();
    });
    it('has div with class', () => {
        const props = {
            product: {}
        };
        const wrapper = shallow(<Product {...props}/>)
        expect(wrapper.find('.card-footer').exists()).toEqual(true);
    });
    it('has p element', () => {
        const props = {
            product: {}
        };
        const wrapper = shallow(<Product {...props}/>)
       expect(wrapper.find('p').exists()).toEqual(true);
    });
    it('has img element', () => {
        const props = {
            product: {}
        };
        const wrapper = shallow(<Product {...props}/>);
        const post = wrapper.find('h5');
        expect(['text-blue', 'font-italic', 'mb-0'].every(c => post.hasClass(c))).toEqual(true);
    });
})