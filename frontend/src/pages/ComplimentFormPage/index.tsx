import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import Card from '../../components/Card';

import sendGiftImg from '../../assets/images/send_compliment.svg';

import './styles.css';

export default function ComplimentForm() {
  return (
    <main id="compliment-form-page">
      <header>
        <div>
          <Link to="/home">
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
            <Select
              name="to"
              label="TO"
              options={[
                { value: '0', label: 'Mabi' },
                { value: '1', label: 'Jacque' },
                { value: '2', label: 'Stitch' }
              ]}
            />

            <Select
              name="tag"
              label="Tag"
              options={[
                { value: '0', label: '#Leadership' },
                { value: '1', label: '#GoodJob' },
                { value: '2', label: '#Congrats' }
              ]}
            />
            <Textarea
              name="message"
              label="Message"
              rows={10} />

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