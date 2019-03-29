const marvelKey = 'marvel';

export const loadState = () => {
    try{
        const serializedState = localStorage.getItem(marvelKey);
        return serializedState ? JSON.parse(serializedState) : undefined;
    }catch(err){
        return undefined;
    }
}

export const saveState = (state: object) => {
    try{
        localStorage.setItem(marvelKey, JSON.stringify(state));
    }catch(err){
    }
}