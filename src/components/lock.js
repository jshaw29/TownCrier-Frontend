import React from 'react'
import {Input,Icon} from '@react95/core'
class Lock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            key:''
        }
        this.updateKey = this.updateKey.bind(this)
    }
    updateKey =e =>{
        this.props.parentCallBack(e.target.value)
    }
    render(){
        return(
            <div className="lock">
                <Icon name='lock'></Icon>
                <Input onChange= {this.updateKey}></Input>
            </div>
        )
    }
}

export{Lock}