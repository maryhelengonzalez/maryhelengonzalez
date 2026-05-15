export default function Sidebar({ setPage }) {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>FinPilot</h2>

      <button style={styles.item} onClick={() => setPage("dashboard")}>
        Dashboard
      </button>

      <div style={styles.dropdownTitle}>Analytics</div>

      <button style={styles.subItem} onClick={() => setPage("income")}>
        Income Overview
      </button>

      <button style={styles.subItem} onClick={() => setPage("transactions")}>
        Transactions
      </button>

       <button style={styles.subItem} onClick={() => setPage("analytics")}>
        analytics
      </button>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "260px",
    height: "100vh",
    background: "#0a0f1c",
    color: "white",
    padding: "20px",
    position: "fixed",
  },

  logo: {
    fontSize: "20px",
    marginBottom: "20px",
    color: "white",
  },

  item: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    background: "transparent",
    color: "white",
    border: "none",
    textAlign: "left",
    cursor: "pointer",
  },

  dropdownTitle: {
    marginTop: "20px",
    fontSize: "12px",
    opacity: 0.6,
  },

  subItem: {
    width: "100%",
    padding: "8px 10px",
    marginTop: "6px",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    border: "none",
    textAlign: "left",
    borderRadius: "8px",
    cursor: "pointer",
  },
};