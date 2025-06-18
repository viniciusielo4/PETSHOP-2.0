import React from "react";
import { Col, Container, Row} from "react-bootstrap"
import banner from '../imagens/adestramento/banner-adestramento.jpg'
import adestramento1 from '../imagens/adestramento/adestramento1.jpg'
import adestramento2 from '../imagens/adestramento/adestramento2.jpg'
import adestramento3 from '../imagens/adestramento/adestramento3.jpg'
import adestramento4 from '../imagens/adestramento/adestramento4.jpg'
import adestramento5 from '../imagens/adestramento/adestramento5.jpg'

const Adestramento = () => {


    const photos = [
		{
			id: 1,
			title: 'Imagem de Adestramento',
			url: `${ adestramento1 }`
		},
		{
			id: 2,
			title: 'Imagem de Adestramento',
			url: `${ adestramento2 }`
		},
		{
			id: 3,
			title: 'Imagem de Adestramento',
			url: `${ adestramento3 }`
		},
		{
			id: 4,
			title: 'Imagem de Adestramento',
			url: `${ adestramento4 }`
		},
		{
			id: 5,
			title: 'Imagem de Adestramento',
			url: `${ adestramento5 }`
		}
	]

	return (
		<>
		<Container fluid>
			<Row>
                <Col className="px-0">
				<img src={banner} alt="Banner de Adestramento" className="w-100"/>
				</Col>
			</Row>
		</Container>

		<Container>
		    <Row className="py-5">
                <Col>
				<p>
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				</p>
				<p>
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				</p>
				</Col>
			</Row>

			<Row>
				<Col className="photos">
				{
					photos.map((photo) => (
                       <div key={photo.id}>
						<img src={photo.url} alt={photo.alt}/>
					   </div>
					))
				}

				</Col>
			</Row>
		</Container>

		


		</>
	);
};

export default Adestramento;
