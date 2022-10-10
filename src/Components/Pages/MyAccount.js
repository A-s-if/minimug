import React, {useState } from 'react';
import style from 'styled-components';
import Navigation from '../Navigation/Navigation';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import Footer from '../../Components/Footer';
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './FirebaseConfigue';

const MyAccount = () => {
    const [newUser,setNewUser]=useState(false);
    const [InputData,setInputData]= useState({email:'',password:''});
    console.log(InputData)
    const app = initializeApp(firebaseConfig);
    /* Google Sign In */
    const handleGoogleSignIn=()=>{
        const provider = new GoogleAuthProvider();
    
        const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user)
  }).catch((error) => {
    console.log(error)
  });

      }

      /* Handle Input Information */

  const handleInputInformation=(even)=>{
    const information={...InputData};
    information[even.target.type]=even.target.value;
    setInputData(information)
  }

  /* Handle Create New Accountt With Email and Password */

  const handleCreateAccount=(e)=>{
    e.preventDefault();
    const auth = getAuth();
createUserWithEmailAndPassword(auth, InputData.email, InputData.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    console.log(error)
  });
  }
    return (
        <Container>
            {/* Navigation */}
            <Navigation></Navigation>

            {/* About Us Div */}
            <AboutUsDiv>
            <h1>Log In</h1>
            <p><Link to="/">Home <ChevronRightIcon sx={{
                position:'relative',
                top:'3px'
            }}></ChevronRightIcon></Link>  Account</p>
            </AboutUsDiv>

            {/* Login and New Customer Div */}

            <LoginAndNewCustomerDiv>
                <LoginDiv>
                    <h2>Login</h2>
                    <br />
                    <input type="email" name="" id="" placeholder='Email' onBlur={handleInputInformation}/><br />
                    <br />
                    <input type="password" name="" id="" placeholder='Password' onBlur={handleInputInformation} /><br />
                    <br />
                    <u>Forgot your password?</u><br />
                    <br />
                    <ButtonDiv onClick={handleCreateAccount}>
                    <button>Sign In</button>
                    </ButtonDiv>
                    <br />
                    <ButtonDiv>
                    <button onClick={handleGoogleSignIn}><GoogleIcon/> Sign In With Google</button>
                    </ButtonDiv>
                </LoginDiv>

                <NewCustomerDiv>
                    <h2>New Customer</h2>
                    <br />
                    <p>
                    Sign up for early Sale access plus tailored new <br />
                    arrivals, trends and promotions. To opt out, click <br />
                    unsubscribe in our emails.
                    </p>
                    <br />
                    <button>Register</button>
                </NewCustomerDiv>
            </LoginAndNewCustomerDiv>

            {/* Footer */}
            <Footer></Footer>
        </Container>
    );
};

export default MyAccount;

const Container=style.div``

/* About Us Div */
const AboutUsDiv=style.div`
padding-top:130px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
p{
    display:flex;
    justify-content:center;
    align-items:center;
}
a{
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    color:black;
}
`

/* Login and New customer Div */
const LoginAndNewCustomerDiv=style.div`
display:flex;
justify-content:space-evenly;
margin:50px 0;
`

const LoginDiv=style.div`
padding-left:200px;
input{
    width:350px;
    height:40px;
    font-size:15px;
}
u{
    font-size:17px;
    cursor:pointer;
}


`
const ButtonDiv=style.div`
width:355px;
height:50px;
display:flex;
justify-content:center;
align-items:center;
button{
    width:350px;
    height:45px;
    font-size:15px;
    color:white;
    font-weight:bold;
    background-color:black;
    border-radius:5px;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:0.2s;
    :hover{
        width:355px;
        height:50px;
    }
}
`

const NewCustomerDiv=style.div`
padding-right:200px;
p{
    color: rgb(57, 57, 57);
}
button{
    background-color:black;
    color:white;
    font-size:15px;
    font-weight:bold;
    width:150px;
    height:45px;
    cursor:pointer;
    border-radius:5px;
    transition:0.2s;
    :hover{
        width:155px;
        height:50px;
    }
}
`