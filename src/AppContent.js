import LandingPage from "./LandingPage/LandingPage";
import SignIn from "./SignIn/SignIn";
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import SignUp from "./SignUp/SignUp";
import Cookies from "js-cookie";
import Jobs from "./Jobs/Jobs";
import JobCreate from "./DBComponent/JobCreate/JobCreate";
import JobList from "./DBComponent/JobList/JobList";
import JobEdit from "./DBComponent/JobEdit/JobEdit";
import Layout2 from "./Layout2";
import Profile from "./Profile/Profile";

function AppContent() {

    const LoginRoute = (props) => {
    if (Cookies.get('token') !== undefined) {
        Navigate('/')
    } else if (Cookies.get('token') === undefined) {
        return props.children
    }

}
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <Layout>
                <LandingPage/>
                </Layout>
            }/>
            <Route path="/login" element={
            <LoginRoute>
                <Layout>
                <SignIn/>
                </Layout>
            </LoginRoute>
            }/>
            <Route path="/signup" element={
                <Layout>
                <SignUp/>
                </Layout>
            }/>
            <Route path="/dashboard" element={
                <Layout2>
                    <Dashboard/>
                </Layout2>
            }/>
            <Route path="/jobs" element={
                <Layout>
                <Jobs/>
                </Layout>
            }/>
            <Route path="/dashboard/job-create/:id?" element={
                <Layout2>
                    <JobCreate/>
                </Layout2>
                
            }/>
            <Route path="/dashboard/job-list" element={
                <Layout2>
                    <JobList/>
                </Layout2>
            }/>
            <Route path="/dashboard/user-profile" element={
                <Layout2>
                    <Profile/>
                </Layout2>
            }/>
        </Routes>
        </BrowserRouter>
    );
}

export default AppContent;
