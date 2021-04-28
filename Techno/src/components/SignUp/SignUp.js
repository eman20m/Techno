import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, signin } from '../../store/actions/userActions';
import "./SignUp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import {useTranslation} from 'react-i18next';


const SignUp = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');


  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
  const userSignup = useSelector((state) => state.userSignup);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if(password !== confirmpassword){
      alert('password and confirm password are not match')
    }
    else
    {
      dispatch(register(name,email, password))
      props.history.push(redirect);
    }
  };
  console.log(userSignup);
  

  
  const {t,i18n} = useTranslation();

  return (
    <>
      <div className="container-fluid bgd mb-0">
        <div className="signup-form mb-0">
          <form action="/examples/actions/confirmation.php" method="post" onSubmit={submitHandler}>
            <h2>{t("Sign Up")}</h2>
            {userSignup?.loading && <LoadingBox/>}
            {userSignup?.error && <MessageBox variant="danger">{userSignup?.error}</MessageBox>}
            {userSignup?.userInfo && <MessageBox variant="success">{`Welcome ${userSignup?.userInfo?.name}`}</MessageBox>}

            <p>{t("please")}</p>
            <hr></hr>
            <div className="form-group">
              <input type="text" className="form-control" name="name" placeholder={t("Enter Full Name")} required="required"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder={t("enteremail")}
                required="required"
                onChange={(e) => setEmail(e.target.value)}
              />
           
              <br></br>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder={t("Enter your password")}
                required="required"
                onChange={(e) => setPassword(e.target.value)} 
              />
            
              <br></br>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="confirm_password"
                placeholder={t("Confirm Password")}
                required="required"
                onChange={(e) => setConfirmPassword(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <label className="form-check-label">
                <input type="checkbox" required="required" classNameName="mr-2" />I
               { t("accept the")} <a href="#">{t("Terms of Use")}</a> &amp;
                <a href="#">{t("Privacy Policy")}</a>
              </label>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                
              >
             {t("Sign Up")}
              </button>
            </div>
            <div className="hint-text">
              {t("Already have an account?")}
              <a href={`/signin?redirect=${redirect}`} className="text-decoration-none text-primary">
              {t("Login")}
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;