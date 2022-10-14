import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID viGB7NKqWmjV603lLjOCmghY-x07DHgDmt9sMul6cQY",
  },
});
