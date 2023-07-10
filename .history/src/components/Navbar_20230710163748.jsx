import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { Navbar } from '../constants';
import {logo, menu, close } from '../assets';


const Navbar = () => {
  return (
    <nav
      className={${styles.paddingX} '}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        </div>
      </nav>
  )
}

export default Navbar