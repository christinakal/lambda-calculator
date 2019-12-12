import React, {useState} from "react";
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file
import { specials } from "../../../data";

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialButton, setSpecialButton] = useState(specials);

  return (
    <div>
      {specials.map((special) => (
        <SpecialButton key={special} special={special}/>
      ))}
    </div>
  );
};    

export default Specials;
    