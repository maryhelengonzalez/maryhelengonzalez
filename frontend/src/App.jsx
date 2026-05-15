import { useState, useEffect } from "react";

import Sidebar from "./components/layout/Sidebar";

import DashboardPage from "./pages/DashboardPage";
import IncomeOverview from "./pages/IncomeOverview";
import OverviewPage from "./pages/OverviewPage";
import AnalyticsPage from "./pages/AnalyticsPage";


/* ================= FREE TRIAL BANNER ================= */

function FreeTrialBanner({ income, setIncome, budget, setBudget }) {
  return (
    <div style={styles.banner}>
      <div>
        <h3 style={{ margin: 0, color: "white" }}>🚀 Free Trial Active</h3>

        <p style={{ margin: 0, opacity: 0.7, color: "#cbd5e1" }}>
          Enter values to simulate your financial outcome
        </p>

        <div style={styles.row}>
          <input
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            style={styles.input}
            placeholder="Income"
          />

          <input
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            style={styles.input}
            placeholder="Expenses"
          />
        </div>
      </div>

      <span style={styles.badge}>LIVE</span>
    </div>
  );
}

/* ================= APP ================= */

export default function App() {
  const [page, setPage] = useState("dashboard");

  const [income, setIncome] = useState(10000);
  const [budget, setBudget] = useState(3000);

  const savings = income - budget;

  useEffect(() => {
    const sync = () => {
      setIncome(Number(localStorage.getItem("user_income")) || 10000);
      setBudget(Number(localStorage.getItem("user_budget")) || 3000);
    };

    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const renderPage = () => {
    if (page === "dashboard") {
      return (
        <DashboardPage
          income={income}
          budget={budget}
          savings={savings}
        />
      );
    }

    if (page === "income") {
      return <IncomeOverview income={income} />;
    }

    if (page === "transactions") {
      return <OverviewPage />;
    }

    if (page === "analytics") {
      return <AnalyticsPage />;
    }

    return (
      <DashboardPage
        income={income}
        budget={budget}
        savings={savings}
      />
    );
  };

  return (
    <div style={styles.app}>
      <Sidebar setPage={setPage} />

      <div style={styles.main}>
        <FreeTrialBanner
          income={income}
          setIncome={setIncome}
          budget={budget}
          setBudget={setBudget}
        />

        {renderPage()}
      </div>
    </div>
  );
}

/* ================= STYLES (CLEAN MODERN DARK FINTECH) ================= */

const styles = {
  app: {
    display: "flex",
    background: "#020617",
    minHeight: "100vh",
    color: "white",
    fontFamily: "Inter, sans-serif",
  },

  main: {
    flex: 1,
    marginLeft: "260px",
    padding: "24px",
    width: "calc(100% - 260px)",
  },

  banner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    marginBottom: "20px",
  },

  row: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },

  input: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.04)",
    color: "white",
    width: "140px",
    outline: "none",
  },

  badge: {
    background: "#3b82f6",
    padding: "8px 12px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600",
    color: "white",
  },
};