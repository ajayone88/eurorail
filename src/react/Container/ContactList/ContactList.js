import React, { Component } from 'react';
import Tab from '../Tab/Tab';
import TabDetails from '../TabDetails/TabDetails';
import instance from '../../DataAcess/DataAccess';

class ContactList extends Component {

    //Constructor to initialize the state and set default value.
    constructor(props){
        //Call to super with props.
        super(props);

        //Create alphabet array
        let alphabetsArray = [..."abcdefghijklmnopqrstuvwxyz".split('')];

        //Push value for unknown alphabet.
        alphabetsArray.push("--");

        //Create contactList schema with alphabets and without contacts.
        let contactListArray = alphabetsArray.map( alphabet =>{
            return {
                alphabetName: alphabet,
                totalCount:0,
                contactArray:[]
            }
        });

        //Create state with the required fields.
        this.state = {
            error:'none',
            fetchContactList:true,
            contactListArray: contactListArray,
            selectedAlphabet:contactListArray[0].alphabetName,
            selectedAlphabetBody:contactListArray[0],
            selectedContact: undefined,
            filteredContacts:contactListArray[0].contactArray,
            paginatedContacts:contactListArray[0].contactArray,
            displayedContacts:contactListArray[0].contactArray,
            searchedContact:'',
            start:0,
            end:0,
            backButton: 'none',
            nextButton: 'none'
        };

    }

    //LifeCycle hook called after class component got mounted.
    componentDidMount() {

        // Get contacts list from the service.
        instance.get('/?results=5000')
            .then(response => {

                // Change the flag to fetch the contact list.
                this.state.fetchContactList = false;

                // Create map with all the alphabets as the key.
                let contactListMap = new Map();
                this.state.contactListArray.forEach(value => {
                    contactListMap.set(value.alphabetName, []);
                });

                //Sort all the contact list as per the alphabet
                response.data.results.forEach(value => {
                    let contact = {
                        firstName: value.name.first,
                        lastName: value.name.last,
                        userName: value.login.username,
                        email: value.email,
                        phone: value.phone,
                        street: `${value.location.street.number}, ${value.location.street.name}`,
                        city: value.location.city,
                        state: value.location.state,
                        postcode: value.location.postcode,
                        imageUrl: value.picture.thumbnail
                    };
                    let alphabet = contact.firstName.charAt(0).toLowerCase();
                    if (contactListMap.get(alphabet) !== undefined) {
                        contactListMap.get(alphabet).push(contact);
                    } else {
                        contactListMap.get("--").push(contact);
                    }
                });

                // Transfer all the contacts and calculate the total count
                const contactListArray = this.state.contactListArray.map(value => {
                    value.contactArray = contactListMap.get(value.alphabetName);
                    value.totalCount = value.contactArray.length;
                    return value;
                });

                //Set the state
                this.setState({
                    error:'none',
                    contactListArray: contactListArray,
                    filteredValue: contactListArray[0].contactArray
                });

                //Call the filterContact function to set the start and end value.
                this.filterContact();

            }).catch(error => {
                    this.setState({
                        error: 'block'
                    })
        });

    }

    //This function is used to show Tabs Body as per alphabet selection.
    showTab(index){
        let selectedAlphabetBody = this.state.contactListArray[index];
        this.setState({
            selectedAlphabet:selectedAlphabetBody.alphabetName,
            selectedAlphabetBody:selectedAlphabetBody,
            selectedContact:undefined,
            searchedContact:undefined,
            start:0,
            end:0
        },()=>{
            this.filterContact();
        });
    }

    //This function is used to show the full information of the contact clicked on .
    showDetails(username){
        if(username === this.state.selectedContact){
            username  = undefined;
        }
        this.setState({
            selectedContact: username,
        },()=>{
            this.creteTabBody();
        });
    }

