const TAKE_M = "TAKE_M";
const CHANGE_M = "CHANGE_M";
const INIT_GAME = "INIT_GAME";
const INIT_N = "INIT_N";
const INIT_M = "INIT_M";
const SET_FPLAYER = "SET_FPLAYER";
const SET_VICCOND = "SET_VICCOND";
export const AC = {
    changeMAC(m) {
        return ({type: CHANGE_M, newM: m})
    },
    takeMAC(m) {
        return ({type: TAKE_M, newM: m})
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
    setVicCond(vicCond) {
        return ({type: SET_VICCOND, vicCond})
    }
};

let store = {
    _state: {
        matchGame: {
            vicCond: "0",
            fPlayer: "0",
            currentPlayer:"0",
            initN: "25",
            initM: "3",
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
        if(Number(n) < Number(this._state.matchGame.initM))
            this._state.matchGame.initM = n;
        this._state.matchGame.currentN = n;
        this._state.matchGame.initN = n;
        this._renderDOM(this._state);
    },
    _initM(m) {
        if (Number(m) >= Number(this._state.matchGame.initN))
            m = Number(this._state.matchGame.initN);
        this._state.matchGame.initM = m;
        this._renderDOM(this._state);
    },
    _setFP(fP) {
        this._state.matchGame.fPlayer = fP;
        this._state.matchGame.currentPlayer = fP;
        this._renderDOM(this._state);
    },
    _setVC(vC) {
        this._state.matchGame.vicCond = vC;
        this._renderDOM(this._state);
    },
    _changeM(newM) {
        this._state.matchGame.currentM = newM;
        this._renderDOM(this._state);
    },
    _takeM(newM) {
        this._state.matchGame.currentM = newM;
        this._state.matchGame.currentN = Number(this._state.matchGame.currentN) - Number(newM);
        this._state.matchGame.userN = Number(this._state.matchGame.userN) + Number(newM);
        this._renderDOM(this._state);
        this._aIMove();
    },
    _aIMove() {
        let aiM = "1";
        //to do AI

        //
        this._state.matchGame.currentN -= aiM;
        this._state.matchGame.aiN = Number(this._state.matchGame.aiN) + Number(aiM);
        this._renderDOM(this._state);
    },

    dispatch(action) {
        if (action.type === CHANGE_M) {
            this._changeM(action.newM);
        } else if (action.type === TAKE_M) {
            this._takeM(action.newM);
        } else if (action.type === INIT_N) {
            this._initN(action.n);
        } else if (action.type === INIT_M) {
            this._initM(action.m);
        } else if (action.type === SET_FPLAYER) {
            this._setFP(action.fPlayer);
        } else if (action.type === SET_VICCOND) {
            this._setVC(action.vicCond);
        }
    },
    subscribe(observer) {
        this._renderDOM = observer;
    },

};
export default store;





