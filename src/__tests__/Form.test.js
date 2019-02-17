import React from 'react';
import Form from '../components/Form/Form';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';

describe("Form", () => {
    it('should render without crash', () => {
        const tree = renderer.create(<Form/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

})
