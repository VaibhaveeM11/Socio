import React,{Component}from 'react';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import socio from '../../Images/socio.png';
import './Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
// 040911
//B2AA8E
//081121
// include svg facebook
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/react-fontawesome
//  npm i --save @fortawesome/free-brands-svg-icons

class Login extends Component {

    render() { 
        return ( 
  <div className='Maincontainer'>

    <Container maxWidth='sm'>
        {/* <p>Post Anywhere Anytime...</p> */}
         <h1>Welcome Login</h1>
         <img src={socio} id='sociologo'/>
         <p>Login to your registered account</p>

<form>

    <div>
     <TextField id='standard-basis' label='Email' autoFocus required fullWidth/>
  </div> <br></br>

<div>
   <TextField id='standard-basis' label='Password' autoFocus required  margin='normal' fullWidth/>
</div><br></br>

<div>
   <button id='btnLogIn'>Login</button>
</div>   

 <a href={'#'} id='forgetPass'>Forget Password ?</a>

{/* Sign with Social handle */}
 <div id='lo'>
        <p>Or Sign in with</p>
      <a
        href="https://www.youtube.com/c/jamesqquick"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    
 </div>

 
{/* If user don't have an account */}
<p>Don't have an account? <a href={'#'} style={{textDecoration:'none'}}>Sign Up</a></p>
 </form> 
   </Container>
</div>);
}
}

export default Login;
