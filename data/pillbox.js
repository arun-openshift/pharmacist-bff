const axios = require('axios');

const baseUrl =  'https://pharmacist-arun205.sandbox-ocp43-one-176292-be5b1ee812fa4041cc73b6bbf969fc88-0000.eu-gb.containers.appdomain.cloud';

const getPillboxes = () => {
  return apiGetCall();
};

const addPillbox = (pillbox) => {
  return apiPostCall(pillbox);
};

const apiGetCall = async() => {
  try {
    const resp = await axios.get( baseUrl + '/getAllPillboxes');
    return resp.data;
  } catch(error) {
    console.log(error);
  }
}

const apiPostCall = async(pillbox) => {
  try {
    const resp = await axios.post( baseUrl + '/addPillbox', pillbox)
    return resp.data
  } catch(error) {
    console.log(error);
  }
}

module.exports = {
  getPillboxes,
  addPillbox
};
