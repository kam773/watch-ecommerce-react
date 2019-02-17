import React from 'react';
import Footer from '../components/Footer/Footer';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe("Footer", () => {
    it('render without crashes', () => {
        const tree = renderer.create(<Footer/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})