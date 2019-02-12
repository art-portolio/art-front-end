import React from 'react';
import {Button, Form, Input} from "reactstrap";


class Login extends React.Component {
    state= {
        user: {
            username: ' ',
            password: ' '
        }
    }
    handleInputChange= e=> {
        this.setState({ [e.target.name]: e.target.value})

    }
render(){
    return (
        <div className= "Login Form">
        <Form>
        <Input required type="text" name= "username" placeholder= "Username..." value= {this.state.username} onChange= {this.handleInputChange}/>
        <Input  required type= "text" name= "password" placeholder= "Enter your password...." value= {this.state.password} onChange= {this.handleInputChange}/>
        <Button type= "submit">Login </Button>
        </Form>
        </div >
    )
}




}

export default Login;
