import React from "react";
import Rotulo from "../components/Rotulo";
import ContentImgLeft from "../components/ContentImgLeft";
import banhoTosa from "../imagens/banhoTosa.jpg"

const BanhoTosa = () => {
	return (
		<div>
			<Rotulo rotulo='Banho e Tosa'/>

			<ContentImgLeft imagem={banhoTosa} textoImagem='Foto de banho e tosa' titulo='Cuidados com o seu pet' texto='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'/>
		</div>
	);
};

export default BanhoTosa;
