import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
type ContentType = "application/json" | "multipart/form-data";

interface CommonProps {
  uri: string;
  params?: Record<string, any>;
  headers?: Record<string, string>;
  contentType?: ContentType;
  baseURL?: string;
}

// Method GET dan DELETE tidak boleh punya payload
type GetOrDelete = {
  method: "GET" | "DELETE";
} & CommonProps;

// Method POST, UPDATE, PATCH boleh punya payload
type Others = {
  method: "POST" | "UPDATE" | "PATCH";
  payload?: Record<string, any>;
} & CommonProps;

type CallAPIProps = GetOrDelete | Others;

const callAPI = async <T = any>(props: CallAPIProps): Promise<T> => {
  try {
    const {
      method,
      uri,
      params,
      headers = {},
      contentType = "application/json",
      baseURL,
    } = props;

    const token = localStorage.getItem("token");

    const config: AxiosRequestConfig = {
      baseURL: baseURL || apiClient.defaults.baseURL,
      headers: {
        "Content-Type": contentType,
        ...headers,
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      params,
    };

    let response: AxiosResponse<T>;

    switch (method) {
      case "GET":
        response = await axios.get(uri, config);
        break;

      case "DELETE":
        response = await axios.delete(uri, config);
        break;

      case "POST":
      case "UPDATE":
      case "PATCH": {
        const { payload } = props as Others; 
        const data = payload ?? {};
        if (method === "POST") {
          response = await axios.post(uri, data, config);
        } else if (method === "UPDATE") {
          response = await axios.put(uri, data, config);
        } else {
          response = await axios.patch(uri, data, config);
        }
        break;
      }

      default:
        throw new Error(`Unsupported method: ${method}`);
    }

    return response.data;
  } catch (err) {
    const error = err as AxiosError<T>;
    throw error.response?.data ?? error;
  }
};

export default callAPI;
