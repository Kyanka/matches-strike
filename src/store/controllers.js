import store from './redux-store';
import {AC} from './gameReducer';

let state = store.getState();
//const dispatch = store.dispatch;

export const initN = (dispatch,n) => {
    state = store.getState();
    if (n % 2 === 0)
        n = Number(n) + 1;
    if (Number(n) < Number(state.initM)) {
        dispatch(AC.setInitM(n));
        dispatch(AC.setMaxM(n));
        dispatch(AC.setCurrentM(n));
    }
    dispatch(AC.setInitN(n));
    dispatch(AC.setCurrentN(n));
};
export const initM = (dispatch,m) => {
    state = store.getState();
    if (Number(m) >= Number(state.initN))
        m = Number(state.initN);
    dispatch(AC.setInitM(m));
    dispatch(AC.setMaxM(m));
    dispatch(AC.setCurrentM(m));
};
export const setFP = (dispatch,fP) => {
    state = store.getState();
    dispatch(AC.setFPlayer(fP));
    dispatch(AC.setCurrentPlayer(fP));
};
export const init = (dispatch,) => {
    state = store.getState();
    dispatch(AC.setUserN(0));
    dispatch(AC.setAIN(0));
    if (state.fPlayer == 1) {
        _aIMove(dispatch);
    }
};
let _aIMove = (dispatch) => {
    state = store.getState();
    let aiM = 1;
    setTimeout(() => {
        if (state.initM % 2 == 1) {
            if (state.fPlayer == 0) {
                for (let i = state.currentN - 1; i > 1; i--) {
                    if (i % 4 == 0 || i % 4 == 1) {
                        let g = state.currentN - i;
                        if (g >= state.initM)
                            break;
                        if ((g) % 2 == 1) {
                            aiM = g;
                            //console.log("1")
                        }
                    }
                }
            } else if (state.fPlayer == 1) {
                if (state.currentN < state.initN) {
                    for (let i = state.currentN - 1; i > 1; i--) {
                        if (i % 4 == 0 || i % 4 == 1) {
                            let g = state.currentN - i;
                            if (g >= state.initM)
                                break;
                            if ((g) % 2 == 1) {
                                aiM = g;
                                //console.log("2")
                            }
                        }
                    }
                }
            }
        } else if (state.initM % 2 == 0) {
            if (state.aiN % 2 == 0) {
                for (let i = state.currentN - 1; i > 1; i--) {
                    if (i % 6 == 0 || i % 6 == 1) {
                        let g = state.currentN - i;
                        if (g >= state.initM)
                            break;
                        aiM = g;
                        //console.log("3")
                    }
                }
            } else if (state.aiN % 2 == 1) {
                for (let i = state.currentN - 1; i > 1; i--) {
                    if (i % 6 == 5) {
                        let g = state.currentN - i;
                        if (g >= state.initM)
                            break;
                        aiM = g;
                        //console.log("4")
                    }
                }

            }
        }
        if (state.currentN != 0) {
            let currentN = state.currentN - aiM;
            dispatch(AC.setCurrentN(currentN));
            if (state.currentN <= state.maxM) {
                dispatch(AC.setMaxM(state.currentN - 1))
                dispatch(AC.setCurrentM(state.currentN -1))
            }
            dispatch(AC.setAIN(Number(state.aiN) + Number(aiM)))
            state.aiN = Number(state.aiN) + Number(aiM);
            dispatch(AC.setCurrentPlayer(0));
        }
    }, 1500);
    state = store.getState();
};
export const changeM = (dispatch,newM) => {
    state = store.getState();
    dispatch(AC.setCurrentM(newM));
};
export const takeM = (dispatch,) => {
    state = store.getState();
    dispatch(AC.setCurrentN(Number(state.currentN) - Number(state.currentM)));
    dispatch(AC.setUserN(Number(state.userN) + Number(state.currentM)));
    dispatch(AC.setCurrentPlayer(1));
    if (state.currentN <= state.maxM) {
        dispatch(AC.setMaxM(state.currentN - 1));
        dispatch(AC.setCurrentM(state.currentN -1));
    };
    _aIMove(dispatch);
};
export const restart = (dispatch,) => {
    dispatch(AC.setUserN(0));
    dispatch(AC.setAIN(0));
    dispatch(AC.setCurrentN(25));
    dispatch(AC.setCurrentM(3));
    dispatch(AC.setInitN(25))
    dispatch(AC.setMaxM(3));
    dispatch(AC.setInitM(3));
    dispatch(AC.setFPlayer(0));
    dispatch(AC.setCurrentPlayer(0));
};

