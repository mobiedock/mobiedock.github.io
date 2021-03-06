import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardDeck, CardFooter } from 'reactstrap';
import { Container } from 'react-bootstrap';
import './TeamCards.css';

import emily from '../images/team-imgs/emily.jpeg';
import nico from '../images/team-imgs/nico.jpeg';
import ben from '../images/team-imgs/ben.jpeg';
import andre from '../images/team-imgs/Andre.jpeg';
import billy from '../images/team-imgs/billy.jpeg';
import charity from '../images/team-imgs/charity.jpeg';
import masaki from '../images/team-imgs/masaki.jpeg';
import matt from '../images/team-imgs/matt.jpeg';
import alex from '../images/team-imgs/alex.jpeg';
import ahmad from '../images/team-imgs/ahmad.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import WOW from 'wowjs';

const CARD_DELAY = "0.25s";

class CardExample extends Component {
	componentDidMount() {
		const wow = new WOW.WOW();
		wow.init();
	}

	render() {
		return (
			<Container className="cards">
				<CardDeck className="deck lead">
					<Card className="wow fadeInUp" data-wow-delay={CARD_DELAY}>
						<CardImg className="photo" top width="100%" src={billy} alt="Billy Walker" />
						<CardBody>
							<CardTitle className="cardTitle">Billy Walker</CardTitle>
							<CardSubtitle className="subtitle">CEO / Co-founder</CardSubtitle>
							{/* <CardText className="text">
								Billy combines his innovative engineering background with a customer focused business sense to develop high value ventures. Billy's sales experience– both B2B and ecommerce– has summed to six digits in sales as a college student. An extensive tech, healthcare, and education network in Los Angeles, Silicon Valley, and Minneapolis gives Billy and MobieDock the avenues for success.
							</CardText> */}
						</CardBody>
						<CardFooter>
							<a href="https://www.linkedin.com/in/billy-walker-4aa914111/">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
						</CardFooter>
					</Card>
					<Card className="wow fadeInUp" data-wow-delay={CARD_DELAY}>
						<CardImg className="photo" top width="100%" src={masaki} alt="Masaki Takamatsu" />
						<CardBody>
							<CardTitle className="cardTitle">Masaki Takamatsu</CardTitle>
							<CardSubtitle className="subtitle">CTO / Co-founder</CardSubtitle>
							{/* <CardText className="text">
								Masaki is a Results-focused thought leader with expertise spanning sales management, professional networking, international manufacturing, e-commerce, proposal writing, presentation, negotiation, language translation, cross-functional team leadership, complex problem-solving, client relationship management, and project management.
							</CardText> */}
						</CardBody>
						<CardFooter>
							<a href="https://www.linkedin.com/in/masaki-takamatsu/">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
						</CardFooter>
					</Card>
				</CardDeck>

				<CardDeck className="lead">
					<Card className="wow fadeInUp" data-wow-delay={CARD_DELAY}>
						<CardImg className="photo" top width="100%" src={charity} alt="Charity Waddy" />
						<CardBody>
							<CardTitle className="cardTitle">Charity Waddy</CardTitle>
							<CardSubtitle className="subtitle">COO</CardSubtitle>
							{/* <CardText className="text">
								Mechanical Engineer with a strong motivation to use my experience towards building a career in business operations and organization. Charity also has experience in sales, organization, and development.
							</CardText> */}
						</CardBody>
						<CardFooter>
							<a href="http://linkedin.com/in/charity-waddy-b48668112">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
						</CardFooter>
					</Card>
					<Card className="wow fadeInUp" data-wow-delay={CARD_DELAY}>
						<CardImg className="photo" top width="100%" src={matt} alt="Matthew Tejada" />
						<CardBody>
							<CardTitle className="cardTitle">Matthew Tejada</CardTitle>
							<CardSubtitle className="subtitle">CFO</CardSubtitle>
							{/* <CardText className="text">
								Matt is a entrepreneur with a desire to solve problems and scale businesses. Starting his first venture at sixteen helped form a serious passion for entrepreneurship at a young age. Matthew is consistently working on multiple projects where he specializes in building teams, forming partnerships, and business development. 
							</CardText> */}
						</CardBody>
						<CardFooter>
							<a href="https://www.linkedin.com/in/matthew-tejada-b50a18129/">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
						</CardFooter>
					</Card>
					<Card className="wow fadeInUp" data-wow-delay={CARD_DELAY}>
						<CardImg className="photo" top width="100%" src={ben} alt="Ben Davis" />
						<CardBody>
							<CardTitle className="cardTitle">Ben Davis</CardTitle>
							<CardSubtitle className="subtitle">Director of Software</CardSubtitle>
							{/* <CardText className="text">
								Ben is involved with app development and software system integration.  Aside from computer science, Ben takes interest in electronic music, running, and physics.  Mobiedock is an intersection of many of the fields within computer science that he is particularly excited about.
							</CardText> */}
						</CardBody>
						<CardFooter>
							<a href="https://www.linkedin.com/in/ben-davis-a34a55149/">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'linkedin' ]} />
							</a>
							<a href="https://github.com/bdavs3">
								<FontAwesomeIcon ClassName="icon" icon={[ 'fab', 'github' ]} />
							</a>
						</CardFooter>
					</Card>
				</CardDeck>
			</Container>
		);
	}
}

export default CardExample;