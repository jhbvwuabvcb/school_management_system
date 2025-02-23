import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Navbar, Logo, NavigationLinks, NavLink, ButtonsContainer, 
  LoginButton, GuestButton, HomeContainer, SchoolInfo, 
  SchoolImage, Title, LoremTextContainer, AdminRegisterLink 
} from '../styles/styles';
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.png";

const generateRandomParagraph = () => {
  const sentences = [
    "Our school management system simplifies administrative tasks and enhances student engagement.",
    "Efficiently track student progress, manage staff, and automate school processes with our platform.",
    "Education is the key to a brighter future, and our system ensures seamless learning experiences.",
    "Empower teachers and students with an intuitive and secure school management solution.",
    "Stay connected with parents, students, and staff through real-time communication tools.",
    "Manage school activities effortlessly with our advanced scheduling and reporting features.",
    "Innovation meets education with our cutting-edge digital platform for schools.",
    "Our goal is to revolutionize school management through technology and smart solutions.",
  ];
  
  // Shuffle and join random sentences to form a paragraph
  return sentences.sort(() => 0.5 - Math.random()).slice(0, 4).join(" ");
};

const Home = () => {
  const navigate = useNavigate();
  const [randomText, setRandomText] = useState("");

  useEffect(() => {
    setRandomText(generateRandomParagraph()); // Generate a new paragraph on refresh
  }, []);

  const handleLoginClick = () => {
    navigate('/choose-user');
  };

  return (
    <>
      <Navbar>
        <Logo src={bg1} alt="Logo" />
        <NavigationLinks>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Products</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </NavigationLinks>
        <ButtonsContainer>
          <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
          <GuestButton onClick={handleLoginClick}>Guest Mode</GuestButton>
        </ButtonsContainer>
      </Navbar>
      
      <HomeContainer>
        <SchoolInfo>
          <Title>School Management System</Title>
          <LoremTextContainer>
            <p>{randomText}</p>
          </LoremTextContainer>
          <AdminRegisterLink to="/admin/register">Admin Register</AdminRegisterLink>
        </SchoolInfo>
        <SchoolImage src={bg} alt="pupils" />
      </HomeContainer>
    </>
  );
};

export default Home;
