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
    currentM:3,
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
    switch (action.type) {
        case INIT_N:
            return {...state, initN: action.payload}; break;
        case INIT_M:
            return {...state, initM: action.payload}; break;
        case MAX_M:
            return {...state, maxM: action.payload}; break;
        case F_PLAYER:
            return {...state, fPlayer: action.payload}; break;
        case C_PLAYER:
            return {...state, currentPlayer: action.payload}; break;
        case C_N:
            return {...state, currentN: action.payload}; break;
        case C_M:
            return {...state, currentM: action.payload}; break;
        case USER_N:
            return {...state, userN: action.payload}; break;
        case AI_N:
            return {...state, aiN: action.payload}; break;
        default:
            return state;
    }
};
export default gameReducer;