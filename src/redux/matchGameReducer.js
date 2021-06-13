const TAKE_M = "TAKE_M";
const CHANGE_M = "CHANGE_M";
const RESTART = "RESTART";

let initState = {
        vicCond: "0",
        fPlayer: "0",
        currentPlayer: "0",
        initN: "25",
        initM: "3",
        maxM:"3",
        currentN: "25",
        currentM: "1",
        userN: "0",
        aiN: "0",
};

export const AC = {
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

const matchGameReducer = (state, action) => {

    const gameFunc = {
        _changeM(newM) {
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
            //setTimeout(() => {
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
                        if (state.game.currentN < this.state.game.initN) {
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
            //}, 1500)
        },
        _restart() {
            state.game.userN = 0;
            state.game.aiN = 0;
            state.game.currentM = 0;
            state.game.currentN = 0;
            state.game.initM = 3;
            state.game.maxM = 3;
            state.game.initN = 25;
            state.game.fPlayer = 0;
            state.game.currentPlayer = 0;

        },
        // _init(n, m, fp) {
        //     state.game.userN = 0;
        //     state.game.aiN = 0;
        //     state.game.currentM = m;
        //     state.game.currentN = n
        //     state.game.initM = m;
        //     state.game.maxM = m;
        //     state.game.initN = n;
        //     state.game.fPlayer = fp;
        //     state.game.currentPlayer = fp;
        //     // if (fp == 1) {
        //     //     state._aIMove();
        //     // }
        //     //state._renderDOM(state);
        // },
    };
    switch (action.type){
        case CHANGE_M:
            gameFunc._changeM(action.newM); break;
        case TAKE_M:
            gameFunc._takeM(); break;
        case RESTART:
            gameFunc._restart(); break;
    }
    return (state);
};
export default matchGameReducer;