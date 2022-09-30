import axios from "axios";

export const getMessage = () => {
  return axios.get(`http://localhost:8080/message`);
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

  return axios.post(`http://localhost:8080/message`, {
    day: `${date} ${mnth[month]}`,
    time: `${hours == 12 ? "12" : hours % 12}:${
      minutes <= 9 ? "0" + minutes : minutes
    } ${hours >= 12 ? "pm" : "am"}`,
    email: "abhishek@gmail.com",
    message: value,
  });
};

// -------------------------

export const getComments1 = () => {
  return axios.get(`http://localhost:8080/comments1`);
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

  return axios.post(`http://localhost:8080/comments1`, {
    day: `${date} ${mnth[month]}`,
    time: `${hours == 12 ? "12" : hours % 12}:${
      minutes <= 9 ? "0" + minutes : minutes
    } ${hours >= 12 ? "pm" : "am"}`,
    email: "abhishek@gmail.com",
    message: value,
  });
};




// ---------------------------------
// -------------------------

export const getComments2 = () => {
  return axios.get(`http://localhost:8080/comments2`);
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

  return axios.post(`http://localhost:8080/comments2`, {
    day: `${date} ${mnth[month]}`,
    time: `${hours == 12 ? "12" : hours % 12}:${
      minutes <= 9 ? "0" + minutes : minutes
    } ${hours >= 12 ? "pm" : "am"}`,
    email: "abhishek@gmail.com",
    message: value,
  });
};