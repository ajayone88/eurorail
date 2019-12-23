import React from 'react';
import Classes from "./Tab.css";


const Tab = (props) =>{

    //This check is used to combine the classes. To highlight the selected header.
    const classesArray =[Classes.Tab];
    if(props.selected === props.name){
        classesArray.push(Classes.Selected);
    }

    //This check is used to combine the classes. To make the header alphabet lighter
    const tabNameClasses =[Classes.TabName];
    if(props.totalCount === 0){
        tabNameClasses.push(Classes.TabNameZeroCount);
    }

    //It return the block of tab with passed name in the props. after applying necessary classes.
    return (
        <div className={classesArray.join(' ')} onClick={props.click}>
            <div className={tabNameClasses.join(' ')}>{props.name}</div>
            <div className={Classes.TabCount}>{props.totalCount}</div>
        </div>
    );
};

export default Tab;