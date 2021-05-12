import React from 'react';
import ContactCardComponent from '../../components/contacts/contacts.component';
import { ContactsContainer, ContactsTitleContainer } from './contacts.styles';

const locations = [
  {
    id: 1,
    city: 'New York',
    address: '115 East 23rd Street Floor Seven New York, NY 10010 USA',
    phone: '1-844-373-7459',
    email: 'imogene.ny@t-app-s34rching.herokuapp.com',
    workingHours: 'Sun - Sat: 10am - 7pm',
  },
  {
    id: 2,
    city: 'Dublin',
    address: '115 East 23rd Street Floor Seven New York, NY 10010 USA',
    phone: '1-844-373-7459',
    email: 'imogene.d@t-app-s34rching.herokuapp.com',
    workingHours: 'Sun - Sat: 10am - 7pm',
  },
  {
    id: 3,
    city: 'Phoenix',
    address: '115 East 23rd Street Floor Seven New York, NY 10010 USA',
    phone: '1-844-373-7459',
    email: 'imogene.ph@t-app-s34rching.herokuapp.com',
    workingHours: 'Sun - Sat: 10am - 7pm',
  },
  {
    id: 4,
    city: 'Berlin',
    address: '115 East 23rd Street Floor Seven New York, NY 10010 USA',
    phone: '1-844-373-7459',
    email: 'imogene.b@t-app-s34rching.herokuapp.com',
    workingHours: 'Sun - Sat: 10am - 7pm',
  },
  {
    id: 5,
    city: 'Oslo',
    address: '115 East 23rd Street Floor Seven New York, NY 10010 USA',
    phone: '1-844-373-7459',
    email: 'imogene.o@t-app-s34rching.herokuapp.com',
    workingHours: 'Sun - Sat: 10am - 7pm',
  },
];

export const ContactsPage = () => (
  <ContactsContainer>
    <ContactsTitleContainer>
      <strong>
        Addresses and Phones
      </strong>
    </ContactsTitleContainer>
    {
      locations.map(({
        id,
        city,
        address,
        phone,
        email,
        workingHours,
      }) => (
        <ContactCardComponent
          key={id}
          city={city}
          address={address}
          phone={phone}
          email={email}
          workingHours={workingHours}
        />
      ))
    }
  </ContactsContainer>
);

export default ContactsPage;
