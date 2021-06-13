import matchGameReducer from "./matchGameReducer";
import initGameReducer from "./initGameReducer";
import {act} from "@testing-library/react";
import victoryReducer from "./victoryReducer";
const TAKE_M = "TAKE_M";
const CHANGE_M = "CHANGE_M";
const INIT_GAME = "INIT_GAME";
const INIT_N = "INIT_N";
const INIT_M = "INIT_M";
const SET_FPLAYER = "SET_FPLAYER";
const INIT = "INIT";
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
    init(n, m, fp) {
        return ({type: INIT, n: n, m: m, fp: fp})
    },
    restart() {
        return ({type: RESTART})
    },

};

let store = {
    _state: {
        game: {
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
    // _initN(n) {
    //     if (n % 2 == 0)
    //         n = Number(n) + 1;
    //     if (Number(n) < Number(this._state.game.initM))
    //         this._state.game.initM = n;
    //     this._state.game.currentN = n;
    //     this._state.game.initN = n;
    //     this._renderDOM(this._state);
    // },
    // _initM(m) {
    //     if (Number(m) >= Number(this._state.game.initN))
    //         m = Number(this._state.game.initN);
    //     this._state.game.initM = m;
    //     this._state.game.maxM = m;
    //     this._renderDOM(this._state);
    // },
    // _setFP(fP) {
    //     this._state.game.fPlayer = fP;
    //     this._state.game.currentPlayer = fP;
    //     this._renderDOM(this._state);
    // },
    // _init(n, m, fp) {
    //     this._state.game.userN = 0;
    //     this._state.game.aiN = 0;
    //     this._state.game.currentM = m;
    //     this._state.game.currentN = n
    //     this._state.game.initM = m;
    //     this._state.game.maxM = m;
    //     this._state.game.initN = n;
    //     this._state.game.fPlayer = fp;
    //     this._state.game.currentPlayer = fp;
    //     if(fp == 1){
    //         this._aIMove();
    //     }
    //     this._renderDOM(this._state);
    // },
    // _restart() {
    //     this._state.game.userN = 0;
    //     this._state.game.aiN = 0;
    //     this._state.game.currentM = 0;
    //     this._state.game.currentN = 0;
    //     this._state.game.initM = 3;
    //     this._state.game.maxM = 3;
    //     this._state.game.initN = 25;
    //     this._state.game.fPlayer = 0;
    //     this._state.game.currentPlayer = 0;
    //
    // },
    _rebuild(){
        this._renderDOM(this._state);
    },
    // _changeM(newM) {
    //     this._state.game.currentM = newM;
    //     this._renderDOM(this._state);
    // },
    // _takeM() {
    //     this._state.game.currentN = Number(this._state.game.currentN) - Number(this._state.game.currentM);
    //     this._state.game.userN = Number(this._state.game.userN) + Number(this._state.game.currentM);
    //     this._state.game.currentPlayer = 1;
    //     if(this._state.game.currentN <= this._state.game.maxM){
    //         this._state.game.maxM = this._state.game.currentN;
    //         this._state.game.currentM = this._state.game.currentN;
    //     }
    //     //alert("N" + this._state.game.currentN + "M" + this._state.game.maxM + "m" + this._state.game.currentM)
    //     this._renderDOM(this._state);
    //     this._aIMove();
    // },
    // _aIMove() {
    //     let aiM = 1;
    //     setTimeout(() => {
    //         if (this._state.game.initM % 2 == 1) {
    //             if (this._state.game.fPlayer == 0) {
    //                 for (let i = this._state.game.currentN - 1; i > 1; i--) {
    //                     if (i % 4 == 0 || i % 4 == 1) {
    //                         let g = this._state.game.currentN - i;
    //                         if (g >= this._state.game.initM)
    //                             break;
    //                         if ((g) % 2 == 1) {
    //                             aiM = g;
    //                             console.log("1")
    //                         }
    //                     }
    //                 }
    //             } else if (this._state.game.fPlayer == 1) {
    //                 if (this._state.game.currentN < this.state.game.initN) {
    //                     for (let i = this._state.game.currentN - 1; i > 1; i--) {
    //                         if (i % 4 == 0 || i % 4 == 1) {
    //                             let g = this._state.game.currentN - i;
    //                             if (g >= this._state.game.initM)
    //                                 break;
    //                             if ((g) % 2 == 1) {
    //                                 aiM = g;
    //                                 console.log("2")
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         } else if (this._state.game.initM % 2 == 0) {
    //             if (this._state.game.aiN % 2 == 0) {
    //                 for (let i = this._state.game.currentN - 1; i > 1; i--) {
    //                     if (i % 6 == 0 || i % 6 == 1) {
    //                         let g = this._state.game.currentN - i;
    //                         if (g >= this._state.game.initM)
    //                             break;
    //                         aiM = g;
    //                         console.log("3")
    //                     }
    //                 }
    //             } else if (this._state.game.aiN % 2 == 1) {
    //                 for (let i = this._state.game.currentN - 1; i > 1; i--) {
    //                     if (i % 6 == 5) {
    //                         let g = this._state.game.currentN - i;
    //                         if (g >= this._state.game.initM)
    //                             break;
    //                         aiM = g;
    //                         console.log("4")
    //                     }
    //                 }
    //
    //             }
    //         }
    //         if (this._state.game.currentN != 0) {
    //             this._state.game.currentN -= aiM;
    //             if (this._state.game.currentN <= this._state.game.maxM) {
    //                 this._state.game.maxM = this._state.game.currentN;
    //                 this._state.game.currentM = this._state.game.currentN;
    //             }
    //             this._state.game.aiN = Number(this._state.game.aiN) + Number(aiM);
    //             this._state.game.currentPlayer = 0;
    //             this._renderDOM(this._state);
    //         }
    //     }, 1500)
    // },

    dispatch(action) {
        console.log(action);
       //debugger;
        console.log(this._state);
        this._state = matchGameReducer(this._state, action);
        this._state = initGameReducer(this._state,action);
        this._state = victoryReducer(this._state,action);
        this._rebuild();

    },
    subscribe(observer) {
        this._renderDOM = observer;
    },

};
export default store;





