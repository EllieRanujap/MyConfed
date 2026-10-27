import { useState } from 'react';
import './App.css';

function App(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    alert(`Demo login submitted for: ${email}\n Authentication is not connected yet.`);

  }

  return (
    <main className = "page">
      <section className = "login-card">
        <div className = "brand">
          <div className = "brand-icon">M </div>
          <span>MYCONFED</span>
        </div>

        <h1>Welcome, big back.</h1>
        <p className = "subtitle">
          Are you ready for the golden era of CCS?
        </p>

        <form onSubmit = {handleSubmit}>
          <label htmlFor = "email">Student email</label>
          <input
            id = "email"
            type = "email"
            placeholder = "trix@su.edu.ph"
            value = {email}
            onChange = {(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input 
            id = "password"
            type = "password"
            placeholder = "Password goes here"
            value = {password}
            onChange = {(event) => setPassword(event.target.value)}
            required
          />

          <button type = "submit">Sign in</button>
        </form>

        <p className = "notice">
          Confederates Student Council
        </p>

      </section>
    </main>
  );

}

export default App;