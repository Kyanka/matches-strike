import s from "./Victory.module.css"
import * as React from "react";
import LinkButton from "../LinkButton";


const Victory = (props) => {

    return (
        <main className={s.content}>
            <div className={s.winner}>
                WINNER &#128293;S {props.checkWin}
            </div>
            <div className={s.score}>
                <div>
                    <span>User</span>
                    <span>{props.userN}</span>
                </div>
                <div className={s.buttons}>
                    <LinkButton onClick={props.restart}to='/init'> &#x21ba;RESTART</LinkButton>
                </div>
                <div>
                    <span>Computer</span>
                    <span>{props.aiN}</span>
                </div>
            </div>

        </main>
    );
}
export default Victory;