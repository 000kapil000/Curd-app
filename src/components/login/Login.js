import React ,{useState}from 'react'
import { useNavigate } from "react-router-dom";
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
  
    
      const adminEmail = 'admin';
      const adminPassword = 'admin';
  
      if (email === adminEmail && password === adminPassword) {
  
        navigate("/welcome");
      } else {
        alert('Invalid credentials. Please try again.');
      }
    };
  return (
    <div className='login'>
<h1 >Login</h1>
      <form onSubmit={handleLogin}>
        <label >Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />
        <label >Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit" className='submit-button'>Sign in</button>
      </form>
     <h4>Test login 'admin' and password "admin"</h4>
   
 <h4>Copyright (c) SunilOS InfoTech Pvt Ltd, Open Source Knowledge Academe</h4>
    </div>
  )
}

export default Login