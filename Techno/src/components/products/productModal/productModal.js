import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProducts } from "../../../store/actions/ProductActions";
import LoadingBox from "../../LoadingBox";
import MessageBox from "../../MessageBox";
import Rating from "../../Rating/Rating";
import { useTranslation } from "react-i18next";

export default function ProductModal(props){
  const { product }  = props;
  const productId=product?._id;
  console.log(product);
  const [counter, setCounter] = useState(1);
  const increment =()=> {setCounter(counter +1)};
  const decrement =()=> { counter > 1? setCounter(counter -1):setCounter(counter)};
  const { t, i18n } = useTranslation();

  return(
    <>
      <div className="modal fade myModal" id="myModal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <div className="modal-body">
              <div className="container">
                <div className="row d-flex align-items-center mt-4 mb-4">
                  <div className="col-6 col-sm-12 col-lg-6 justify-content-center" style={{justifyContent:'center'}}>
                    <div id="myCarousel" className="carousel slide">
                      {/* <!-- slides --> */}
                      <div className="carousel-inner">
                        <div className="carousel-item active"> <img src={product?.image}/> </div>
                        <div className="carousel-item"> <img src={product?.image}/> </div>
                        <div className="carousel-item"> <img src={product?.image}/> </div>
                        <div className="carousel-item"> <img src={product?.image}/> </div>
                        <div className="carousel-item"> <img src={product?.image}/> </div>
                        <div className="carousel-item"> <img src={product?.image}/> </div>
                      </div>
                      <ol className='carousel-indicators'>
                        <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
                        <li data-target='#myCarousel' data-slide-to='1'></li>
                        <li data-target='#myCarousel' data-slide-to='2'></li>
                        <li data-target='#myCarousel' data-slide-to='3'></li>
                        <li data-target='#myCarousel' data-slide-to='4'></li>
                        <li data-target='#myCarousel' data-slide-to='5'></li>
                      </ol>
                      {/* <!-- Controls --> */}
                      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="fas fa-chevron-left"></span>
                      </a>
                      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="fas fa-chevron-right"></span>
                      </a>
                    </div>
                  </div>
                  <div className="sPart col-6 col-sm-12 col-lg-6">
                    <div className="home">
                      <h1 style={{fontSize: '25px', color: 'black'}}>
                        {product.name.toUpperCase()},{(i18n.language == "en") ? product.category.toUpperCase() : product.categoryAr}</h1>
                      <Rating className="view" rating={product.rating} numReviews={product.numReviews}>
                      </Rating>
                      <h2 style={{fontSize: '24px', fontWeight: '500', color: 'black'}}>${product.price-product.discount}</h2>
                      <p>
                        {product.description}
                      </p>
                    </div>
                    <div id="addTo">
                      <a className="is-minus" onClick={decrement}>-</a>
                      <input className="quantity-input" type="text" value={counter}/>
                      <a className="quantity-button is-plus" onClick={increment}>+</a>
                      <Link className="btnCard btn btn-primary" to={`/shoppingCart/${productId}?qty=${counter}`}>
                        <div>ADD TO CARD</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
