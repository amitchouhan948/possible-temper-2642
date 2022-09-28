import './App.css';
import Feeds from './components/feeds/Feeds';
import { LeftSidebar } from './components/LeftBar/LeftSidebar';

function App() {
  return (
    <div className="App">
      <Feeds />
      <LeftSidebar />
    </div>
  );
}

export default App;
