import React from 'react';
import { CareersCard } from '../../components/career-card/career-card.component';

const jobs = [
  {
    id: 1,
    title: 'Senior Dev OPs Engineer',
    department: 'Technology',
    imageUrl: 'https://jobs.nike.com//media/images/Sustainability_2018_0720_105425-0_LJS.max-700x700.jpg',
    location: 'New York',
  },
  {
    id: 2,
    title: 'Lead Technical Product Manager',
    department: 'Technology',
    imageUrl: 'https://jobs.nike.com//media/images/Sustainability_2018_0720_105425-0_LJS.max-700x700.jpg',
    location: 'Dublin',
  },
  {
    id: 3,
    title: 'Lead Software Engineer',
    department: 'Technology',
    imageUrl: 'https://jobs.nike.com//media/images/Sustainability_2018_0720_105425-0_LJS.max-700x700.jpg',
    location: 'Berlin',
  },
];

const CareersPage = () => (
  <div>
    <h2>
      Careers
    </h2>
    {
      jobs.map(({
        id, title, department, imageUrl, location,
      }) => (
        <CareersCard
          key={id}
          title={title}
          department={department}
          imageUrl={imageUrl}
          location={location}
        />
      ))
    }
  </div>
);

export default CareersPage;
