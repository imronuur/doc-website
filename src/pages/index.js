import React from 'react';
import IndexView from 'views/IndexView';
import data from '../data/services.json';

const IndexPage = ({ services, advantages, process }) => {
  return (
    <IndexView services={services} advantages={advantages} process={process} />
  );
};

export async function getStaticProps() {
  return { props: { services: data } };
}

export default IndexPage;
