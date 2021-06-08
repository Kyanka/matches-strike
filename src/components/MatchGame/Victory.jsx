import s from "./Victory.module.css"
import * as React from "react";
import {AC} from "../../redux/state";
import LinkButton from "./LinkButton";


const Victory = (props) => {

    let restart = () => {
        props.dispatch(AC.restart());
    }
    let checkWin = () => {
        if(props.mG.aiN %2 == 0)
            return("COMPUTER")
        if(props.mG.userN %2 == 0)
            return("USER")
    }
    return (
        <main className={s.content}>
            <div className={s.winner}>
                WINNER &#128293;S {checkWin()}
            </div>
            <div className={s.score}>
                <div>
                    <span>User</span>
                    <span>{props.mG.userN}</span>
                </div>
                <div className={s.buttons}>
                    <LinkButton onClick={restart}to='/init'> &#x21ba;RESTART</LinkButton>
                </div>
                <div>
                    <span>Computer</span>
                    <span>{props.mG.aiN}</span>
                </div>
            </div>

        </main>
    );
}
export default Victory;