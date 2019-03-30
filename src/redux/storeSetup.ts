import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, AnyAction } from 'redux';

import MarvelApi from '../api/Marvel';
import reducers from '../redux/reducers';
import epics from '../redux/epics';

import * as NS from '../namespace';
import * as APP from '../types/app';
import { saveState, loadState } from '../localStorage';
import { initial } from './initial';

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, NS.IReduxState, APP.IDependencies>({
    dependencies: { marvelApi: new MarvelApi() }
});

const initialState = { ...initial };
initialState.data.bookmarkedCharacters = loadState() || []

const store = createStore(
    reducers, 
    initialState,
    applyMiddleware(epicMiddleware)
);

store.subscribe(() => {
    saveState(store.getState().data.bookmarkedCharacters);
})

epicMiddleware.run(epics);

export default store;