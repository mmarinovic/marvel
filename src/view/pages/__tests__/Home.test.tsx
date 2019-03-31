import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ReactComponent as Loader } from '../../../assets/loader.svg';
import { Home } from '../Home/Home';
import CharacterList from '../../components/CharacterList/CharacterList';
import Pagination from '../../components/Pagination/Pagination';

Enzyme.configure({ adapter: new Adapter() });

describe('<Home />', () => {

    const props = {
        characters: [],
        totalCharactersCount: 0,
        searchTerm: '',
        isLoading: false,
        loadCharacters: () => {},
        resetLoadedCharacters: () => {},
        clearLoadedCharacters: () => {},
        setSearchterm: () => {}
    } as any;

    it('should render loader', () => {
        const isLoadingProps = {...props, isLoading: true} 
        const wrapper = shallow(<Home {...isLoadingProps} />);

        expect(wrapper.contains(<Loader />)).toBe(true);
        expect(wrapper.find('div.home__placeholder')).toHaveLength(0);
        expect(wrapper.contains(<CharacterList characters={props.characters} />)).toBe(false);
    })

    it('should render placeholder', () => {
        const wrapper = shallow(<Home {...props} />);

        expect(wrapper.find('div.home__placeholder')).toHaveLength(1);
        expect(wrapper.contains(<Loader />)).toBe(false);
        expect(wrapper.contains(<CharacterList characters={props.characters} />)).toBe(false);
    })

    it('should render character list', () => {
        const propsWithCharacters = {...props, characters: [{ id: 1, imageUrl: 'dummy', name: 'Spider-Man' }]}
        const wrapper = shallow(<Home {...propsWithCharacters} />);

        expect(wrapper.contains(<CharacterList characters={propsWithCharacters.characters} />)).toBe(true);
        expect(wrapper.find('div.home__placeholder')).toHaveLength(0);
        expect(wrapper.contains(<Loader />)).toBe(false);
    })

    it('should render pagination', () => {
        const wrapper = shallow(<Home {...props} />);
        expect(wrapper.find(Pagination)).toHaveLength(1);
    })
})