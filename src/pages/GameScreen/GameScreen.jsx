import { useState, useEffect } from "react";
import MainComponent from "../../components/MainComponent/MainComponent";
import texts from "../../utils/texts";
import "./gameScreen.css";

function GameScreen() {
  const [option, setOption] = useState(texts[0].id);
  const [numberOfTimesShotInTheDick, setNumberOfTimesShotInTheDick] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [option]);

  useEffect(() => {
    const currentText = texts.find((text) => text.id === option);
    if (currentText && currentText.shotInDickUpdate) {
      setNumberOfTimesShotInTheDick(numberOfTimesShotInTheDick + currentText.shotInDickUpdate);
    }

  }, [option]);

  const shotMessages = {
    1: "Good for you",
    2: "Yeah, don't let them kink shame you.",
    5: "If it feels good and you're consenting how can it be wrong?",
    10: "Yeah come on Craig ruin me like you ruined the football club.",
    15: "More I say. More.",
    20: "WOOOOOOOO",
    25: "Presumably if you're still shooting me in the dick you're also into it?",
    30: "Yeah you're into it.",
    40: "A little to the left.",
    50: "I've reached the melancholy stage where I know my groin will never feel this good again.",
    60: "So how did you become a dark wizard?",
    75: "Is this a spell anyone can learn?",
    90: "wrstfglhnnnhgnnn",
    100: `You have been shot in the dick by Craig Whyte one hundred times. Please download this certificate: 
    
    https://drive.google.com/file/d/17VbZuOvgYDi38G_YkUfZrqrt8f1Yw-EJ/view`,
    105: "Well that's probably it isn't it?",
    200: "Yeah no, that's it.",
    300: "I hope this was worth it.",
  };
  
  const shotMessage = shotMessages[numberOfTimesShotInTheDick] || "";
  
  const components = texts.map((text) => {
    return (
      <>
        <MainComponent
          key={text.id}
          text={shotMessage ? shotMessage : text.text}
          btnLeft={text.options && text.options[0] ? text.options[0].text : " "}
          btnRight={text.options && text.options[1] ? text.options[1].text : " "}
          setOption={setOption}
          idLeft={text.options && text.options[0] ? text.options[0].nextText : null}
          idRight={text.options && text.options[1] ? text.options[1].nextText : null}
          image={text.image}
          additionalImage={text.additionalImage}
          alt={text.alt}
          additionalImageAlt={text.additionalImageAlt}
        />
      </>
    );
  });

  return <div className="gameScreen-container">{components[option - 1]}</div>;
}

export default GameScreen;