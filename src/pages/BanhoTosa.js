import React from "react";
import Rotulo from "../components/Rotulo";
import ContentImgLeft from "../components/ContentImgLeft";
import banhoTosa from "../imagens/banhoTosa.jpg"
import CallToAction from "../components/CallToAction";
import ContentImgRight from "../components/ContentImgRight";
import vacina from "../imagens/imagens-banho-e-tosa/vacina-cachorro.jpg"

const BanhoTosa = () => {
	return (
		<div>
			<Rotulo rotulo='Banho e Tosa'/>

			<ContentImgLeft imagem={banhoTosa} textoImagem='Foto de banho e tosa' titulo='Cuidados com o seu pet' texto='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' botao={true}/>

			<CallToAction titulo='Pet Care'/>

			<ContentImgRight titulo='Atenção especial ao seu pet' texto='The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'  imagem={vacina} textoImagem='Imagem de um cachorro tomando vacina' mostrarBotao={true} />
		</div>
	);
};

export default BanhoTosa;
