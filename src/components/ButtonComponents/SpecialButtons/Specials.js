import React, {useState} from "react";
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file
import { specials } from "../../../data";

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialButton, setSpecialsButton] = useState(specials);

  return (
    <div>
      {specialButton.map((special, index) => (
        <SpecialButton key={index} special={special[index]}/>
      ))}
    </div>
  );
};    

export default Specials;
   