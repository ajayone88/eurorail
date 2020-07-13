import React, { Component } from 'react';
import classes from './Layout.css';
import Aux from '../../hoc/Auxillary/Auxillary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
class Layout extends Component{
    render(){
        return(
           <Aux>
                <Toolbar />
                <main className={classes.Main}>
                    {this.props.children}
                </main>
           </Aux>
        )
    }
}

export default Layout;