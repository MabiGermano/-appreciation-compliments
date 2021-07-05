import React from "react";
import { Link } from 'react-router-dom';
import { MdCardGiftcard } from 'react-icons/md';

import Card from '../../components/Card';

import './styles.css';

import headerImg from '../../assets/images/team_header.jpg';

export default function Home() {
  return (
    <div id="home-page">
      <header>
        <div>
          <h1>
            Appication Compliments
          </h1>
          <h2>
            Olá Maria!
          </h2>
          <Link to="/compliment/new" className="btn btn-primary">
            Send a compliment
          </Link>
        </div>
        <div>
          <img src={headerImg} alt="people putting hands together" />
        </div>
      </header>
      <section>
        <h2>
          All your compliments
        </h2>
        <div>
          <Card classes="card-secondary">
            <div>
              <div className="circle">
                <MdCardGiftcard className="icon gift-icon" />
              </div>
            </div>
            <div>
              <h4>#Leadership</h4>
              <span>From: Alfredo</span>
              <q>
                It was amazing work with you
              </q>
            </div>
          </Card>
          <Card classes="card-secondary">
            <div>
              <div className="circle">
                <MdCardGiftcard className="icon gift-icon" />
              </div>
            </div>
            <div>
              <h4>#Leadership</h4>
              <span>From: Alfredo</span>
              <q>
                It was amazing work with you
              </q>
            </div>
          </Card>
          <Card classes="card-secondary">
            <div>
              <div className="circle">
                <MdCardGiftcard className="icon gift-icon" />
              </div>
            </div>
            <div>
              <h4>#Leadership</h4>
              <span>From: Alfredo</span>
              <q>
                It was amazing work with you
              </q>
            </div>
          </Card>
          <Card classes="card-secondary">
            <div>
              <div className="circle">
                <MdCardGiftcard className="icon gift-icon" />
              </div>
            </div>
            <div>
              <h4>#Leadership</h4>
              <span>From: Alfredo</span>
              <q>
                It was amazing work with you
              </q>
            </div>
          </Card>
          <Card classes="card-secondary">
            <div>
              <div className="circle">
                <MdCardGiftcard className="icon gift-icon" />
              </div>
            </div>
            <div>
              <h4>#Leadership</h4>
              <span>From: Alfredo</span>
              <q>
                It was amazing work with you
              </q>
            </div>
          </Card>
          <Card classes="card-secondary">
            <div>
              <div className="circle">
                <MdCardGiftcard className="icon gift-icon" />
              </div>
            </div>
            <div>
              <h4>#Leadership</h4>
              <span>From: Alfredo</span>
              <q>
                It was amazing work with you
              </q>
            </div>
          </Card>
          <Card classes="card-secondary">
            <div>
              <div className="circle">
                <MdCardGiftcard className="icon gift-icon" />
              </div>
            </div>
            <div>
              <h4>#Leadership</h4>
              <span>From: Alfredo</span>
              <q>
                It was amazing work with you
              </q>
            </div>
          </Card>
          <Card classes="card-secondary">
            <div>
              <div className="circle">
                <MdCardGiftcard className="icon gift-icon" />
              </div>
            </div>
            <div>
              <h4>#Leadership</h4>
              <span>From: Alfredo</span>
              <q>
                It was amazing work with you
              </q>
            </div>
          </Card>
          <Card classes="card-secondary">
            <div>
              <div className="circle">
                <MdCardGiftcard className="icon gift-icon" />
              </div>
            </div>
            <div>
              <h4>#Leadership</h4>
              <span>From: Alfredo</span>
              <q>
                It was amazing work with you
              </q>
            </div>
          </Card>
          <Card classes="card-secondary">
            <div>
              <div className="circle">
                <MdCardGiftcard className="icon gift-icon" />
              </div>
            </div>
            <div>
              <h4>#Leadership</h4>
              <span>From: Alfredo</span>
              <q>
                It was amazing work with you
              </q>
            </div>
          </Card>
          <Card classes="card-secondary">
            <div>
              <div className="circle">
                <MdCardGiftcard className="icon gift-icon" />
              </div>
            </div>
            <div>
              <h4>#Leadership</h4>
              <span>From: Alfredo</span>
              <q>
                It was amazing work with you
              </q>
            </div>
          </Card>
          <Card classes="card-secondary">
            <div>
              <div className="circle">
                <MdCardGiftcard className="icon gift-icon" />
              </div>
            </div>
            <div>
              <h4>#Leadership</h4>
              <span>From: Alfredo</span>
              <q>
                It was amazing work with you
              </q>
            </div>
          </Card>
          <Card classes="card-secondary">
            <div>
              <div className="circle">
                <MdCardGiftcard className="icon gift-icon" />
              </div>
            </div>
            <div>
              <h4>#Leadership</h4>
              <span>From: Alfredo</span>
              <q>
                It was amazing work with you
              </q>
            </div>
          </Card>
          <Card classes="card-secondary">
            <div>
              <div className="circle">
                <MdCardGiftcard className="icon gift-icon" />
              </div>
            </div>
            <div>
              <h4>#Leadership</h4>
              <span>From: Alfredo</span>
              <q>
                It was amazing work with you
              </q>
            </div>
          </Card>
          <Card classes="card-secondary">
            <div>
              <div className="circle">
                <MdCardGiftcard className="icon gift-icon" />
              </div>
            </div>
            <div>
              <h4>#Leadership</h4>
              <span>From: Alfredo</span>
              <q>
                It was amazing work with you
              </q>
            </div>
          </Card>
          
        </div>
      </section>
      <Link to="/" className="btn  btn-secondary">
        Exit
      </Link>
    </div >
  )
}