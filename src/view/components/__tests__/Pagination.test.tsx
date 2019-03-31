import Pagination from '../Pagination/Pagination';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Pagination />', () => {

    it('should renders N page items', () => {
        const totalCount = 10;
        const limit = 2;
        const onPageSelectedDummy = {} as any;

        const wrapper = shallow(<Pagination limit={limit} totalCount={totalCount} onPageSelected={onPageSelectedDummy}/>);
        
        expect(wrapper.find('li')).toHaveLength(5);
    })

    it('should not call page selected callback when selecting current page', () => {
        const totalCount = 10;
        const limit = 2;
        const onPageSelectedDummy = sinon.spy();

        const wrapper = shallow(<Pagination limit={limit} totalCount={totalCount} onPageSelected={onPageSelectedDummy}/>);
        wrapper.find('li').at(0).simulate('click');

        expect(onPageSelectedDummy.callCount).toBe(0);
    })

    it('should call page selected callback when selecting new page', () => {
        const totalCount = 10;
        const limit = 2;
        const onPageSelectedDummy = sinon.spy();

        const wrapper = shallow(<Pagination limit={limit} totalCount={totalCount} onPageSelected={onPageSelectedDummy}/>);
        wrapper.find('li').at(1).simulate('click');

        expect(onPageSelectedDummy.callCount).toBe(1);
        expect(onPageSelectedDummy.args[0][0]).toBe(2);
    })
})