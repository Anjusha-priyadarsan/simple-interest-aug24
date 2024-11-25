
import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'





function App() {


  const [amount, setAmount] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [isInvalidPrinciple, setIsInvalidPrinciple] = useState(false)
  const [isInvalidRate, setIsInvalidRate] = useState(false)
  const [isInvalidYear, setIsInvalidYear] = useState(false)

  const [interest,setInterest]=useState("")
  console.log(interest);
  


  console.log(amount);
  console.log(rate);

  console.log(year);


  const validateInput = (tag) => {

    const { name, value } = tag

    console.log(name, value);

    if(value==""){
      if(name=='principle'){
        setAmount("")


      }
      else if(name == 'rate'){
        setRate("")
      }
      else{
        setYear("")

      }
    }
    else{

      if (!!value.match(/^[0-9]*.?[0-9]+$/)) {

        if (name == 'principle') {
          setAmount(value)
          setIsInvalidPrinciple(false)
  
  
        }
        else if (name == 'rate') {
          setRate(value)
          setIsInvalidRate(false)
  
        }
        else {
          setYear(value)
          setIsInvalidYear(false)
  
        }
  
      }
      else {
        if (name == 'principle') {
          setIsInvalidPrinciple(true)
  
  
        }
        else if (name == 'rate') {
          setIsInvalidRate(true)
  
        }
        else {
          setIsInvalidYear(true)
  
        }
      }

    }



   





  }

  const handleCalculate = (e) => {
    e.preventDefault()
    console.log("button clicked");

    if( amount && rate && year){

     setInterest( amount*rate*year/100)

    }
    else{
      alert("enter th field completely")
    }

  }
  const handleReset=()=>{
    setAmount(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsInvalidPrinciple(false)
    setIsInvalidRate(false)
    setIsInvalidYear(false)


  }

  return (
    <div className="bg-dark d-flex align-item-center justify-content-center p-3" style={{ minHeight: "100vh", width: '100%' }}>
      <div className='bg-light rounded p-5' style={{ width: '550px' }}>
        <h2>Simple Interest Calculator</h2>
        <p>Calculate Your Simple Interest Easily</p>
        <div className="d-flex align-items-center justify-content-center bg-warning rounded text-light flex-column" style={{ height: '120px' }}>
          <h1>₹&nbsp;{interest}</h1>
          <h5>Total Simple Interest</h5>
        </div>
        <form className='mt-5' >
          <TextField name='principle' value={amount || ""}  onChange={(e) => validateInput(e.target)} className='w-100 mb-3' id="princile_amount" label="Amount" variant="outlined" />
          {isInvalidPrinciple &&
            <div className='text-danger fw-bold mb-2'>Invalid Principle Amount</div>
          }
          <TextField name='rate' onChange={(e) => validateInput(e.target)} className='w-100  mb-3' id="interest" label="Interest" variant="outlined" />
          {isInvalidRate &&
            <div className='text-danger fw-bold mb-2'>Invalid Interest Rate</div>
          }
          <TextField name='period' onChange={(e) => validateInput(e.target)} className='w-100  mb-3' id="year" label="Year" variant="outlined" />
          {isInvalidYear &&
            <div className='text-danger fw-bold mb-2'>Invalid Year</div>
          }
          <Stack direction="row" spacing={2}>

            <Button disabled={isInvalidPrinciple || isInvalidRate || isInvalidYear} onClick={(e) => handleCalculate(e)} type='submit' className='w-100 bg-dark p-3' variant="contained">Calculate</Button>
            <Button onClick={handleReset} className='w-100 p-3' variant="outlined">Reset</Button>

          </Stack>

        </form>


      </div>
    </div>

  )
}

export default App
