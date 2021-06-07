import './App.css';
import {Route} from "react-router-dom"
import MatchGame from "./components/MatchGame/MatchGame";
import InitGame from "./components/MatchGame/InitGame";
import Victory from "./components/MatchGame/Victory";
import { Redirect } from 'react-router';

function App(props) {
    return (
        <div className="App">
            {/*<Header/>*/}
                <Route path='/' render={()=><Redirect to="/init"/>}/>
                <Route path='/init' render={()=><InitGame mG = {props.state.matchGame} dispatch ={props.dispatch}/>}/>
                <Route path='/matchGame' render={() => <MatchGame mG={props.state.matchGame} dispatch={props.dispatch}/>}/>
                <Route path='/victory' render={() => <Victory mG={props.state.matchGame} dispatch={props.dispatch}/>}/>
        </div>
    );
};
export default App;
