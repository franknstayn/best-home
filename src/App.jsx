// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "./components/Navbar";
import img2 from "./assets/img-2.png";
import logo from "./assets/logo.svg";
// import mailImg from "./assets/mail.png";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>

      <section className="header-bg" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-header">
                <h1>
                  Best Home Care,
                  <br />
                  for the Best
                </h1>

                <p>
                  It's at home where your loved ones quality of life is
                  enchanced without stressed of interrupted routines and changes
                  in daily habits. Best Home Care is a non-medical home care
                  services company focused on caring for your loved ones in the
                  comport of their home.
                </p>

                <div className="header-actions">
                  <button className="btn btn-header btn-lg">Our Service</button>
                  <button className="btn btn-header btn-lg">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission" id="mission">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mission-header">
              {/* <div className=""> */}
              <h2>"Delivering the Best Care right in your Home"</h2>
              {/* </div> */}
            </div>

            <div className="col-lg-5 d-flex justify-content-center">
              <div className="px-3 pb-5">
                <img
                  src={img2}
                  height="500"
                  className="img-fluid"
                  alt="mission-img"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mission-right-wrapper">
                <div className="section-title">
                  <h3 className="p-0 m-0">Our Dedication</h3>
                  <div className="horizontal-divider"></div>
                </div>

                <p>
                  To be the Best Home Care provided through our commitment to
                  excellence.
                </p>
                <p>
                  To provide affordable quality home care with customized serve.
                </p>

                <p>
                  We firmly believe in giving our clients their sense of
                  security and peace of mind while living in the privacy of
                  their home.
                </p>

                <p>
                  The Best Home Care Services, Inc. is an Equal Opportunity
                  Employer.
                </p>

                <div className="py-3">
                  <div className="row">
                    <div className="col-6">
                      <h4>Assisting With:</h4>
                      <ul>
                        <li>Eating</li>
                        <li>Grooming</li>
                        <li>Bathing</li>
                        <li>Icontinence</li>
                        <li>Cognitive Impairment</li>
                        <li>Mobility</li>
                      </ul>
                    </div>

                    <div className="col-6">
                      <h4>Our Staff is:</h4>
                      <ul>
                        <li>Carefully screened</li>
                        <li>Bonded & Insured</li>
                        <li>Drug Screened</li>
                        <li>Hippa Regulation Complaint</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center pb-5">
                    <h3 className="p-0 m-0">Our Services Include</h3>
                    <div className="horizontal-divider center"></div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title border-bottom text-center">
                        Companionship
                      </h5>
                      <ul className="service-list">
                        <li>Offer elderly companionship and conversations.</li>
                        <li>Provide respite care</li>
                        <li>Monitor diet and eating</li>
                        <li>Assist with entertaining.</li>
                        <li>Plan visits, outings and trips</li>
                        <li>And more.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title border-bottom text-center">
                        Home Helper
                      </h5>
                      <ul className="service-list">
                        <li>Provide Alzheimer's care</li>
                        <li>Assist with laundry and ironing</li>
                        <li>Take out garbage</li>
                        <li>Provide medication reminder</li>
                        <li>Aid with reading</li>
                        <li>Escort for shopping and errands</li>
                        <li>Personal service</li>
                        <li>24 Hour Care</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="text-center">  


                    <h1>
                      Our Services Included
                    </h1>


                    <div>

                      <table className="services-table"> 

                        <thead>
                          <tr>
                            <td></td>
                            <td>/td>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>

                            <td></td>
                            <td></td>
                          </tr>

                          <tr>
                            <td></td>
                            <td></td>
                          </tr>

                          <tr>
                            <td></td>
                            <td></td>
                          </tr>

                          <tr>
                            <td></td>
                            <td></td>
                          </tr>

                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>.</td>
                            <td>Change linen</td>
                          </tr>

                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>/td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>/td>
                          </tr>
                        </tbody>
                      </table>

                    </div>
                  </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us p-0" id="contact">
        <div className="row p-0 m-0">
          <div className="col-lg-6 p-0 m-0 cs-left"></div>
          <div className="col-lg-6 d-flex justify-content-center cs-right">
            <div className="">
              <div className="cs-logo">
                <img src={logo} alt="" height="80" />
                <div className="cs-logo-name">
                  Best Home Care
                  <br />
                  Services, Inc.
                </div>
              </div>

              <div className="cs-details">
                <p>M - F: 9:00 AM - 5:00 PM</p>

                <div className="d-flex justify-content-center gap-5">
                  <p>
                    <i className="bi bi-telephone-fill"></i> 630.739.1000
                  </p>
                  <p>
                    <i className="bi bi-printer-fill"></i> 630.231.1515
                  </p>
                </div>

                <div className="mb-3">
                  <p>
                    <i className="bi bi-envelope-fill"></i>
                    <a href="mailto:aurora.garcia@besthomeservices.net">
                      AURORA.GARCIA@BESTHOMECARESERVICES.NET
                    </a>
                  </p>
                </div>
                <div className="mb-3">
                  <p>
                    <i className="bi bi-globe"></i>
                    www.besthomecareservices.net
                  </p>
                </div>
                <div className="mb-3">
                  <p>
                    <i className="bi bi-geo-alt-fill"></i>
                    1281 Humbracht Cirle,
                    <br />
                    Suite J<br />
                    Bartlett, IL 60103
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="contact-us-form px-0">
        <div className="contact1">
          <div className="container-contact1">
            <div className="contact1-pic js-tilt" data-tilt>
              <img src={mailImg} alt="IMG" />
            </div>

            <form className="contact1-form validate-form">
              <span className="contact1-form-title">Get in touch</span>

              <div
                className="wrap-input1 validate-input"
                data-validate="Name is required"
              >
                <input
                  className="input1"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <span className="shadow-input1"></span>
              </div>

              <div
                className="wrap-input1 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input1"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <span className="shadow-input1"></span>
              </div>

              <div
                className="wrap-input1 validate-input"
                data-validate="Subject is required"
              >
                <input
                  className="input1"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
                <span className="shadow-input1"></span>
              </div>

              <div
                className="wrap-input1 validate-input"
                data-validate="Message is required"
              >
                <textarea
                  className="input1"
                  name="message"
                  placeholder="Message"
                ></textarea>
                <span className="shadow-input1"></span>
              </div>

              <div className="container-contact1-form-btn">
                <button className="contact1-form-btn">
                  <span>
                    Send Email
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}

      <footer>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-9">
              <div className="footer">
                <p>
                  Best Home Services, Inc. - All right reserved &copy;{" "}
                  {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
