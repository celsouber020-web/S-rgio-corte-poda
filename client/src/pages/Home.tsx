import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  HardHat,
  Home as HomeIcon,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Ruler,
  Scissors,
  ShieldCheck,
  TreePine,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";
import { siteConfig, whatsappUrl } from "@/lib/site";

const services = [
  {
    number: "01",
    icon: Scissors,
    title: "Corte de árvores",
    description:
      "Cortes de diferentes portes em áreas residenciais e comerciais, com atenção ao espaço ao redor.",
    image: siteConfig.images.hero,
  },
  {
    number: "02",
    icon: Leaf,
    title: "Poda de árvores",
    description:
      "Poda de manutenção e limpeza, incluindo a remoção de galhos secos ou comprometidos quando tecnicamente apropriado.",
    image: siteConfig.images.pruning,
  },
  {
    number: "03",
    icon: TreePine,
    title: "Coqueiros",
    description:
      "Corte, poda e limpeza de coqueiros, com remoção de folhas e partes secas conforme a necessidade do serviço.",
    image: siteConfig.images.coconut,
  },
  {
    number: "04",
    icon: Wrench,
    title: "Equipamentos e maquinários",
    description:
      "Experiência prática com ferramentas, equipamentos e maquinários usados na execução dos trabalhos.",
    image: siteConfig.images.precise,
  },
];

const safetyPoints = [
  "Uso de EPIs adequados para cada etapa",
  "Ferramentas e equipamentos compatíveis com o trabalho",
  "Planejamento da execução antes de iniciar",
  "Avaliação das condições e do espaço disponível",
  "Atenção especial a casas, muros, telhados e veículos",
];

function WhatsAppButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "light" | "outline";
  className?: string;
}) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className={`whatsapp-button whatsapp-${variant} ${className}`}
    >
      <MessageCircle size={18} strokeWidth={2.4} />
      <span>{children}</span>
      <ArrowUpRight size={16} strokeWidth={2.4} />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" className="brand" aria-label="Sérgio Corte & Poda — início">
            <span className="brand-mark" aria-hidden="true">
              <TreePine size={21} strokeWidth={2.2} />
            </span>
            <span className="brand-copy">
              <strong>Sérgio</strong>
              <span>CORTE & PODA</span>
            </span>
          </a>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#experiencia" onClick={closeMenu}>Experiência</a>
            <a href="#seguranca" onClick={closeMenu}>Segurança</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={`tel:+${siteConfig.whatsappNumber}`}>
              {siteConfig.phoneDisplay}
            </a>
            <WhatsAppButton className="header-whatsapp">Falar pelo WhatsApp</WhatsAppButton>
            <button
              type="button"
              className="menu-toggle"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-image" style={{ backgroundImage: `url(${siteConfig.images.hero})` }} />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light"><span /> Trabalho em altura & cuidado com o entorno</p>
              <h1>Corte e poda que começam com <em>planejamento.</em></h1>
              <p className="hero-subtitle">
                Sérgio — mais de 20 anos de experiência em corte, poda e limpeza de árvores e coqueiros, inclusive em locais próximos a casas, muros e outras estruturas.
              </p>
              <div className="hero-actions">
                <WhatsAppButton>Falar com Sérgio pelo WhatsApp</WhatsAppButton>
                <a className="text-link text-link-light" href="#servicos">
                  Conheça os serviços <ChevronDown size={16} />
                </a>
              </div>
            </div>

            <div className="hero-aside">
              <div className="hero-note">
                <span className="hero-note-icon"><ShieldCheck size={19} /></span>
                <span>Experiência prática para avaliar cada cenário com atenção.</span>
              </div>
              <div className="hero-photo-credit">Imagem ilustrativa de trabalho em altura</div>
            </div>
          </div>
          <div className="hero-bottom container">
            <div className="hero-stat"><strong>20<span>+</span></strong><span>anos de<br />experiência</span></div>
            <div className="hero-stat"><strong>01</strong><span>contato direto<br />com Sérgio</span></div>
            <div className="hero-stat"><strong>SP</strong><span>atendimento a partir<br />de Ibiúna</span></div>
          </div>
        </section>

        <section className="intro-section" id="experiencia">
          <div className="container intro-grid">
            <div className="section-heading intro-heading">
              <p className="eyebrow"><span /> A experiência faz diferença</p>
              <h2>Uma árvore por vez. <em>Com atenção aos detalhes.</em></h2>
            </div>
            <div className="intro-text">
              <p className="lead-text">Cortar ou podar uma árvore pede mais do que força e ferramenta. Pede leitura do espaço, escolha do procedimento e cuidado em cada etapa.</p>
              <p>É assim que Sérgio trabalha há mais de duas décadas: com conhecimento prático em árvores de diferentes portes, coqueiros e situações que exigem planejamento — inclusive quando há casas, muros, telhados ou veículos próximos.</p>
              <a className="text-link" href="#seguranca">Entenda o jeito de trabalhar <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="container about-visual">
            <div className="about-image about-image-main">
              <img src={siteConfig.images.climbing} alt="Profissional equipado trabalhando entre árvores" />
              <span className="image-label">Prática em locais de difícil acesso</span>
            </div>
            <div className="about-detail">
              <div className="detail-number">20<span>+</span></div>
              <p>anos de experiência prática em corte, poda e limpeza de árvores e coqueiros.</p>
              <div className="detail-rule" />
              <div className="detail-tag"><HardHat size={16} /> Preparado para o serviço</div>
            </div>
            <div className="about-image about-image-small">
              <img src={siteConfig.images.precise} alt="Trabalho de poda em altura com cordas" />
            </div>
          </div>
        </section>

        <section className="services-section" id="servicos">
          <div className="container">
            <div className="services-top">
              <div className="section-heading">
                <p className="eyebrow eyebrow-light"><span /> O que Sérgio faz</p>
                <h2>Serviços para manter o espaço <em>bem cuidado.</em></h2>
              </div>
              <p className="services-summary">Do corte planejado à limpeza de um coqueiro, cada serviço é avaliado de acordo com as características do local.</p>
            </div>

            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={service.number}>
                    <div className="service-card-image">
                      <img src={service.image} alt="" />
                      <span className="service-number">{service.number}</span>
                    </div>
                    <div className="service-card-content">
                      <div className="service-icon"><Icon size={20} /></div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="service-link">Solicitar avaliação <ArrowUpRight size={15} /></a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="safety-section" id="seguranca">
          <div className="container safety-grid">
            <div className="safety-copy">
              <p className="eyebrow"><span /> Experiência e segurança</p>
              <h2>Planejar bem é parte do serviço.</h2>
              <p className="safety-lead">Antes de começar, Sérgio considera o tipo de árvore, as condições do local e o que existe ao redor. A execução é conduzida com os equipamentos e procedimentos adequados para cada situação.</p>
              <ul className="safety-list">
                {safetyPoints.map((point) => <li key={point}><span><Check size={14} strokeWidth={3} /></span>{point}</li>)}
              </ul>
              <p className="safety-footnote">Cada local tem suas particularidades. A avaliação inicial ajuda a orientar o melhor caminho para o serviço.</p>
            </div>
            <div className="safety-visual">
              <img src={siteConfig.images.pruning} alt="Profissional usando capacete e proteção durante poda" />
              <div className="safety-stamp"><ShieldCheck size={22} /><span>Cuidado<br /><b>em cada etapa</b></span></div>
              <div className="safety-caption"><Ruler size={15} /> Avaliação do espaço e do entorno</div>
            </div>
          </div>
        </section>

        <section className="structures-section">
          <div className="container structures-grid">
            <div className="structures-image">
              <img src={siteConfig.images.precise} alt="Profissional realizando poda em árvore alta" />
              <div className="structures-image-note">Quando o espaço pede atenção extra</div>
            </div>
            <div className="structures-copy">
              <p className="eyebrow"><span /> Situações que exigem cuidado</p>
              <h2>Árvores próximas a estruturas?</h2>
              <p>Casas, muros, telhados, veículos e áreas com pouco espaço mudam a forma de pensar o trabalho. A experiência de Sérgio inclui esse tipo de cenário, sempre com execução planejada e cuidadosa.</p>
              <div className="structure-tags">
                <span><HomeIcon size={15} /> Casas</span>
                <span><Ruler size={15} /> Muros e telhados</span>
                <span><MapPin size={15} /> Pouco espaço</span>
                <span><ShieldCheck size={15} /> Veículos próximos</span>
              </div>
              <WhatsAppButton variant="outline">Conversar sobre meu local</WhatsAppButton>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="container contact-panel">
            <div className="contact-content">
              <p className="eyebrow eyebrow-light"><span /> Vamos conversar</p>
              <h2>Precisa de corte, poda ou limpeza de árvores e coqueiros?</h2>
              <p>Entre em contato com Sérgio pelo WhatsApp e explique o que precisa ser feito. Envie fotos do local, quando possível, para facilitar uma avaliação inicial.</p>
              <WhatsAppButton variant="light">Solicitar atendimento pelo WhatsApp</WhatsAppButton>
            </div>
            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail-icon"><MessageCircle size={20} /></span>
                <div><small>WhatsApp</small><a href={whatsappUrl} target="_blank" rel="noreferrer">{siteConfig.phoneDisplay}</a></div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon"><MapPin size={20} /></span>
                <div><small>Localização</small><span>{siteConfig.location}</span></div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon"><Clock3 size={20} /></span>
                <div><small>Atendimento</small><span>Fale diretamente com Sérgio</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#inicio" className="brand brand-footer">
            <span className="brand-mark" aria-hidden="true"><TreePine size={21} strokeWidth={2.2} /></span>
            <span className="brand-copy"><strong>Sérgio</strong><span>CORTE & PODA</span></span>
          </a>
          <p>Experiência prática para cuidar do que cresce ao seu redor.</p>
          <a className="footer-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp <ArrowUpRight size={15} /></a>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Sérgio Corte & Poda</span><span>Ibiúna, São Paulo</span></div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com Sérgio pelo WhatsApp"><MessageCircle size={24} /></a>
    </div>
  );
}
