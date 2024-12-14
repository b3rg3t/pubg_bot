import axios, { AxiosResponse } from "axios";
import config from "src/config";
import { kraftonUrl } from "src/models/types/kraftonUrl";
import { formatString } from "src/utils/formatString";

const get = async (enpoint: kraftonUrl) => {
  try {
    const response: AxiosResponse = await axios.get(
      config.KRAFTON_BASE_URL + formatString(enpoint.url, enpoint.args),
      {
        headers: {
          Authorization: `Bearer ${process.env.KRAFTON_API_KEY}`,
          Accept: "application/vnd.api+json",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export { get };
