import React from 'react';
import './App.css';
import FormPrivilegeContainer from './components/FormPrivilegeContainer';
import FormPrivilegeContainerAdd from './components/FormPrivilegeContainerAdd'
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store = {store } >
       <div className="App">
       <FormPrivilegeContainerAdd />
      <FormPrivilegeContainer />      
    </div>
    </Provider>
  );
}

export default App;
