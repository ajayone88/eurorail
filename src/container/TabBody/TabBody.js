import React, { Component }from 'react';
import classes from './TabBody.css';
import UserTile from '../../components/UserTile/UserTile';
class TabBody extends Component{
    state = {
        users:this.props.users,
        current:0,
        size:18
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            users: nextProps.users
        })
    }

    shouldComponentUpdate(nextProps){
        return this.state.users !== nextProps.users;
    }

    handlePagination = () =>{
        const filteredUser = this.state.users.filter((user, index) =>{
            return  this.state.current <= index && (this.state.size + this.state.current) >= index;
        });

        this.setState({
            users:filteredUser
        })
    }

    render(){
        this.handlePagination();
        console.log("Inside Tab Body");
        let userTile = this.state.users.map((user, index) =>{
            return <UserTile key={index} user={user} />
        });
        return (
            <div className={classes.TabBody}>
                <div className={classes.UserInfo}>
                    {userTile}
                </div>
            </div>
        )
    }
}

export default TabBody;