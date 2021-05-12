import React from 'react';
import ContactCardComponent from '../../components/contacts/contacts.component';
import { ContactsContainer, ContactsTitleContainer } from './contacts.styles';

const locations = [
  {
    id: 1,
    city: 'New York',
    address: '230 Vesey St, New York, NY 10281, United States',
    map: 'https://www.google.com/maps/place/Brookfield+Place/@40.7130711,-74.0146959,19z/data=!4m5!3m4!1s0x89c25a1b0cd3c8cb:0xf4ba617cb0ddc07!8m2!3d40.7127168!4d-74.0152824?hl=en',
    phone: '1-844-373-9999',
    email: 'imogene.ny@t-app-s34rching.herokuapp.com',
    workingHours: 'Sun - Sat: 10am - 7pm',
  },
  {
    id: 2,
    city: 'Dublin',
    address: 'East Wall Road, Point Square, Dublin, D01 E0K6, Ireland',
    map: 'https://www.google.com/maps/place/Point+Square+Dublin/@53.3491225,-6.2278782,17.46z/data=!4m9!1m2!2m1!1sDublin+malls!3m5!1s0x0:0x3caea0d7689830bc!8m2!3d53.3490908!4d-6.2282417!15sCgxEdWJsaW4gbWFsbHOSAQ9zaG9wcGluZ19jZW50ZXI?hl=en',
    phone: '353-1-875-9999',
    email: 'imogene.d@t-app-s34rching.herokuapp.com',
    workingHours: 'Sun - Sat: 10am - 7pm',
  },
  {
    id: 3,
    city: 'Phoenix',
    address: '6800 N 95th Ave, Glendale, AZ 85305, United States',
    map: 'https://www.google.com/maps/place/Tanger+Outlets+Phoenix/@33.5339288,-112.2761235,15z/data=!4m9!1m2!2m1!1sphoenix+malls!3m5!1s0x872b404b387c2537:0xe18fe824e86918fd!8m2!3d33.5339288!4d-112.2673688!15sCg1waG9lbml4IG1hbGxzWh4KDXBob2VuaXggbWFsbHMiDXBob2VuaXggbWFsbHOSAQtvdXRsZXRfbWFsbJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSbk5tVnRZMHRuRUFF',
    phone: '1-623-877-9999',
    email: 'imogene.ph@t-app-s34rching.herokuapp.com',
    workingHours: 'Sun - Sat: 10am - 7pm',
  },
  {
    id: 4,
    city: 'Berlin',
    address: 'Leipziger Pl. 12, 10117 Berlin, Germany',
    map: 'https://www.google.com/maps/place/Mall+of+Berlin/@52.5119074,13.3827902,15.5z/data=!3m1!5s0x47a851cf0179e5fb:0xa2554074834bc5d9!4m12!1m6!3m5!1s0x47a851cecff94831:0x9f39bce1f6ad5524!2sMall+of+Berlin!8m2!3d52.5105167!4d13.3807085!3m4!1s0x47a851cecff94831:0x9f39bce1f6ad5524!8m2!3d52.5105167!4d13.3807085',
    phone: '49-30-20629999',
    email: 'imogene.b@t-app-s34rching.herokuapp.com',
    workingHours: 'Sun - Sat: 10am - 7pm',
  },
  {
    id: 5,
    city: 'Oslo',
    address: 'Karl Johans gate 5, 0154 Oslo, Norway',
    map: 'https://www.google.com/maps/place/Arkaden+Shopping/@59.914333,10.7566455,15.83z/data=!4m9!1m2!2m1!1smalls+near+Oslo,+Norway!3m5!1s0x0:0x9b553acd95992fe2!8m2!3d59.9116667!4d10.7483333!15sChdtYWxscyBuZWFyIE9zbG8sIE5vcndheVofCgVtYWxscyIWbWFsbHMgbmVhciBvc2xvIG5vcndheZIBD3Nob3BwaW5nX2NlbnRlcg',
    phone: '47-22-17-99-99',
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
        map,
        phone,
        email,
        workingHours,
      }) => (
        <ContactCardComponent
          key={id}
          city={city}
          address={address}
          map={map}
          phone={phone}
          email={email}
          workingHours={workingHours}
        />
      ))
    }
  </ContactsContainer>
);

export default ContactsPage;
