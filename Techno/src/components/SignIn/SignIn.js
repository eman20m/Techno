import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, signin } from '../../store/actions/userActions';
import "./SignIn.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import {useTranslation} from 'react-i18next';
import { GoogleLogin } from 'react-google-login';

const SignIn = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //redirect user to home
  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
  //get user info from reduce store
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo ,loading ,error} = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password))
  }

  const userSignup = useSelector((state) => state.userSignup);
  const responseGoogle = (response) => {
    setName(response.profileObj.givenName);
    setEmail(response.profileObj.email);
    setPassword(response.profileObj.googleId);
  }
  useEffect(() => {
    if (name && email && password) {
      dispatch(register(name, email, password));
      dispatch(signin(email, password));
    }
  },[name, email, password]);
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  },[props.history,redirect ,userSignin.userInfo]);
  const {t,i18n} = useTranslation();

  return (
    <>
      <div className="container bodyLogin">
        <div className="row">

          <div className="login bg-white ">
            <h1>{t("Login")}</h1>
            <form onSubmit={submitHandler}>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            <div className="form-group">
                <label for="email"></label>
                <input dir="auto" style={{textAlign: 'start'}}  className="form-control" type="email" id="email" name="email" dir="auto" style={{textAlign: 'start'}} placeholder={t("enteremail")}
                  onChange={(e) => setEmail(e.target.value)} />

            </div>
            <div className="form-group">
                <input className="form-control" type="password" id="pwd" placeholder={t("Enter your password")}
                  onChange={(e) => setPassword(e.target.value)} />

              </div>
              <div className="form-group form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" />{t("Remember me")}
                </label>
              </div>
              <button className="btn btn-primary w-100" type="submit">{t("Login")}</button>
              <div className="justify-content-center">
                <GoogleLogin
                  clientId="559380081393-l9e14jbosaqgokq0i3mt8ah5v1mcgb6r.apps.googleusercontent.com"
                  buttonText={t("Continue with Google")} onSuccess={responseGoogle} onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'} className="border rounded mt-2 w-100 justify-content-center">
                </GoogleLogin>
              </div>
            </form>
            <p><a href="/signup"> {t("Forgot your password ?")}</a></p>
          </div>
        </div>
      </div>

    </>

  );
};
export default SignIn;
