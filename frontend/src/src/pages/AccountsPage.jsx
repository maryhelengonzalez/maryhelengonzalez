import CashAccounts from "../components/CashAccounts";
import InvestmentAccounts from "../components/InvestmentAccounts";
import CreditCards from "../components/CreditCards";
import LoanAccounts from "../components/LoanAccounts";

export default function AccountsPage() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Accounts Overview</h1>

      <div style={styles.grid}>
        <CashAccounts />
        <InvestmentAccounts />
        <CreditCards />
        <LoanAccounts />
      </div>
    </div>
  );
}

const styles = {
  page: {
    color: "white",
    padding: "30px",
  },

  title: {
    fontSize: "34px",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "15px",
  },
};