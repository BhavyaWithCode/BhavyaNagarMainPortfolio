
import React from 'react';
import ProfileAvatarImage from './img/avatar.png';
import { FaTwitter, FaWhatsapp } from 'react-icons/fa';
import * as Styled from './PortfolioProfileLeftStyle';

const Profile = () => {
    return (
        <Styled.GithubProfileLayout>
            {/* Right Main Content */}
            <Styled.MainContent>
                {/* Main-Profile-Section starts here */}
                <Styled.MainProfile>
                    {/* Main-Profile-Image section starts here */}
                    <Styled.MainProfileImage>
                        <Styled.ProfileAvatar src={ProfileAvatarImage} alt='Bhavya-Main-Profile-Image' />
                    </Styled.MainProfileImage>
                    {/* Main-Profile-Image section ends here */}

                    {/* Main-Profile-Bio section starts here */}
                    <Styled.ProfileBio>
                        {/* Main-Profile-Bio-Name section starts here */}
                        <Styled.ProfileBioName>
                            <h1>Bhavya Nagar</h1>
                        </Styled.ProfileBioName>
                        {/* Main-Profile-Bio-Name section ends here */}

                        {/* Main-Profile-Bio-Username section starts here */}
                        <Styled.ProfileBioUsername>
                            <h3>bhavyanagarfullstackweb</h3>
                            <span>(..he/him)</span>
                        </Styled.ProfileBioUsername>
                        {/* Main-Profile-Bio-Username section ends here */}

                        {/* Main-Profile-Bio-Description section starts here */}
                        <Styled.ProfileBioDescription>
                            <p>
                            Python 🐍 & Dart 🎯 Dev | Django 🌐 & Flutter ✨ Enthusiast | ☕ Addict | #FullStackPythonWebDev #Dart #Flutter 🚀
                            </p>
                        </Styled.ProfileBioDescription>
                        {/* Main-Profile-Bio-Description section ends here */}

                        {/* Main-Profile-Bio-Social-Accounts section starts here */}
                        <Styled.SocialAccounts>
                            {/* Twitter */}
                            <a href='https://twitter.com/BhavyaFullStack' target='_blank' rel='noopener noreferrer'>
                                <i>
                                    <FaTwitter />
                                </i>
                                Twitter
                            </a>
                            {/* WhatsApp */}
                            <a href='https://wa.me/+916352153064' target='_blank' rel='noopener noreferrer'>
                                <i>
                                    <FaWhatsapp />
                                </i>
                                WhatsApp
                            </a>
                        </Styled.SocialAccounts>
                        {/* Main-Profile-Bio-Social-Accounts section ends here */}

                        {/* Main-Profile-Bio-Download-Button-Resume section starts here */}
                        <Styled.ResumeButton>
                            <button>Download Resume</button>
                        </Styled.ResumeButton>
                        {/* Main-Profile-Bio-Download-Button-Resume section ends here */}
                    </Styled.ProfileBio>
                    {/* Main-Profile-Bio section ends here */}
                </Styled.MainProfile>
                {/* Main-Profile-Section ends here */}
            </Styled.MainContent>
        </Styled.GithubProfileLayout>
    );
};

export default Profile;
