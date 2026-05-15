import { financialData } from "../data/mockData";

export default function LoanAccounts() {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div>
          <h3 style={styles.title}>Loan Accounts</h3>
          <p style={styles.sub}>Outstanding liabilities</p>
        </div>

        <div style={styles.total}>$206,000</div>
      </div>

      <div style={styles.divider} />

      <div style={styles.rowWarning}>
        <span>Student Loan</span>
        <strong>$12,000</strong>
      </div>

      <div style={styles.rowWarning}>
        <span>Mortgage</span>
        <strong>$180,000</strong>
      </div>

      <div style={styles.rowWarning}>
        <span>Car Loan</span>
        <strong>$14,000</strong>
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
    background: "rgba(245,158,11,0.15)",
    color: "#f59e0b",
  },

  divider: {
    height: "1px",
    background: "rgba(255,255,255,0.08)",
    margin: "12px 0",
  },

  rowWarning: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderRadius: "12px",
    background: "rgba(245,158,11,0.10)",
    fontSize: "14px",
    marginBottom: "8px",
  },
};