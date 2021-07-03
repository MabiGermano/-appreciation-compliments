import React from 'react';
import firstPageImg from '../../assets/images/firstPage.svg';
import Input from '../../components/Input';

import './styles.css'

function Landing() {
  return (
    <main id="landing-page">
      <div>
        <h1>Appreciation Compliments</h1>
        <img src={firstPageImg} alt="man and woman holding a congrats badge" />
      </div>
      <div>
        <div className="card card-login">
          <Input name="email" label="Email" />
          <Input name="password" label="Password" type="password" />

          <button className="btn">
            Login
          </button>
        </div>
      </div>
    </main>
  );
}

export default Landing;