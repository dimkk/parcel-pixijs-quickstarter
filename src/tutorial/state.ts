import * as F from 'effector'

export default class State {
    /**
     *
     */

    _state: F.Store<State>

    constructor() {
        
        
    }
}

interface AppState {
    res: {
        
    }
    images: any,
    textures: [],
    sprites: [],

}

const initState = {
    images: [],
    textures: [],
    sprites: [],
    animatedSprites: []
}

const init = () => {
    const state = createStore(initState)
    state.watch(state => console.log)
}

const loadImages = () => {

}