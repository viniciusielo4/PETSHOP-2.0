import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContentImgLeft({imagem, textoImagem, titulo, texto, botao = false }) {
    return (
        <Container className='py-5'>
          <Row>
            <Col lg='6' md='6' sm='12'>
                <img src={ imagem } alt={textoImagem} className='img-fluid'/>
            </Col>
            <Col lg='6' md='6' sm='12'>
                <h2>{ titulo }</h2>
                <p>{ texto }</p>
                { botao && <button>Saiba Mais</button>}
            </Col>
           
          </Row>
        </Container>
      );
    }
    

export default ContentImgLeft
