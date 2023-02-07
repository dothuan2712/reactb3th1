import React from 'react';
import './App.css';

import th1photo from './th1photo.jpg';
import { base64Photo } from './Constant';
import logo from './logo.svg';
import DeleteIcon from './DeleteIcon';

export default function App() {
  return (
    <div className="container">
      <div> Đây là hướng dẫn dùng ảnh trong reactjs</div>
        <img src={th1photo} width="512" height='340' className ='img'></img>
        <div className='require-title'>Đây là ảnh dùng require</div>
        <img src={require('./th1photo.jpg')} className='img2'></img>
        <div className='link'>Đây là ảnh dùng link online</div>
        <img src='https://i.imgur.com/0BJobQo.jpg' className='img2'/>
        <div className='base64'>Đây là ảnh dùng base64</div>
        <img src={base64Photo} className='img3'/>
        <img src={logo} className='img3' />
      <DeleteIcon />
    </div>
  );
}