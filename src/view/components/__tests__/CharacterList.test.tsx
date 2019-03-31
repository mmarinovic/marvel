import CharacterList from '../CharacterList/CharacterList';
import CharacterCard from '../../containers/CharacterCard/CharacterCard';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ICharacter } from '../../../types/models';

Enzyme.configure({ adapter: new Adapter() });

describe('<CharacterList />', () => {

    it('should render N character card components', () => {
        const characters: ICharacter[] = [
            { id: 1, imageUrl: 'dummy', name: 'Spider-Man' },
            { id: 2, imageUrl: 'dummy', name: 'Iron-Man' }
        ];

        const wrapper = shallow(<CharacterList characters={characters} />);

        expect(wrapper.find(CharacterCard)).toHaveLength(2);
    })
})