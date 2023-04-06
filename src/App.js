
import './App.css';
// import { Alert } from './components/Alert/Alert';
// import { LoginButton, FollowButton } from './components/Buttons';
// import Counter from './components/Counter/Counter';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  return (
    <div className="App">
      
      <h1>Component State</h1>
      {/* <Counter initialValue={10} /> */}
      <Dropdown/>
        {/* <Alert variant="info">
          Would you like to browse our recommended products?
        </Alert>
        <Alert variant="error" outlined>
          There was an error during your last transaction
        </Alert>
        <Alert variant="success" elevated>
          Payment received, thank you for your purchase
        </Alert>
        <Alert variant="warning" outlined elevated>
          Please update your profile contact information
      </Alert>
      <LoginButton/>
      <FollowButton/> */}

    </div>
  );
}

export default App;
