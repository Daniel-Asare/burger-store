import Navbar from 'components/pages/Navbar';
import PageLayout from 'components/pages/PageLayout';
import Section from 'components/pages/Section';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <PageLayout>
        <Route path="/" exact component={Section}/>
      

      </PageLayout>
      </Router>
    </div>
  );
}

export default App;
