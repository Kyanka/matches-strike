const RESTART = "RESTART";

let initState = {
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
};

export const AC = {
    restart() {
        return ({type: RESTART})
    },
};

const victoryReducer = (state, action) => {
    const vicFunc = {
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
    };
    switch (action.type){
        case RESTART:
            vicFunc._restart();
    }
    return (state);
};
export default victoryReducer;