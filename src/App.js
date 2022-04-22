import { v4 as uuidv4 } from 'uuid';
import {
  BrowserRouter as Router,
  Route,
  Routes
  // NavLink
} from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
// import Card from './components/shared/Card';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
// import Post from './components/Post';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

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
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats />
                  <FeedbackList handleDelete={deleteFeedback} />
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
