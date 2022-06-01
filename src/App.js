// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home'
import About from './Component/About/About';
import Albums from './Component/Albums/Albums';
import Friends from './Component/Friends/Friends';
import NotFound from './Component/NotFound/NotFound';
import FriendDetails from './Component/FriendDetails/FriendDetails';
import Posts from './Component/Posts/Posts';
import PostDetails from './Component/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
    <h1>Welcome to react route!</h1>
    <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Albums' element={<Albums></Albums>}/>
          <Route path='/Friends' element={<Friends></Friends>}/>
          <Route path='/Friend/:friendID' element={<FriendDetails></FriendDetails>}/>
          <Route path='/Posts' element={<Posts></Posts>}>
            <Route path=':postId' element={<PostDetails></PostDetails>}></Route>
          </Route>
          <Route path='/*' element={<NotFound></NotFound>}/>
        </Routes>
    </div>
  );
}

export default App;
