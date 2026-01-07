import React, { useState, useEffect } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
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

  // Função para enviar formulário de orçamento
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp - ORÇAMENTO
    const whatsappMessage = `Olá Unik Móveis Planejados! Gostaria de solicitar um orçamento gratuito.%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*E-mail:* ${formData.email}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Cidade:* ${formData.cidade || 'Não informada'}%0A` +
      `*Tipo de Projeto:* ${formData.projeto}%0A` +
      `*Detalhes do Projeto:* ${formData.mensagem || 'Sem detalhes adicionais'}`;
    
    // Número da empresa (formatado)
    const whatsappNumber = '5548991976131';
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Resetar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      cidade: '',
      projeto: '',
      mensagem: ''
    });
    
    // Mostrar mensagem de sucesso
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  // Função para abrir WhatsApp com mensagem de DÚVIDAS
  const openWhatsAppDuvidas = () => {
    const whatsappMessage = `Olá Unik Móveis Planejados! Tenho algumas dúvidas sobre móveis planejados e gostaria de conversar com vocês. Podem me ajudar?`;
    
    const whatsappNumber = '5548991976131';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp com mensagem de PROJETO PERSONALIZADO
  const openWhatsAppProjetoPersonalizado = () => {
    const whatsappMessage = `Olá Unik! Estou procurando uma solução personalizada de móveis planejados que não encontrei em seu portfólio. Gostaria de discutir uma ideia específica com vocês. Podemos conversar?`;
    
    const whatsappNumber = '5548991976131';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp com mensagem de CONTATO RÁPIDO (Hero)
  const openWhatsAppContatoRapido = () => {
    const whatsappMessage = `Olá Unik Móveis Planejados! Estou visitando seu site e gostaria de mais informações sobre seus serviços. Podem me ajudar?`;
    
    const whatsappNumber = '5548991976131';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp com mensagem do BOTÃO FLUTUANTE
  const openWhatsAppOrcamentoFlutuante = () => {
    const whatsappMessage = `Olá Unik Móveis Planejados! Gostaria de solicitar um orçamento gratuito para móveis planejados. Podem me atender?`;
    
    const whatsappNumber = '5548991976131';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  // Função para abrir WhatsApp do card de contato
  const openWhatsAppContatoDireto = () => {
    const whatsappMessage = `Olá Unik Móveis Planejados! Gostaria de falar diretamente com um consultor sobre móveis planejados.`;
    
    const whatsappNumber = '5548991976131';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
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

  const testimonials = [
    {
      id: 1,
      name: 'Ana Silva',
      city: 'Florianópolis',
      text: 'Ficamos impressionados com a qualidade! O projeto da cozinha superou todas as expectativas. A equipe foi muito profissional e atenciosa.',
      rating: 5
    },
    {
      id: 2,
      name: 'Carlos Mendes',
      city: 'São José',
      text: 'Ótimo custo-benefício! O closet que fizeram para nós é perfeito. A fabricação própria faz toda diferença na qualidade final.',
      rating: 5
    },
    {
      id: 3,
      name: 'Mariana Costa',
      city: 'Palhoça',
      text: 'Atendimento excelente desde o primeiro contato. O home office ficou exatamente como imaginávamos. Recomendo a todos!',
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      id: 1,
      title: 'Fabricação Própria',
      description: 'Controlamos todo o processo de produção, garantindo qualidade superior e prazos cumpridos'
    },
    {
      id: 2,
      title: 'Projeto Personalizado',
      description: 'Cada móvel é desenvolvido especialmente para você, considerando seu espaço, necessidades e estilo'
    },
    {
      id: 3,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados com anos de experiência em móveis planejados e design de interiores'
    },
    {
      id: 4,
      title: 'Acompanhamento Completo',
      description: 'Do projeto à instalação final, estamos com você em todas as etapas, garantindo total satisfação'
    },
    {
      id: 5,
      title: 'Materiais de Qualidade',
      description: 'Trabalhamos apenas com os melhores fornecedores e materiais duráveis, certificados e sustentáveis'
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
            <a href="#depoimentos" onClick={handleNavClick}>Depoimentos</a>
            <a href="#contato" onClick={handleNavClick}>Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Móveis Planejados que Transformam sua Casa</h2>
            <p className="fabrication-highlight">
              <strong>Fabricação própria de móveis planejados</strong> - Soluções personalizadas com design exclusivo, 
              qualidade premium e funcionalidade para cada ambiente da sua casa.
            </p>
            <a href="#contato" className="btn btn-primary" onClick={handleNavClick}>Solicite seu orçamento gratuito</a>
            
            {/* Botões de contato rápido no hero */}
            <div className="hero-contact-buttons">
              <button className="btn-contact-whatsapp" onClick={openWhatsAppContatoRapido}>
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
              <p>A Unik é especializada em <strong>fabricação própria de móveis planejados</strong>, 
              combinando design, funcionalidade e qualidade superior em cada projeto.</p>
              <p>Nossa <strong>equipe especializada</strong> transforma espaços com soluções <strong>sob medida</strong>, 
              garantindo sofisticação, durabilidade e total satisfação para seu ambiente.</p>
              <ul className="features">
                <li>Fabricamos todos os móveis em nossa própria fábrica</li>
                <li>Projeto 100% personalizado para suas necessidades</li>
                <li>Equipe especializada com anos de experiência</li>
                <li>Material de alta qualidade e durabilidade</li>
                <li>Entrega e instalação com excelência</li>
                <li>Garantia de 2 anos em todos os projetos</li>
                <li>Atendimento em Florianópolis e região</li>
                <li>Orçamento gratuito e sem compromisso</li>
              </ul>
            </div>
            <div className="sobre-image">
              <img src="/images/Banner.webp" alt="Equipe Unik Móveis Planejados" />
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher a Unik */}
      <section className="section why-choose-us">
        <div className="container">
          <h2 className="section-title">Por que escolher a Unik?</h2>
          <p className="section-subtitle">Conheça os diferenciais que fazem da Unik a melhor escolha para seus móveis planejados</p>
          
          <div className="features-grid">
            {whyChooseUs.map(item => (
              <div key={item.id} className="feature-card">
                <div className="feature-icon">{item.id}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          
          {/* CTA após por que escolher */}
          <div className="cta-container">
            <h3>Pronto para transformar seu espaço?</h3>
            <p>Solicite agora seu orçamento gratuito e sem compromisso!</p>
            <a href="#contato" className="btn btn-primary" onClick={handleNavClick}>Solicite seu orçamento gratuito</a>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="section produtos">
        <div className="container">
          <h2 className="section-title">Nossas Soluções</h2>
          <p className="section-subtitle">Exemplos de projetos que realizamos - Trabalhamos com soluções personalizadas sob medida</p>
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
          
          {/* CTA após produtos - CENTRALIZADO */}
          <div className="cta-container cta-centered">
            <h3>Não encontrou o que procura?</h3>
            <p>Todos os nossos projetos são desenvolvidos sob medida! Converse com nossa equipe e crie a solução perfeita para você.</p>
            <div className="cta-button-center">
              <button className="btn-contact-whatsapp" onClick={openWhatsAppProjetoPersonalizado}>
                <i className="whatsapp-icon">💬</i> Falar no WhatsApp agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="section testimonials">
        <div className="container">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-subtitle">A satisfação dos nossos clientes é nossa maior conquista</p>
          
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="section contato">
        <div className="container">
          <h2 className="section-title">Solicite seu orçamento gratuito</h2>
          <p className="section-subtitle">Preencha o formulário abaixo e será direcionado ao WhatsApp da nossa equipe - Sem compromisso!</p>
          
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
                    <label htmlFor="cidade">Cidade *</label>
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleChange}
                      required
                      placeholder="Sua cidade (ex: Florianópolis)"
                    />
                  </div>
                </div>
                
                <div className="form-row">
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
                  <i className="whatsapp-icon">💬</i> Solicitar orçamento via WhatsApp
                </button>
                
                <p className="form-note">
                  Ao enviar, você será direcionado automaticamente para o WhatsApp da Unik Móveis Planejados.
                  <br />
                  <strong>Orçamento 100% gratuito e sem compromisso!</strong>
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
              <button className="btn-whatsapp" onClick={openWhatsAppContatoDireto}>
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

          {/* CTA extra após informações de contato */}
          <div className="cta-container cta-centered" style={{marginTop: '40px'}}>
            <h3>Ainda com dúvidas?</h3>
            <p>Fale diretamente com nossa equipe e tire todas as suas dúvidas sobre móveis planejados.</p>
            <div className="cta-button-center">
              <button className="btn-contact-whatsapp" onClick={openWhatsAppDuvidas}>
                <i className="whatsapp-icon">💬</i> Tire suas dúvidas no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Botão flutuante para WhatsApp */}
      <div className="floating-whatsapp">
        <button onClick={openWhatsAppOrcamentoFlutuante}>
          <i className="whatsapp-icon">💬</i>
          <span>Orçamento gratuito</span>
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
              <p><strong>Fabricação própria de móveis planejados</strong> - Transformando ambientes com design e funcionalidade desde 2013.</p>
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
              <a href="#produtos">Soluções</a>
              <a href="#depoimentos">Depoimentos</a>
              <a href="#contato">Orçamento gratuito</a>
            </div>
            <div className="footer-social">
              <h4>Siga-nos</h4>
              <div className="social-icons">
                <button className="social-btn instagram-btn" onClick={openInstagram}>
                  Instagram
                </button>
                <button className="social-btn whatsapp-btn" onClick={openWhatsAppContatoDireto}>
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