const TAKE_M = "TAKE_M";
const CHANGE_M = "CHANGE_M";
const INIT_GAME = "INIT_GAME";
const INIT_N = "INIT_N";
const INIT_M = "INIT_M";
const SET_FPLAYER = "SET_FPLAYER";
const RESET = "RESET";
const RESTART = "RESTART";
const REBUILD = "REBUILD";
export const AC = {
    changeMAC(m) {
        return ({type: CHANGE_M, newM: m})
    },
    takeMAC() {
        return ({type: TAKE_M})
    },
    setInitNAC(n) {
        return ({type: INIT_N, n: n})
    },
    setInitMAC(m) {
        return ({type: INIT_M, m})
    },
    setFPlayer(fPlayer) {
        return ({type: SET_FPLAYER, fPlayer})
    },
    reset(n, m, fp) {
        return ({type: RESET, n: n, m: m, fp: fp})
    },
    restart() {
        return ({type: RESTART})
    },

};

let store = {
    _state: {
        matchGame: {
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
        },
    },
    get state() {
        return this._state;
    },
    _renderDOM() {
    },
    _initN(n) {
        if (n % 2 == 0)
            n = Number(n) + 1;
        if (Number(n) < Number(this._state.matchGame.initM))
            this._state.matchGame.initM = n;
        this._state.matchGame.currentN = n;
        this._state.matchGame.initN = n;
        this._renderDOM(this._state);
    },
    _initM(m) {
        if (Number(m) >= Number(this._state.matchGame.initN))
            m = Number(this._state.matchGame.initN);
        this._state.matchGame.initM = m;
        this._state.matchGame.maxM = m;
        this._renderDOM(this._state);
    },
    _setFP(fP) {
        this._state.matchGame.fPlayer = fP;
        this._state.matchGame.currentPlayer = fP;
        this._renderDOM(this._state);
    },
    _reset(n, m, fp) {
        this._state.matchGame.userN = 0;
        this._state.matchGame.aiN = 0;
        this._state.matchGame.currentM = m;
        this._state.matchGame.currentN = n
        this._state.matchGame.initM = m;
        this._state.matchGame.maxM = m;
        this._state.matchGame.initN = n;
        this._state.matchGame.fPlayer = fp;
        this._state.matchGame.currentPlayer = fp;
        if(fp == 1){
            this._aIMove();
        }
        this._renderDOM(this._state);
    },
    _restart() {
        this._state.matchGame.userN = 0;
        this._state.matchGame.aiN = 0;
        this._state.matchGame.currentM = 0;
        this._state.matchGame.currentN = 0;
        this._state.matchGame.initM = 3;
        this._state.matchGame.maxM = 3;
        this._state.matchGame.initN = 25;
        this._state.matchGame.fPlayer = 0;
        this._state.matchGame.currentPlayer = 0;

    },
    _rebuild(){
        this._renderDOM(this._state);
    },
    _changeM(newM) {
        this._state.matchGame.currentM = newM;
        // if (this._state.matchGame.initM > this._state.matchGame.currentN) {
        //     this._state.matchGame.initM = this._state.matchGame.currentN;
        //     this._state.matchGame.currentM = this._state.matchGame.currentN;
        // }
        this._renderDOM(this._state);
    },
    _takeM() {
        this._state.matchGame.currentN = Number(this._state.matchGame.currentN) - Number(this._state.matchGame.currentM);
        this._state.matchGame.userN = Number(this._state.matchGame.userN) + Number(this._state.matchGame.currentM);
        this._state.matchGame.currentPlayer = 1;
        if(this._state.matchGame.currentN <= this._state.matchGame.maxM){
            this._state.matchGame.maxM = this._state.matchGame.currentN;
            this._state.matchGame.currentM = this._state.matchGame.currentN;
        }
        //alert("N" + this._state.matchGame.currentN + "M" + this._state.matchGame.maxM + "m" + this._state.matchGame.currentM)
        this._renderDOM(this._state);
        this._aIMove();
    },
    _aIMove() {
        let aiM = 1;
        setTimeout(() => {
            if (this._state.matchGame.initM % 2 == 1) {
                if (this._state.matchGame.fPlayer == 0) {
                    for (let i = this._state.matchGame.currentN - 1; i > 1; i--) {
                        if (i % 4 == 0 || i % 4 == 1) {
                            let g = this._state.matchGame.currentN - i;
                            if (g >= this._state.matchGame.initM)
                                break;
                            if ((g) % 2 == 1) {
                                aiM = g;
                                console.log("1")
                            }
                        }
                    }
                } else if (this._state.matchGame.fPlayer == 1) {
                    if (this._state.matchGame.currentN < this.state.matchGame.initN) {
                        for (let i = this._state.matchGame.currentN - 1; i > 1; i--) {
                            if (i % 4 == 0 || i % 4 == 1) {
                                let g = this._state.matchGame.currentN - i;
                                if (g >= this._state.matchGame.initM)
                                    break;
                                if ((g) % 2 == 1) {
                                    aiM = g;
                                    console.log("2")
                                }
                            }
                        }
                    }
                }
            } else if (this._state.matchGame.initM % 2 == 0) {
                if (this._state.matchGame.aiN % 2 == 0) {
                    for (let i = this._state.matchGame.currentN - 1; i > 1; i--) {
                        if (i % 6 == 0 || i % 6 == 1) {
                            let g = this._state.matchGame.currentN - i;
                            if (g >= this._state.matchGame.initM)
                                break;
                            aiM = g;
                            console.log("3")
                        }
                    }
                } else if (this._state.matchGame.aiN % 2 == 1) {
                    for (let i = this._state.matchGame.currentN - 1; i > 1; i--) {
                        if (i % 6 == 5) {
                            let g = this._state.matchGame.currentN - i;
                            if (g >= this._state.matchGame.initM)
                                break;
                            aiM = g;
                            console.log("4")
                        }
                    }

                }
            }
            if (this._state.matchGame.currentN != 0) {
                this._state.matchGame.currentN -= aiM;
                if (this._state.matchGame.currentN <= this._state.matchGame.maxM) {
                    this._state.matchGame.maxM = this._state.matchGame.currentN;
                    this._state.matchGame.currentM = this._state.matchGame.currentN;
                }
                this._state.matchGame.aiN = Number(this._state.matchGame.aiN) + Number(aiM);
                this._state.matchGame.currentPlayer = 0;
                this._renderDOM(this._state);
            }
        }, 1500)
    },

    dispatch(action) {
        if (action.type === CHANGE_M) {
            this._changeM(action.newM);
        } else if (action.type === TAKE_M) {
            this._takeM();
        } else if (action.type === INIT_N) {
            this._initN(action.n);
        } else if (action.type === INIT_M) {
            this._initM(action.m);
        } else if (action.type === SET_FPLAYER) {
            this._setFP(action.fPlayer);
        } else if (action.type === RESET) {
            this._reset(action.n, action.m, action.fp);
        } else if (action.type === RESTART) {
            this._restart();
        } else if (action.type === REBUILD) {
            this._rebuild();
        }
    },
    subscribe(observer) {
        this._renderDOM = observer;
    },

};
export default store;





