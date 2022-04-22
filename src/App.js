import {
  BrowserRouter as Router,
  Route,
  Routes
  // NavLink
} from 'react-router-dom';
import Header from './components/Header';
// import Card from './components/shared/Card';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
// import Post from './components/Post';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

// #Example of data fetch without useContext hook
// import FeedbackData from './data/FeedbackData';

function App() {
  // #Example of data fetch without useContext hook
  // const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />

            {/* #Post ComponentExample */}
            {/* <Route path='/post/*' element={<Post />} /> */}

            {/* #NavLink Example */}
            {/* <Card>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
          </Card> */}
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );

  // test comment 2
}

export default App;
