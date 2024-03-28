import React, { useEffect, useState } from 'react'
import { NetworkErrorcompo } from '../NetworkErrorcompo';
import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';

export const About = () => {
    // start code for a error page
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);
  // end code for a error page
    return (
        <div>
            <Navbar />
      {isOnline ? (
            <div>
            {/* Page Header Start */}
            <div className="page-header Aimage">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>About Us</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Header End */}
            {/* About Start */}
            <div className="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                <img src="image/header-bg-img/experiance.jpg" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <p>About Us</p>
                                <h2>25 Years Experience</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    <strong>Experienced Staff</strong>: A salon with a long history
                                    would likely have a team of skilled and experienced professionals,
                                    including hairstylists, colorists, estheticians, and other beauty
                                    specialists.
                                </p>
                                <p>
                                    <strong> Wide Range of Services </strong>: Over the years, the
                                    salon may have expanded its services to offer a comprehensive
                                    range of beauty treatments. This could include haircuts, styling,
                                    coloring, facials, manicures, pedicures, waxing, and more.
                                </p>
                                <p>
                                    <strong>Clientele and Reputation</strong>: A salon that has been
                                    in business for 25 years may have a loyal clientele base and a
                                    positive reputation within the community. Customer reviews and
                                    testimonials can provide insights into the salon's quality of
                                    service.beauty industry. A salon with a long history may have
                                    demonstrated its ability to stay current and incorporate new
                                    techniques and styles.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
           
        </div>
            ) : (
        <NetworkErrorcompo />
      )}
      <Footer />
    </div>
        
    )
}