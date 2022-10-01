import axios from "axios";




//---------------- Right Side Data ----------------
export const getMessage2 = () => {
  return axios.get(`https://aqueous-fjord-81124.herokuapp.com/message`);
};





// ------------------- Top message Feeds------------------
export const getMessage = (filter) => {
  return axios.get(`https://aqueous-fjord-81124.herokuapp.com/message?q=${filter}`);
};

// ---------------------- Delete -------------
export const deleteMessage = (id) => {
  return axios.delete(`https://aqueous-fjord-81124.herokuapp.com/message/${id}`);
};


export const sendMessage = (value, props) => {
  let mnth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { hours, minutes, month, date } = props;

  return axios.post(`https://aqueous-fjord-81124.herokuapp.com/message`, {
    day: `${date} ${mnth[month]}`,
    time: `${hours == 12 ? "12" : hours % 12}:${
      minutes <= 9 ? "0" + minutes : minutes
    } ${hours >= 12 ? "pm" : "am"}`,
    email: "abhishek@gmail.com",
    message: value,
  });
};






// ----------- Feeds Comments --------------

export const getComments1 = () => {
  return axios.get(`https://aqueous-fjord-81124.herokuapp.com/comments1`);
};


export const deleteComments1 = (id) => {
  return axios.delete(`https://aqueous-fjord-81124.herokuapp.com/comments1/${id}`);
};

export const sendComments1 = (value, props) => {
  let mnth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { hours, minutes, month, date } = props;

  return axios.post(`https://aqueous-fjord-81124.herokuapp.com/comments1`, {
    day: `${date} ${mnth[month]}`,
    time: `${hours == 12 ? "12" : hours % 12}:${
      minutes <= 9 ? "0" + minutes : minutes
    } ${hours >= 12 ? "pm" : "am"}`,
    email: "abhishek@gmail.com",
    message: value,
  });
};





// ----------- Youtube Comment --------------

export const getComments2 = () => {
  return axios.get(`https://aqueous-fjord-81124.herokuapp.com/comments2`);
};

export const deleteComments2 = (id) => {
  return axios.delete(`https://aqueous-fjord-81124.herokuapp.com/comments2/${id}`);
};

export const sendComments2 = (value, props) => {
  let mnth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { hours, minutes, month, date } = props;

  return axios.post(`https://aqueous-fjord-81124.herokuapp.com/comments2`, {
    day: `${date} ${mnth[month]}`,
    time: `${hours == 12 ? "12" : hours % 12}:${
      minutes <= 9 ? "0" + minutes : minutes
    } ${hours >= 12 ? "pm" : "am"}`,
    email: "abhishek@gmail.com",
    message: value,
  });
};
