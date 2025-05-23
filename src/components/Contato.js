import React from 'react'
import Col from 'react-bootstrap/Col';


function Contato() {
    return (
        <div>
            <Col lg="2" md="4" sm="12" className='fale_conosco'>
                    <h2>Fale Conosco</h2>
                    <section className='container_fc'>
                        <div className='formulario'>
                            <form>
                                <input  placeholder="Nome"/>
                                <input  placeholder="E-mail" />
                                <textarea placeholder="Mensagem" className='mensagem'></textarea>
                            <div className='btn-container'>
                                <button> Enviar Agora</button>
                            </div>
                            </form>
                        </div>
                        <div className="informacoes">
                            <div className="linha">
                                <i className="bi bi-telephone me-2"></i>
                                <span>(48) 8769-0405</span>
                            </div>
                            <div className="linha">
                                <i className="bi bi-whatsapp me-2"></i>
                                <span>(48) 9988-9876</span>
                            </div>
                            <div>
                                <i className="bi bi-geo-alt me-2"></i>
                                <span>SC-401, 3730<br/>Saco Grande-Florianópolis/SC</span>
                            </div>
                            <div className='redes_sociais'>
                                <i class="bi bi-facebook"></i>
                                <i class="bi bi-instagram"></i>
                                <i class="bi bi-linkedin"></i>
                            </div>
                        </div>
                    </section>
            </Col>
        </div>
    )
}

export default Contato
