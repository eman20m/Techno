import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { singout } from "../../store/actions/userActions";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector(state => state.userSignin)
  const dispatch = useDispatch()
  const siginoutHandeler = () => {
    dispatch(singout())
  }
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light py-3 bg-white">
        <div className="container">
          <Link className="navbar-brand font-weight-bold" to="/">
            <h2>Techno</h2>
          </Link>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav m-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link mx-4 text-dark myNav font-weight-bold" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-4 text-dark myNav font-weight-bold" href="/shop">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-4 text-dark myNav font-weight-bold" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-4 text-dark myNav font-weight-bold" href="/contact">Contact</a>
              </li>
            </ul>
            <div className="d-flex float-right navbar-expand-sm ">
              <ul className="navbar-nav float-right ">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle icon" href="#" id="navbardrop" data-toggle="dropdown">
                   
                    {userSignin?.userInfo ? (userSignin?.userInfo?.name?.toUpperCase()) :
                      (<i className="fas fa-user-circle"></i>)
                    }
                  </a>
                  <div className="dropdown-menu">
                    {userSignin?.userInfo ? (
                      <>
                        <Link to="#"></Link>
                        <a className="dropdown-item" onClick={siginoutHandeler} href="/signin">Sign out</a>
                        <a className="dropdown-item" href="/profile">Profile</a>
                      </>
                    ) : (
                        <>
                          <a className="dropdown-item" href="/signin">Sign in</a>
                          <a className="dropdown-item" href="/signup">Sign up</a>
                        </>
                      )}

                  </div>
                  {/*admin*/}
                  {/*  <a className="nav-link dropdown-toggle icon" href="#" id="navbardrop" data-toggle="dropdown">
                     {isAdmin?.userInfo ? (isAdmin?.userInfo?.name?.toUpperCase()) :
                      (<i className="fas fa-user-circle"></i>)
                    }
                  </a>
                  <div className="dropdown-menu">
                    {isAdmin?.userInfo ? (
                      <>
                        <Link to="#"></Link>
                        <a className="dropdown-item" onClick={siginoutHandeler} href="/signin">Sign out</a>
                        <a className="dropdown-item" href="/dashboard">dashboard</a>
                      </>
                    ) : (
                        <>
                          <a className="dropdown-item" href="/signin">Sign in</a>
                          <a className="dropdown-item" href="/signup">Sign up</a>
                        </>
                      )}

                  </div>
                    */}

                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle icon" href="#" id="navbardrop" data-toggle="dropdown">
                    <i className="fas fa-shopping-cart">
                      {cartItems.length > 0 && (
                        <span className="bg-danger rounded-circle ml-1 badge">{cartItems.length}</span>
                      )}
                    </i>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/shoppingCart">View cart</a>
                    <a className="dropdown-item" href="/checkout">Checkout</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;