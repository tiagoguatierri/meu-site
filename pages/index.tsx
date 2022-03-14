import type { GetStaticProps } from 'next';

import { Seo } from '@/shared/interfaces/seo';
import { Project } from '@/shared/interfaces/project';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import Head from 'next/head';
import Image from 'next/image';

import asastelecom from '@/images/asastelecom.png';
import beauty from '@/images/beauty.png';
import fiberse7e from '@/images/fiberse7e.png';
import fiberzen from '@/images/fiberzen.png';
import nutrafios from '@/images/nutrafios.png';
import tiago from '@/images/tiago.png';

export interface HomeProps {
  seo: Seo;
}

const Home = ({ seo }: HomeProps) => {
  const projects: Project[] = [
    {
      uid: '06a0c5e4-4a7b-4700-a213-03498af8a52b',
      name: 'Asas Telecom',
      description:
        'Site com painel administrativo desenvolvido para o provedor de internet Asastelecom da cidade de Guaira/PR',
      site_url: 'https://asastelecom.com.br',
      icon: asastelecom,
      stacks: [
        'Nodejs',
        'Expressjs',
        'Webpack',
        'Bootstrap 4',
        'Pug',
        'Sass',
        'Angular 7',
        'MongoDB',
      ],
    },
    {
      uid: '5ddd7fa1-9e7c-42ab-aff4-80fc83dd8716',
      name: 'Linha Beauty',
      description:
        'Landing-Page desenvolvida para a linha Beauty da empresa Multvit. Foi feita a integração com o CartPanda, para carregar os produtos da plataforma.',
      site_url: 'https://linhabeauty.com.br',
      icon: beauty,
      stacks: ['Nextjs', 'React', 'Sass', 'Bootstrap 5'],
    },
    {
      uid: '9e1e6ce2-6fc8-4a85-850d-2f749fb415f8',
      name: 'FiberSe7e',
      description:
        'Landing-Page desenvolvida para o produto FiberSe7e da empresa Multvit. Foi feita a integração com o CartPanda, para carregar os produtos da plataforma.',
      site_url: 'https://fiberse7e.com.br',
      icon: fiberse7e,
      stacks: ['Nextjs', 'React', 'Sass', 'Bootstrap 5'],
    },
    {
      uid: '60fc7378-0ab7-423f-b237-08f7b029dfe1',
      name: 'Fiberzen',
      description:
        'Landing-Page desenvolvida para o produto Fiberzen da Nutribio. Foi feita a integração com a plataforma Yampi, para carregar os produtos da plataforma.',
      site_url: 'https://fiberzen.com.br',
      icon: fiberzen,
      stacks: ['Nextjs', 'React', 'Sass', 'Bootstrap 4'],
    },
    {
      uid: '93c8b097-be39-4be7-94cb-191012af4096',
      name: 'Nutrafios',
      description:
        'Landing-Page desenvolvida para o produto Nutrafios da Nutralev. Foi feita a integração com a plataforma Yampi, para carregar os produtos da plataforma.',
      site_url: 'https://nutrafios.com.br',
      icon: nutrafios,
      stacks: ['Nextjs', 'React', 'Sass', 'Bootstrap 4'],
    },
  ];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content={seo.author} />
        <meta name="web_author" content={seo.web_author} />

        <meta name="robots" content="index,follow" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />

        {seo.og && (
          <>
            <meta property="og:title" content={seo.og.title} />
            <meta property="og:site_name" content={seo.og.site_name} />
            <meta property="og:url" content={seo.og.url} />
            <meta property="og:type" content={seo.og.type} />
            <meta property="og:description" content={seo.og.description} />
            {seo.og.image && (
              <>
                <meta property="og:image" content={seo.og.image.path} />
                <meta property="og:image:type" content={seo.og.image.type} />
                <meta property="og:image:width" content={seo.og.image.width} />
                <meta
                  property="og:image:height"
                  content={seo.og.image.height}
                />
              </>
            )}
          </>
        )}

        <title>{seo.title}</title>
      </Head>

      <section id="projects" className="py-5">
        <Container fluid="lg">
          <div className="h3 text-uppercase text-center">Projetos recentes</div>
          <Row xs={1} md={2} lg={3} className="justify-content-center g-4 mt-1">
            {projects.map((p) => (
              <Col key={p.uid}>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <div className="d-flex align-items-center">
                        <Image
                          alt={p.name}
                          src={p.icon}
                          placeholder="blur"
                          width={48}
                          height={48}
                        />
                        <div className="ms-2">
                          {p.name}
                          <small className="text-muted d-block fs-6">
                            <a href={p.site_url}>{p.site_url}</a>
                          </small>
                        </div>
                      </div>
                    </Card.Title>
                    <Card.Text>
                      {p.description}
                      <p className="mt-2 fw-bold">
                        Algumas tecnologias utilizadas:
                      </p>
                      <ul>
                        {p.stacks.map((stack, key) => (
                          <li key={key}>{stack}</li>
                        ))}
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="aboutMe" className="py-5 bg-light">
        <Container fluid="lg">
          <Row className="align-items-center">
            <Col lg="4">
              <Image
                className="rounded-circle img-thumbnail"
                alt="Tiago Guatierri"
                src={tiago}
                width={300}
                height={300}
                placeholder="blur"
              />
            </Col>
            <Col lg="8">
              <div className="h3 text-uppercase">Um pouco sobre mim</div>
              <p>E aí, Tiago aqui, beleza?</p>
              <p>
                Me formei no curso de Tecnologia e Análise de Desenvolvimento de
                Sistemas, no ano de 2010 pela Unipar. Mas a paixão por
                tecnologia vem de berço. Desde pequeno sempre gostava de
                &quot;quebrar as coisas&quot; para ver o que tinha dentro.
              </p>
              <p>
                Quando ganhava um brinquedo, se não era de pilha não tinha
                graça, pois sabia que não ia ter nada de interessante dentro.
              </p>
              <p>
                Aos 15 anos comecei minha primeira empreitada, um provedor de
                acesso a internet via rádio. Com ele pude aprender muito sobre
                gestão de redes, servidores UNIX e Linux, e gestão de pessoas.
                Eu era o atendente, o instalador, o operador de rede, etc. 2
                anos mais tarde, vendi meu negócio e ingressei na faculdade.
              </p>
              <p>
                Ainda no primeiro ano, já comecei a desenvolver alguns sites em
                PHP para alguns négocios da família.
              </p>
              <p>Me formei com maestria e nota máxima no TCC.</p>
              <p>
                Nunca trabalhei para empresas do ramo de tecnologia, pois sempre
                tive no sangue o desejo de empreender e decidi arriscar. Logo
                que sai da faculdade fundei junto ao meu pai e tios uma
                industria de climatizadores. Mas nunca deixei de me aperfeiçoar
                e estudar.
              </p>
              <p>
                No longo dessa jornada, tive muitos desafios e aprendizado. Até
                professor já fui, para um grupo de amigos que quiseram aprender
                a fazer seus próprios sites.
              </p>
              <p>
                Investi bastante tempo em desenvolvimento WEB. Já trabalhei com
                PHP, JAVA, Postgress, MySql. Fiz algumas brincadeiras com React
                e Vue. Mas minha paixão a alguns anos tem sido o Angular e o
                Nestjs.
              </p>
              <p>
                Adoro um novo desafio e tenho facilidade em aprender novas
                tecnologias.
              </p>
              <p>Se você tem um desafio, estou dentro!</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact" className="pt-5 bg-brand-primary">
        <Container fluid="lg">
          <Row className="align-items-center justify-content-center text-white">
            <Col>
              <p className="text-center">Me encontre</p>
              <p className="text-center">
                <a
                  href="https://www.facebook.com/tiago.guatierri"
                  className="me-3"
                >
                  <FontAwesomeIcon size="2x" icon={faFacebook} />
                </a>
                <a
                  href="https://www.instagram.com/tiagoguatierri/"
                  className="me-3"
                >
                  <FontAwesomeIcon size="2x" icon={faInstagram} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tiago-guatierri-043b7a82/"
                  className="me-3"
                >
                  <FontAwesomeIcon size="2x" icon={faLinkedin} />
                </a>
                <a href="https://github.com/tiagoguatierri">
                  <FontAwesomeIcon size="2x" icon={faGithub} />
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const title = 'Tiago Guatierri - Home';
  const description =
    'Desenvolvimento de soluções web e mobile de maneira inteligente, utilizando as tecnologias mais recentes.';
  const keywords = 'IOS, Androido, applicativos, web, site, dev, development';
  const author = 'Tiago Guatierri';
  const author_email = 'tiagovit@gmail.com';
  const site_name = 'Tiago Guatierri';
  const url = 'https://www.tiagoguatierri.com.br';
  const type = 'website';

  const seo: Seo = {
    title,
    description,
    keywords,
    author,
    web_author: `${author} | ${author_email}`,
    og: {
      title,
      site_name,
      url,
      type,
      description,
      image: {
        path: '',
        type: 'image/png',
        width: '1000',
        height: '1000',
      },
    },
  };

  return {
    props: {
      seo,
    },
  };
};

export default Home;
