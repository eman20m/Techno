import "./About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column mb-5 section">
        <div className="container">
          <div className="my-5 text-center text-white ">
            <h1>{t("About our company")}</h1>
            {/*<p>Filling the home with High quality Electronic products</p>*/}
            <p>{t("quality")}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="experience my-5">
              {/*<p className="pre-title m-0 small-text text-muted">
                30 years of excellent
  </p>*/}
              <h2 dir="auto" style={{textAlign: 'start'}}>{t("about")}</h2>
              <div className="details">
                <p  dir="auto" style={{textAlign: 'start'}} className="detail ml-0 mr-3 my-4">{t("aboutp1")}</p>
                <p dir="auto" style={{textAlign: 'start'}} className="detail ml-0 mr-3 my-4">{t("aboutp2")}</p>
                <p dir="auto" style={{textAlign: 'start'}} className="detail ml-0 mr-3 my-4">
                  <ul dir="auto" style={{textAlign: 'start'}}>
                    {t("aboutvalues")}
                    <li dir="auto" style={{textAlign: 'start'}}>{t("aboutv1")}</li>
                    <li dir="auto" style={{textAlign: 'start'}}>{t("aboutv2")}</li>
                    <li dir="auto" style={{textAlign: 'start'}}>{t("aboutv3")}</li>
                    <li dir="auto" style={{textAlign: 'start'}}>{t("aboutv4")}</li>
                    <li dir="auto" style={{textAlign: 'start'}}>{t("aboutv5")}</li>

                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="experience-image px-4">
              <img className="img-fluid" src="./assets/About/1.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio py-5">
        <div className="container my-5">
          <div className="row my-4">
            <div className="col-md-4">
              <div
                className="portfolio-image m-2"
                data-toggle="modal"
                data-target="#modal1"
              >
                <img className="img-fluid" src="./assets/About/1.png" />
                <div className="image-container d-flex justify-content-center align-items-center">
                  <i className="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="modal1"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <button
                type="button"
                className="close text-white"
                aria-label="Close"
                data-dismiss="modal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-dialog modal-dialog-centered">
                <img className="img-fluid" src="./assets/About/2.jpg" />
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="portfolio-image m-2"
                data-toggle="modal"
                data-target="#modal2"
              >
                <img className="img-fluid" src="./assets/About/2.jpg" />
                <div className="image-container d-flex justify-content-center align-items-center">
                  <i className="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="modal2"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <button
                type="button"
                className="close text-white"
                aria-label="Close"
                data-dismiss="modal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-dialog modal-dialog-centered">
                <img className="img-fluid" src="./assets/About/3.jpg" />
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="portfolio-image m-2"
                data-toggle="modal"
                data-target="#modal3"
              >
                <img className="img-fluid" src="./assets/About/3.jpg" />
                <div className="image-container d-flex justify-content-center align-items-center">
                  <i className="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="modal3"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <button
                type="button"
                className="close text-white"
                aria-label="Close"
                data-dismiss="modal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-dialog modal-dialog-centered">
                <img className="img-fluid" src="./assets/About/4.jpg" />
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-4">
              <div
                className="portfolio-image m-2"
                data-toggle="modal"
                data-target="#modal4"
              >
                <img className="img-fluid" src="./assets/About/4.jpg" />
                <div className="image-container d-flex justify-content-center align-items-center">
                  <i className="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="modal4"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <button
                type="button"
                className="close text-white"
                aria-label="Close"
                data-dismiss="modal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-dialog modal-dialog-centered">
                <img className="img-fluid" src="./assets/About/5.jpg" />
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="portfolio-image m-2"
                data-toggle="modal"
                data-target="#modal5"
              >
                <img className="img-fluid" src="./assets/About/5.jpg" />
                <div className="image-container d-flex justify-content-center align-items-center">
                  <i className="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="modal5"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <button
                type="button"
                className="close text-white"
                aria-label="Close"
                data-dismiss="modal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-dialog modal-dialog-centered">
                <img className="img-fluid" src="./assets/About/6.jpg" />
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="portfolio-image m-2 m-2"
                data-toggle="modal"
                data-target="#modal6"
              >
                <img className="img-fluid" src="./assets/About/6.jpg" />
                <div className="image-container d-flex justify-content-center align-items-center">
                  <i className="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="modal6"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <button
                type="button"
                className="close text-white"
                aria-label="Close"
                data-dismiss="modal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-dialog modal-dialog-centered">
                <img className="img-fluid" src="./assets/About/7.jpg" />
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-4">
              <div
                className="portfolio-image m-2"
                data-toggle="modal"
                data-target="#modal7"
              >
                <img className="img-fluid" src="./assets/About/7.jpg" />
                <div className="image-container d-flex justify-content-center align-items-center">
                  <i className="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="modal7"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <button
                type="button"
                className="close text-white"
                aria-label="Close"
                data-dismiss="modal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-dialog modal-dialog-centered">
                <img className="img-fluid" src="./assets/About/10.jpg" />
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="portfolio-image m-2"
                data-toggle="modal"
                data-target="#modal8"
              >
                <img className="img-fluid" src="./assets/About/10.jpg" />
                <div className="image-container d-flex justify-content-center align-items-center">
                  <i className="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="modal8"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <button
                type="button"
                className="close text-white"
                aria-label="Close"
                data-dismiss="modal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-dialog modal-dialog-centered">
                <img className="img-fluid" src="./assets/About/9.jpg" />
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="portfolio-image m-2"
                data-toggle="modal"
                data-target="#modal9"
              >
                <img className="img-fluid" src="./assets/About/9.jpg" />
                <div className="image-container d-flex justify-content-center align-items-center">
                  <i className="fa fa-plus fa-4x text-white" id="plus"></i>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="modal9"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <button
                type="button"
                className="close text-white"
                aria-label="Close"
                data-dismiss="modal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-dialog modal-dialog-centered">
                <img className="img-fluid" src="./assets/About/8.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="founder-details my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="experience-image pr-5">
                <img className="img-fluid pr-5" src="./assets/About/8.jpg" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="experience ml-2 pl-2 my-2">
                
              <h2 dir="auto" style={{textAlign: 'start'}}>{t("about")}</h2>
                <div className="details">
                <p className="detail ml-0 mr-3 my-4" dir="auto" style={{textAlign: 'start'}}>{t("aboutp1")}</p>

                <p className="detail ml-0 mr-3 my-4" dir="auto" style={{textAlign: 'start'}}>{t("aboutp2")}</p>

                 
                  <p className="detail ml-0 mr-3 my-4">
                  <ul dir="auto" style={{textAlign: 'start'}}>
                    {t("aboutvalues")}
                    <li dir="auto" style={{textAlign: 'start'}}>{t("aboutv1")}</li>
                    <li dir="auto" style={{textAlign: 'start'}}>{t("aboutv2")}</li>
                    <li dir="auto" style={{textAlign: 'start'}}>{t("aboutv3")}</li>
                    <li dir="auto" style={{textAlign: 'start'}}>{t("aboutv4")}</li>
                    <li dir="auto" style={{textAlign: 'start'}}>{t("aboutv5")}</li>

                  </ul>
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
