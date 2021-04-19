import React from 'react';
import './Slider.scss';

export default function Slider() {
	return (
		<div className="slider">
			<div className="logo">SOUNDNEXT</div>
			<div id="carouselExampleCaptions" className="carousel">
				{/* data-ride="carousel" */}
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active" />
					<li data-target="#carouselExampleCaptions" data-slide-to="1" />
					<li data-target="#carouselExampleCaptions" data-slide-to="2" />
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="img/slider/slider1.png" className="d-block w-100 carusel-image" alt="slider1" />
						<div className="carousel-caption d-md-block">
							<div className="container">
								<div className="row">
									<div className="col-md-12 d-flex align-items-center">
										<h2 className="slider-title">WELCOME TO SOUND NEXT</h2>
									</div>
								</div>
								<div className="row">
									<div className="col-md-7">
										<button className="cross">
											<img src="img/artist_cover/cross.png" alt="slider2" />
										</button>
										<div className="slider-section">
											<h6>
												THERE IS A <span className="font-weight-bold">NEW WAY</span> TO LEARN
												MUSIC
											</h6>
											<p className='title-light'>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ligula
												lacinia, semper ligula in, suscipit ex.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<img src="img/slider/slider2.png" className="d-block w-100 carusel-image" alt="slider2" />
						<div className="carousel-caption d-md-block slider2">
							<div className="container">
								<div className="row">
									<div className="col-md-5 offset-md-7 text-right">
										<h2>CHOOSE ONE OF OUR PLANS</h2>
										<h2 className="title-light">VIP.PREMIUM AND ONE</h2>
									</div>
								</div>
								<div className="row">
									<div className="col-md-5 text-left">
										<h1 className="title-light">
											{' '}
											180€<span className="blue-color ml-3">VIP PASS</span>
										</h1>

										<h4>UNLEASH DE POWERF UNLIMITED LEARNING</h4>
										<h4>
											SPECIAL TIME <span className="font-weight-light">OFFER. *</span>
										</h4>
										<p className='title-light'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ligula
											lacinia, semper ligula in, suscipit ex.
										</p>
										<a href="#" className="blue-color">
											SEE ALL THE PLANS
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<img src="img/slider/slider3.png" className="d-block w-100 carusel-image" alt="slider3" />
						<div className="carousel-caption d-md-block slider3">
							<div className="container">
								<div className="row">
									<div className="col-md-5 text-left">
										<h2>NEW CLASS BY</h2>
										<h2 className="title-light">EDU IMBERNÓN</h2>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6 mt-3 offset-md-4 text-left">
										<h6>DJ & DEEP HOUSE PRODUCTION</h6>
										<p className='title-light'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ligula
											lacinia, semper ligula in, suscipit ex.
										</p>
										<a href="#" className="blue-color">
											DISCOVER
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
