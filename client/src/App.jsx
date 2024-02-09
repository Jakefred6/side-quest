// App.jsx
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard, Login, Logout, NotFound, Profile, Quest, QuestInfo} from "./pages";
import {Main} from "./layouts";

function App() {
    localStorage.setItem('token', 'test_token');
    const token = localStorage.getItem('token');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                {token !== null ? (
                    <Route path="/" element={<Main/>}>
                        <Route exact path="/" element={<Dashboard/>}/>
                        <Route exact path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/info" element={<QuestInfo/>}/>
                        <Route path="/quest" element={<Quest/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/logout" element={<Logout/>}/>
                        {/* <Route exact path="/map" element={<Map />} /> */}
                    </Route>
                ) : (
                    <>
                        <Route exact path="*" element={<NotFound/>}/>
                    </>
                )}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
