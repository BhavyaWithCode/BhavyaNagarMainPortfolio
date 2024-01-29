import styled from 'styled-components';

// Define breakpoints for media queries
const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  extraLarge: '1200px',
};

export const GithubProfileLayout = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
`;

export const MainProfile = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%; /* Added for responsiveness */
  padding: 16px; /* Added for responsiveness */
`;

export const MainProfileImage = styled.div`
  padding: 16px;
  width: 100%; /* Added for responsiveness */
  display: flex; /* Added for responsiveness */
  justify-content: center; /* Added for responsiveness */
`;

export const ProfileAvatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-left: 6.5%;
  margin-top: 7%;
  @media (max-width: ${breakpoints.medium}) {
    width: 200px; /* Adjust size for medium screens */
    height: 200px; /* Adjust size for medium screens */
  }
`;

export const ProfileBio = styled.div`
  padding: 16px;
  margin-left: 8%;
  width: 100%; /* Added for responsiveness */
`;

export const ProfileBioName = styled.div`
  h1 {
    font-size: 26px;
    margin-bottom: 2px;
    color: #1f2328;
    @media (max-width: ${breakpoints.medium}) {
      font-size: 22px; /* Adjust font size for medium screens */
    }
  }
`;

export const ProfileBioUsername = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 18px;
    margin-bottom: 3px;
    color: #c0c0c0;
    cursor: auto;
    display: inline-block;
  }

  span {
    color: #586069;
    cursor: auto;
    margin-left: 1%;
  }
`;

export const ProfileBioDescription = styled.div`
  p {
    font-size: 1rem;
    color: #586069;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;

export const SocialAccounts = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #6a717a;
    font-weight: bold;
    margin-bottom: 10px;
  }

  i {
    margin-right: 8px;
  }
`;

export const ResumeButton = styled.div`
  button {
    padding: 8px 16px;
    background-color: #2ea44f;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #218838;
  }
`;

