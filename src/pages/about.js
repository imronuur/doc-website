import React from 'react';
import About from 'views/About';

const team = [
  {
    name: 'Imran Abdullah',
    title: 'CEO',
    avatar:
      'https://res.cloudinary.com/imran6099/image/upload/v1647072751/1608364079517_q1cb4j.jpg',
  },
  {
    name: 'Mohamed Abdirahman Mohamed',
    title: 'AI Engineer & Data Scientist',
    avatar: 'Mohamed',
  },
  {
    name: 'Ismail Abdiqadir Macalin',
    title: 'Software Engineer',
    avatar: 'Ismail',
  },
  {
    name: 'Abdisamad Mohamed Adam',
    title: 'Software Engineer',
    avatar: 'Abdisamad',
  },
];

const AboutPage = ({ team }) => {
  return <About team={team} />;
};

export async function getStaticProps() {
  return { props: { team: team } };
}

export default AboutPage;