    //This function is used to filter out the contacts which matches the search box input.
    filterContact(event = {target:{value:this.state.searchedContact}}){
        const searchedContact = event.target.value;
        if(searchedContact !== undefined){
            let contactArray = this.state.selectedAlphabetBody.contactArray.filter( value =>{
                return value.firstName.toUpperCase().match(searchedContact.toUpperCase()) ||
                       value.lastName.toUpperCase().match(searchedContact.toUpperCase());
            });
            this.setState({
                start:0,
                end:0,
                searchedContact: searchedContact,
                selectedContact: undefined,
                filteredContacts:contactArray
            },()=>{
                this.goNext();
            });
        }else{
            this.setState({
                start:0,
                end:0,
                searchedContact: searchedContact,
                filteredContacts:this.state.selectedAlphabetBody.contactArray.slice()
            },()=>{
                this.goNext();
            });
        }

    }

    //This function is used to move to the next list of Contact details.
    goNext(){
        let contacts = this.state.filteredContacts;
        let start = this.state.end;
        let end = this.state.end;
        end += 10;
        end = end > contacts.length ?  contacts.length : end;
        this.setState({
            start: start,
            end: end,
            nextButton: end === contacts.length ? 'none' : 'block'
        },()=>{
            this.pagination();
        });
    }

    //This function is used to move back to the list of previous page contact list.
    goBack(){
        let tabList = this.state.filteredContacts;
        let start = this.state.start;
        if(start - 10 < 0 ){
            start = 0;
        }else{
            start -= 10;
        }
        let end = start + 10;
        if(end > tabList.length){
            end = tabList.length;
        }
        this.setState({
            start: start,
            end:end,
            nextButton: end === tabList.length ? 'none' : 'block'
        },()=>{
            this.pagination();
        });

    }

    //This function is used to slice the contact of the current page.
    pagination(){
        let contacts = this.state.filteredContacts.slice(this.state.start, this.state.end);
        this.setState({
            paginatedContacts: contacts
        },()=>{
            this.creteTabBody();
        });
    }

    //This function is used to create the contact list row of the contacts that we get after filter and pagination.
    creteTabBody(){
        let contacts = this.state.paginatedContacts.map((li, index) => {
            return (
                <TabDetails key={index}
                            firstName={li.firstName}
                            lastName={li.lastName}
                            email={li.email}
                            phone={li.phone}
                            street={li.street}
                            city={li.city}
                            state={li.state}
                            postcode={li.postcode}
                            username={li.userName}
                            imageUrl={li.imageUrl}
                            selected={this.state.selectedContact}
                            click={this.showDetails.bind(this, li.userName)} />
            )
        });
        this.setState({
            displayedContacts: contacts,
            backButton: this.state.start === 0 ? 'none' : 'block'
        });
    };

    render(){
        //This map creates the tab header
        let alphabetsTab = (this.state.contactListArray.map( (value, index) => {
            return <Tab
                name={value.alphabetName}
                totalCount={value.totalCount}
                selected={this.state.selectedAlphabet}
                click={this.showTab.bind(this, index)}
                key={index} />
        }));

        return(
              <div className={Classes.ContactList}>
                  <div className={Classes.TabHeader}>{alphabetsTab}</div>
                  <div className={Classes.TabBody}>
                      <div className={Classes.TabSearch}>
                          <input
                              type="text"
                              value={this.state.searchedContact || ''}
                              onChange={this.filterContact.bind(this)}
                              placeholder={'Search'} />
                          <span>{this.state.filteredContacts.length}</span>
                      </div>
                      <div className={Classes.TabBodyRow}>

                          <div
                              style={{display: this.state.error}}
                              className={Classes.Error}>
                              Service Failed : Try after sometime ! | Contact Administrator !
                          </div>

                          <div className={Classes.TabBodySecondRow}>
                              {this.state.displayedContacts.filter( (val, index) =>{
                                  return index % 2 === 0
                              })}
                          </div>

                          <div className={Classes.TabBodyFirstRow}>
                              {this.state.displayedContacts.filter( (val, index) =>{
                                  return index % 2 !== 0
                              })}
                          </div>

                      </div>
                      <div className={Classes.TabButton}>
                          <div
                              style={{display: this.state.backButton}}
                              onClick={this.goBack.bind(this)}>Back
                          </div>
                          <div
                              style={{display: this.state.nextButton}}
                              onClick={this.goNext.bind(this)}>Next
                          </div>
                      </div>
                  </div>
              </div>
        )
    }
}

export default ContactList;