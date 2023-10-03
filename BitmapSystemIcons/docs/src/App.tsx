import './App.css';
import { Stack } from 'react-bootstrap';
import SiteNavigation from './components/SiteNavigation';
import Introduction from './components/Introduction';
import Usage from './components/Usage';
import Methods from './components/Methods';
import Icons from './components/Icons';

function App() {
  return (
    <div className="App" style={{paddingBottom: "50vh"}}>
      <SiteNavigation />
      <Stack gap={5}>
        <Introduction />
        <Usage />
        <Methods />
        <Icons />
      </Stack>
    </div>
  );
}

export default App;
