import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../store/actions/profile/profile.action'; // importing all the actions.

export default function Profile() {

  const profileData = useSelector(state => state.ProfileReducer.profileData);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getProfileData())
  }, [dispatch])

  return (
    profileData.data
      ? (
          <div className='profile'>
            <img src={profileData.data.avatar_url} alt='profile pic' />

            <h1>{profileData.data.name}</h1>
            <h3>{profileData.data.login}</h3>
            <h6>{profileData.data.bio}</h6>

            <button>Follow</button>

            <div className='stats-container'>
              <div className='followers-container'>
                <i className="fas fa-user-friends"></i>
                {profileData.data.followers} followers
              </div>
              <div className='following-container'>
                {profileData.data.following} following
              </div>
              <div className='stars-container'>
                <i className="fas fa-star"></i>
                7
              </div>
            </div>

            <h6>
              <i className="far fa-building"></i>
              {profileData.data.company}
            </h6>
            <h6>
              <i className="far fa-map-marker-alt"></i>
              {profileData.data.location}
            </h6>
            <h6>
              <i className="far fa-envelope"></i>
              Sign in to view email
            </h6>
          </div>
        )
      : profileData.error
          ? profileData.error
          : "loading..."
  )
}
