import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Sidebar from "./Components/Navbar/sidebar";
import Home from "./Components/Home/home";
import Footer from "./Components/Footerr/Footer";
import JobAvl from "./Components/Job/JobAvl";
import Intern from "./Components/Internships/Intern";
import JobDetail from "./Components/Job/JobDetail";
import InternDeatil from "./Components/Internships/InternDeatil";
import Register from "./Components/auth/Register";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./Feature/Userslice";
// import { auth } from "../../Firebase/firebase";
import { Profiler, useEffect } from "react";
import Profile from "./Components/profile/Profile";
import AdminLogin from "./Admin/AdminLogin";
import Adminpanel from "./Admin/Adminpanel";
import Postinternships from "./Admin/Postinternships";
import ViewAllApplication from "./Admin/ViewAllApplication";
import PostJOb from "./Admin/PostJob";
import DeatilApplication from "./Applications/DeatilApplication";
import DeatilApplicationUser from "./Applications/DeatilApplicationUser";
import UserApplicatiom from "./Components/profile/UserApplicatiom";
import { auth } from "./Firebase/firebase";

function App() {

  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
  
          uid:authUser.uid,
          photo:authUser.photoURL,
          name:authUser.displayName,
          email:authUser.email,
          phoneNumber:authUser.phoneNumber
        }))
      }
        else{
          dispatch(logout())
        }
    })
    },[dispatch] );

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/internship' element={<Intern />}/>
        <Route path='/Jobs' element={<JobAvl />}/>
        <Route path='/detailjob' element={<JobDetail/>}/>
        <Route path='/detailInternship' element={<InternDeatil />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/adminepanel' element={<Adminpanel />}/>
        <Route path='/postInternship' element={<Postinternships />}/>
        <Route path='/applications' element={<ViewAllApplication/>}/>
        <Route path='/postJob' element={<PostJOb/>}/>
        <Route path='/detailApplication' element={<DeatilApplication/>}/>
        <Route path='/UserapplicationDetail' element={< DeatilApplicationUser/>}/>
        <Route path='/userapplication' element={<UserApplicatiom/>}/>


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
