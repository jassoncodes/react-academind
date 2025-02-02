import { useEffect, useState } from "react"
import UserInputs from "./components/UserInputs"
import Header from "./components/Header"
import Result from "./components/Result"

const defaultInvestmentData = {
  initialInvestment: 10000,
  annualInvestment: 300,
  expectedReturn: 5.5,
  duration: 12
}

function App()
{

  const [investmentData, setInvestmentData] = useState(defaultInvestmentData);
  const inputValid = investmentData.duration >= 1;

  function handleChangeInput(input, value)
  {
    setInvestmentData(prev =>
    {
      return {
        ...prev,
        [input]: +value
      }
    });
  }

  return (
    <>
      <Header />
      <UserInputs investmentData={investmentData} onChange={handleChangeInput} />
      {!inputValid && <p className="center">Please enter a duration greater than zero (0)</p>}
      {inputValid && <Result investmentData={investmentData} />}
    </>
  )
}

export default App
