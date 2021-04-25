import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import google from '../Image/Google icon.png'
import github from '../Image/Github.png'

import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const [createUser, setCreateUser] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
        error: "",
        success: false,
    })
    const handleOnBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const isPasswordHasValid = /\d{1}/.test(e.target.value);
            isFormValid = (isPasswordValid && isPasswordHasValid);
        }
        if (isFormValid) {
            const UserAdd = { ...user };
            UserAdd[e.target.name] = e.target.value;
            setUser(UserAdd);
        }
    };

    const handleSubmit = (e) => {
        if (createUser && user.email && user.password) {
            alert('are you sure');
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const errorWarning = { ...user };
                    errorWarning.error = '';
                    errorWarning.success = true;
                    setUser(errorWarning);


                })
                .catch(error => {
                 
                    const errorWroning = { ...user };
                    errorWroning.error = error.message;
                    errorWroning.success = false;
                    setUser(errorWroning);
                });
        }
        if (!createUser && user.email && user.password) {
            alert('Are you sure?');
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const errorWroning = { ...user };
                    errorWroning.error = '';
                    errorWroning.success = true;
                    setUser(errorWroning);
                    setLoggedInUser(errorWroning);
                    history.replace(from);
                })
                .catch(error => {
                    // Handle Errors here.
                    const errorWroning = { ...user };
                    errorWroning.error = error.message;
                    errorWroning.success = false;
                    setUser(errorWroning);
                });
        }

        e.preventDefault();
    }

    //google sign in
    const handleSignInWithGoogle = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)

                const { displayName,email } = user;
                const newUser = { name: displayName,email }
                setLoggedInUser(newUser)
                history.replace(from)

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

            });
    }

    //github sign in

    const handleSignInWithGithub =()=>{
        const gitProvider = new firebase.auth.GithubAuthProvider();
        firebase
  .auth()
  .signInWithPopup(gitProvider )
  .then((result) => {
    const user = result.user;
     console.log(user)

    const {username, email} = result.profile.user;
    const NewUser = {name: username, email}
    setLoggedInUser(NewUser);
    history.replace(from)
  

  }).catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    console.log(errorCode, errorMessage,email);
  });


    }




    return (

        <>
            <div>
                <div className="form-section" >
                    <h3 className="title">Login</h3>
                    <from  onSubmit={handleSubmit} >
                        <br />

                        <input className="Swich_form" type="text" name="name" onBlur={handleOnBlur} placeholder="Name" required />
                        {createUser && <input className="Swich_form" type="text" name="name" onBlur={handleOnBlur} placeholder="Username or Email" required />}
                        <br />
                        <div className="Form_control">
                            <input type="password" name="password" onBlur={handleOnBlur} placeholder="Password" required />
                        </div>

                        <br />
                        {createUser && <input className="Swich_form" type="password" name="name" onBlur={handleOnBlur} placeholder="Confirm password" required />}
                        <br />
                        <input className="Submit_controll" type="submit" value={createUser ? "Sign up" : "Login"} />
                    </from>
                    <div className="Text_Conrol">
                        <span className="h5">Don't have an account ?</span>
                        <input type="checkbox" onChange={() => setCreateUser(!createUser)} name="NewUser" />
                        <span className="ChekBox_text"><label htmlFor="NewUser">Create an account</label></span>
                    </div>
                </div>

                <p style={{ color: 'red', marginLeft: '50px' }}>{user.error}</p>
                {
                    user.success && <p style={{ color: 'green', marginLeft: '30px' }}>user {createUser ? 'created' : 'Logged In Successfully'}</p>
                }

                <div className="Or_arrow">
                    <div className="left_arrow"></div>
                    <h3>Or</h3>
                    <div className="right_arrow"></div>
                </div>
                
                    <div className="login_btn text-center mt-5">
                        <button onClick={handleSignInWithGoogle} className="auto_login text-center">
                            <img src={google} alt="" />Continue With Google</button>
                            <button onClick={handleSignInWithGithub} className="auto_login text-center">
                            <img src={github } alt="" />Continue With GitHub</button>
                    </div>
                


            </div>
        </>

    
    );

};

export default Login;