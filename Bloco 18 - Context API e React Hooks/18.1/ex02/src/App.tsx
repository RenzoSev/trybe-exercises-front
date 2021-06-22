import { RedditContextProvider } from './store/context/RedditContext';
import Header from './components/Header';
import Posts from './components/Posts';
import Refresh from './components/Refresh';

function App() {
  return (
    <RedditContextProvider>
      <div>
        <Header />
        <Refresh />
        <Posts />
      </div>
    </RedditContextProvider>
  );
}

export default App;
