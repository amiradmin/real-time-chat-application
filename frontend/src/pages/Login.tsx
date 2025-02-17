// src/pages/Login.tsx
import React from 'react';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    console.log('Logging in with:', email, password);
    // Here, you can add your authentication logic (e.g., API call, redirect).
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
