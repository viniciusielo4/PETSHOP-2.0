import React from "react";
import Banner from "../components/Banner";
import banner from "../imagens/banner.jpg";
import Servico from "../components/Servico";
import banhoTosa from "../imagens/banhoTosa.jpg";
import vacinaCachorro from "../imagens/vacina-cachorro.jpg";
import adestramento from "../imagens/adestramento.jpg";
import hotelResort from "../imagens/hotel-para-cachorros.jpg";
import Cliente from "../components/Cliente";
import Cachorro from "../imagens/rottweiller.jpg"
import Delivery from "../components/Delivery";
import CallToAction from "../components/CallToAction";
import ContentImgRight from "../components/ContentImgRight";


const Home = () => {
	return (
		<div>
			<Banner/>

			<section className='section  py-5'>
				<div className="row">
			<Servico imagemServico={ banhoTosa } tituloImagem="Banho e Tosa para Pets" tituloServico="Banho e Tosa" />
			<Servico imagemServico={ vacinaCachorro } tituloImagem="Pet care para pets" tituloServico="Pet Care" />
			<Servico imagemServico={ adestramento } tituloImagem="Adestramento para pets" tituloServico="Adestramento" />
			<Servico imagemServico={ hotelResort } tituloImagem="Hotel e resorts para pets" tituloServico="Hotel Resort" />
			</div>
			</section>

			<CallToAction titulo="SEJA BEM VINDO AO PET SHOP" />

             <ContentImgRight titulo="Relação com cliente" texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." imagem={ Cachorro} alt='Foto do Rotwiller'/>

			<section className="d-flex">
				<Delivery imagemDelivery={ banner } tituloDelivery="Atendimento Delivery" numeroDelivery="0800 555 3232" />
			</section> 
			
			
		</div>

	);
};

export default Home;
