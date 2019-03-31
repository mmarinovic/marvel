import { Search } from '../Search/Search';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import syn from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('<Search />', () => {

    it('should render text input', () => {
        const dummyFn: any = () => {};
        const wrapper = shallow(<Search setSearchTerm={dummyFn} />);

        expect(wrapper.find('input').prop('type')).toBe('text');
    })

    it('should call set search term once', () => {
        const setSearchTermDummy = syn.spy();
        const clock = syn.useFakeTimers();

        const wrapper = shallow(<Search setSearchTerm={setSearchTermDummy} />);
        wrapper.find('input').simulate('change', { target: { value: 'spider' }});

        clock.tick(300);

        expect(setSearchTermDummy.callCount).toBe(1);
        expect(setSearchTermDummy.args[0][0]).toBe('spider');
    })

    it('should debounce call to set search term', () => {
        const setSearchTermDummy = syn.spy();
        const clock = syn.useFakeTimers();

        const wrapper = shallow(<Search setSearchTerm={setSearchTermDummy} />);
        wrapper.find('input').simulate('change', { target: { value: 'sp' }});
        wrapper.find('input').simulate('change', { target: { value: 'spi' }});
        wrapper.find('input').simulate('change', { target: { value: 'spider' }});

        clock.tick(300);

        expect(setSearchTermDummy.callCount).toBe(1);
        expect(setSearchTermDummy.args[0][0]).toBe('spider');
    })
})