import { useState } from "react";

const INITIAL_INVESTMENT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

export function UserInput() {
  const [userInput, setUserInput] = useState(INITIAL_INVESTMENT);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: newValue };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment:</label>
          <input
            type="number"
            id="initial-investment"
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment:</label>
          <input
            type="number"
            id="annual-investment"
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="expect_return">Expected Return:</label>
          <input
            type="number"
            id="expect_return"
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Duration:</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
