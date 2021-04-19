import React from 'react';
import './Artist.scss';

export default function Artist() {
	return (
		<div className="container-fluid artist">
			<div className="row">
				<div
					className="col-md-6 artist-section-name"
					style={{ background: 'url(img/artist_cover/background-artist.png)' }}
				>
					<img className='play' src="img/artist_cover/LOGO_PLAYOUTLINE.png" alt="play" />
					<div className="artist-section-name-text">
						<img className='logo-sound' src="img/artist_cover/LOGO SOUNDNEXT copia.png" alt="sounnext" />
						<h6>EXCLUSIVE MASTERCLASS</h6>
						<h2>LUCAS VIDAL</h2>
						<h2 className='title-light'>FILM SCORING</h2>
						<h6>
							DISCOVER IT <a href="#" className='link'>HERE</a>
						</h6>
					</div>
					<button className="cross">
						<img className="w-100" src="img/artist_cover/cross.png" alt="cross" />
					</button>
				</div>
				<div className="col-md-6">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<img className="face-artist" src="img/artist_cover/artist-face.png" alt="face" />
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div
									className="img-cover"
									style={{ backgroundImage: "url('img/artist_cover/film2.png')" }}
								/>
							</div>
							<div className="col-md-6">
								<div
									className="img-cover"
									style={{ background: "url('img/artist_cover/film1.png')" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
