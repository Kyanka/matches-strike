import './App.css';
import {Route} from "react-router-dom"
import MatchGame from "./components/MatchGame/MatchGame";
import InitGame from "./components/InitGame/InitGame";
import Victory from "./components/Victory/Victory";
import { Redirect } from 'react-router';
import InitGameContainer from "./components/InitGame/InitGameContainer";
import MatchGameContainer from "./components/MatchGame/MatchGameContainer";
import VictoryContainer from "./components/Victory/VictoryContainer";


function App() {
    return (
        <div className="App">
            {/*<Header/>*/}
                <Route path='/' render={()=><Redirect to="/init"/>}/>
                <Route path='/init' render={()=><InitGameContainer/>}/>
                <Route path='/matchGame' render={() => <MatchGameContainer/>}/>
                <Route path='/victory' render={() => <VictoryContainer/>}/>
        </div>
    );
};
export default App;
