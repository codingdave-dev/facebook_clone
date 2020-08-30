import React, {Fragment} from 'react';

import './App.css';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Widgets from "./Widgets/Widgets";
import Login from "./Login/Login";
import {useStateValue} from "./store/StateProvider/StateProvider";

function App() {
    const [{user}, dispatch] = useStateValue()
  return (
    <div className="app">
        {!user ? (
            <Login/>
        ) : (
            <Fragment>
                {/*HEADER*/}
                <Header/>

                <div className="app_body">
                    {/*Sidebar*/}
                    <Sidebar/>
                    {/*Feed*/}
                    <Feed/>
                    {/*Widgets*/}
                    <Widgets/>
                </div>
            </Fragment>
        )}








    </div>
  );
}

export default App;
