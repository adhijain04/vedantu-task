import React from 'react';

import Profile from './Profile';
import Repositories from './Repositories';

export default function Container() {
  return (
    <div className='container'>
      <Profile />
      <Repositories />
    </div>
  )
}
