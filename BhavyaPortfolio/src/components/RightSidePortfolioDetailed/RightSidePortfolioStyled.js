import styled from 'styled-components';

export const RightSideContainer = styled.div`
  background-color: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 10px;
  padding: 16px;
`;

export const RightSideImage = styled.div``;

export const RightSideBanner = styled.img`
  width: 100%;
`;

export const RightSideDetailed = styled.p`
  font-size: 18px;
`;

export const RightSideTitle = styled.div`
  font-size: 30px;
`;

export const RightSideTechStack = styled.div``;

export const RightSideTechStackTitle = styled.div`
  font-size: 30px;
  margin-top: 5.5%;
`;

export const TechStackImage = styled.img`
  width: 45px;
  padding: 9px;
  display: inline-block;
`;

export const RightSideProject = styled.div`
  font-size: 30px;
`;

export const RightSideProjectTitle = styled.div`
  margin-top: 5.5%;
`;

export const RightSideComingSoon = styled.div`
  justify-content: center;
  align-items: center;
`;

export const RightSideComingSoonImage = styled.img`
  width: 30%;
  margin-top: 3%;
`;

export const RightSideCertification = styled.div``;

export const RightSideCertificationTitle = styled.div`
  font-size: 30px;
  margin-top: 5.5%;
`;

export const RightSideCertificationImages = styled.img`
  width: 40%;
  margin-top: 4%;
  border: 1px solid black;
  display: inline-block;
  margin-left: 4%;
`;

// Media Query for Responsive Design
const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  extraLarge: '1200px',
};

export const ResponsiveContainer = styled(RightSideContainer)`
  @media (max-width: ${breakpoints.medium}) {
    padding: 12px;
  }

  @media (max-width: ${breakpoints.small}) {
    padding: 8px;
  }
`;

export const ResponsiveRightSideImage = styled(RightSideImage)`
  width: 100%; 
  max-width: 100%; 
  height: auto; 
`;

export const ResponsiveRightSideTechStackTitle = styled(RightSideTechStackTitle)`
  @media (max-width: ${breakpoints.medium}) {
    font-size: 24px;
  }

  @media (max-width: ${breakpoints.small}) {
    font-size: 20px;
  }
`;

export const ResponsiveRightSideCertificationTitle = styled(
  RightSideCertificationTitle
)`
  @media (max-width: ${breakpoints.medium}) {
    font-size: 24px;
  }

  @media (max-width: ${breakpoints.small}) {
    font-size: 20px;
  }
`;

export const ResponsiveRightSideCertificationImages = styled(
  RightSideCertificationImages
)`
  @media (max-width: ${breakpoints.medium}) {
    width: 60%;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 80%;
  }
`;
