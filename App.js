import React, { useState } from 'react';
function ReverseNumber() {
  const [number, setNumber] = useState('');
  const [reversed, setReversed] = useState('');
  const reverseDigits = (num) => {
    let reversedNum = '';
    for (let i = num.length - 1; i >= 0; i--) {
      reversedNum += num[i];}
    return reversedNum;};
  const handleCompute = () => {
    setReversed(reverseDigits(number));};
  return (
<div><input type="number" value={number}onChange={(e) => setNumber(e.target.value)} placeholder="Enter a number"/>
      <button onClick={handleCompute}>Reverse Digits</button>
      <p>Reversed Number: {reversed}</p></div>);}
export default ReverseNumber;
