import s from "./MatchGame.module.css"
import * as React from "react";
import {AC} from "../../redux/state";


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
        props.dispatch(AC.takeMAC());
    }
    return (
        <main className={s.content}>
            <div className={s.aiN}>
                {props.mG.aiN}
            </div>
            <div className={s.gameN}>
                {props.mG.currentN}
            </div>
            <div className={s.userN}>
                {props.mG.userN}
            </div>
            <div className={s.userM}>
                <input type="range" min="1" max={props.mG.initM} value={props.mG.currentM} onChange={changeM}
                       ref={newM} className={s.slider}/>
                <div>{props.mG.currentM}</div>
                <button className={s.addM} onClick={takeM}>Take</button>
            </div>
        </main>
    );
}
export default MatchGame;