import { useState } from "react";

export default function IncomeOverview({ income = 6000000 }) {
  const [buckets, setBuckets] = useState({
    bills: [
      { name: "Mortgage", amount: 1500 },
      { name: "Utilities", amount: 200 },
      { name: "Internet & Cable TV", amount: 70 },
      { name: "Phone", amount: 50 },
      { name: "Insurance (Health, Home)", amount: 250 },
      { name: "Student Loan", amount: 350 },
      { name: "Child Education", amount: 450 },
    ],

    needs: [
      { name: "Groceries", amount: 400 },
      { name: "Medical", amount: 100 },
      { name: "Transport", amount: 300 },
    ],

    personal: [
      { name: "Entertainment", amount: 300 },
      { name: "Gym", amount: 120 },
      { name: "Shopping", amount: 250 },
      { name: "Personal Needs", amount: 200 },
    ],
  });

  const [newCategory, setNewCategory] = useState("");
  const [selectedBucket, setSelectedBucket] = useState("personal");

  const updateAmount = (bucket, index, value) => {
    const updated = { ...buckets };
    updated[bucket][index].amount = Number(value);
    setBuckets(updated);
  };

  const addCategory = () => {
    if (!newCategory.trim()) return;

    const updated = { ...buckets };

    updated[selectedBucket].push({
      name: newCategory,
      amount: 0,
    });

    setBuckets(updated);
    setNewCategory("");
  };

  const sum = (bucket) =>
    buckets[bucket].reduce((acc, item) => acc + item.amount, 0);

  const totalSpent = sum("bills") + sum("needs") + sum("personal");

  const remaining = income - totalSpent;

  const percent = ((totalSpent / income) * 100).toFixed(1);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Budget Intelligence</h1>

      <p style={styles.subtitle}>LIVE BUDGET TRACKING</p>

      {/* SUMMARY */}
      <div style={styles.summaryGrid}>
        <SummaryCard
          title="Income"
          value={`$${income.toLocaleString()}`}
          color="#22c55e"
        />

        <SummaryCard
          title="Total Spent"
          value={`$${totalSpent.toLocaleString()}`}
          color="#ef4444"
        />

        <SummaryCard
          title="Remaining"
          value={`$${remaining.toLocaleString()}`}
          color="#3b82f6"
        />

        <SummaryCard
          title="Budget Usage"
          value={`${percent}%`}
          color="#f59e0b"
        />
      </div>

      {/* PROGRESS */}
      <div style={styles.progressCard}>
        <div style={styles.rowBetween}>
          <h3 style={{ color: "white" }}>Monthly Budget Progress</h3>
          <span style={{ color: "white" }}>{percent}%</span>
        </div>

        <div style={styles.progressBar}>
          <div
            style={{
              ...styles.progressFill,
              width: `${Math.min(percent, 100)}%`,
            }}
          />
        </div>

        <p style={styles.progressText}>
          ${totalSpent.toLocaleString()} spent out of $
          {income.toLocaleString()}
        </p>

        {percent > 70 && (
          <div style={styles.warning}>
            ⚠️ You are nearing your budget!
          </div>
        )}
      </div>

      {/* ADD CATEGORY */}
      <div style={styles.addBox}>
        <h3 style={{ marginBottom: "15px", color: "white" }}>
          Expense Category Builder
        </h3>

        <div style={styles.addRow}>
          <input
            style={styles.input}
            placeholder="Search / Add category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />

          <select
            style={styles.select}
            value={selectedBucket}
            onChange={(e) => setSelectedBucket(e.target.value)}
          >
            <option value="bills">Bills</option>
            <option value="needs">Needs</option>
            <option value="personal">Personal Needs</option>
          </select>

          <button style={styles.button} onClick={addCategory}>
            + Add Category
          </button>
        </div>
      </div>

      {/* BUCKETS */}
      <div style={styles.grid}>
        <BucketSection
          title="Bills"
          subtitle="Recurring monthly obligations"
          data={buckets.bills}
          total={sum("bills")}
          color="#ef4444"
          onChange={(i, v) => updateAmount("bills", i, v)}
        />

        <BucketSection
          title="Needs"
          subtitle="Everyday essential spending"
          data={buckets.needs}
          total={sum("needs")}
          color="#f59e0b"
          onChange={(i, v) => updateAmount("needs", i, v)}
        />

        <BucketSection
          title="Personal Needs"
          subtitle="Lifestyle & flexible spending"
          data={buckets.personal}
          total={sum("personal")}
          color="#3b82f6"
          onChange={(i, v) => updateAmount("personal", i, v)}
        />
      </div>
    </div>
  );
}

