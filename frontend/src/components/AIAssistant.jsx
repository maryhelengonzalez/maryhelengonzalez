export default function AIAssistant({
  income,
  budget,
  savings,
}) {
  const savingsRate =
    income > 0 ? ((savings / income) * 100).toFixed(1) : 0;

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>AI Financial Assistant</h2>

      <div style={styles.message}>
        💰 Monthly income detected: ${income}
      </div>

      <div style={styles.message}>
        💸 Spending detected: ${budget}
      </div>

      <div style={styles.message}>
        📈 Savings rate: {savingsRate}%
      </div>

      {savingsRate > 20 && (
        <div style={styles.good}>
          🔥 Excellent savings performance
        </div>
      )}

      {savingsRate < 10 && (
        <div style={styles.bad}>
          ⚠ Your savings rate is low
        </div>
      )}

      {budget > income * 0.6 && (
        <div style={styles.bad}>
          🚨 Spending is consuming most of your income
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "16px",
    color: "white",
    marginTop: "20px",
  },

  title: {
    marginBottom: "15px",
    color: "white",
  },

  message: {
    marginBottom: "10px",
    color: "#e2e8f0",
  },

  good: {
    color: "#22c55e",
    marginTop: "10px",
  },

  bad: {
    color: "#ef4444",
    marginTop: "10px",
  },
};