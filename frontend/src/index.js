import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {LandingPage} from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import {Registration} from "./pages/Registration";
import UserProfile from "./pages/UserProfile";
import LoginPage from "./pages/LoginPage";
import UserProvider, {useUser} from "./context/userProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <UserProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route path='/registration' element={<Registration/>}/>
                    <Route path='/chat-user-profile' element={<UserProfile/>}/>
                </Routes>
                <Routes>
                    <Route path='/main' element={<MainPage/>}/>
                </Routes>
                <Routes>
                    <Route path='/login' element={<LoginPage/>}/>
                </Routes>
            </Router>
        </UserProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
