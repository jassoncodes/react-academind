import Input from "./Input";


export default function UserInputs({ investmentData, onChange })
{
    return (
        <section id="user-input">
            <div className="input-group">
                <Input label="INITIAL INVESTMENT" onChange={(e) => onChange("initialInvestment", e.target.value)} value={investmentData.initialInvestment} />
                <Input label="ANNUAL INVESTMENT" onChange={(e) => onChange("annualInvestment", e.target.value)} value={investmentData.annualInvestment} />
            </div>
            <div className="input-group">
                <Input label="EXPECTED RETURN" onChange={(e) => onChange("expectedReturn", e.target.value)} value={investmentData.expectedReturn} step="0.01" />
                <Input label="DURATION" onChange={(e) => onChange("duration", e.target.value)} value={investmentData.duration} />
            </div>
        </section>
    )
}
