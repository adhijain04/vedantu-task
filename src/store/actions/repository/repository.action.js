import { git_repos } from '../../../urls'; //importing URL VARIABLES.
import { apiCall } from '../../../common/utility'; //import utility functions.

export const getReposData = () => {
  return dispatch => {
    dispatch({ type: "GET_REPOS_PENDING" });
  
    try {
    
      apiCall(git_repos, "GET").then(data => {
        if (data.statusCode === 200) {
          dispatch({ type: "GET_REPOS_SUCCESS", value: data.data.results });
        } else {
          if (data.statusCode === 500) {
            dispatch({ type: "GET_REPOS_FAILED", value: data.data.message });
          } else {
            dispatch({ type: "GET_REPOS_FAILED", value: data.data.message });
          }
        }
      });
    
    } catch (error) {
      dispatch({ type: "GET_REPOS_FAILED", value: error });
    }
  };
};