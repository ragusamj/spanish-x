import React from 'react';
import {Link} from 'react-router';


function Home() {
	return (
		<div>
			<Link to="/about">About Spanish-X</Link>|
			<Link to="/learn">Learn more stuff here</Link>
			<section className="header">
				<div className="welcome">
					<h3>welcome to</h3>
					<div className="typewriter">
						<h1>Spanish X</h1>
					</div>
				</div>
			</section>
			<section className="log-in">
				<a href="/auth/google">
					<img src="/assets/btn_google_signin_light_pressed_web.png" />
				</a>
			</section>
		</div>
	)
}

export default Home;