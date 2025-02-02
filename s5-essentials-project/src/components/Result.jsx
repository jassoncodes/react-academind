import { calculateInvestmentResults, formatter } from "../util/investment";

const defaultResults = {
    year: 0, // year identifier
    interest: 0, // the amount of interest earned in this year
    valueEndOfYear: 0, // investment value at end of year
    annualInvestment: 0, // investment added in this year
}

export default function Result({ investmentData })
{
    const resultsData = calculateInvestmentResults(investmentData);

    const initialInvestment =
        resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year -</th>
                    <th>Investment Value -</th>
                    <th>{`Interest (Year) -`}</th>
                    <th>Total Interest -</th>
                    <th>Invested Capital -</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((data) =>
                {
                    const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
                    const totalAmountInvested = data.valueEndOfYear - totalInterest;
                    return (
                        <tr key={data.year}>
                            <td className='center'>{data.year}</td>
                            <td className='center'>{formatter.format(data.valueEndOfYear)}</td>
                            <td className='center'>{formatter.format(data.interest)}</td>
                            <td className='center'>{formatter.format(totalInterest)}</td>
                            <td className='center'>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    )
}
