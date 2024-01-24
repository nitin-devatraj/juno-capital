import CreateCustomer from "../src/features/customers/CreateCustomer";
import Customer from "../src/features/customers/Customer";
import AccountOperations from "../src/features/accounts/AccountOperations";
import BalanceDisplay from "../src/features/accounts/BalanceDisplay";

function App() {
  return (
    <div>
      <h1>Juno Capital</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
