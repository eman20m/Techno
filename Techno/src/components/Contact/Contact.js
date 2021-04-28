import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="container table pt-5">
        <div className="row" >
          <div className="col-lg-5 col-sm-12 col-md-12 info">
            <i className="fas fa-quote-left"></i>
           <h2 dir="auto">
           {t("question0")}
</h2>

            <p dir="auto">
             {t("question")}
            </p>
            <p dir="auto">
            {t("question2")}
            </p>
            </div>
          <div className="col-lg-7 col-sm-12 col-md-12">
            <div className="contact">
              <form action="" className="contact-form ">
                <h1 className="contact-heading">{t("contact us")}</h1>
                <div className="input-group">
                  <label dir="auto" style={{textAlign: 'start'}}  >{t("full name")}</label>
                  <input  dir="auto" style={{textAlign: 'start'}} type="text" className="contact-input  "/>

                </div>
                <div className="input-groups emaildisplay" >
                  <div className="input-group">
                    <label dir="auto" style={{textAlign: 'start'}}>{t("email *")}</label>
                    <input  dir="auto" style={{textAlign: 'start'}} type="email" className="contact-input"  />
                  </div>
                  <div className="input-group">
                    <label>{t("phone*")}</label>
                    <input type="text" className="contact-input"  />
                  </div>
                </div>
                <div className="input-group">
                  <label>{t("Message*")}</label>
                  <textarea cols="30"rows="10"className="form-textarea"></textarea>
                </div>
                <input type="submit" value={t("submit")} className="form-btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid contactBody">
        <div className="row address">
          <div className="col-12 my-auto px-4">
            <div>
              <h2 className="mb-3">{t("Egypt")}</h2>
            </div>
            <div>
              <div className="row">
                <div className="col-4">
                  <i className="fas fa-map-marked-alt"></i>
                  <div className="addrText trans">
                    <h5 dir="auto">{t("add")}</h5>
                    <p dir="auto">{t("ADDRESS")}</p>
                  </div>
                </div>
                <div className="col-4 flex">
                  <i className="fas fa-mobile-alt ml-3"></i>
                  <div className="addrText trans">
                    <h5 >{t("phone*")}</h5>
                    <p dir="auto">+(002) 01143764536</p>
                  </div>
                </div>
                <div className="col-4 flex">
                  <i className="far fa-envelope"></i>
                  <div className="addrText">
                    <h5>{t("email *")}</h5>
                    <p >Techno@website.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row address">
          <div className="col-12 my-auto px-4">
            <div>
              <h2 className="mb-3">{t("Egypt")}</h2>
            </div>
            <div>
              <div className="row">
                <div className="col-4">
                  <i className="fas fa-map-marked-alt"></i>
                  <div className="addrText trans">
                    <h5 dir="auto">{t("add")}</h5>
                    <p dir="auto">{t("ADDRESS2")}</p>
                  </div>
                </div>
                <div className="col-4 flex">
                  <i className="fas fa-mobile-alt ml-3"></i>
                  <div className="addrText trans">
                    <h5>{t("phone*")}</h5>
                    <p dir="auto">+(002) 01143764536</p>
                  </div>
                </div>
                <div className="col-4 flex">
                  <i className="far fa-envelope"></i>
                  <div className="addrText">
                    <h5>{t("email *")}</h5>
                    <p>Techno@website.com</p>
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
export default Contact;
