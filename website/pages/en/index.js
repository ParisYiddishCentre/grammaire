/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <div>
  <h2 className="projectTitle">
    {siteConfig.title}
    {/* <small>{siteConfig.tagline}</small> */}
  </h2>
  <h2 className="projectTitle">
    {siteConfig.yiddishTitle}
    {/* <small>{siteConfig.yiddishTagline}</small> */}
  </h2>
  </div>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            {/* <Button href="#try">Try It Out</Button> */}
            <Button href={docUrl('intro1.html', language)}>Lire</Button>
            <Button href={docUrl('apropos.html', language)}>À propos</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

/* const Features = () => (
  <Block background="light" layout="fourColumn">
    {[
      {
        content: 'La Maison de la Culture Yiddish publie ici le travail par lequel Aaron Waldman, enseignant chevronné et féru de grammaire, a entrepris de présenter les principaux sujets de la grammaire yiddish de manière accessible pour l’étudiant et l’amateur francophones. Il a particulièrement fait attention à restreindre l’usage de termes techniques et a rendre proches ceux, qu’il a tout-de-même utilisés.',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature One',
      },
      {
        content: 'The content of my second feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature Two',
      },
    ]}
  </Block>
); */

const FeatureCallout = () => (
  <div
    className="productShowcaseSection"
    style={{textAlign: 'center'}}>
    {/* <MarkdownBlock>These are features of this project</MarkdownBlock> */}
    <div className="" style={{textAlign: 'center', fontWeight: 'bold'}}>
    <p>La Maison de la Culture Yiddish publie ici le travail par lequel Aaron Waldman, 
      enseignant chevronné et féru de grammaire, a entrepris de présenter les principaux sujets de la 
      grammaire yiddish de manière accessible pour l’étudiant et l’amateur francophones. Il a particulièrement 
      fait attention à restreindre l’usage de termes techniques et a rendre proches ceux, qu’il a tout-de-même 
      utilisés.</p>
      <p>Ces matériaux répondent à un véritable besoin et rendront certainement grand service aux étudiants pas 
        moins qu’aux enseignants.</p>
      <p><i>Yitskhok Niborski</i></p>
      </div>
      <div style={{textAlign: 'center'}} className="separator"></div>
    <div className="rtl" style={{textAlign: 'center', fontWeight: 'bold'}}>
      <p>דער פּאַריזער ייִדיש־צענטער ברענגט צו דער עפֿנטלעכקייט די אַרבעט פֿון אַהרן וואַלדמאַן, אַן איבערגעגעבענעם ייִדיש־לערער מיט אַ באַזונדערער ליבשאַפֿט צו גראַמאַטיק, וואָס האָט זיך אונטערגענומען צו באַשרײַבן אַלע וויכטיקערע אַספּעקטן פֿון דער ייִדישער גראַמאַטיק אויף אַזאַ אופֿן, אַז זיי זאָלן זײַן צוטריטלעך פֿאַרן פֿראַנצייזיש־רעדנדיקן תּלמיד און ליבהאָבער פֿון דער שפּראַך. ער האָט זיך באַזונדערש געסטאַרעט צו באַניצן וואָס ווייניקער לינגוויסטישע טערמינאָלאָגיע און קלאָר אויסצוטײַטשן יענע טערמינען צו וועלכע ער איז פֿאָרט אָנגעקומען.</p>
      <p dir="rtl">די דאָזיקע מאַטעריאַלן פֿילן אויס אַ וויכטיקן בלויז און וועלן זיכער צו ניץ קומען סײַ יעדן לערנער, סײַ יעדן לערער.</p>
      <p><i>יצחק ניבאָרסקי</i></p>
    </div>
    
  </div>
);

const LearnHow = () => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = () => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = () => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          {/* <Features /> */}
          <FeatureCallout />
          {/* <LearnHow />  */}
          {/* <TryOut /> */}
          {/* <Description /> */}
          {/* <Showcase language={language} /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
