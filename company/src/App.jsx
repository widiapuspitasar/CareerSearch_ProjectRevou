import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Aboutus from './pages/user/userpage/aboutuspage';
import Signup from './pages/user/userpage/signup';
import Login from './pages/user/userpage/login';
import Mainpage from './pages/user/mainpage/mainpage';
import Detailpage from './pages/user/mainpage/detailpage';
import Profile from './pages/user/mainpage/profilepage';
import Community from './pages/user/mainpage/community/communitypage';
import Blog from './pages/user/mainpage/blog/blogpage';
import Detailblog from './pages/user/mainpage/blog/detailblogpage';
import Editprofile from './pages/user/mainpage/editprofilepage';
import Favorite from './pages/user/mainpage/favoritepage';
import Appliedjobs from './pages/user/mainpage/appliedjobspage';
import Jobsdetail from './pages/user/mainpage/jobsdetailpage';
import Signyourcompany from './pages/company/signyourcompany';
import Logincompany from './pages/company/logincompany';
import Signupcompany from './pages/company/signupcompany';
import Mainpagecompany from './pages/company/mainpagecompany';
import Postjob from './pages/company/postjob';
import Profile2 from './pages/company/profile';
import Jobdetailcompany from './pages/company/jobdetailcompany';
import Profilecompany from './pages/company/profilecompany';
import '../src/App.css'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mainpage" element={<Mainpage />} />
      <Route path="/detailpage" element={<Detailpage />} />
      <Route path="/profilepage" element={<Profile />} />
      <Route path="/editprofilepage" element={<Editprofile />} />
      <Route path="/communitypage" element={<Community />} />
      <Route path="/blogpage" element={<Blog />} />
      <Route path="/detailblogpage" element={<Detailblog />} />
      <Route path="/favoritepage" element={<Favorite />} />
      <Route path="/appliedjobspage" element={<Appliedjobs />} />
      <Route path="/jobsdetailpage" element={<Jobsdetail />} />
      <Route path="/signyourcompany" element={<Signyourcompany />} />
      <Route path="/logincompany" element={<Logincompany />} />
      <Route path="/signupcompany" element={<Signupcompany />} />
      <Route path="/mainpagecompany" element={<Mainpagecompany />} />
      <Route path="/profile" element={<Profile2 />} />
      <Route path="/postjob" element={<Postjob />} />
      <Route path="/jobdetailcompany" element={<Jobdetailcompany />} />
      <Route path="/profilecompany" element={<Profilecompany />} />
    </Routes>
  </Router>
  );
}

export default App;

