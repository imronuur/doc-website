import React from 'react';
import ServiceDetail from 'views/ServiceDetail';
import axios from 'axios';
import data from '../../data/services.json';
const RentalPage = ({ services }) => {
  return <ServiceDetail services={services} />;
};

export async function getServerSideProps() {
  const services = await axios.get('http://localhost:9000/api/services');
  return { props: { services: data } };
}

export default RentalPage;
