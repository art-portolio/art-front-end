import React from "react";
import { Button, Form, Input } from "reactstrap";
class SignUp extends React.Component {
    state = {
        user: {
            username: ' ',
            password: ' ',
            fullName: ' ',
            email: ' '
        }
    }
    render() {
        return (
            <div className="Login Form">
                <Form>
                    <Input required type = "text" name= "fullName" placeholder= "Enter your full name...."/>
                    <Input required type="text" name="username" placeholder="Username" />
                    <Input required type="text" name="password" placeholder="Enter a password" />
                    <Input required type= "text" name= "email" placeholder = "Enter your email please?"/>

                    <Button color="info" type="submit">Sign Me Up!</Button>
                </Form>
            </div >
        )
    }




}

export default SignUp;

