import { cashFlow } from "../data/mockData";

export default function CashFlow() {

  const net = cashFlow.income - cashFlow.expenses;

  return (
    <div style={{
      background: "#0f172a",
      padding: "20px",
      borderRadius: "16px",
      marginTop: "20px"
    }}>
      <h2>Monthly Cash Flow</h2>

      <p style={{ color: "#22c55e" }}>
        Income: ${cashFlow.income}
      </p>

      <p style={{ color: "#ef4444" }}>
        Expenses: ${cashFlow.expenses}
      </p>

      <h3 style={{ marginTop: "10px" }}>
        Net: <span style={{ color: net >= 0 ? "#22c55e" : "#ef4444" }}>
          ${net}
        </span>
      </h3>
    </div>
  );
}