import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [tokenMatch, setTokenMatch] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    axios.post('http://localhost:8000/verifyToken', { token })
      .then(response => {
        if (token === response.data.token) {
          console.log(token);
          setLoading(false);
          setTokenMatch(true);
        } else {
          console.log("Token doesn't match");
          setLoading(false);
          setTokenMatch(false);
        }
      })
      .catch(error => {
        console.error('Error verifying token:', error);
        setLoading(false);
        setTokenMatch(false);
        navigate('/');
        alert("Error verifying token. Redirecting to login page.");
      });
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!tokenMatch) {
    navigate('/');
    return null;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Add your dashboard content here */}
    </div>
  );
};

export default Dashboard;
