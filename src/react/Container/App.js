import React, { Component, Suspense } from 'react';
import Classes from './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Welcome from "../Components/Welcome/Welcome";
//Left this code (when not using lazy loading)
//import ContactList from "./ContactList/ContactList";

//Lazy Loading is used not very much useful for this app but it can be useful for other heavy apps.
const Async = React.lazy(()=>{
   return import('./ContactList/ContactList');
});


class App extends Component {
    //This state is used show the burger menu options on click.
    state = {showMenu: true};

    //This function is used to toggle between show and hide menu options.
    toggle = ()=>{
        this.setState({
            showMenu: !this.state.showMenu
        })
    };

    //It consists of the Header , Footer ,and the Body which can be changed with the Rout (React Router).
    render(){
        return (
            <BrowserRouter>
                <div className={Classes.main}>
                    <Header click={this.toggle} display={this.state.showMenu}/>
                    <Route path="/" exact component={Welcome}/>
                    <Route path="/contact-list" exact render={()=>(
                        <Suspense fallback={<div>Loading......</div>}>
                            <Async />
                        </Suspense>
                    )}/>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

/*
//When not using lazy loading.
<Route path="/contact-list" exact component={ContactList} />
*/

export default App;