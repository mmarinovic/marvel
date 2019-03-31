import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout from '../Layout/Layout';
import Search from '../../containers/Search/Search';

Enzyme.configure({ adapter: new Adapter() });

describe('<Layout />', () => {

    it('should render children', () => {
        const children = <h1>Hello, I'm layout child</h1>
        const wrapper = shallow(<Layout>{children}</Layout>);
        
        expect(wrapper.contains(children)).toBe(true);
    })

    it('should render search', () => {
        const children = <h1>Hello, I'm layout child</h1>
        const wrapper = shallow(<Layout>{children}</Layout>);
        
        expect(wrapper.find(Search)).toHaveLength(1);
    })
})