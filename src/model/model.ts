import { MovieData } from "./types";

function processObject(dataObj: MovieData) {
	const newObject= {
		title: dataObj.Title,
		year: dataObj.Year,
		genre: dataObj.Genre
	}
	return newObject
}

async function getAPIData(url: URL) {
	const response = await fetch(url.href);
	
	const jsonObj = await response.json();

	const formattedResult = processObject(jsonObj);

	return formattedResult;
}

export default getAPIData;
