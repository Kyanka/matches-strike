import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux"

function renderDOM() {
    ReactDOM.render(
        <React.StrictMode>
            <meta charSet="UTF-8"/>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

//
// renderDOM();
//store.subscribe(renderDOM(store.getState()));
renderDOM(store.getState())
let state = store.getState();
console.log(state);
store.subscribe(() => {
    renderDOM(state);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
