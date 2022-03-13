import React from 'react';
import About from 'views/About';

const team = [
  {
    name: 'Imran Abdullah',
    title: 'Senior Software Engineer',
    avatar:
      'https://res.cloudinary.com/imran6099/image/upload/v1647072751/1608364079517_q1cb4j.jpg',
  },
];

const AboutPage = ({ team }) => {
  return <About team={team} />;
};

export async function getStaticProps() {
  return { props: { team: team } };
}

export default AboutPage;
