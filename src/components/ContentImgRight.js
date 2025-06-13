import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContentImgRight({texto, imagem, textoImagem, mostrarBotao = false, titulo}) {
  return (
    <Container className='py-5'>
      <Row>
        <Col lg="9" md='9' sm="12">
        <h2>{titulo}</h2>
        <p>{texto}</p>
        { mostrarBotao && <button>Saiba Mais</button>}
        </Col>

        <Col lg="3" md='6' sm="12">
        <img src={imagem} alt={textoImagem}/>
        </Col>

      </Row>
    </Container>
  )
}

export default ContentImgRight
