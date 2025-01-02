import { Link } from 'react-router-dom';
import { supabase } from '../App';

export function Navbar({ session }) {
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-7">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-800">
                Your Logo
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/" className="py-4 px-2 text-gray-700 hover:text-blue-500">
                Home
              </Link>
              <Link to="/calculator" className="py-4 px-2 text-gray-700 hover:text-blue-500">
                Calculator
              </Link>
              <Link to="/results" className="py-4 px-2 text-gray-700 hover:text-blue-500">
                Results
              </Link>
              {session && (
                <Link to="/dashboard" className="py-4 px-2 text-blue-500 hover:text-blue-600 font-medium">
                  Dashboard
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {session ? (
              <div className="flex items-center space-x-3">
                <span className="text-gray-700">{session.user.email}</span>
                <button
                  onClick={handleLogout}
                  className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Login
                </Link>
                <Link to="/signup" className="py-2 px-4 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 