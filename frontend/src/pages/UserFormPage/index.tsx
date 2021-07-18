import React, { FormEvent } from 'react';
import { useState } from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';

import Card from '../../components/Card';
import Input from '../../components/Input';
import api from '../../services/Api';

import './styles.css';

export default function UserForm() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const newUser = {
      name,
      email,
      password
    }
    await api.post('users', newUser);
    alert("User created successfully!");
    history.push('/');
  }

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
              label="Name"
              onChange={event => setName(event.target.value)} />

            <Input
              name="email"
              label="Email"
              onChange={event => setEmail(event.target.value)} />

            <Input
              name="password"
              label="Password"
              type="password"
              onChange={event => setPassword(event.target.value)} />

            <Input
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              onChange={event => setConfirmPassword(event.target.value)} />

            <footer>
              <Link
                to="#"
                className="btn btn-primary"
                type="submit"
                onClick={handleSubmit}>
                Save
              </Link>
            </footer>
          </form>
        </Card>
      </div>
    </main>
  )
}