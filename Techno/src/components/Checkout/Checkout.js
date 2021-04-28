import "bootstrap/dist/css/bootstrap.min.css";
import "./Checkout.css";
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../store/actions/orderActions';
import { ORDER_CREATE_RESET } from '../../store/types/orderConstants';
import { saveShippingAddress, savePaymentMethod, saveShippingDetails, } from '../../store/actions/cartActions';
import { useTranslation } from "react-i18next";

const Checkout = (props) => {
  const cart = useSelector((state) => state.cart);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  if (!userInfo) { props.history.push('/signin'); }

  const { shippingAddress, paymentMethod, shippingDetails } = cart;

  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [firstName, setFirstName] = useState(shippingAddress.firstName);
  const [lastName, setLastName] = useState(shippingAddress.lastName);
  const [phoneNum, setPhoneNum] = useState(shippingAddress.phoneNum);
  const [address, setAddress] = useState(shippingAddress.address);
  const [country, setCountry] = useState(shippingAddress.country);
  const [region, setRegion] = useState(shippingAddress.region);
  const [city, setCity] = useState(shippingAddress.city);
  const [fax, setFax] = useState(shippingAddress.fax);

  const dispatch = useDispatch();

  const submitShipping = (e)=>{
    e.preventDefault();
    dispatch( saveShippingAddress({ firstName, lastName, phoneNum, address, city, region, country, postalCode, fax }) );
  }

  const [paymentCost, setPaymentCost] = useState(0);
  const [paymentType, setPaymentType] = useState(paymentMethod);
  const submitPaymentType = (e) => {
    if ( paymentType === "PayPal"){ setPaymentCost(0.05) }
    else if ( paymentType === "VisaCard"){ setPaymentCost(0.03) }
    else if( paymentType === "Stripe" ){ setPaymentCost(0.07) }
    e.preventDefault();
    dispatch(savePaymentMethod(paymentType));
  };

  const [shippingCost, setShippingCost] = useState(0);
  const [shippingType, setShippingType] = useState(shippingDetails);
  const submitShippingType = (e) => {
    if ( shippingType == "Free"){ setShippingCost(0) }
    else if ( shippingType == "Standard"){ setShippingCost(15) }
    else if( shippingType == "Speed" ){ setShippingCost(35) }
    e.preventDefault();
    dispatch(saveShippingDetails(shippingType));
  };

  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemsPrice = ( cart.cartItems.reduce((a, c) => a + c.qty * (c.price - c.discount), 0) );
  cart.itemsQty = ( cart.cartItems.reduce((a, c) => a + c.qty , 0) );
  cart.grandPrice = ( toPrice(cart.itemsPrice + shippingCost + (cart.itemsPrice * paymentCost)) );
  cart.shippingCost = shippingCost;
  cart.paymentCost = paymentCost * cart.itemsPrice;

  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const placeOrderHandler = () => { dispatch(createOrder({...cart, orderItems: cart.cartItems})) };

  useEffect(() => { if (success) {
    props.history.push(`/order/${order._id}`);
    dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

  const { t, i18n } = useTranslation();

  return (
    <>
      <section className="jumbotron text-white text-center header-section">
        <div className="container col-lg-5 col-md-6 col-sm-8 col-9 py-4 bg-white text-center myBorder">
          <h1 className="mb-3 text-dark">{t("Checkout")}</h1>
          <div className="msg text-dark">
          {t("Missed something ?")}<a href="/shop" className="text-secondary"> {t("Continue shopping")}</a>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="row adjustRow">
          <div className="col-lg-8 col-md-12 mt-4 bg-white">
            <nav className="text-secondary text-uppercase">
              <ul className="nav nav-tabs nav-justified h5">
                <li className="nav-item text-center">
                  <a data-toggle="tab" href="#Billing"className="nav-link custmizeAnchor titles active">
                     {t("Billing Address")}
                  </a>
                </li>
                <li className="nav-item text-center">
                  <a data-toggle="tab" href="#Shipping" className="nav-link custmizeAnchor titles">
                  {t("Shipping Method")}
                  </a>
                </li>
                <li className="nav-item text-center">
                  <a data-toggle="tab" href="#Payment" className="nav-link custmizeAnchor titles">
                    {t("Payment Method")}
                  </a>
                </li>
                <li className="nav-item text-center">
                  <a data-toggle="tab" href="#Orders" className="nav-link custmizeAnchor titles">
                    {t("Orders Review")}
                  </a>
                </li>
              </ul>
            </nav>
            <div className="tab-content text-left text-secondary">
              {/*---------------------------BillingAddress---------------------------*/}
              <div className="tab-pane active" id="Billing">
                <h4 dir="auto" style={{textAlign: 'start'}}>  {t("Billing Details")}</h4><hr />
                <form role="form">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 cust-billing">
                      <div className="form-group">
                        <label for="inputFirstName" className="control-label">
                        {t("FirstName:")}<span className="text-error"></span>
                        </label>
                        <div>
                          <input
                            type="text"
                            value={firstName}
                            id="inputFirstName"
                            className="form-control"
                            placeholder={t("Enter First Name")}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputLastName" className="control-label">
                        {t("Last Name:")}<span className="text-error mt-5"></span>
                          </label>
                        <div>
                        <input
                          type="text"
                          value={lastName}
                          id="inputLastName"
                          className="form-control"
                          placeholder={t("Enter Last Name")}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputFax" className="control-label">{t("Fax:")}</label>
                        <div>
                        <input
                          type="text"
                          value={fax}
                          id="inputFax"
                          className="form-control"
                          placeholder={t("Enter Fax")}
                          onChange={(e) => setFax(e.target.value)}
                          required
                        />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label">
                          {t("country")}<span className="text-error"></span>
                            </label>
                            <div>
                              <select name="inputContury" className="form-control" onChange={(e) => setCountry(e.target.value)} value={country}>
                                <option>{t("Egypt")}</option>
                                <option>{t("Egypt")}</option>
                                <option>{t("Egypt")}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="control-label">{t("Regions")}
                          <span className="text-error"></span></label>
                            <div>
                              <select name="inputRegion" className="form-control" onChange={(e) => setRegion(e.target.value)} value={region}>
                                <option>{t("cairo")}</option>
                                <option>{t("cairo")}</option>
                                <option>{t("giza")}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 cust-billing">
                      <div className="form-group">
                        <label for="inputPhone" className="control-label" dir="auto" style={{textAlign: 'start'}}></label>
                       {/*} {t("phone*")}*/}
                        <div>
                          <input
                            type="text"
                            value={phoneNum}
                            id="inputPhone"
                            className="form-control"
                            placeholder={t("Enter phone Number")}
                            onChange={(e) => setPhoneNum(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputAddress1" className="control-label">
                      <span className="text-error"></span>
                     {/*} { t("add")}*/}
                        </label>
                        <div>
                        <input
                          type="text"
                          value={address}
                          id="inputAddress1"
                          className="form-control"
                          placeholder={t("Enter Address")}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                        />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputCity"className="control-label">
                      <span className="text-error"></span>
                     {/*} {t("City:")}*/}
                        </label>
                        <div>
                        <input
                          type="text"
                          value={city}
                          id="inputCity"
                          className="form-control"
                          placeholder={t("Enter City")}
                          onChange={(e) => setCity(e.target.value)}
                          required
                        />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="inputPostCode" className="control-label">
                         <span className="text-error"></span>
                        </label>
                        <div>
                        <input
                          type="text"
                          value={postalCode}
                          id="inputPostCode"
                          className="form-control"
                          placeholder={t("Enter Postal Code")}
                          onChange={(e) => setPostalCode(e.target.value)}
                          required
                        />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <hr />
                <a href="/shoppingCart" className="btn rounded-0 btn-outline-dark mr-2">{t("Back")}</a>
                <button type="Submit" className="btn rounded-0 btn-outline-dark active" onClick={submitShipping}>{t("Submit")}</button>
                <br /><br />
              </div>
              {/*---------------------------ShippingDetails---------------------------*/}
              <div className="tab-pane" id="Shipping">
                <div className="row">
                  {/*--------------------------- Free ---------------------------*/}
                  <div className="col-lg-4 col-md-12 mb-5">
                    <h4>{t("Free")}</h4><hr className="my-3"/>
                    <p dir="auto" style={{textAlign: 'start'}}>{t("aboutp1")}</p>
                    <div className="radio">
                      <label>
                        <input
                          required
                          type="radio"
                          name="shippingType"
                          id="Free"
                          value="Free"
                          onChange={(e)=> setShippingType(e.target.value)}
                        />
                        <span className="ml-2">{t("Free")}</span>
                      </label>
                    </div>
                  </div>
                  {/*---------------------------Standart---------------------------*/}
                  <div className="col-lg-4 col-md-12 mb-5">
                    <h4>{t("Standard")}</h4><hr className="my-3"/>
                    <p dir="auto" style={{textAlign: 'start'}}>{t("aboutp1")}</p>
                    <div className="radio">
                      <input
                        required
                        type="radio"
                        name="shippingType"
                        id="Standard"
                        value="Standard"
                        onChange={(e)=> setShippingType(e.target.value)}
                      />
                    <span className="ml-2">{t("Standard")} 15{t("$")} </span>
                    </div>
                  </div>
                  {/*--------------------------- Speed ---------------------------*/}
                  <div className="col-lg-4 col-md-12 mb-3">
                    <h4>{t("Speed")}</h4><hr className="my-3"/>
                    <p dir="auto" style={{textAlign: 'start'}}>{t("aboutp1")}</p>
                    <div className="radio">
                      <label>
                        <input
                          required
                          type="radio"
                          name="shippingType"
                          id="Speed"
                          value="Speed"
                          onChange={(e)=> setShippingType(e.target.value)}
                        />
                      <span className="ml-2">{t("Speed")} 35{t("$")}</span>
                      </label>
                    </div>
                  </div>
                </div>
                <hr />
                <a href="/shoppingCart" className="btn rounded-0 btn-outline-dark">{t("Back")}</a>
                <button type="Submit" className="btn rounded-0 btn-outline-dark active ml-2" onClick={submitShippingType}>{t("Submit")}</button>
                <br /><br />
              </div>
              {/*---------------------------PaymentMethod---------------------------*/}
              <div className="tab-pane" id="Payment">
                <div className="row">
                  {/*--------------------------- PayPal ---------------------------*/}
                  <div className="col-lg-4 col-md-12 mb-5">
                    <h4>{t("Pay Pal")}</h4><hr />
                    <p dir="auto" style={{textAlign: 'start'}}>{t("aboutp1")}</p>
                    <div className="radio">
                      <label className="color-active">
                        <input
                        required
                        type="radio"
                        name="paymentType"
                        id="PayPal"
                        value="PayPal"
                        onChange={(e)=> setPaymentType(e.target.value)}
                        />
                        <span className="ml-2">{t("Pay Pal")}</span>
                      </label>
                    </div>
                  </div>
                  {/*---------------------------VisaCard---------------------------*/}
                  <div className="col-lg-4 col-md-12 mb-5">
                    <h4>{t("Visa Card")}</h4>
                    <hr />
                    <p dir="auto" style={{textAlign: 'start'}}>{t("aboutp1")}</p>
                    <div className="radio">
                      <label className="color-active">
                        <input
                          required
                          type="radio"
                          name="paymentType"
                          id="VisaCard"
                          value="VisaCard"
                          onChange={(e)=> setPaymentType(e.target.value)}
                        />
                        <span className="ml-2">{t("Visa Card")}</span>
                      </label>
                    </div>
                  </div>
                  {/*--------------------------- Stripe ---------------------------*/}
                  <div className="col-lg-4 col-md-12 mb-5">
                    <h4>{t("vodafone cash")}</h4>
                    <hr />
                    <p dir="auto" style={{textAlign: 'start'}}>{t("aboutp1")}</p>
                    <div className="radio">
                      <label className="color-active">
                        <input
                          required
                          type="radio"
                          name="paymentType"
                          id="Stripe"
                          value="Stripe"
                          onChange={(e)=> setPaymentType(e.target.value)}
                        />
                        <span className="ml-2">{t("vodafone cash")}</span>
                      </label>
                    </div>
                  </div>
                </div>
                <hr />
                <a href="/shoppingCart" className="btn rounded-0 btn-outline-dark mr-2">{t("Back")}</a>
                <button type="Submit" className="btn rounded-0 btn-outline-dark active" onClick={submitPaymentType}>{t("Submit")}</button>
                <br /><br />
              </div>
              {/*---------------------------OrderReviews---------------------------*/}
              <div className="tab-pane" id="Orders">
                <h4 className="reviewTitle" dir="auto" style={{textAlign: 'start'}}>{t("Orders Review")}</h4>
                <div className="col-md-12">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="hide">{t("Image")}</th>
                        <th className="hide">{t("Product Name")}</th>
                        <th className="hide">{t("Quantity")}</th>
                        <th className="hide nowrap">{t("Unit Price")}</th>
                        <th className="hide">{t("Total")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.cartItems.map((item) => (
                        <tr>
                        <td>
                          <span><img alt="Product Name" src={item.image} /></span>
                        </td>
                        <td>
                          <Link to="/shop">{item.name}</Link>
                        </td>
                        <td>
                          <div className="h5 text-center text-success">{item.qty}</div>
                        </td>
                        <td>
                          <p>${item.price - item.discount}</p>
                          <s className="text-danger">${item.price}</s>
                        </td>
                        <td>${(item.price - item.discount)*item.qty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <hr />
                <a href="/shoppingCart" className="btn rounded-0 btn-outline-dark mr-2">{t("Back")}</a>
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mt-4 pt-4 bg-white text-left text-uppercase bill">
            <div className="block-form block-order-total visible" data-wow-duration="1s" >
              <h3 className="">{t("Total")}</h3><hr />
              <ul className="list-unstyled">
                <li>
                 {t("Sub Total")}<strong className="float-right"> {cart.itemsPrice}{t("$")}</strong>
                </li>
                <li>{t("Shipping Charge")}
                  <strong className="float-right"> {shippingCost}{t("$")}</strong>
                </li>
                <li>
                  {t("Payment Charge")}<strong className="float-right"> {toPrice(cart.itemsPrice * paymentCost)}{t("$")}</strong>
                </li>
                <li>
                 {t( "Promotion Discound")}<strong className="float-right"> 00.00{t("$")}</strong>
                </li>
                <li><hr /></li>
                <li className="color-active">
                  <b>{t("Total")}</b>
                  <strong className="float-right"> {cart.grandPrice}{t("$")}</strong>
                </li>
              </ul>
              <button type="Submit" className="btn rounded-0 btn-outline-dark active w-100 mt-3" onClick={placeOrderHandler}>{t("Place Order")}</button>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Checkout;
