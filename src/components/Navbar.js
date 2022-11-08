import React, { Component } from 'react';
import Identicon from 'identicon.js';
import dvideo from '../dvideo.png';
import video from '../video-camera.png';

class Navbar extends Component {

  render() {
    return (
      <nav className="w-75 d-flex justify-content-between navbar-custom navbar navbar-expand-lg navbar-dark position-relative shadow text-monospace text-dark ml-auto mr-auto rounded-bottom">
        <a
          className="navbar-brand font-weight-bold text-success"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={video} height="45" className="d-inline-block align-top" alt="" />
          &nbsp;Dumio
        </a>
        <ul className="text-lg navbar-nav d-flex flex-row-reverse bd-highlight">
          <li className='p-2 pl-5 pr-5 bd-highlight nav-item'>
            <a className='nav-link text-success h5' href="/create">Create</a></li>
          <li className='p-2 pl-5 pr-5 bd-highlight nav-item '><a className='nav-link text-success h5' href='/'>Explore</a></li>
          <li className="p-2 pl-5 pr-5 bd-highlight nav-item">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
            { this.props.account
              ? <img
                className='ml-2'
                height='30'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                alt=""
              />
              : <span></span>
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;