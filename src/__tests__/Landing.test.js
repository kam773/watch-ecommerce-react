import React from 'react';
import Landing from '../components/Landing/Landing';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

describe("Landing", () => {
    it("renders without crashes", () => {
        const tree = renderer.create(<Landing/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

})