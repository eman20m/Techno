import './App.css';
import React, { useEffect, useState } from 'react';
import i16n from  './i18n';
import Routes from './Routes';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { singout } from './store/actions/userActions';
import i18n from './i18n';
import {useTranslation} from 'react-i18next';
import SearchBox from './components/SearchBox';
import { Navbar } from 'react-bootstrap';

const changeLanguage =(ln) =>{
  return()=>{
   i18n.changeLanguage(localStorage.getItem('lang'))
    localStorage.setItem('lang', ln);
    console.log(`language changed to ${ln}`)
  }
}
function App(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin= useSelector(state=> state.userSignin)
  const dispatch= useDispatch()
  const siginoutHandeler=()=>{
    dispatch(singout())
  }
  const {t,i18n} = useTranslation();

  const [name, setName]=useState('')
 
  return (
    <>
    <div>
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Navbar sticky="top" className="row navbar navbar-expand-sm navbar-fixed-top navbar-light py-3 bg-white">
          <div className="container">
            <div className="col-2">
              <Link className="navbar-brand font-weight-bold" to="/">
                <h2>{t("Techno2")}</h2>
              </Link>
            </div>
            <div className="col-2">
              <Route 
                render={({history})=> <SearchBox history={history}></SearchBox>}
              ></Route>
            </div>
            
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                
                <li className="nav-item">
                  <Link className="nav-link mx-4 text-dark myNav font-weight-bold" to="/">{t("Home")}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-4 text-dark myNav font-weight-bold" to="/shop">{t("Shop")}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-4 text-dark myNav font-weight-bold" to="/about">{t("About")}</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-4 text-dark myNav font-weight-bold" to="/contact">{t("Contact2")}</Link>
                </li>
              </ul>
              <div className="d-flex float-right navbar-expand-sm ">
                <ul className="navbar-nav float-right ">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle icon" href="#" id="navbardrop" data-toggle="dropdown">
                      { userSignin?.userInfo? (userSignin?.userInfo?.name?.toUpperCase()):
                      (<i className="fas fa-user-circle"></i>)
                      }
                    </a>
                    <div className="dropdown-menu">
                      {userSignin?.userInfo?(
                        <>
                          <Link to="#"></Link>
                          <a className="dropdown-item" onClick={siginoutHandeler}><Link to="/signin">{t("Sign out")}</Link></a>
                          <Link className="dropdown-item" to="/profile">{t("Profile")}</Link>
                        </>
                      ) : (
                        <>
                          <Link className="dropdown-item" to="signin">{t("Login")}</Link>
                          <Link className="dropdown-item" to="/signup">{t("Sign Up")}</Link>
                        </>
                      )}
                    </div>
                  </li>
                  {userSignin?.userInfo && userSignin?.userInfo.isAdmin && (
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle icon" to="#admin" id="navbardrop" data-toggle="dropdown">
                        {t("Admin")}
                      </Link>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/dashboard">{t("Dashboard")}</Link>
                        <Link className="dropdown-item" to="/AdminProducts">{t("Products")}</Link>
                        <Link className="dropdown-item" to="/AdminOrderList">{t("Orders")}</Link>
                        <Link className="dropdown-item" to="/usersList">{t("Users")}</Link>
                      </div>
                    </li>
                  )}
                  {userSignin?.userInfo && userSignin?.userInfo.isSeller && (

                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle icon" to="#admin" id="navbardrop" data-toggle="dropdown">
                      {t("Seller")}
                      </Link>
                      <div className="dropdown-menu">
                        
                        <Link className="dropdown-item" to="/AdminProducts/seller">{t("Products")}</Link>
                        <Link className="dropdown-item" to="/AdminOrderList/seller">{t("Orders")}</Link>
                      </div>
                    </li>
                  )}

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle icon" href="#" id="navbardrop" data-toggle="dropdown">
                      <i className="fas fa-shopping-cart">
                        {cartItems.length > 0 && (
                          <span className="bg-danger rounded-circle ml-1 badge">{cartItems.length}</span>
                        )}
                      </i>
                    </a>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/shoppingCart">{t("Shopping Cart")}</Link>
                      <Link className="dropdown-item" to="/checkout">{t("Checkout")}</Link>
                    </div>
                  </li>  
              </ul>
            </div>
          </div>
          </div>
          <div>
            <img src="../assets/egypt.png" style={{width:'50px' ,borderRadius:'100%'}} onClick={changeLanguage("ar")} className="btn m-0"/>
            <img src="../assets/american.jpg" style={{width:'50px' ,borderRadius:'100%'}} onClick={changeLanguage("en")} className="btn m-0" />
          </div>
        
        </Navbar>
      <Routes />
      <Footer />
      </Router>
      
    </div>
    
  </>
  );
}

export default App;