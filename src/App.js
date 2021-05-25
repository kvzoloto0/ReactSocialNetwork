import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Settings from "./component/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <Header />
          <Navbar /> 
          <Route path="/dialogs" render={ () => <Dialogs dialogs = { props.dialogs } messages = { props.messages } /> }/>
          <Route path="/profile" render={ () => <Profile posts = { props.posts } /> }/>  
          <Route path="/news" render={ () => <News /> }/>
          <Route path="/music" render={ () => <Music /> }/> 
          <Route path="/settings" render={ () => <Settings /> }/>
          {/* <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />  
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
