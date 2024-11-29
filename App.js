// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import the AuthProvider
import Login from './pages/Login'; // Login Page
import Signup from './pages/Signup'; // Signup Page
import Home from './pages/Home'; // Home Page (accessible by anyone)
import BookRoom from './pages/BookRoom'; // Book Room Page (accessible only by logged-in users)
import Dashboard from './pages/Dashboard'; // Dashboard Page (accessible only by logged-in users)
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} />

                    {/* Protected routes */}
                    <Route
                        path="/book-room"
                        element={
                            <ProtectedRoute>
                                <BookRoom />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />

                    {/* Default Route */}
                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
