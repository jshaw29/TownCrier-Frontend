import React from 'react';
import {Modal,Button,Input} from '@react95/core'
import {Icon} from '@react95/core'
import {ServerAddress} from './serverAddress'
import {ChatWindow} from './chatWindow'
import {Lock} from './lock'
import AES from 'crypto-js/aes'
class Window extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            message: '',
            ip:'towncrier-backend.herokuapp.com/',
            lock_pass:'',
        }
        this.updateMessage = this.updateMessage.bind(this);
        this.send = this.send.bind(this);
        this.updateIp = this.updateIp.bind(this);
        this.updateKey = this.updateKey.bind(this)
      }
    getServerStatus(){
        fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data => alert(data.status))
    }
    send(){
        console.log(AES.encrypt(this.state.message,this.state.lock_pass))
        fetch('http://'+this.state.ip+'/api/v1/posts',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username:"react",
                message: AES.encrypt(this.state.message,this.state.lock_pass).toString()
            })
        }).then(function(response){
            console.log(response)
        }).catch(function(error){
            alert('specified ip address does not have a server running')
        })
    }
    updateMessage(e){
        this.setState({message: e.target.value})
    }
    updateIp = (childData) =>{
        this.setState({ip:childData}) 
    }
    updateKey = (childData) =>{
        console.log(this.state.lock_pass)
        this.setState({lock_pass: childData})
    }
    render(){
        return(
            <div className= "Window">
                <Modal size="lg" title='TownCrier'>
                    <ServerAddress parentCallBack={this.updateIp} ></ServerAddress>
                    <Lock parentCallBack= {this.updateKey}></Lock>
                    <Input onChange= {this.updateMessage}></Input>
                    <Button size="sm" onClick = { this.send} >Send </Button>
                </Modal>
                <ChatWindow ip= {this.state.ip}></ChatWindow>
                
            </div>
        )
    }

}

export {Window}