import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AdminText = styled.h5`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #0e1217;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    color: #000;
    line-height: 16px;
  }
`;

export const WelcomeText = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #64748b;
  margin: 0;
`;

export const LanguageContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const UserIconContainer = styled.div`
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #f0f0f0;
  cursor: pointer;
  font-size: 24px;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }
`;
