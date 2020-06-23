import React, { Component } from 'react';
import M from 'materialize-css';
import { Carousel } from 'react-materialize';
import Londres from './assets/londres.jpg';
import Florenca from './assets/florenca.jpg';
import Paris from './assets/paris.jpg';

class Landing extends Component {
	componentDidMount() {
		const options = {
			duration: 300,
			onCycleTo: () => {
				console.log('New Slide');
			},
		};
		M.Carousel.init(this.Carousel, options);
	}
	render() {
		return (
			<Carousel
				carouselId="Carousel-2"
				className="white-text center"
				options={{
					fullWidth: true,
					indicators: true,
				}}
			>
				<div className="purple">
					<h2>O seu Site de Viagens</h2>
					<p>Faça seu login com google e escolha sua viagem</p>
					<img src={Londres} alt="londres" />
				</div>
				<div className="purple">
					<h2>O seu Site de Viagens</h2>
					<p>Escolha e agende voos, hoteis e passeios</p>
					<img src={Paris} alt="paris" />
				</div>
				<div className="purple">
					<h2>O seu Site de Viagens</h2>
					<p>Tudo num lugar só pra facilitar sua viagem</p>
					<img src={Florenca} alt="florenca" />
				</div>
			</Carousel>
		);
	}
}
export default Landing;
