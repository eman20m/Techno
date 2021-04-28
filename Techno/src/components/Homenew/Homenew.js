import "./Homenew.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ProductItem from "../products/productItem/productItem";
import data from '../../data'

import {useTranslation} from 'react-i18next';



const Homenew = () => {
  const products = data.products;

  const {t,i18n} = useTranslation();

  return (
   <div>
  {/* first colums of product */}
  <div className="container-fluid backdround mt-1">
    <div className="row d-flex  mx-4 py-5  d-flex justify-content-center ">
      <div className="col-12 col-sm-12 col-md-8 ">
        <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
          <ul className="carousel-indicators ">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" style={{width: 10, height: 10, borderRadius: '100%'}} />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} style={{width: 10, height: 10, borderRadius: '100%'}} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} style={{width: 10, height: 10, borderRadius: '100%'}} />
          </ul>
          <div className="carousel-inner ">
            <div className="carousel-item active ">
              <img className="img-fluid" src="../assets/Banner/product2.jpg" alt="First slide" height="530px" />
              <div className="text-primary carousel-caption  d-none d-md-block">
              <h1>{t("new")}</h1>
              {/* <h1>New Collection Will Coming</h1>
                <h1>Lenovo 330-15AST Laptop</h1>
                <h4>10% OFF</h4>
              */}
                <h1>{t("lenovo")}</h1>
                <h4>{t("sale")}</h4>

                
                <button type="button" className="btn btn-primary "><a className="text-white "id = "GFG" href="/shop">{t("buy")}</a></button>
              </div>
            </div>
            <div className="carousel-item">
              <img className="img-fluid" src="../assets/Banner/product9.jpeg" alt="Second slide" height="530px" />
              <div className="text-primary carousel-caption d-none d-md-block">
              <h1>{t("new")}</h1>
              <h1>{t("hp")}</h1>

                {/*<h1>HP 15-da2365ne Laptop</h1>*/}
                <h4>{t("sale")}</h4>
                <button type="button" className="btn btn-primary"><a className="text-white "id = "GFG" href="/shop">{t("buy")}</a></button>
              </div>
            </div>
            <div className="carousel-item">
              <img className="img-fluid" src="../assets/Banner/product9.jpeg" alt="Third slide" height="530px" />
              <div className="text-primary carousel-caption d-none d-md-block">
              <h1>{t("new")}</h1>
              <h1>{t("dell")}</h1>
                {/*<h1>DELL 15-3593 Laptop</h1>*/}
                <h4>{t("sale")}</h4>
                <button type="button" className="btn btn-primary homebtn"><a className="text-white "id = "GFG" href="/shop">{t("buy")}</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-0 col-10 col-sm-8 col-md-4 " style={{position: 'relative'}}>
        <div className="card img-fluid hight">
          <img className="img-fluid" src="../assets/Banner/product1.jpg"  alt="Card image" style={{width: '100%'}} />
          <div className="card-img-overlay">
            <h4 className="card-title text-primary bottom-left" dir="auto" style={{textAlign: 'start'}}>{t("dell2")}</h4>
            <p className="card-text text-primary bottom-left1" dir="auto" style={{textAlign: 'start'}}><a className="text-primary "id = "GFG" href="/shop">{t("Browse")}</a></p>
          </div>
        </div>
        <div className="card img-fluid mt-3 hight">
          <img className="img-fluid"  src="../assets/Banner/product215.JPG"  alt="Card image" style={{width: '100%'}} />
          <div className="card-img-overlay">
            <h4 className="card-title text-primary bottom-left"> {t("lenovo2")}</h4>
          <p className="card-text text-primary bottom-left1"><a className="text-primary "id = "GFG" href="/shop">{t("Browse")}</a></p>

          </div>
        </div>
      </div>
    </div>
    <div className="row mt-4 justify-content-md-center">
      <div className="jumbotron jumbotron-fluid" style={{backgroundColor: 'white'}}>
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-2">
              <img src="../assets/Banner/productsix.jpeg" className="img-fluid" style={{width: '100%'}} />
            </div>
            <div className=" col-6 col-sm-6 col-md-2">
              <h5 dir="auto" style={{textAlign: 'start'}}>{t("laptops")}</h5>
              <ul className="typesOfLaps">
                <li dir="auto" style={{textAlign: 'start'}}>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  {t("dell3")}</li>
                <li dir="auto" style={{textAlign: 'start'}}>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  {t("lenovo3")}</li>
                <li dir="auto" style={{textAlign: 'start'}}>
                  <i className="fa fa-angle-right" aria-hidden="true" />
                  {t("acer")}</li>
              </ul>
              
              <a  href="/shop">{t("View all")}
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
              <p />
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <img src="../assets/Banner/rr1.jpg" className="img-fluid" style={{width: '100%'}} />
            </div>
            <div className="col-6 col-sm-6 col-md-2">
            <h5 dir="auto" style={{textAlign: 'start'}}>{t("Mobile")}</h5>
            <ul className="typesOfLaps">
              <li dir="auto" style={{textAlign: 'start'}}>
                <i className="fa fa-angle-right" aria-hidden="true" />
                {t("Sumsung")}</li>
              <li dir="auto" style={{textAlign: 'start'}}>
                <i className="fa fa-angle-right" aria-hidden="true" />
                {t("lenovo3")}</li>
              <li dir="auto" style={{textAlign: 'start'}}>
                <i className="fa fa-angle-right" aria-hidden="true" />
                {t("Huawei")}</li>
            </ul>
              <a href="/shop">{t("View all")}
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </div>
            <div className="col-6 col-sm-6 col-md-2">
              <img src="../assets/Banner/ss.jpg" className="img-fluid " style={{width: '100%'}} />
            </div>
            <div className="col-6 col-sm-6 col-md-2">
            <h5 dir="auto" style={{textAlign: 'start'}}>{t("Smart Screen")}</h5>
            <ul className="typesOfLaps">
              <li dir="auto" style={{textAlign: 'start'}}>
                <i className="fa fa-angle-right" aria-hidden="true" />
                {t("Toshiba")}</li>
              <li dir="auto" style={{textAlign: 'start'}}>
                <i className="fa fa-angle-right" aria-hidden="true" />
                {t("Banasonic")}</li>
              <li dir="auto" style={{textAlign: 'start'}}>
                <i className="fa fa-angle-right" aria-hidden="true" />
                {t("Sumsung")}</li>
            </ul>
              <a href="/shop">{t("View all")}
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  <div class="container-fluid mt-5 ml-4">
    <div class="row justify-content-md-center">
      <h2 className="mb-5">{t("New Arrivals Products")}</h2>
    </div>
    <div class="row">
    {products.slice(products.length - 4, products.length).map((product, index) => {
      return (
        <div className="col-12  col-sm-12 col-md-3" key={index}>
          <ProductItem product={product} />
        </div>
      )
    })}                
    </div>
  </div>
  {/* third colums of products */}
<div className="container-fluid fourth textfourthproduct" style={{marginTop: 100}}>
<div className="row">
  <div className="col-12 col-sm-12 .col-md-12 lookbook">
    <h1 className="top-left2" dir="auto" style={{textAlign: 'start'}}><a className="text-primary "id = "GFG" href="/shop">{t("Checkout our 2021")}</a></h1>
    <h1 className="top-left3" dir="auto" style={{textAlign: 'start'}}>{t("New Collections")} 
    </h1>
  </div>
</div>
</div>
  {/* fourth colums of products */}
  <div className="container-fluid backdround">
    <div className="row justify-content-md-center">
      <h2 className="mt-5 ml-3">{t("Our Product")} </h2>
      {/* style="margin-top:100px;" */}
    </div>
    <div className="row justify-content-md-center">
      <p className="ml-3">{t("categories")}</p>
    </div>
    <div className="gallery">
      <figure className="gallery__item gallery__item--1">
        <img src="../assets/Banner/product9.jpeg" className="gallery__img" alt="Image 1" />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img src="../assets/Banner/product401.jpg" className="gallery__img" alt="Image 2" />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img src="../assets/Banner/product216.jpg" className="gallery__img " alt="Image 3" />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img src="../assets/Banner/product3.jpg" className="gallery__img" alt="Image 4" />
      </figure>
    </div>
  </div>
  <div class="container-fluid mt-5 ml-4">
    <div class="row justify-content-md-center">
      <h2 className="mb-5">{t("discount")}</h2>
    </div>
    <div class="row">
    {products.slice(products.length - 4, products.length).map((product, index) => {
      return (
        <div className="col-12  col-sm-12 col-md-3" key={index}>
          <ProductItem product={product} />
        </div>
      )
    })}                
    </div>
  </div>

  
</div>
  )
}
export default Homenew;
