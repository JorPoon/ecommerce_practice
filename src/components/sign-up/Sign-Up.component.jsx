import React from "react";
import "./Sign-Up.styles.scss"

import FormInput from "../form-input/Form-input.component";
import CustomButton from "../custom-button/CustomButton.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const {displayName, email, password, confirmPassword} = this.state

        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return 
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

        } catch (err) {
            console.error(err)
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2 className="title"> I Do Not Have An Account </h2>
                <span>Sign Up With Your Email And Password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name= "displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="text"
                        name= "email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="text"
                        name= "Password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="text"
                        name= "confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp

