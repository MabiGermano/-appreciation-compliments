import React from 'react';
import firstPageImg from '../../assets/images/firstPage.svg';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Card from '../../components/Card';

import './styles.css'

function Landing() {
  return (
    <main id="landing-page">
      <div>
        <h1>Appreciation Compliments</h1>
        <img src={firstPageImg} alt="man and woman holding a congrats badge" />
      </div>
      <div>
        <Card classes="card-login">
          <form action="">
            <Input
              name="email"
              label="Email" />

            <Input
              name="password"
              label="Password"
              type="password" />
            <footer>
              <button className="btn btn-primary">
                Login
              </button>

              <span>
                OR
              </span>

              <Link
                to="/register"
                className="btn btn-secondary">
                Register
              </Link>
            </footer>
          </form>
        </Card>
      </div>
    </main>
  );
}

export default Landing;