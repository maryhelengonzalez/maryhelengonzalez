import { financialData } from "../data/mockData";

export default function CreditCards() {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div>
          <h3 style={styles.title}>Credit Cards</h3>
          <p style={styles.sub}>Spending & utilization</p>
        </div>

        <div style={styles.total}>Debt</div>
      </div>

      <div style={styles.divider} />

      <div style={styles.rowDanger}>
        <span>Chase Sapphire (****1182)</span>
        <strong>$1,200 used</strong>
      </div>

      <div style={styles.rowDanger}>
        <span>Amex Gold (****4491)</span>
        <strong>$2,400 used</strong>
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
    fontSize: "12px",
    padding: "6px 10px",
    borderRadius: "999px",
    background: "rgba(239,68,68,0.15)",
    color: "#ef4444",
  },

  divider: {
    height: "1px",
    background: "rgba(255,255,255,0.08)",
    margin: "12px 0",
  },

  rowDanger: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderRadius: "12px",
    background: "rgba(239,68,68,0.10)",
    fontSize: "14px",
    marginBottom: "8px",
  },
};