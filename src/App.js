import './App.css';
import { Message } from './stories/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message mode={"success"} label="Success" />
        <Message mode={"error"} label="Error" />
        <Message mode={"warning"} label="Warning" />
      </header>
    </div>
  );
}

export default App;
