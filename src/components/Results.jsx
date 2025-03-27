import { calculateInvestmentResults } from "../utils/investment";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  console.log({ resultsData });
  return (
    <section id="results">
      <h2>Results</h2>
      <p>
        Your investment will grow to{" "}
        {/* <strong>${results.totalInvestment.toFixed(2)}</strong> in{" "}
        <strong>{results.duration} years</strong>. */}
      </p>
    </section>
  );
}
