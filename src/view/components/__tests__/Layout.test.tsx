import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout from '../Layout/Layout';

Enzyme.configure({ adapter: new Adapter() });

describe('<Layout />', () => {

    it('should render children', () => {
        const children = <h1>Hello, I'm layout child</h1>
        const wrapper = shallow(<Layout>{children}</Layout>);
        
        expect(wrapper.contains(children)).toBe(true);
    })
})