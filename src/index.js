import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import BaseLayout from './components/layout/BaseLayout';
import reducer from './reducers';
import Snackin from './components/Snackin';
import Rappin from './components/Rappin'
// import Hooks from './components/Hooks';
// import Classes from './components/Classes'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import NavBar2 from './components/NavBar2'
import { useParams
} from "react-router-dom";


const saveToLocalStorage = (reduxGlobalState) => {
  
  // serialization = converting js object to a string

  try{
    const serializeState = JSON.stringify(reduxGlobalState);
    localStorage.setItem('state', serializeState)
  }
  catch(e){
    console.log(e);
  }
}

const loadFromLocalStorage = () => {
  
  const serializeState = localStorage.getItem('state');

  if(serializeState == null){
    return undefined;
  }
  else{
    return JSON.parse(serializeState);
  }
}

const persistedState = loadFromLocalStorage();


let store = createStore(reducer, persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


store.subscribe(()=>{
  saveToLocalStorage(store.getState());
})








ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
       {/* <NavBar></NavBar>  */}
       <Router style={{backgroundColor: 'red'}}>
         <NavBar2></NavBar2>
            <Switch>
              {/* <Route exact path="/" component={App} /> */}
              <Route exact path="/" component={Snackin} />
              <Route exact path="/Rappin/:id" component={Rappin} />
              <Route exact path="/Rappin" component={Rappin} />
            </Switch>
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
