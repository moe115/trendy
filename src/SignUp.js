import React, { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber ,signOut  } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import OtpInput from "otp-input-react";
import { CgSpinner } from "react-icons/cg";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { auth } from "./firebase";
import "react-phone-input-2/lib/style.css";
import logo12 from './images/logo12.png'
import "./signup.css";
import { Button , TextField } from '@mui/material';

function SignUp() {

 
 
    const history = useNavigate();
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState('');
    
    const [user, setUser] = useState(null);

   const sendOtp = async()=> {
    try{
         const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
         const confirmation = await signInWithPhoneNumber(auth,ph,recaptcha)
         setUser(confirmation)
        }catch(err) {console.error(err)}
      }
      console.log(auth);


  const verifyOtp = async()=> {
    try {
      if (user) {
          const data = await user.confirm(otp);
          console.log(data);
          await console.log(auth.currentUser.phoneNumber);
            if(auth){history('/')}

      } else {
          console.error("User object is null or undefined.");
      }
  } catch(err) {
      console.error(err);
  }
  }


   const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

    return (
      
       <div>
       
                {/* <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
                ></OtpInput> */}
                 
        
                   
            <div className='phoneInput'>
                      <div className='phoneContent'>
                 <PhoneInput  country={"lb"} value={ph} onChange={(ph)=> setPh("+" + ph )} />
                <Button onClick={sendOtp} sx={{marginTop:"10px"}} variant='contained' > send otp </Button>
                <div id='recaptcha'  sx={{marginTop:"10px"}}  >
 
                </div>
                      </div>
                      <TextField 
                       onChange={(e)=> setOtp(e.target.value)}
                      sx={{marginTop:"10px" , width:"300px"}} variant='outlined' size='small' label='enter  otp' /><br/>
                      <Button  onClick={verifyOtp} sx={{marginTop:"10px"}} variant='contained' color='success' > verify otp </Button><br/>
                      <Button  onClick={logout} sx={{marginTop:"10px"}} variant='contained' color='success' > signout</Button>
            </div>
            
           
          </div>
        )
    
  
};


export default SignUp 