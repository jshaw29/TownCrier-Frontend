import React from 'react';
import {Modal,Button,Input} from '@react95/core'
import {Unlock} from './unlock'
import AES from 'crypto-js/aes'
class ChatWindow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messages:[],
            ip: '',
            unlock_pass:''
        }
        this.refresh = this.refresh.bind(this);
        this.updateKey = this.updateKey.bind(this);
    }
    refresh(){

        fetch('http://'+this.state.ip+'/api/v1/posts')
        .then(response => response.json())
        .then(data =>this.state.messages = data)
        .then(this.forceUpdate())
        console.log(this.state.messages)

    }
    componentWillReceiveProps(nextProps) {
        this.setState({ ip: nextProps.ip });  
      }
    updateKey = (childData) =>{
        console.log(childData)
        this.setState({unlock_pass:childData}) 
    }
    render(){
        return(
        <div>
        <Modal height = {250}>
            <Button onClick = {this.refresh}>Refresh</Button>
            <div className = "chatList">
                {this.state.messages.map(message =>  <ul>{message.username+': '+message.message+''}</ul> )}
            </div>
            <Unlock parentCallBack= {this.updateKey}></Unlock>
            
        </Modal>
        </div>
        )
    }
}

export {ChatWindow}