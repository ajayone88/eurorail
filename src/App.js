import React, {Component} from 'react';
import classes from './App.css';
//import Header from "./components/Header/Header";
//import Footer from "./components/Footer/Footer";
//import Welcome from "./components/Welcome/Welcome";
//import ContactList from "./container/ContactList/ContactList";
import Layout from './container/Layout/Layout';
import Directory from './container/Directory/Directory';
class App extends  Component {
    render(){
        return (
            <div>
                <Layout>
                    <Directory />
                </Layout>
            </div>
        )
    }
}

export default App;