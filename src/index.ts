import getAPIData from "./model/model";
import dotenv from "dotenv"
dotenv.config()

// const API_BASE_URL = new URL("https://www.omdbapi.com/?i=tt3896198&apikey="+ process.env.API_KEY);
const API_BASE_URL = new URL(`https://www.omdbapi.com/?t=${process.argv[2]}&apikey=${process.env.API_KEY}`);

const main = async () => {
  const response = await getAPIData(API_BASE_URL);
  console.log(response);
};

main()