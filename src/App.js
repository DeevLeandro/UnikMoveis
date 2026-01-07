import React, { useState, useEffect } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    projeto: '',
    mensagem: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Verificar se está em dispositivo móvel
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fechar menu ao clicar em um link
  const handleNavClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp
    const whatsappMessage = `Olá Unik Móveis Planejados! Gostaria de solicitar um orçamento.%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*E-mail:* ${formData.email}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Projeto:* ${formData.projeto}%0A` +
      `*Mensagem:* ${formData.mensagem}`;
    
    // Número da empresa (formatado)
    const whatsappNumber = '5548991976131';
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Resetar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      projeto: '',
      mensagem: ''
    });
    
    // Mostrar mensagem de sucesso
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    handleNavClick();
  };

  // Função para abrir o Instagram
  const openInstagram = () => {
    window.open('https://instagram.com/unik_moveisplanejados', '_blank');
  };

  // Função para abrir o Google Maps
  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Rua+Cândido+Pereira+dos+Anjos+2732+Florianópolis+SC+88060300', '_blank');
  };

  const products = [
    {
      id: 1,
      name: 'Cozinha Completa',
      description: 'Cozinha planejada com ilha, armários superiores e inferiores',
      image: '/images/Cozinha.webp'
    },
    {
      id: 2,
      name: 'Home Office',
      description: 'Escritório planejado com prateleiras, mesa e armários',
      image: '/images/HomeOffice.jpg'
    },
    {
      id: 3,
      name: 'Quarto Infantil',
      description: 'Quarto completo com cama, guarda-roupas e área de estudo',
      image: '/images/QuartoInfantil.jpg'
    },
    {
      id: 4,
      name: 'Sala de Estar',
      description: 'Painéis de TV, estantes e armários para sala de estar',
      image: '/images/SaladeEstar.webp'
    },
    {
      id: 5,
      name: 'Banheiro Planejado',
      description: 'Armários e nichos para banheiro com máxima funcionalidade',
      image: '/images/BanheiroPlanejado.jpeg'
    },
    {
      id: 6,
      name: 'Closet Exclusivo',
      description: 'Closet planejado com portas de correr, gavetas e prateleiras',
      image: '/images/ClosetExclusivo.webp'
    }
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-container">
            <div className="logo">
              <img 
                src="/images/logo.png"
                alt="Logo Unik Móveis Planejados"
                className="mentor-photo"
              />
            </div>
          </div>
          
          {/* Botão do menu hamburger (visível apenas no mobile) */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); handleNavClick(); }}>Início</a>
            <a href="#sobre" onClick={handleNavClick}>Sobre</a>
            <a href="#produtos" onClick={handleNavClick}>Produtos</a>
            <a href="#contato" onClick={handleNavClick}>Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Móveis Planejados que Transformam sua Casa</h2>
            <p>Soluções personalizadas com design exclusivo, qualidade premium e funcionalidade para cada ambiente da sua casa.</p>
            <a href="#contato" className="btn btn-primary" onClick={handleNavClick}>Solicite um Orçamento</a>
            
            {/* Botões de contato rápido no hero */}
            <div className="hero-contact-buttons">
              <button className="btn-contact-whatsapp" onClick={() => window.open('https://wa.me/5548991976131', '_blank')}>
                <i className="whatsapp-icon">📱</i> Fale conosco no WhatsApp
              </button>
              <button className="btn-contact-instagram" onClick={openInstagram}>
                <i className="instagram-icon">📸</i> Siga-nos no Instagram
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="section sobre">
        <div className="container">
          <h2 className="section-title">Sobre a Unik Móveis Planejados</h2>
          <div className="sobre-content">
            <div className="sobre-text">
              <p>A Unik cria móveis planejados com design, funcionalidade e qualidade.</p>
              <p>Transformamos espaço com soluções sob medida, garantindo sofisticação e durabilidade para seu ambiente.</p>
              <ul className="features">
                <li>Projeto personalizado</li>
                <li>Material de alta qualidade</li>
                <li>Entrega e instalação</li>
                <li>Garantia de 2 anos</li>
                <li>Atendimento em Florianópolis e região</li>
                <li>Orçamento sem compromisso</li>
              </ul>
            </div>
            <div className="sobre-image">
              <img src="/images/Banner.webp" alt="Equipe Unik Móveis Planejados" />
            </div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="section produtos">
        <div className="container">
          <h2 className="section-title">Nossos Produtos</h2>
          <p className="section-subtitle">Conheça algumas de nossas soluções em móveis planejados</p>
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section contato">
        <div className="container">
          <h2 className="section-title">Solicite um Orçamento</h2>
          <p className="section-subtitle">Preencha o formulário abaixo e será direcionado ao WhatsApp da nossa equipe</p>
          
          {submitted ? (
            <div className="success-message">
              <h3>Obrigado pelo seu interesse!</h3>
              <p>Você será redirecionado para o WhatsApp em instantes.</p>
              <p>Caso não tenha sido redirecionado, <a href="https://wa.me/5548991976131" target="_blank" rel="noopener noreferrer">clique aqui</a> para falar conosco.</p>
            </div>
          ) : (
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nome">Nome Completo *</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone *</label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      placeholder="(48) 99197-6131"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="projeto">Tipo de Projeto *</label>
                    <select 
                      id="projeto" 
                      name="projeto" 
                      value={formData.projeto}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="cozinha">Cozinha</option>
                      <option value="quarto">Quarto</option>
                      <option value="sala">Sala de Estar</option>
                      <option value="escritorio">Escritório</option>
                      <option value="banheiro">Banheiro</option>
                      <option value="closet">Closet</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem ou Detalhes do Projeto</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva seu projeto, medidas aproximadas, preferências de materiais ou qualquer informação relevante..."
                    rows="5"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-submit">
                  <i className="whatsapp-icon">💬</i> Enviar para WhatsApp
                </button>
                
                <p className="form-note">
                  Ao enviar, você será direcionado automaticamente para o WhatsApp da Unik Móveis Planejados.
                </p>
              </form>
            </div>
          )}
          
          {/* Seção de mapa e informações de contato */}
          <div className="contact-info-section">
            <div className="contact-card">
              <h3>Nosso Endereço</h3>
              <p><strong>Unik Móveis Planejados</strong></p>
              <p>Rua Cândido Pereira dos Anjos, 2732</p>
              <p>Florianópolis - SC</p>
              <p>CEP: 88060-300</p>
              <button className="btn-map" onClick={openGoogleMaps}>
                <i className="map-icon">📍</i> Ver no Google Maps
              </button>
            </div>
            
            <div className="contact-card">
              <h3>Contato Direto</h3>
              <p><strong>Telefone/WhatsApp:</strong></p>
              <p>(48) 99197-6131</p>
              <button className="btn-whatsapp" onClick={() => window.open('https://wa.me/5548991976131', '_blank')}>
                <i className="whatsapp-icon">💬</i> Chamar no WhatsApp
              </button>
            </div>
            
            <div className="contact-card">
              <h3>Redes Sociais</h3>
              <p>Siga-nos para ver nossos projetos:</p>
              <button className="btn-instagram" onClick={openInstagram}>
                <i className="instagram-icon">📸</i> @unik_moveisplanejados
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Botão flutuante para WhatsApp */}
      <div className="floating-whatsapp">
        <button onClick={() => window.open('https://wa.me/5548991976131', '_blank')}>
          <i className="whatsapp-icon">💬</i>
          <span>Fale conosco</span>
        </button>
      </div>

      {/* Botão flutuante para voltar ao topo */}
      <div className="floating-top">
        <button onClick={scrollToTop}>
          <i className="top-icon">↑</i>
          <span>Topo</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Unik Móveis Planejados</h3>
              <p>Transformando ambientes com design e funcionalidade desde 2013.</p>
              <div className="contact-info">
                <p><strong>WhatsApp:</strong> (48) 99197-6131</p>
                <p><strong>E-mail:</strong> planejadosunik@gmail.com</p>
                <p><strong>Endereço:</strong> Rua Cândido Pereira dos Anjos, 2732 - Florianópolis/SC</p>
              </div>
            </div>
            <div className="footer-links">
              <h4>Links Rápidos</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Início</a>
              <a href="#sobre">Sobre nós</a>
              <a href="#produtos">Produtos</a>
              <a href="#contato">Contato</a>
            </div>
            <div className="footer-social">
              <h4>Siga-nos</h4>
              <div className="social-icons">
                <button className="social-btn instagram-btn" onClick={openInstagram}>
                  Instagram
                </button>
                <button className="social-btn whatsapp-btn" onClick={() => window.open('https://wa.me/5548991976131', '_blank')}>
                  WhatsApp
                </button>
                <button className="social-btn map-btn" onClick={openGoogleMaps}>
                  Localização
                </button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Unik Móveis Planejados. Todos os direitos reservados.</p>
            <p>CNPJ: 18.476.582/0001-42</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;