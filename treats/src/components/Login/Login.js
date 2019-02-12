import React from 'react';
import {Button, Form, Input} from "reactstrap";


class Login extends React.Component {
    state= {
        user: {
            username: ' ',
            password: ' '
        }
    }
render(){
    return (
        <div className= "Login Form">
        <Form>
        <Input required type="text" name= "username" placeholder= "Username..."/>
        <Input  required type= "text" name= "password" placeholder= "Enter your password...."/>
        <Button type= "submit">Login </Button>
        </Form>
        </div >
    )
}




}

export default Login;
