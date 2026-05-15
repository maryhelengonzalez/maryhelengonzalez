import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { financialData } from "../data/mockData";

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#a855f7"];

export default function ExpenseChart() {
  // ✅ REMOVE Netflix from dataset cleanly
  const filteredExpenses = financialData.monthlyExpenses.filter(
    (item) => item.category !== "Netflix"
  );

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Monthly Expenses</h2>

      <div style={styles.wrapper}>
        {/* PIE CHART */}
        <PieChart width={300} height={260}>
          <Pie
            data={filteredExpenses}
            dataKey="amount"
            nameKey="category"
            outerRadius={100}
            label={false}
          >
            {filteredExpenses.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>

        {/* LEGEND */}
        <div style={styles.legend}>
          {filteredExpenses.map((item, index) => (
            <div key={index} style={styles.row}>
              <div style={styles.left}>
                <div
                  style={{
                    ...styles.dot,
                    background: COLORS[index % COLORS.length],
                  }}
                />
                <span style={styles.category}>{item.category}</span>
              </div>

              <span style={styles.amount}>
                ${item.amount.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  card: {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "18px",
    color: "white",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },

  title: {
    color: "white",
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "16px",
  },

  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
  },

  legend: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    flex: 1,
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 12px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.03)",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
  },

  category: {
    color: "#e2e8f0",
  },

  amount: {
    color: "#22c55e",
    fontWeight: "600",
  },
};