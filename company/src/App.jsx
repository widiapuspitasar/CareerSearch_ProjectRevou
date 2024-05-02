import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Yourcompanypage from './pages/user/userpage/yourcompanypage';
import Aboutus from './pages/user/userpage/aboutuspage';
import Signup from './pages/user/userpage/signup';
import Login from './pages/user/userpage/login';
import Mainpage from './pages/user/mainpage/mainpage';
import Detailpage from './pages/user/mainpage/detailpage';
import Profile from './pages/user/mainpage/profilepage';
import Community from './pages/user/mainpage/community/communitypage';
import Blog from './pages/user/mainpage/blog/blogpage';
import Editprofile from './pages/user/mainpage/editprofilepage';
import Favorite from './pages/user/mainpage/favoritepage';
import Appliedjobs from './pages/user/mainpage/appliedjobspage';
import Jobsdetail from './pages/user/mainpage/jobsdetailpage';
import Signyourcompany from './pages/company/signyourcompany';
import Logincompany from './pages/company/logincompany';
import Signupcompany from './pages/company/signupcompany';
import '../src/App.css'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/yourcompany" element={<Yourcompanypage />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mainpage" element={<Mainpage />} />
      <Route path="/detailpage" element={<Detailpage />} />
      <Route path="/profilepage" element={<Profile />} />
      <Route path="/editprofilepage" element={<Editprofile />} />
      <Route path="/communitypage" element={<Community />} />
      <Route path="/blogpage" element={<Blog />} />
      <Route path="/favoritepage" element={<Favorite />} />
      <Route path="/appliedjobspage" element={<Appliedjobs />} />
      <Route path="/jobsdetailpage" element={<Jobsdetail />} />
      <Route path="/signyourcompany" element={<Signyourcompany />} />
      <Route path="/logincompany" element={<Logincompany />} />
      <Route path="/signupcompany" element={<Signupcompany />} />
    </Routes>
  </Router>
  );
}

export default App;

