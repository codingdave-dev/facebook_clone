import React from 'react';
import './Login.css'
import Button from "@material-ui/core/Button";

import {auth, provider} from "../config/firebase";
import {actionTypes} from "../store/reducer/reducer";
import {useStateValue} from "../store/StateProvider/StateProvider";

const Login = () => {
    const [state, dispatch] = useStateValue()
    const signIn = ()=> {
        auth.signInWithPopup(provider).then((result) => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })

            console.log(result)
        }).catch((error) => {
            alert(error)
        })
    }
    return (
        <div className={'login'}>
            <div className="login_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook Logo"/>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="Facebook Logo"/>
            </div>
            <Button type={'submit'} onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
};

export default Login;