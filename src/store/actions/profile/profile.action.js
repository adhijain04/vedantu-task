import { git_profile } from '../../../urls'; //importing URL VARIABLES.
import { apiCall } from '../../../common/utility'; //import utility functions.


export const getProfileData = () => {
  return dispatch => { 
    dispatch({ type: "GET_PROFILE_PENDING" });

    try {

      apiCall(git_profile, "GET").then(data => {
        if (data.statusCode === 200) {
          dispatch({ type: "GET_PROFILE_SUCCESS", value: data.data });
        } else {
          if (data.statusCode === 500) {
            dispatch({ type: "GET_PROFILE_FAILED", value: data.data.message });
          } else {
            dispatch({ type: "GET_PROFILE_FAILED", value: data.data.message }); 
          }
        }
      });

    } catch (error) {
      dispatch({ type: "GET_PROFILE_FAILED", value: error });
    }
  };
};