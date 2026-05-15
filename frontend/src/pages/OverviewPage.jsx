export default function OverviewPage() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Your Transactions</h1>

      <div style={styles.notice}>
        Our AI automatically categorizes your transactions to the best of its ability.
        However, AI is not perfect and may occasionally make mistakes.
      </div>

      <div style={styles.card}>Sat, October 12</div>
      <div style={styles.item}>Paycheck — Plaid Savings 8192 — +$4,200</div>
      <div style={styles.item}>Starbucks — Plaid Checking — -$12</div>
      <div style={styles.item}>Walmart — Plaid Checking — -$86</div>

      <div style={styles.card}>Fri, October 11</div>
      <div style={styles.item}>Uber — Plaid Checking — -$24</div>

      <div style={styles.card}>Thu, October 10</div>
      <div style={styles.item}>Netflix — Plaid Checking — -$15</div>

      <div style={styles.card}>Wed, October 9</div>
      <div style={styles.item}>Target — Plaid Savings — -$132</div>
    </div>
  );
}

const styles = {
  page: {
    color: "white",
    padding: "20px",
  },

  title: {
    fontSize: "32px",
    marginBottom: "10px",
  },

  notice: {
    background: "rgba(59,130,246,0.1)",
    padding: "14px",
    borderRadius: "10px",
    marginBottom: "20px",
    color: "white",
    opacity: 0.8,
  },

  card: {
    marginTop: "15px",
    opacity: 0.7,
  },

  item: {
    padding: "10px",
    background: "#0f172a",
    marginTop: "6px",
    borderRadius: "10px",
  },
};