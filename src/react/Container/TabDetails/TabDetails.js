import React from 'react';
import Classes from './TabDetails.css';

const TabDetails = (props) =>{
    //This by default sets the display of every contact as None to hide it.
    let display = 'none';

    //This checks the condition if selected username and name passed in props is same then make the display flex to show the details.
    if(props.username === props.selected){
        display = 'flex'
    }

    //It contains the body of the contact list with Image, Details etc.....
    return (
        <div className={Classes.TabDetails}>
            <div className={Classes.List} onClick={props.click}>
                <span>{`${props.firstName}, ${props.lastName}`}</span>
            </div>
            <div style={{display: display}} className={Classes.ListBody}>
                <div onClick={props.click} className={Classes.CloseIcon} />
                <img className={Classes.ListImage} src={props.imageUrl} alt=""/>
                <div className={Classes.ListDetails}>
                    <div>
                        <span>Username: </span>
                        <span>{props.username}</span>
                    </div>
                    <div>
                        <span>Phone: </span>
                        <span>{props.phone}</span>
                    </div>
                    <div>
                        <span>Street: </span>
                        <span>{props.street}</span>
                    </div>
                    <div>
                        <span>City: </span>
                        <span>{props.city}</span>
                    </div>
                    <div>
                        <span>State: </span>
                        <span>{props.state}</span>
                    </div>
                    <div>
                        <span>Postcode: </span>
                        <span>{props.postcode}</span>
                    </div>
                    <div>
                        <span>Email: </span>
                        <span>{props.email}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TabDetails;