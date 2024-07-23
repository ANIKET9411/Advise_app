import React, { useEffect, useState } from "react";
import "../component/Advice_card.css";
import dice from "../Assets/icon-dice.svg";
import desktopPattern from "../Assets/pattern-divider-desktop.svg";
import mobilePattern from "../Assets/pattern-divider-mobile.svg";

const Advice_card = () => {
  const [advice, setAdvice] = useState({ id: "", quote: "" });
  const [buttonClick, setButtonClick] = useState(0);

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAdvice({
          id: data.slip.id,
          quote: data.slip.advice,
        });
      } catch (error) {
        console.error("Error fetching advice: ", error);
      }
    };

    fetchAdvice();
  }, [buttonClick]);

  const generateNewQuote = () => {
    setButtonClick((prevCount) => prevCount + 1);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="card">
          <div className="id">
            <p> ADVICE #{advice.id} </p>
          </div>
          <div className="quote">
            <p> "{advice.quote}" </p>
          </div>
          <div className="image">
            <picture>
              <source media="(min-width: 394px)" srcSet={desktopPattern} />
              <source media="(max-width: 393px)" srcSet={mobilePattern} />
              <img src={desktopPattern} alt="Divider" />
            </picture>
          </div>
        </div>
        <div className="dice" onClick={generateNewQuote}>
          <img src={dice} alt="Dice" />
        </div>
      </div>
    </div>
  );
};

export default Advice_card;
