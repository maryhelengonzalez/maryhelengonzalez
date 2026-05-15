import { financialData } from "../data/mockData";

export default function TopExpenses() {
  const data = [
    { name: "Rent", value: 1800 },
    { name: "Food", value: 600 },
    { name: "Transport", value: 250 },
    { name: "Subscriptions", value: 90 },
    { name: "WiFi", value: 90 },
  ];

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Top Expenses</h3>

      {data.map((item, i) => (
        <div key={i} style={styles.row}>
          <span style={styles.name}>{item.name}</span>
          <span style={styles.value}>${item.value}</span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "16px",
    color: "white",
  },
  title: {
    color: "white",
    marginBottom: "10px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    color: "#e2e8f0",
    marginBottom: "6px",
  },
  name: {
    color: "#e2e8f0",
  },
  value: {
    color: "#e2e8f0",
  },
};