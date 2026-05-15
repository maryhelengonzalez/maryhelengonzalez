import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function DashboardPage({
  income,
  budget,
  savings,
}) {
  /* ================= STATE (EDITABLE ACCOUNTS) ================= */

  const [accounts, setAccounts] = useState([
    {
      type: "Cash Accounts",
      sub: "Everyday money & savings",
      total: 32700,
      items: [
        { label: "Checking (...4821)", value: 5200 },
        { label: "Business Checking (...1934)", value: 12500 },
        { label: "Savings (...7742)", value: 15000 },
      ],
    },
    {
      type: "Investments",
      sub: "Long-term portfolio growth",
      total: 80000,
      items: [
        { label: "Brokerage (...9021)", value: 48000 },
        { label: "401k (...6610)", value: 32000 },
      ],
    },
    {
      type: "Credit Cards",
      sub: "Spending & utilization",
      total: 3600,
      items: [
        { label: "Chase Sapphire", value: 1200 },
        { label: "Amex Gold", value: 2400 },
      ],
    },
    {
      type: "Loan Accounts",
      sub: "Outstanding liabilities",
      total: 206000,
      items: [
        { label: "Student Loan", value: 12000 },
        { label: "Mortgage", value: 180000 },
        { label: "Car Loan", value: 14000 },
      ],
    },
  ]);

  /* ================= PIE STATE (EDITABLE) ================= */

  const [spendingData, setSpendingData] = useState([
    { name: "Rent", value: 1800 },
    { name: "Food", value: 600 },
    { name: "Transport", value: 250 },
    { name: "Subscriptions", value: 90 },
    { name: "WiFi", value: 90 },
  ]);

  const trendData = [
    { month: "Jan", spending: 2200 },
    { month: "Feb", spending: 2600 },
    { month: "Mar", spending: 2100 },
    { month: "Apr", spending: 3000 },
    { month: "May", spending: 2800 },
    { month: "Jun", spending: 3986 },
  ];

  const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6" , "#f45cf6", "#f5ed0b"];

  /* ================= ACCOUNT HANDLERS ================= */

  const updateItem = (catIndex, itemIndex, field, value) => {
    const updated = [...accounts];
    updated[catIndex].items[itemIndex][field] =
      field === "value" ? Number(value) : value;
    setAccounts(updated);
  };

  const addItem = (catIndex) => {
    const updated = [...accounts];
    updated[catIndex].items.push({
      label: "New Account",
      value: 0,
    });
    setAccounts(updated);
  };

  const removeItem = (catIndex, itemIndex) => {
    const updated = [...accounts];
    updated[catIndex].items.splice(itemIndex, 1);
    setAccounts(updated);
  };

  /* ================= PIE HANDLERS ================= */

  const updatePie = (index, field, value) => {
  setSpendingData((prev) => {
    const updated = [...prev];
    updated[index] = {
      ...updated[index],
      [field]: field === "value" ? Number(value) : value,
    };
    return updated;
  });
};

  const addPieItem = () => {
    setSpendingData([
      ...spendingData,
      { name: "New Category", value: 0 },
    ]);
  };

  const removePieItem = (index) => {
    const updated = [...spendingData];
    updated.splice(index, 1);
    setSpendingData(updated);
  };

  return (
    <div style={styles.page}>
      {/* ================= HERO ================= */}

      <div style={styles.hero}>
        <div>
          <h1 style={styles.title}>FinPilot AI Dashboard</h1>
          <p style={styles.subtitle}>
            Monitor your financial activity, spending behavior,
            savings growth, and AI insights.
          </p>
        </div>

        <div style={styles.liveBadge}>● Live Financial Preview</div>
      </div>

      {/* ================= KPI ================= */}

      <div style={styles.kpiGrid}>
        <div style={styles.kpiCard}>
          <span>Income</span>
          <h2>${income.toLocaleString()}</h2>
        </div>

        <div style={styles.kpiCard}>
          <span>Expenses</span>
          <h2>${budget.toLocaleString()}</h2>
        </div>

        <div style={styles.kpiCard}>
          <span>Savings</span>
          <h2>${savings.toLocaleString()}</h2>
        </div>
      </div>

      {/* ================= ACCOUNTS ================= */}

      <div style={styles.card}>
        <h2>Accounts Overview</h2>
        <p style={{ color: "#94a3b8" }}>LIVE CONNECTED</p>

      <div style={styles.accountGrid}>

  {accounts.map((acc, ci) => (
    <div className="accountCard" style={styles.glassCard}>
      <div style={styles.cardTop}>
        <h3 style={styles.accountTitle}>{acc.type}</h3>
        <span style={styles.livePill}>LIVE</span>
      </div>

      <p style={styles.accountSub}>{acc.sub}</p>

      <div style={styles.total}>
        $
        {acc.items
          .reduce((a, b) => a + b.value, 0)
          .toLocaleString()}
      </div>

      {acc.items.map((item, ii) => (
        <div key={ii} style={styles.row}>
          <span style={styles.label}>{item.label}</span>
          <span style={styles.amount}>
            ${item.value.toLocaleString()}
          </span>

          <button
            onClick={() => removeItem(ci, ii)}
            style={styles.deleteBtn}
          >
            ✕
          </button>
        </div>
      ))}

      <button onClick={() => addItem(ci)} style={styles.addBtn}>
        + Add
      </button>
    </div>
  ))}

</div>
      </div>

      {/* ================= PIE ================= */}

      <div style={styles.card}>
        <h2>Spending Breakdown</h2>

        <div style={styles.accountGrid}>
          <div style={{ height: 320 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={spendingData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                >
                  {spendingData.map((_, i) => (
                    <Cell
                      key={i}
                      fill={COLORS[i % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div>
            {spendingData.map((item, i) => (
  <div key={`${item.name}-${i}`} style={styles.row}>
    <input
      value={item.name}
      onChange={(e) => updatePie(i, "name", e.target.value)}
      style={styles.input}
    />

    <input
      value={item.value}
      type="number"
      onChange={(e) => updatePie(i, "value", e.target.value)}
      style={styles.inputSmall}
    />

    <button
      onClick={() => removePieItem(i)}
      style={styles.removeBtn}
    >
      ✕
    </button>
  </div>
))}

            <button onClick={addPieItem} style={styles.addBtn}>
              + Add Category
            </button>
          </div>
        </div>
      </div>

      {/* ================= TREND ================= */}

      <div style={styles.card}>
        <h2>Monthly Spending Trend</h2>

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={trendData}>
            <CartesianGrid stroke="#1f2937" />
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Area
              dataKey="spending"
              stroke="#3b82f6"
              fill="#3b82f6"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: { color: "white", padding: 20 },

  hero: { display: "flex", justifyContent: "space-between" },

  title: { fontSize: 36 },

  subtitle: { color: "#94a3b8" },

  liveBadge: {
    background: "#1e293b",
    padding: 10,
    borderRadius: 20,
    color: "#22c55e",
  },

  kpiGrid: { display: "flex", gap: 10, marginTop: 20 },

  kpiCard: {
    flex: 1,
    background: "#111827",
    padding: 20,
    borderRadius: 12,
  },

  card: {
    background: "#0f172a",
    padding: 20,
    marginTop: 20,
    borderRadius: 16,
  },

  accountGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 12,
    marginTop: 10,
  },

  glassCard: {
    background: "#111827",
    padding: 14,
    borderRadius: 14,
  },

  row: {
    display: "flex",
    gap: 6,
    marginBottom: 6,
  },

  input: {
    flex: 1,
    padding: 6,
    background: "#0f172a",
    border: "1px solid #334155",
    color: "white",
  },

  inputSmall: {
    width: 80,
    padding: 6,
    background: "#0f172a",
    border: "1px solid #334155",
    color: "white",
  },

  addBtn: {
    marginTop: 10,
    padding: 8,
    background: "#22c55e",
    border: "none",
    color: "black",
    borderRadius: 8,
  },

  removeBtn: {
    background: "#ef4444",
    border: "none",
    color: "white",
    padding: "0 8px",
    borderRadius: 6,
  },
  glassCard: {
  background: "rgba(15, 23, 42, 0.55)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "16px",
  backdropFilter: "blur(16px)",
  transition: "all 0.25s ease",
  cursor: "pointer",
  boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
},

/* 👇 hover glow (IMPORTANT) */


cardTop: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "6px",
},

accountTitle: {
  fontSize: "15px",
  margin: 0,
  fontWeight: "600",
},

accountSub: {
  fontSize: "12px",
  color: "#94a3b8",
  marginBottom: "10px",
},

total: {
  fontSize: "24px",
  fontWeight: "700",
  color: "#3b82f6",
  marginBottom: "12px",
},

row: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "6px 0",
  fontSize: "13px",
  borderBottom: "1px solid rgba(255,255,255,0.05)",
},

label: {
  color: "#cbd5e1",
},

amount: {
  color: "#ffffff",
  fontWeight: "500",
},

livePill: {
  fontSize: "10px",
  padding: "4px 8px",
  borderRadius: "999px",
  background: "rgba(34,197,94,0.15)",
  color: "#22c55e",
},

addBtn: {
  marginTop: "10px",
  width: "100%",
  padding: "8px",
  borderRadius: "10px",
  border: "1px solid rgba(34,197,94,0.3)",
  background: "rgba(34,197,94,0.1)",
  color: "#22c55e",
  cursor: "pointer",
},

deleteBtn: {
  background: "transparent",
  border: "none",
  color: "#ef4444",
  cursor: "pointer",
  fontSize: "14px",
},
};