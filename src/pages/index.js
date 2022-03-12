import React from 'react';
import IndexView from 'views/IndexView';
import axios from 'axios';
import data from '../data/services.json';

const services = [
  {
    id: 'S0001',
    title: 'Mobile & Web development',
    icon: 'monitorCellphone',
    subtitle:
      'We design and develop beautiful, lightning fast, scalable, and marketing-focused websites tailored to grow your business.',
  },
  {
    id: 'S0002',
    title: 'API development',
    icon: 'apiIcon',
    subtitle:
      'We craft great user centered interfaces for web and mobile apps. We ensure to deliver intuitive and seamless experiences.',
  },
  {
    id: 'S0003',
    title: 'Cloud Infrastructure',
    icon: 'cloudLockOutline',
    subtitle:
      'We help you to carefully improve your digital product to deliver a great user experience, grow its user base and increase retention.',
  },
  {
    id: 'S0004',
    title: 'IT products and consulting',
    icon: 'desktopClassic',
    subtitle:
      'We transform businesses into brands through high quality brand identity design.',
  },
  {
    id: 'S0005',
    title: 'Product Design and Innovation',
    icon: 'deskLamp',
    subtitle:
      'We help you optimize your website or mobile app to increase your conversion rates.',
  },
  {
    id: 'S0006',
    title: 'Professional Training',
    icon: 'schoolOutline',
    subtitle:
      'We help your business gain leverage and efficiency through smart automation.',
  },
];

const advantages = [
  {
    title: 'Modern Solutions & Technologies',
    subtitle:
      'Our engineers solve modern problems with modern and technologies, we invest a lot of time in research and planning before implement our solution',
  },
  {
    title: 'International Standards',
    subtitle:
      'We follow international standards and rules, no need for you to worry about your business violating rules',
  },
  {
    title: 'Intellectual Property & Integrity',
    subtitle:
      'We respect your business copy right and intellectual property, we keep your information saved & end-to-end encrypted',
  },
  {
    title: 'Hospitality service',
    subtitle:
      'We make our customer support the highest priority task, we listen, help, and most importantly maintain customer satisfaction',
  },
];

const process = [
  {
    title: 'Discuss Requirements',
    subtitle: 'We try to understand our customer need in detail',
  },
  {
    title: 'Research the solution',
    subtitle:
      "We spent a lot of time researching and investigating the best solutions we can offer and fits well with the client's need",
  },
  {
    title: 'Solution proposal',
    subtitle:
      'We prepare and send our proposal to our clients so they can see and approve',
  },
  {
    title: 'Sign the contract',
    subtitle:
      'we sign the contract stating when and how our service will be delivered and how much will the client pay',
  },
  {
    title: 'Plan Execution',
    subtitle:
      'We plan our execution process and roadmap in detail so we do not miss our deadlines',
  },
  {
    title: 'Execute & Update',
    subtitle: 'We keep our client updated during our execution process',
  },
  {
    title: 'Deliver the project',
    subtitle: 'Done! but not the end...',
  },
  {
    title: 'Maintenance',
    subtitle:
      'We do not leave our client right there, we keep maintaining and developing the project',
  },
];
const IndexPage = ({ services, advantages, process }) => {
  return (
    <IndexView services={services} advantages={advantages} process={process} />
  );
};

export async function getServerSideProps() {
  return { props: { services: data } };
}

export default IndexPage;
