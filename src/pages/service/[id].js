import React from 'react';
import ServiceDetail from 'views/ServiceDetail';
import data from '../../data/services.json';
const RentalPage = ({ services }) => {
  return <ServiceDetail services={services} />;
};

export async function getStaticPaths() {
  const services = data;

  const paths = services.map((service) => ({
    params: { id: service.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps() {
  return { props: { services: data } };
}

export default RentalPage;
