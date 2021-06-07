import s from "./MatchGame.module.css"
import * as React from "react";
import {AC} from "../../redux/state";
import {NavLink} from "react-router-dom";
import LinkButton from './LinkButton'


const MatchGame = (props) => {
    // let tasks = props.tasksPage.tasks.map(task => <Task user_id={task.user_id} items={task.items}/>)
    //
    let newM = React.createRef();
    let changeM = () => {
        let m = newM.current.value
        // console.log(m);
        props.dispatch(AC.changeMAC(m));
    }
    let takeM = () => {
        let m = newM.current.value
        props.dispatch(AC.takeMAC(m));
    }
    return (
        <main className={s.content}>
            <div className={s.moveOf}>
                MOVE OF: <span className={s.mover}>{props.mG.currentPlayer}</span>
            </div>

            <div className={s.score}>
                <div>
                    <span>User</span>
                    <span>{props.mG.userN}</span>
                </div>
                <div>
                    <span>Matches</span>
                    <span>{props.mG.currentN}</span>
                </div>
                <div>
                    <span>Computer</span>
                    <span>{props.mG.aiN}</span>
                </div>
            </div>

            <div className={s.userM}>
                <div>
                    <p>Matches in stuck: {props.mG.currentM}</p>
                    <input type="range" min="1" max={props.mG.initM} value={props.mG.currentM} onChange={changeM}
                           ref={newM} className={s.slider}/>
                </div>
                <div className={s.buttons}>
                    <button onClick={takeM}>TAKE IT</button>
                    <LinkButton to='/init'> &#x21ba;RESTART</LinkButton>
                </div>
            </div>
        </main>
    );
}
export default MatchGame;