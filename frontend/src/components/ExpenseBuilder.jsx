import { useState } from "react";

export default function ExpenseBuilder() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const addCategory = () => {
    if (!name) return;

    setCategories([
      ...categories,
      {
        name,
        amount,
      },
    ]);

    setName("");
    setAmount(0);
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Expense Category Builder</h2>

      <input
        placeholder="Category name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />

      <input
        type="range"
        min="0"
        max="1000000"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={styles.slider}
      />

      <p style={{ color: "white" }}>
        Budget Amount: ${Number(amount).toLocaleString()}
      </p>

      <button onClick={addCategory} style={styles.button}>
        Add Category
      </button>

      {categories.map((cat, index) => (
        <div key={index} style={styles.category}>
          <span>{cat.name}</span>
          <span>${Number(cat.amount).toLocaleString()}</span>
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
    marginTop: "20px",
  },

  title: {
    color: "white",
    marginBottom: "15px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "none",
  },

  slider: {
    width: "100%",
    marginBottom: "10px",
  },

  button: {
    background: "#3b82f6",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
  },

  category: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    color: "#e2e8f0",
  },
};