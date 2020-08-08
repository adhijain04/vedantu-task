import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../store/actions/repository/repository.action'; // importing all the actions.

export default function Repositories() {

  const reposData = useSelector(state => state.RepositoryReducer.reposData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getReposData());
  }, [dispatch])

  return (
    reposData.data
      ? (
          <div className='repositories'>
            Repositories
          </div>
        )
      : reposData.error
          ? reposData.error
          : "loading..."
  )
}
