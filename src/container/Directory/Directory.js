import React, {Component} from 'react';
import classes from './Directory.css';
import TabHeader from '../../components/TabHeader/TabHeader';
import TabBody from '../TabBody/TabBody';
import instance from '../../data-access/axios-instance';

class Directory extends Component{
    state = {
        alpha: [..."abcdefghijklmnopqrstuvwxyz-".split('')],
        preAlpha: 'a',
        sortedUsers: []
    };

    selectAlphaHandler = (alpha) =>{
        this.setState({
            preAlpha: alpha
        });
    }

    componentDidMount() {
        instance.get('/?results=200')
            .then(response => {
                    const sortedUsers =this.state.alpha.reduce((attr, alpha) =>{
                        attr = {...attr, [alpha]:[]};
                        return attr;
                    },{})
                    response.data['results'].forEach(user =>{
                        let alpha = user.name.first.charAt(0).toLowerCase();
                        if(this.state.alpha.includes(alpha)){
                            sortedUsers[alpha].push({
                                title: user.name.title,
                                first: user.name.first,
                                last: user.name.last,
                                gender: user.gender,
                                email:user.email,
                                imageThumbnail: user['picture']['thumbnail'],
                                imageLarge: user['picture']['large'],
                            });
                        }else{
                            sortedUsers['-'].push({
                                title: user.name.title,
                                first: user.name.first,
                                last: user.name.last,
                                gender: user.gender,
                                email:user.email,
                                imageThumbnail: user['picture']['thumbnail'],
                                imageLarge: user['picture']['large'],
                            })
                        }
                    });
                    this.setState({
                        sortedUsers: sortedUsers
                    });
            });
    }

    render(){
        const header = this.state.alpha
                        .map(alphabet =>{
                            return (
                                <TabHeader
                                    key={alphabet} 
                                    alpha={alphabet}
                                    selected={this.state.preAlpha === alphabet ? 'Selected' : ''}
                                    clicked={() => this.selectAlphaHandler(alphabet)}/>
                            )
                        });

        let tabBodyElement = null;
        if(this.state.sortedUsers[this.state.preAlpha]){
            console.log("Changing Body Tab");
            tabBodyElement = <TabBody users={this.state.sortedUsers[this.state.preAlpha]}/>
        }
        
        return (
            <div className={classes.Directory}>
                <div>
                    {header}</div>
                    {tabBodyElement}
            </div>
        );
    }
}

export default Directory;