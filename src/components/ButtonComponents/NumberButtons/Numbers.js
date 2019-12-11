import React, {useState} from "react";
import NumberButton from "./NumberButton.js";


import { numbers } from "../../../data";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberButton, setNumberButton] = useState(numbers);
  return (
    <div className="numBtn-container">
       {numberButton.map((number) => (
         <NumberButton  key={number} 
                        number={number} 
                        addNumber={props.addNumber}
          />
       ))}
    </div>
  );
};

export default Numbers;

    



//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
//Import your array data to from the provided data file

{/* STEP 3 - Use .map() to iterate over your array data and return a button
  component matching the name on the provided file. Pass
  it any props needed by the child component*/}