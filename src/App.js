import CreateCustomer from "../src/features/customers/CreateCustomer";
import Customer from "../src/features/customers/Customer";
import AccountOperations from "../src/features/accounts/AccountOperations";
import BalanceDisplay from "../src/features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);
  return (
    <div>
      <h1>
        <img src="/exchange.png" alt="logo" /> Juno Capital
      </h1>

      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
