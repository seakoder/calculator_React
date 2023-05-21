import { useState } from "react";
import Box from "./Box";
import Numbers from "./Numbers";
import Result from "./Result";

function App() {

  // const [operator, setOperator] = useState('');
  const [oldholder, setOldHolder] = useState('');
  const [newholder, setNewHolder] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(0)

  let log = console.log();
  // let operator = '';

  // function clearData(){
  //   setNewHolder('');
  //   setOldHolder('');
  //   setResult(0);
  // }

  function logix() {
   if(operator=='plus'){
    setResult(Number(newholder) + Number(oldholder));
   console.log('Addition Completed');
   setNewHolder('');
   setOldHolder('');
   } else if (operator=='multiply'){
    setResult(Number(newholder) * Number(oldholder));
    setNewHolder('');
    setOldHolder('');
   console.log('Multiplication Completed');
   }else if (operator=='divide'){
    setResult(Number(newholder) / Number(oldholder));
    setNewHolder('');
    setOldHolder('');
   console.log('Division Completed');
   }else if (operator=='subtract'){
    setResult(Number(newholder) - Number(oldholder));
    setNewHolder('');
    setOldHolder('');
   console.log('Subtraction Completed');
   }

    }

    function adding() {
      setOperator('plus');
      console.log('adding');
      let x = oldholder
      setNewHolder(x);
      setOldHolder('');
      setResult(0);
    }

    function multiplying() {
      setOperator('multiply');
      console.log('multiplying');
      setNewHolder(oldholder);
      setOldHolder('');
      setResult(0);
    }

    function dividing() {
      setOperator('divide');
      console.log('dividing');
      setNewHolder(oldholder);
      setOldHolder('');
      setResult(0);
    }

    function subtracting() {
      setOperator('subtract');
      console.log('subtracting');
      setNewHolder(oldholder);
      setOldHolder('');
      setResult(0);
    }

    return (
      < >
      <h1 className="text-white text-3xl font-bold text-center mt-12 underline decoration-green-500">Simple ReactJS Calculator</h1>
        <div className="absolute top-[20%] left-[12%]">
          <button onClick={adding} className="text-3xl font-bold bg-blue-900 p-1 text-white text-center rounded w-[107px] align-middle hover:bg-blue-500 border-2 border-white-500 m-2">+</button>
          <button onClick={subtracting} className="text-3xl font-bold bg-blue-900 p-1 text-white text-center rounded w-[107px] align-middle hover:bg-blue-500 border-2 border-white-500 m-2">-</button>
          <button onClick={multiplying} className="text-3xl font-bold bg-blue-900 p-1 text-white text-center rounded w-[107px] align-middle hover:bg-blue-500 border-2 border-white-500 m-2">*</button>
          <button onClick={dividing} className="text-3xl font-bold bg-blue-900 p-1 text-white text-center rounded w-[107px] align-middle hover:bg-blue-500 border-2 border-white-500 m-2">/</button>

        </div>
        <Numbers setOldHolder={setOldHolder} oldholder={oldholder} />
       
        <button onClick={logix} className="logix absolute left-[36.6%] top-[62.5%] text-8xl font-bold bg-red-600 m-1 text-white text-center rounded w-24 hover:bg-white hover:text-black">=</button>
        <Result result={result} />
        {/* {resultIsTrue && <div className="text-4xl font-bold text-indigo-900">
            Result is {result}
        </div>} */}
        {/* <button onClick={() => setOldHolder(oldholder+1)} className="text-4xl font-bold bg-green-900 m-1 text-white text-center rounded w-24 hover:bg-green-500">Test</button> */}

      </>
    )
  }

  export default App;



// --------------------------------------------------------------------------------------

  // testing purposes

  // switch (operator) {
  //   case 'plus':
  //     setResult(Number(newholder) + Number(oldholder));
  //     log(Result);
  //     break;
  //   case 'multiply':
  //     setResult(Number(newholder) * Number(oldholder));
  //      break;
  //   case 'divide':
  //     setResult(Number(newholder) / Number(oldholder));
  //   case 'subtract':
  //     setResult(Number(newholder) - Number(oldholder));
  //   default:
  //     return '';
  // }