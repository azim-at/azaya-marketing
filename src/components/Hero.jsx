import PlayIcon from '/play-button.png'

function Hero() {

    return (
        <>
            <section className="hero-section">
                <div className="layer-one"></div>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Content */}
                        <div className="content-column col-lg-7 col-md-12">
                            <div className="inner-column">
                                <h1 className="display-5 fw-bold mb-3 text-white">
                                    Get connected to others. <br /> Just ask{" "}
                                    <span className="text-primary">Topapp</span>
                                </h1>

                                <p className="text-white mb-4">
                                    Access to opportunities for career advancement and <br />
                                    professional growth relies heavily on connections.
                                </p>

                                <div className="newsletter-form mb-3">
                                    <form>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control me-2"
                                                placeholder="Enter your email"
                                                required
                                            />
                                            <button type="submit" className="btn btn-primary px-4">
                                                Take free trial
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <small className="text-white">
                                    *We will send the trial download link to your email address
                                </small>

                                {/* Video Box */}
                                <div
                                    className="video-box mt-4 wow fadeInRight animated"
                                    data-wow-delay="0ms"
                                    data-wow-duration="1500ms"
                                    style={{
                                        visibility: "visible",
                                        animationDuration: "1500ms",
                                        animationDelay: "0ms",
                                        animationName: "fadeInRight",
                                    }}
                                >
                                    <figure className="video-image mb-0 position-relative">
                                        <img
                                            src="https://html.themexriver.com/topapp/images/resource/video.jpg"
                                            alt="Promotional Video"
                                            className="img-fluid"
                                        />
                                        <a
                                            href="#!"
                                            className="lightbox-image overlay-box position-absolute top-50 start-50 translate-middle text-white"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="ripple">
                                                    <i class="fa-regular fa-circle-play"></i>
                                            </i>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Carousel */}
                        <div className="carousel-column col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="slider-outer position-relative">
                                    {/* Mobile Frame */}
                                    <div
                                        className="slides-box position-relative"
                                        style={{
                                            backgroundImage: "url(https://html.themexriver.com/topapp/images/resource/mobile.png)",
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center",
                                            height: "600px",
                                        }}
                                    >
                                        <div className="inner-box d-flex justify-content-center align-items-center h-100">
                                            <div className="banner-slider">
                                                <img
                                                    src="https://html.themexriver.com/topapp/images/resource/search.png"
                                                    alt="App Screenshot 1"
                                                    className="img-fluid rounded-3"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