/* ================= BUCKET ================= */

function BucketSection({ title, subtitle, data, total, color, onChange }) {
  return (
    <div style={styles.bucket}>
      <div style={styles.bucketHeader}>
        <div>
          <h2 style={{ margin: 0, color: "white" }}>{title}</h2>
          <p style={styles.bucketSubtitle}>{subtitle}</p>
        </div>

        <div style={{ ...styles.totalBadge, background: color }}>
          ${total}
        </div>
      </div>

      {data.map((item, i) => (
        <div key={i} style={styles.itemCard}>
          <div style={styles.rowBetween}>
            <span style={{ color: "white" }}>{item.name}</span>
            <strong style={{ color: "white" }}>${item.amount}</strong>
          </div>

          <input
            type="range"
            min="0"
            max="5000"
            value={item.amount}
            onChange={(e) => onChange(i, e.target.value)}
            style={styles.slider}
          />
        </div>
      ))}
    </div>
  );
}

/* ================= SUMMARY CARD ================= */

function SummaryCard({ title, value, color }) {
  return (
    <div
      style={{
        ...styles.summaryCard,
        borderLeft: `5px solid ${color}`,
      }}
    >
      <p style={{ color: "white", opacity: 0.7 }}>{title}</p>
      <h2 style={{ color: "white", margin: 0 }}>{value}</h2>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    color: "white",
    width: "100%",
  },

  title: {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "5px",
    color: "white",
  },

  subtitle: {
    color: "#cbd5e1",
    marginBottom: "25px",
  },

  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
    marginBottom: "25px",
  },

  summaryCard: {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "18px",
  },

  progressCard: {
    background: "#0f172a",
    padding: "22px",
    borderRadius: "18px",
    marginBottom: "25px",
  },

  progressBar: {
    width: "100%",
    height: "12px",
    background: "#1e293b",
    borderRadius: "999px",
    overflow: "hidden",
    marginTop: "10px",
  },

  progressFill: {
    height: "100%",
    background: "#3b82f6",
  },

  progressText: {
    marginTop: "10px",
    color: "#e2e8f0",
  },

  warning: {
    marginTop: "15px",
    background: "rgba(239,68,68,0.15)",
    color: "#fecaca",
    padding: "12px",
    borderRadius: "12px",
  },

  addBox: {
    background: "#0f172a",
    padding: "22px",
    borderRadius: "18px",
    marginBottom: "25px",
  },

  addRow: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },

  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "#111827",
    color: "white",
  },

  select: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "#111827",
    color: "white",
  },

  button: {
    padding: "12px 16px",
    borderRadius: "10px",
    background: "#3b82f6",
    color: "white",
    border: "none",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "20px",
  },

  bucket: {
    background: "#0f172a",
    borderRadius: "18px",
    padding: "20px",
  },

  bucketHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },

  bucketSubtitle: {
    color: "rgba(255,255,255,0.7)",
    marginTop: "5px",
    fontSize: "14px",
  },

  totalBadge: {
    padding: "8px 12px",
    borderRadius: "999px",
    color: "white",
  },

  itemCard: {
    background: "#111827",
    padding: "14px",
    borderRadius: "14px",
    marginBottom: "12px",
  },

  rowBetween: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },

  slider: {
    width: "100%",
    accentColor: "#3b82f6",
  },
};