import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.chucknorris.io/",
});
export const chatApi = {
  getJoke() {
    return instance.get("jokes/random");
  },
};
