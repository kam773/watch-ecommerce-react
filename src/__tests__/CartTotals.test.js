import React from 'react';
import CartTotals from '../components/Cart/CartTotals';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import { Link } from 'react-router-dom';
import { StaticRouter } from 'react-router'

describe("CartTotals", () => {
    it('should render without crash', () => {
        const props = {
            value: {},
            context: {}
        }
        const tree = renderer.create(
            <StaticRouter>
                <CartTotals {...props} />
            </StaticRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();

    })
    it('should contain a home link', () => {
        const props = {
            value: {}
        }
        const wrapper = shallow(<CartTotals {...props}/>);
        expect(wrapper.find(Link).filter({ to: '/' })).toHaveLength(1);
    });
    it('has 3 h5 tags', () => {
        const props = {
            value: {}
        }
        const wrapper = shallow(<CartTotals {...props}/>);
        expect(wrapper.find('h5')).toHaveLength(3);
    })
})