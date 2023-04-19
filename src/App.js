import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import NewThisWeek from './components/New This Week/NewThisWeek';
import FFC from './components/FFC/FFC';
import GardeningCalendar from './components/GardeningCalendar/GardeningCalendar';
import FreshIdeas from './components/FreshIdeas/FreshIdeas';
import GiftCard from './components/GiftCard/GiftCard';
import Radio from './components/Radio/Radio';
import Blog from './components/Blog/Blog';
import SingleBlog from './components/Blog/SingleBlog';
import Partners from './components/Partners/Partners';
import Aboutus from './components/Aboutuspage/Aboutus';
import Seminars from './components/Seminar/Seminars';
import Clubs from './components/Clubs/Clubs';
import NewBlogPost from './components/AdminLogin/NewBlogPost';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/newthisweek' element={<NewThisWeek />}/>
       <Route path='/ffc' element={<FFC />}/>
       <Route path='/gardeningcalendar' element={<GardeningCalendar/>}/>
       <Route path='/freshideas' element={<FreshIdeas/>}/>
       <Route path='/giftcard' element={<GiftCard />}/>
       <Route path='/radio' element={<Radio />}/>
       <Route path='/blog' element={<Blog />}/>
       <Route path='/singleblog/:blogid' element={<SingleBlog />}/>
       <Route path='/partners' element={<Partners />}/>
       <Route path='/aboutus' element={<Aboutus />}/>
       <Route path='/seminars' element={<Seminars />}/>
       <Route path='/clubs' element={<Clubs />}/>
        <Route path='/newblogpost' element={<NewBlogPost/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
