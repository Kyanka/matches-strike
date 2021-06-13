const INIT_N = "INIT_N";
const INIT_M = "INIT_M";
const SET_FPLAYER = "SET_FPLAYER";
const INIT = "INIT";

const TAKE_M = "TAKE_M";
const CHANGE_M = "CHANGE_M";
const RESTART = "RESTART";


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
    init() {
        return ({type: INIT})
    },
    changeMAC(m) {
        return ({type: CHANGE_M, newM: m})
    },
    takeMAC() {
        return ({type: TAKE_M})
    },
    restart() {
        return ({type: RESTART})
    },
};

const gameReducer = (state = initState, action) => {
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
            state.game.currentM = m;
            //this._renderDOM(state);
        },
        _setFP(fP) {
            state.game.fPlayer = fP;
            state.game.currentPlayer = fP;
            //state._renderDOM(state);
        },
        _init() {
            //debugger
            state.game.userN = 0;
            state.game.aiN = 0;
            if (state.game.fPlayer == 1) {
                gameFunc._aIMove();
            }

        },
    };
    const gameFunc = {
        _changeM(newM) {
            //debugger
            state.game.currentM = newM;
            //this._renderDOM(state);
        },
        _takeM() {
            //console.log(state);
            state.game.currentN = Number(state.game.currentN) - Number(state.game.currentM);
            state.game.userN = Number(state.game.userN) + Number(state.game.currentM);
            state.game.currentPlayer = 1;
            if(state.game.currentN <= state.game.maxM){
                state.game.maxM = state.game.currentN;
                state.game.currentM = state.game.currentN;
            }
            //console.log(state);
            //debugger;
            this._aIMove();
            console.log("after moveIO");
        },
        _aIMove() {
            let aiM = 1;
            setTimeout(() => {
                if (state.game.initM % 2 == 1) {
                    if (state.game.fPlayer == 0) {
                        for (let i = state.game.currentN - 1; i > 1; i--) {
                            if (i % 4 == 0 || i % 4 == 1) {
                                let g = state.game.currentN - i;
                                if (g >= state.game.initM)
                                    break;
                                if ((g) % 2 == 1) {
                                    aiM = g;
                                    console.log("1")
                                }
                            }
                        }
                    } else if (state.game.fPlayer == 1) {
                        if (state.game.currentN < state.game.initN) {
                            for (let i = state.game.currentN - 1; i > 1; i--) {
                                if (i % 4 == 0 || i % 4 == 1) {
                                    let g = state.game.currentN - i;
                                    if (g >= state.game.initM)
                                        break;
                                    if ((g) % 2 == 1) {
                                        aiM = g;
                                        console.log("2")
                                    }
                                }
                            }
                        }
                    }
                } else if (state.game.initM % 2 == 0) {
                    if (state.game.aiN % 2 == 0) {
                        for (let i = state.game.currentN - 1; i > 1; i--) {
                            if (i % 6 == 0 || i % 6 == 1) {
                                let g = state.game.currentN - i;
                                if (g >= state.game.initM)
                                    break;
                                aiM = g;
                                console.log("3")
                            }
                        }
                    } else if (state.game.aiN % 2 == 1) {
                        for (let i = state.game.currentN - 1; i > 1; i--) {
                            if (i % 6 == 5) {
                                let g = state.game.currentN - i;
                                if (g >= state.game.initM)
                                    break;
                                aiM = g;
                                console.log("4")
                            }
                        }

                    }
                }
                if (state.game.currentN != 0) {
                    state.game.currentN -= aiM;
                    if (state.game.currentN <= state.game.maxM) {
                        state.game.maxM = state.game.currentN;
                        state.game.currentM = state.game.currentN;
                    }
                    state.game.aiN = Number(state.game.aiN) + Number(aiM);
                    state.game.currentPlayer = 0;
                    //state._renderDOM(state);
                }
            }, 1500)
        },
        _restart() {
            state.game.userN = 0;
            state.game.aiN = 0;
            state.game.currentM = 3;
            state.game.currentN = 25;
            state.game.initM = 3;
            state.game.maxM = 3;
            state.game.initN = 25;
            state.game.fPlayer = 0;
            state.game.currentPlayer = 0;

        },
    };
    console.log(action,state);
    switch (action.type){
        case INIT_N:
            initFunc._initN(action.n); break;
        case INIT_M:
            initFunc._initM(action.m); break;
        case SET_FPLAYER:
            initFunc._setFP(action.fP); break;
        case INIT:
            initFunc._init(action.n, action.m, action.fP); break;
        case CHANGE_M:
            gameFunc._changeM(action.newM); break;
        case TAKE_M:
            gameFunc._takeM(); break;
        case RESTART:
            gameFunc._restart(); break;
    }
    return (state);
};
export default gameReducer;