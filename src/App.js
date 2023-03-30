import {Routes, Route, Navigate} from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
import NewThisWeek from './Components/New This Week/NewThisWeek';
import FFC from './Components/FFC/FFC';
import GardeningCalendar from './Components/GardeningCalendar/GardeningCalendar';
import FreshIdeas from './Components/FreshIdeas/FreshIdeas';
import GiftCard from './Components/GiftCard/GiftCard';
import Radio from './Components/Radio/Radio';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
