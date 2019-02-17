import React from 'react';
import CartItem from '../components/Cart/CartItem';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

describe("CartItem", () => {
    it("renders without crashes", () => {
        const props = {
            item: {},
            value: {}
        }
        const tree = renderer.create(<CartItem {...props}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('has div with class', () => {
        const props = {
            item: {},
            value: {}
        }
      const wrapper = shallow(<CartItem {...props}/>)
      expect(wrapper.find('div').exists()).toEqual(true);
    });
    it('has 5 span elements', () => {
        const props = {
            item: {},
            value: {}
        }
      const wrapper = shallow(<CartItem {...props}/>)
      expect(wrapper.find('span')).toHaveLength(5);
    });
    it('has 1 strong element', () => {
        const props = {
            item: {},
            value: {}
        }
      const wrapper = shallow(<CartItem {...props}/>)
      expect(wrapper.find('strong')).toHaveLength(1);
    });
    it('has 1 img element', () => {
        const props = {
            item: {},
            value: {}
        }
      const wrapper = shallow(<CartItem {...props}/>)
      expect(wrapper.find('img')).toHaveLength(1);
    });
});
