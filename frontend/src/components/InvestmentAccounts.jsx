import { financialData } from "../data/mockData";

export default function InvestmentAccounts() {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div>
          <h3 style={styles.title}>Investments</h3>
          <p style={styles.sub}>Long-term portfolio growth</p>
        </div>

        <div style={styles.total}>$80,000</div>
      </div>

      <div style={styles.divider} />

      <div style={styles.row}>
        <span>Brokerage (...9021)</span>
        <strong style={{ color: "#22c55e" }}>$48,000</strong>
      </div>

      <div style={styles.row}>
        <span>401k (...6610)</span>
        <strong style={{ color: "#22c55e" }}>$32,000</strong>
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
    background: "rgba(59,130,246,0.15)",
    color: "#3b82f6",
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