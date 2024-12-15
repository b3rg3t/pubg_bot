import axios, { AxiosResponse } from "axios";
import config from "src/utils/config";
import { kraftonUrl } from "src/models/types/kraftonUrl";
import { formatString } from "src/utils/helpers";

const get = async <T>(enpoint: kraftonUrl) => {
  try {
    const response: AxiosResponse<T> = await axios.get(
      config.krafton.baseUrl +
        formatString(enpoint.url, "args" in enpoint ? enpoint.args : undefined),
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
