import axios from "axios";

const api = axios.create({
  baseURL:
    "https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io/plant/generation",
  headers: {
    common: { Authorization: "Bearer HeDKyixt_yMhR4TOvL4HNktaOxga-mgLkUcF" },
  },
});

export { api };
