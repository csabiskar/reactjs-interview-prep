import React, { useState } from "react";

const ZigzagString = () => {
  const [data, setData] = useState("")
  const [output, setOutput] = useState("")
  const handleClick = () => {
    const arr = data.split(',')
    const newWord= arr.map((v,i)=>{
        if(i%2 !==0){
            return v.split('').reverse().join("")
        }
        return v
    })
    console.log(arr)
    setOutput(newWord.join(''))
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter strings like one,two,three"
        data-testid="input-box"
        value={data}
        onChange={(e)=>setData(e.target.value)}
      />
      <button  data-testid="submit-button" onClick={handleClick}>
        Submit
      </button>
      <p data-testid="output-result">Output: {output}</p>
    </div>
  );
};

export default ZigzagString;
