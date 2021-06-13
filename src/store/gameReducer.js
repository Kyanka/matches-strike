const INIT_N = "INIT_N";
const INIT_M = "INIT_M";
const MAX_M = "MAX_M"
const F_PLAYER = "F_PLAYER";
const C_PLAYER = "CURRENT_PLAYER";
const C_N = "C_N"
const C_M = "C_M"
const USER_N = "USER_N"
const AI_N = "AI_N"

// const TAKE_M = "TAKE_M";
// const CHANGE_M = "CHANGE_M";
// const RESTART = "RESTART";


let initState = {
    initN: 25,
    initM: 3,
    maxM: 3,
    fPlayer: 0,
    currentPlayer: 0,
    currentN: 25,
    currentM: 1,
    userN: 0,
    aiN: 0,

};

export const AC = {
    setInitN(n) {
        return ({type: INIT_N, payload: n})
    },
    setInitM(m) {
        return ({type: INIT_M, payload:m})
    },
    setMaxM(m) {
        return ({type: MAX_M, payload:m})
    },
    setFPlayer(fP) {
        return ({type: F_PLAYER, payload: fP})
    },
    setCurrentPlayer(cP){
        return ({type: C_PLAYER, payload: cP})
    },
    setCurrentN(n){
        return({type:C_N,payload:n})
    },
    setCurrentM(m){
        return({type:C_M,payload:m})
    },
    setUserN(n){
        return({type:USER_N,payload:n})
    },
    setAIN(n){
        return({type:AI_N,payload:n})
    },
};

const gameReducer = (state = initState, action) => {
    //console.log(action, state);
    switch (action.type) {
        case INIT_N:
        case INIT_M:
        case MAX_M:
        case F_PLAYER:
        case C_PLAYER:
        case C_N:
        case USER_N:
        case AI_N:
            return {...state, ...action.payload};
    }
    return state;
};
export default gameReducer;