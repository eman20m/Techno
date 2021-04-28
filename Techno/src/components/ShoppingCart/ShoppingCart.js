import "./ShoppingCart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/actions/cartActions';
import Rating from '../Rating/Rating';
import {useTranslation} from 'react-i18next';

const ShoppingCart = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) { dispatch(addToCart(productId, qty)) }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => { dispatch(removeFromCart(id)); };

  const checkoutHandler = () => { props.history.push('/signin?redirect=checkout'); };

  const {t,i18n} = useTranslation();
  return (
    <>
      <section className="jumbotron text-white text-center header-section">
        <div className="container col-lg-5 col-md-6 col-sm-8 col-9 py-4 bg-white text-center myBorder">
          <h1 className="mb-3 text-dark">{t("Shopping Cart")}</h1>
          <div className="msg">{t("Missed something ?")}
            <a href="/shop" className="text-secondary"> {t("Continue shopping")}</a>
          </div>
        </div>
      </section>

      {cart.cartItems.length === 0 ? (
        <div className="container my-5 text-left">
          <h4 dir="auto" style={{textAlign: 'start'}}>{t("Shopping Cart")} (0)</h4>
          <div className="py-3 bg-warning px-4">
            <p className="mb-2" dir="auto" style={{textAlign: 'start'}}>{t("missed")}</p>
            <p dir="auto" style={{textAlign: 'start'}}> {t("item")}<Link id="GFG" className="text-body" to="/shop" dir="auto" style={{textAlign: 'start'}}>{t("Continue shopping")}</Link></p>

          </div>
        </div>
        ) : (
        <ul>
          {cart.cartItems.map((item) => (
            <div className="container p-0 mt-4">
              <div className="row bg-white Cart_Row">
                <div className="col-md-2 col-6 border-right p-0">
                  <img src={item.image} className="cart_img" />
                </div>
                <div className="my-auto col-md-2 col-6 text-left text-center">
                  <p><a href="/details" className="product_name">{item.name}</a></p>
                </div>
                <div className="col-md-8 col-12 row pr-0 my-auto">
                  <div className="my-auto col-3 my-1">
                    <span className="item_header text-center mr-3">Price</span>
                    <span className="price mb-0 text-center">{item.price}$</span>
                  </div>
                  <div className="my-auto col-5 my-1">
                    <span className="item_header mr-3">Quantity</span>
                    <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      ))}
                    </select>
                  </div>
                  <div className="my-auto col-4 my-1">
                    <p className="item_header mb-1">Order Total</p>
                    <span className="price">{item.price * item.qty}$</span>
                  </div>
                  <div className="col-12 row p-0 mt-3 mx-auto">
                    <Rating rating={item.rate} numReviews={item.review}></Rating>
                    <a className="col-4 p-0 text-danger ml-5" style={{cursor:'pointer'}} onClick={() => removeFromCartHandler(item.product)}>
                      Remove from cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}

      <div className="row discount_section bg-light Cart_Row py-0">
        <div className="col-md-6 pt-3 text-left bg-white">
          <h4 dir="auto" style={{textAlign: 'start'}}>{t("DISCOUNT CODES")}</h4>
          <p dir="auto" style={{textAlign: 'start'}}>{t("Enter your coupon code if you have one.")}</p>
          <div className="form-group">
            <input dir="auto" style={{textAlign: 'start'}} type="text" placeholder={t("Apply Coupon")} className="form-control" name="name"  />
            <button dir="auto" style={{textAlign: 'start'}} className="btn rounded-0 btn-outline-dark mt-2 mr-3" type="button">{t("Apply Coupon")}</button>
            <button dir="auto" style={{textAlign: 'start'}} className="btn rounded-0 btn-outline-dark mt-2" type="button" onClick={checkoutHandler}>{t("proceed to Checkout")}</button>
          </div>
        </div>
        <div className="col-md-6 pt-4 bg-dark">
          <div className="row text-white">
            <div className="col-6 py-2" dir="auto" style={{textAlign: 'start'}}><span>{t("Subtotal")}</span></div>
            <div className="col-6 py-2"><span>{cart.cartItems.reduce((a, c) => a + (c.price * c.qty), 0)}</span></div>
            <div className="col-6 py-4" dir="auto" style={{textAlign: 'start'}}><span>{t("Discount")}</span></div>
            <div className="col-6 py-4" ><span>{t("$")}{cart.cartItems.reduce((a, c) => a + (c.discount * c.qty), 0)}</span></div>
            <div className="col-6 py-2" dir="auto" style={{textAlign: 'start'}}><span>{t("Grand Total")}</span></div>
            <div className="col-6 py-2"><span>{t("$")}{cart.cartItems.reduce((a, c) => a + (c.price - c.discount) * c.qty, 0)}</span></div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ShoppingCart;
