import React from "react";
import Banner from '../components/Banner';
import Servicos from "../components/Servicos";
import Banho_Tosa from "../imagens/banho-tosa.jpg";
import Hotel from "../imagens/hotel-para-cachorros.jpg"
import Adestrar from "../imagens/adestramento.jpg" 
import Vacina from "../imagens/vacina-cachorro.jpg"
import BemVindo from "../components/BemVindo";
import Clientes from "../components/Clientes";
import Delivery from "../components/Delivery";
import Contato from "../components/Contato";
import Mapa from "../components/Mapa";
import Rodapé from "../components/Rodapé";

const Home = () => {
	return (
		<div>
			<Banner/>
			<section className="sessao d-flex py-5 px-5">
				<Servicos ImagemServico={Banho_Tosa} TituloImagem='Banho e Tosa  para pets' TituloServico='Banho e tosa'/>
				<Servicos ImagemServico={Hotel} TituloImagem='Hotel' TituloServico='Hotel '/>
				<Servicos ImagemServico={Adestrar} TituloImagem='Adestramento para pets' TituloServico='Adestramento'/>
				<Servicos ImagemServico={Vacina} TituloImagem='Vacina para pets' TituloServico='Vacina '/>
			</section>
			<BemVindo/>
			<section>
				<Clientes/>
			</section>
			<section>
				<Delivery/>
			</section>
			<footer>
				<Contato/>
				<Mapa/>
				<Rodapé/>
			</footer>
		</div>
	);
};

export default Home;