import { CharacterCard } from '../CharacterCard/CharacterCard';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ICharacter } from '../../../types/models';

Enzyme.configure({ adapter: new Adapter() });

describe('<CharacterCard />', () => {

    const dummyFn: any = () => {};
    const character: ICharacter = { id: 1, imageUrl: 'dummy', name: 'Spider-man' };

    it('should render character image', () => {
        const wrapper = shallow(<CharacterCard character={character} 
                                               addToBookmarks={dummyFn} 
                                               removeFromBookmarks ={dummyFn} />);
        expect(wrapper.find('img').prop('src')).toBe(character.imageUrl);
    })

    it('should render character name', () => {
        const wrapper = shallow(<CharacterCard character={character} 
            addToBookmarks={dummyFn} 
            removeFromBookmarks ={dummyFn} />);
        
        expect(wrapper.find('h2').text()).toBe(character.name);
    })

    it('should render add to bookmarks action', () => {
        const wrapper = shallow(<CharacterCard character={character} 
            addToBookmarks={dummyFn} 
            removeFromBookmarks ={dummyFn} />);

        expect(wrapper.find('span.character-card__bookmarked').text()).toBe('Add bookmark');
    })

    it('should render remove from bookmarks action', () => {
        const bookmarkedCharacter: ICharacter = { ...character, isBookmarked: true }
        const wrapper = shallow(<CharacterCard character={bookmarkedCharacter} 
            addToBookmarks={dummyFn} 
            removeFromBookmarks ={dummyFn} />);

        expect(wrapper.find('span.character-card__bookmarked').text()).toBe('Remove bookmark');
    })
})