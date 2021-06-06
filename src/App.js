import './App.css';
import {Route} from "react-router-dom"
import MatchGame from "./components/MatchGame/MatchGame";
import InitGame from "./components/MatchGame/InitGame";

function App(props) {
    return (
        <div className="App">
            {/*<Header/>*/}
                <Route path='/init' render={()=><InitGame mG = {props.state.matchGame} dispatch ={props.dispatch}/>}/>
                <Route path='/matchGame' render={() => <MatchGame mG={props.state.matchGame} dispatch={props.dispatch}/>}/>
        </div>
    );
};
export default App;
