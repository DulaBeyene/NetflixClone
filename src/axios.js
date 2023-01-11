// Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase).
// Axios Vs fetch
// Axios automatically transforms the data returned from the server, but with fetch() you have to call the response.
import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// instance.get("/movie/top_rated?");
export default instance;
