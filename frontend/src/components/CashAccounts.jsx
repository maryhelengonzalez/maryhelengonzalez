import { financialData } from "../data/mockData";

export default function CashAccounts() {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div>
          <h3 style={styles.title}>Cash Accounts</h3>
          <p style={styles.sub}>Everyday money & savings</p>
        </div>

        <div style={styles.total}>$32,700</div>
      </div>

      <div style={styles.divider} />

      <div style={styles.row}>
        <span>Checking (...4821)</span>
        <strong>$5,200</strong>
      </div>

      <div style={styles.row}>
        <span>Business Checking (...1934)</span>
        <strong>$12,500</strong>
      </div>

      <div style={styles.row}>
        <span>Savings (...7742)</span>
        <strong>$15,000</strong>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "18px",
    backdropFilter: "blur(12px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  title: {
    margin: 0,
    fontSize: "18px",
  },

  sub: {
    margin: "4px 0 0",
    fontSize: "12px",
    opacity: 0.6,
  },

  total: {
    fontSize: "14px",
    padding: "6px 10px",
    borderRadius: "999px",
    background: "rgba(34,197,94,0.15)",
    color: "#22c55e",
  },

  divider: {
    height: "1px",
    background: "rgba(255,255,255,0.08)",
    margin: "12px 0",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    fontSize: "14px",
  },
};