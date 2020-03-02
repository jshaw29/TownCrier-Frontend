import React from 'react'
import {Input,Icon,Button} from '@react95/core'

class Unlock extends React.Component{
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
            <div className="unlock">
                <Icon name='key'></Icon>
                <Input onChange= {this.updateKey}></Input>
                <Button length={200}>Unlock</Button>
            </div>
        )
    }
}

export{Unlock}