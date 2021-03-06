import styled from "styled-components";

export const ProfilesContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const ProfilesWrapper = styled.div`
  max-width: 1000px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  padding-bottom: 50px @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 585px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProfilesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 310px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  /* margin-bottom: 20px */

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProfilesIcon = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: solid black 2px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media screen and (max-width: 480px) {
    height: 140px;
    width: 140px;
    margin-bottom: 30px;
  }
`;

export const ProfilesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  padding-top: 85px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProfilesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;
export const ProfilesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
