import styled from 'styled-components';

export const CareersCardContainer = styled.div`
  width: 100%;
  height: 150px;
  border-top: 1px solid #e7e7e7;
`;

CareersCardContainer.displayName = 'CareerCardContainer';

export const CardImageContainer = styled.img`
  width: 190px;
  float: left;
  height: 100%;
  padding: 10px 0;
`;

CardImageContainer.displayName = 'CardImageContainer';

export const JobDescriptionContainer = styled.div`
  height: 100%;
  float: left;
  padding-left: 15px;
  letter-spacing: 2px;
`;

JobDescriptionContainer.displayName = 'JobDescriptionContainer';

export const JobTitle = styled.div`
  width: 100%;
  font-size: 18px;
  margin: 20px 0 5px 0;
  font-weight: bold;
`;

JobTitle.displayName = 'JobTitle';

export const JobDepartment = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: bolder;
  color: #666;
`;

JobDepartment.displayName = 'JobDepartment';

export const JobLocation = styled.div`
  width: 100%;
  font-size: 12px;
  margin-top: 15px;
  color: #666;
`;

JobLocation.displayName = 'JobLocation';
