import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import Input from '../../components/Input';

import './styles.css';

export default function UserForm() {
  return (
    <main id="user-form-page">
      <header>
        <Link to="/">
          <MdKeyboardBackspace className="icon back-icon" />
        </Link>
        <h1>
          New User
        </h1>
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

            <Input
              name="confirmPassword"
              label="Confirm Password"
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