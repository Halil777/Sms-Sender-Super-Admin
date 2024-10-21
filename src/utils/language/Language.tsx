import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { message } from "antd";

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 10px;
    justify-content: center;
  }
`;

const LanguageFlag = styled.img`
  width: 32px;
  height: 18px;
  margin-right: 8px;
  cursor: pointer;
`;

const LanguageSelect = styled.select`
  background-color: transparent;
  border: none;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #0e1217;
  padding: 4px;
  appearance: none;
  cursor: pointer;
  outline: none;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Language: FC = () => {
  const { i18n, t } = useTranslation();
  const [flagSrc, setFlagSrc] = useState("/flags/us.png");
  const [languages] = useState(["en", "ru", "tm"]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load the language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
    updateFlag(savedLanguage);
    setCurrentIndex(languages.indexOf(savedLanguage));
  }, [i18n, languages]);

  const updateFlag = (language: string) => {
    switch (language) {
      case "en":
        setFlagSrc("/flags/us.png");
        break;
      case "ru":
        setFlagSrc("/flags/ru.png");
        break;
      case "tm":
        setFlagSrc("/flags/tm.jpg");
        break;
      default:
        setFlagSrc("/flags/us.png");
        break;
    }
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    updateFlag(language);

    message.success(
      t("lang.languageChanged", { lang: language.toUpperCase() })
    );
  };

  // Handle language change on flag click for small screens
  const handleFlagClick = () => {
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLanguage = languages[nextIndex];
    setCurrentIndex(nextIndex);
    changeLanguage(nextLanguage);
  };

  return (
    <LanguageContainer>
      <LanguageFlag
        src={flagSrc}
        alt="Selected Language Flag"
        onClick={handleFlagClick}
      />
      <LanguageSelect
        id="languageSelect"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option value="en">EN</option>
        <option value="ru">Ру</option>
        <option value="tm">TM</option>
      </LanguageSelect>
    </LanguageContainer>
  );
};

export default Language;
