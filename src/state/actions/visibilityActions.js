import { setButtonVisibility } from "../reducer/visibilitySlice";
import axios from "axios"; // You may need to install axios
const token = localStorage.getItem("authToken");

export const fetchButtonVisibility = () => {
  return (dispatch) => {
    // Make a request to the server to check button visibility
    axios({
      method: "get",
      url: "/api/v1/download-remaining",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        dispatch(setButtonVisibility(response.data.isButtonVisible));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const reduceDownload = () => {
  console.log("here");
  return (dispatch) => {
    axios({
      method: "put",
      url: "/api/v1/reduce-downloads",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        dispatch(setButtonVisibility(response.data.isButtonVisible));
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
