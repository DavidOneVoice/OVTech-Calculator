import './Calculator.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';
export default function Calculator (){
    const [input, setInput] = useState('');
    const [result, setResult] = useState('0');

    const handleClick = (value) => {
        setInput(input + value);
      };
      
      const calculateResult = () => {
        try {
          const result = evaluate(input);  // Safely evaluates the mathematical expression
          setResult(result);
        } catch (error) {
          setResult('Error');
        }
      };
      
      const clearInput = () => {
        setInput('');
        setResult('0');
      };

    return(
        <div className="calculator">
          <input type="text" value={input} placeholder="0" disabled />
           <h2 className="result">{result}</h2>

            <div className="buttons">
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>

                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>

                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>X</button>

                <button onClick={clearInput}>C</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={calculateResult}>=</button>
                <button onClick={() => handleClick('/')}>/</button>
            </div>
           </div>
    )
}