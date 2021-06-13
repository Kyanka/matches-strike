const INIT_N = "INIT_N";
const INIT_M = "INIT_M";
const SET_FPLAYER = "SET_FPLAYER";
const INIT = "INIT";

let initState = {
    game: {
        vicCond: "0",
        fPlayer: "0",
        currentPlayer: "0",
        initN: "25",
        initM: "3",
        maxM: "3",
        currentN: "25",
        currentM: "1",
        userN: "0",
        aiN: "0",
    },
};

export const AC = {
    setInitNAC(n) {
        return ({type: INIT_N, n: n})
    },
    setInitMAC(m) {
        return ({type: INIT_M, m})
    },
    setFPlayer(fP) {
        return ({type: SET_FPLAYER, fP: fP})
    },
    init(n, m, fP) {
        return ({type: INIT, n: n, m: m, fP: fP})
    },
};

const initGameReducer = (state, action) => {
    // console.log(state)
    // console.log(action);
    const initFunc = {
        _initN(n) {
            if (n % 2 == 0)
                n = Number(n) + 1;
            if (Number(n) < Number(state.game.initM))
                state.game.initM = n;
            state.game.currentN = n;
            state.game.initN = n;
            //state._renderDOM(state);
        },
        _initM(m) {
            if (Number(m) >= Number(state.game.initN))
                m = Number(state.game.initN);
            state.game.initM = m;
            state.game.maxM = m;
            //this._renderDOM(state);
        },
        _setFP(fP) {
            state.game.fPlayer = fP;
            state.game.currentPlayer = fP;
            //state._renderDOM(state);
        },
        _init(n, m, fp) {

            state.game.userN = 0;
            state.game.aiN = 0;
            state.game.currentM = m;
            state.game.currentN = n;
            state.game.initM = m;
            state.game.maxM = m;
            state.game.initN = n;
            state.game.fPlayer = fp;
            state.game.currentPlayer = fp;
            // if (fp == 1) {
            //     state._aIMove();
            // }
            //state._renderDOM(state);
        },
    };
    switch (action.type) {
        case INIT_N:
            initFunc._initN(action.n); break;
        case INIT_M:
            initFunc._initM(action.m); break;
            break;
        case SET_FPLAYER:
            initFunc._setFP(action.fP); break;
        case INIT:
            initFunc._init(action.n, action.m, action.fP); break;
    }
    return (state);
};
export default initGameReducer;