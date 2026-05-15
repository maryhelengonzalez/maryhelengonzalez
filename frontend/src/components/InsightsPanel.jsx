import { financialData } from "../data/mockData";

export default function InsightsPanel({ income = 10000, budget = 2987 }) {
  const savings = income - budget;

  const insights = [];

  if (savings < 0) {
    insights.push("🚨 You are overspending this month");
  }

  if (savings > 0 && savings < 1000) {
    insights.push("⚠ Low savings rate — try reducing expenses");
  }

  if (savings >= 1000) {
    insights.push("🔥 Strong savings performance");
  }

  if (budget > income * 0.6) {
    insights.push("⚠ Expenses are too high compared to income");
  }

  if (insights.length === 0) {
    insights.push("✔ Your financial health looks stable");
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>AI Financial Insights</h3>

      <div style={styles.block}>
        <p style={styles.text}>Income: ${income}</p>
        <p style={styles.text}>Expenses: ${budget}</p>
        <p style={styles.text}>Savings: ${savings}</p>
      </div>

      <ul style={styles.list}>
        {insights.map((item, i) => (
          <li key={i} style={styles.text}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    color: "white",
    background: "#0f172a",
    padding: "20px",
    borderRadius: "16px",
  },
  title: {
    color: "white",
    marginBottom: "10px",
  },
  block: {
    marginBottom: "10px",
  },
  list: {
    marginTop: "10px",
    paddingLeft: "18px",
  },
  text: {
    color: "white",
  },
};