import {Routes, Route, Navigate} from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from './store/authContext';
import Header from './components/Header/Header';
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
import AdminHome from './components/AdminPortal/AdminHome/AdminHome';
import NewBlogPost from './components/AdminPortal/BlogPosts/NewBlogPost/NewBlogPost';
import EditBlogPost from './components/AdminPortal/BlogPosts/EditBlogPost/EditBlogPost'
import LoginPage from './components/AdminPortal/LoginPage/LoginPage'
import Footer from './components/Footer/Footer';

import './App.css';

function App() {

  const authCtx = useContext(AuthContext);

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
        <Route path='/adminhome' element={authCtx.token ? <AdminHome /> : <Navigate to='/login'/>}/>
        <Route path='/newblogpost' element={authCtx.token ? <NewBlogPost /> : <Navigate to='/login'/>}/>
        <Route path='/editpost' element={authCtx.token ? <EditBlogPost /> : <Navigate to='/login'/>}/>
        <Route path='/login' element={!authCtx.token ? <LoginPage /> : <Navigate to='/adminhome'/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
