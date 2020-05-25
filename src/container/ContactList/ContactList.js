import React, { Component } from "react";

import TabHeader from './TabHeader/TabHeader';
import TabBody from './TabBody/TabBody';
import "./ContactList.css";

import instance from '../../data-access/axios-instance';

class ContactList extends Component {

    constructor(props) {
        super(props);
        const alphabetsArray = [..."abcdefghijklmnopqrstuvwxyz-".split('')];
        this.state = {
            alphabets: alphabetsArray,
            pageObject:{
                currentPage:0,
                filteredUserSize:0,
                pageSize:10

            },
            userDetails:[],
            tabHeader:[],
            tabBody:[],
            tabPagination:[]

        }
    }

    componentDidMount() {
        instance.get('/?results=100')
            .then(response => {
                const users = response.data['results'];
                const userDetails  = users.map( user =>{
                   return {
                       title: user.name.title,
                       first: user.name.first,
                       last: user.name.last,
                       gender: user.gender,
                       image: user['picture']['large']
                   }
                });
                this.setState({
                    userDetails: userDetails
                });
                this.createTabHeader();
                this.createTabBody('a');
            });
    }

    createTabHeader(){
       const tempTabHeader = this.state.alphabets.map( (alpha, index) =>{
          return (
              <TabHeader key={index}  itemName={alpha}/>
          )
       });
       this.setState({
           tabHeader: tempTabHeader
       });
    }

    adjustPagination(){
        let sizeOfArray = Math.ceil(this.state.pageObject.filteredUserSize / this.state.pageObject.pageSize) ;
        let pageBlockArray = Array(sizeOfArray).fill(0).map( (v,i) => i +1 );
        let tabPagination = pageBlockArray.map( (val, index) =>{
            let cssClass = ['waves-effect'];
            if(val === this.state.pageObject.currentPage + 1){
                cssClass.push('active');
            }
            return  <li key={"Key_1"+ index} className={cssClass.join(" ")}><a href="#!">{val}</a></li>
        });
        this.setState({
            tabPagination:tabPagination
        })
    }

    createTabBody(alphabet){
        let filteredUser = this.state.userDetails.filter( user => {
            return user.first.charAt(0).toUpperCase() === alphabet.toUpperCase()
        });

        this.setState({
            pageObject:{
                ...this.state.pageObject,
                filteredUserSize:filteredUser.length
            }
        });

        let startPointer = this.state.pageObject.pageSize * this.state.pageObject.currentPage;
        let endPointer = startPointer + this.state.pageObject.pageSize;
        filteredUser = filteredUser.filter( (user, index) => {
            return (index >= startPointer && index <= endPointer - 1)
        });
        this.adjustPagination();
        this.setState({
            tabBody: <TabBody key={'key_1'} users={filteredUser}/>
        });
    }

    handleTabSelect(alphabet){
        this.createTabBody(alphabet);
    }

    render(){
        return (
           <section className="section section-contactList container">
                <div className="row">
                    <div className="col s12">
                        <h4 className="left-align">Contact List</h4>
                        <div className="TabHeader center-align" >{this.state.tabHeader}</div>
                        <div className="TabBody">{this.state.tabBody}</div>
                        <div className="col s12">
                            <ul className="pagination center-align">
                                <li className="disabled"><i className="material-icons">chevron_left</i></li>
                                {this.state.tabPagination}
                                <li className="waves-effect"><i className="material-icons">chevron_right</i></li>
                            </ul>
                        </div>
                    </div>
                </div>
           </section>
        )
    }
}

export default ContactList;