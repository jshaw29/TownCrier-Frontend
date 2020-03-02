import React from 'react';
import {Icon,Input} from '@react95/core'
class ServerAddress extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ip:''
        }
        // this.updateMessage = this.updateMessage.bind(this);
        // this.send = this.send.bind(this);
        this.updateIp = this.updateIp.bind(this);
      }
      updateIp = e =>{
        this.props.parentCallBack(e.target.value)
    }
      render(){
          return(
            <div className = "serverAddress">
                <Icon name='network_2'></Icon>
                <Input onChange= {this.updateIp}></Input>
            </div>
          )
      }
}

export {ServerAddress}