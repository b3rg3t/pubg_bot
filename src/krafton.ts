import axios from "axios";

const getPlayerStats = async () => {
  try {
    const response = await axios.get(``)
    return response;
  } catch (err) {
    console.log(err);
  }
};

exports = { getPlayerStats };
