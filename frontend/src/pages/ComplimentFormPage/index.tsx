import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Card from '../../components/Card';

import sendGiftImg from '../../assets/images/send_compliment.svg';

import './styles.css';

export default function ComplimentForm() {
  return (
    <main id="compliment-form-page">
      <header>
        <div>
          <Link to="/">
            <MdKeyboardBackspace className="icon back-icon" />
          </Link>
          <h1>
            New Compliment
          </h1>
        </div>
        <div>
          <img src={sendGiftImg} alt="Person sending a gift through the cell" />
        </div>
      </header>
      <div>
      <Card classes="card-form">
          <form action="">
            <Input
              name="name"
              label="Name" />

            <Input
              name="email"
              label="Email" />

            <Input
              name="password"
              label="Password"
              type="password" />

            <Link
              to="#"
              className="btn btn-primary">
              Save
            </Link>
          </form>
        </Card>
      </div>
    </main>
  )
}