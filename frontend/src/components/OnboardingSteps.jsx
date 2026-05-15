import { useEffect, useState } from "react";

const STORAGE_KEY = "onboarding_wizard_v3";

export default function OnboardingSteps() {
  const [steps, setSteps] = useState([
    { id: 1, label: "Link your bank account", done: false },
    { id: 2, label: "Enter your income", done: false },
    { id: 3, label: "Budget your expenses", done: false },
  ]);

  const [modal, setModal] = useState(null);
  const [income, setIncome] = useState("");
  const [budget, setBudget] = useState("");

  /* ---------------- LOAD ---------------- */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setSteps(JSON.parse(saved));
  }, []);

  /* ---------------- SAVE ---------------- */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(steps));
  }, [steps]);

  const canAccess = (id) => id === 1 || steps[id - 2]?.done;

  const openStep = (step) => {
    if (!canAccess(step.id)) return;
    setModal(step.id);
  };

  const completeStep = (id) => {
    setSteps((prev) =>
      prev.map((s) => (s.id === id ? { ...s, done: true } : s))
    );
    setModal(null);
  };

  /* ---------------- SAVE + SYNC FIX ---------------- */
  const saveIncome = () => {
    const value = Number(income) || 0;
    localStorage.setItem("user_income", value);
    window.dispatchEvent(new Event("storage"));
    completeStep(2);
  };

  const saveBudget = () => {
    const value = Number(budget) || 0;
    localStorage.setItem("user_budget", value);
    window.dispatchEvent(new Event("storage"));
    completeStep(3);
  };

  const progress =
    Math.round((steps.filter((s) => s.done).length / steps.length) * 100);

  return (
    <div style={container}>
      <div style={promoBox}>
        <h3>🎁 Free Trial Boost</h3>
        <p>Complete onboarding to unlock 1 extra free month</p>

        <p style={{ color: "#94a3b8", marginTop: "8px" }}>
          Progress: {progress}%
        </p>

        <div style={barOuter}>
          <div style={{ ...barFill, width: `${progress}%` }} />
        </div>
      </div>

      <div style={stepsRow}>
        {steps.map((step) => {
          const locked = !canAccess(step.id);

          return (
            <div
              key={step.id}
              onClick={() => openStep(step)}
              style={{
                ...stepBox,
                opacity: locked ? 0.3 : 1,
                cursor: locked ? "not-allowed" : "pointer",
              }}
            >
              <div
                style={{
                  ...circle,
                  background: step.done ? "#22c55e" : "#334155",
                }}
              >
                {step.done ? "✓" : step.id}
              </div>
              <p style={{ color: "#94a3b8", marginTop: "8px" }}>
                {step.label}
              </p>
            </div>
          );
        })}
      </div>

      {modal && (
        <div style={overlay}>
          <div style={modalBox}>
            {modal === 1 && (
              <>
                <h3>Connect Bank Account</h3>
                <button onClick={() => completeStep(1)} style={btn}>
                  Connect
                </button>
              </>
            )}

            {modal === 2 && (
              <>
                <h3>Enter Income</h3>
                <input
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  style={input}
                />
                <button onClick={saveIncome} style={btn}>
                  Save
                </button>
              </>
            )}

            {modal === 3 && (
              <>
                <h3>Enter Budget</h3>
                <input
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  style={input}
                />
                <button onClick={saveBudget} style={btn}>
                  Save
                </button>
              </>
            )}

            <button onClick={() => setModal(null)} style={closeBtn}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const container = {
  background: "#0f172a",
  padding: "20px",
  borderRadius: "16px",
  marginBottom: "20px",
};

const promoBox = {
  background: "#1e293b",
  padding: "15px",
  borderRadius: "12px",
  marginBottom: "15px",
};

const stepsRow = { display: "flex", gap: "10px" };

const stepBox = { flex: 1, textAlign: "center" };

const circle = {
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  margin: "0 auto",
};

const barOuter = {
  width: "100%",
  height: "8px",
  background: "#334155",
  borderRadius: "10px",
  marginTop: "10px",
};

const barFill = {
  height: "100%",
  background: "#3b82f6",
  transition: "0.3s ease",
};

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalBox = {
  background: "#0f172a",
  padding: "20px",
  borderRadius: "12px",
  width: "300px",
};

const input = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  marginBottom: "10px",
};

const btn = {
  width: "100%",
  padding: "10px",
  background: "#3b82f6",
  border: "none",
  color: "white",
};

const closeBtn = {
  marginTop: "10px",
  width: "100%",
  padding: "8px",
  background: "#334155",
  border: "none",
  color: "white",
};