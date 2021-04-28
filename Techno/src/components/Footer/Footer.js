import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

const Footer = () => {
  const {t,i18n} = useTranslation();
  return (
    <>
      <footer className="bg-white">
        <hr className="m-0" />
        <div className="py-5  First_Section">
          <h4 className="text-center pt-5 pb-3">
          {t("Newsletter")}
          </h4>
          <div className="text-center pb-5">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control dir="auto" style={{textAlign: 'start'}} type="email" placeholder={t("email *")}className="inputwidth d-inline" />
                <Button variant="primary" type="submit" className="ml-3 mybtn">{t("Subscribe")}</Button>
              </Form.Group>
            </Form>
          </div>
        </div>
        <hr className="m-0" />
        <div className="row w-100 pt-4 pb-2 leftPadding mx-0">
          <div className="col-md-4 d-flex px-4 ">
            <div className="pr-3">
              <i className="fas fa-history awesome"></i>
            </div>
            <div>
              <h6 className="mb-2" style={{textAlign: 'start'}}>{t("Easy return")}</h6>
              <p className="footerText" dir="auto" style={{textAlign: 'start'}}>
            { t( "day")}
                </p>
            </div>
          </div>
          <div className="col-md-4 d-flex px-5">
            <div className="pr-3">
              <i  className="fas fa-globe awesome"></i>
            </div>
            <div>
              <h6 className="mb-2" dir="auto" style={{textAlign: 'start'}}>{t("shipping")}</h6>
              <p className="footerText" dir="auto" style={{textAlign: 'start'}}>
                 {t("order")}
                </p>
            </div>
          </div>
          <div className="col-md-4 d-flex  px-4">
            <div className="pr-3">
              <i className="fas fa-credit-card awesome"></i>
            </div>
            <div>
              <h6 className="mb-2">{t("Secure payment")}</h6>
              <p className="footerText" dir="auto" style={{textAlign: 'start'}}>
              {t("Encryption")}
                </p>
            </div>
          </div>
        </div>
        <div className="row w-100 leftPadding bg-light mx-0">
          <div className="col-md-4 footer-padding pl-4">
            <h3 className="mb-4" >{t("Techno")}</h3>
            <div className="footerText">
              <p className="mb-0">{t("ADDRESS")}</p>
              <p className="mb-0">{t("ADDRESS2")}</p>
              <p className="mb-0"> +6281 234 567</p>
              <p>Techno@website.com</p>
            </div>
            <div>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="mr-3 fas fa-instagram awesome"></i>
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="mr-3 fas fa-facebook-f awesome"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <i className="mr-3 fas fa-youtube awesome"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <i className="mr-3 fas fa-linkedin awesome"></i>
              </a>
            </div>
          </div>
          <div className="col-md-2 footer-padding">
            <h6 className="mb-3 font-weight-bold pt-3">{t("Company")}</h6>
            <a className="mb-2 text-decoration-none d-block text-dark" href="/about">{t("about")}</a>
            <a className="mb-2 text-decoration-none d-block text-dark" href="/contact">{t("Contact")}</a>
          </div>
          <div className="col-md-3 footer-padding">
            <h6 className="mb-3 font-weight-bold pt-3">{t("Category")}</h6>
            <a className="mb-2 text-decoration-none d-block text-dark" href="/">{t("Computer pc")}</a>
            <a className="mb-2 text-decoration-none d-block text-dark" href="/">{t("laptops")}</a>
            <a className="mb-2 text-decoration-none d-block text-dark" href="/">{t("Accessories")}</a>
            <a className="mb-2 text-decoration-none d-block text-dark" href="/">{t("Smart screen")}</a>
          </div>
          <div className="col-md-3 footer-padding">
            <h6 className="mb-3 font-weight-bold pt-3">{t("Get Our Store App")}</h6>
            <p>
              <img src="../assets/google.png" className="logo" />
            </p>
            <p>
              <img src="../assets/apple.png" className="logo" />
            </p>
          </div>
        </div>
        <hr className="my-0 lastSection" />
        <div className="row bg-light pt-3 pb-5 w-100">
          <div className="lastSection container">
            <span className="text-muted pr-3">{t("All rights reserved.")} </span>
          {/*}  <span className="text-muted pr-3">Privacy Policy</span>
  <span className="text-muted pr-3">Term Of Service</span>*/}
            <span className="text-muted ">{t("Made in Egypt")}</span>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
