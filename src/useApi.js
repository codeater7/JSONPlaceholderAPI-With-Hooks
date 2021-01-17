import { useEffect, useState } from 'react';

const useApi = url => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
		setIsLoading(true);
		fetch(url)
			.then(response => response.json())
			.then(json => setData(json))
			.catch(setError)
			.finally(() => setIsLoading(false));

		return { data, isLoading, error };
	}, []);
};

export { useApi };
