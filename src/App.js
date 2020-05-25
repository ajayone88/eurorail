import React, {Component} from 'react';
import M from 'materialize-css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Welcome from "./components/Welcome/Welcome";
import ContactList from "./container/ContactList/ContactList";
class App extends  Component {
    componentDidMount() {
        const sideNavElement = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sideNavElement, {});

        const SliderElement = document.querySelectorAll(".slider");
        M.Slider.init(SliderElement, {
            indicators: false,
            height:400,
            transition:3000
        })
    }
    render(){
        return (
            <div>
                <header>
                    <Header />
                </header>
                <Welcome />
                <ContactList />
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default App;