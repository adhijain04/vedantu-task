// -------------------------------------------------------------------------------- Api FETCH GET call function. --------------------------------------------------------------------------------
export const apiCall = async (url, method) => {
	let statusCode, statusText;
	
	const response = await fetch(url, {
		method: method,
		headers: {
			"Content-Type": 'application/json',
		},
		"cache": "no-store",
	});
	if (!response.ok) {
		if (response.status === 500) {
			statusCode = response.status;
			statusText = response.statusText;
			let responseData = { statusCode, statusText };
			return responseData; // returning the response data.
		} else {
			statusCode = response.status; // setting up the status code.
			const data = await response.json(); // getting the response data.
			let responseData = { data, statusCode };
			return responseData; // returning the response data.
		}
	} else {
		statusCode = response.status; // setting up the status code.
		const data = await response.json(); // getting the response data.
		let responseData = { data, statusCode };
		return responseData; // returning the response data.
	}
};