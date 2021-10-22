import { Fragment, useState, useEffect, useCallback } from 'react';
import './Module_14.css';
import MoviesList from './components/MoviesList';

const Module_14 = () => {
	const [movies, setMovies] = useState([]);
	const [isLoadin, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMoviesHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch('https://swapi.dev/api/films');

			if (!response.ok) {
				throw new Error('Something went wrong');
			}

			const data = await response.json();

			const transformedMovies = data.results.map(movieData => {
				return {
					id: movieData.episode_id,
					title: movieData.title,
					openingText: movieData.opening_crawl,
					releaseDate: movieData.release_date,
				};
			});
			setMovies(transformedMovies);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchMoviesHandler();
	}, [fetchMoviesHandler]);

	let content = <p>Found No Movies</p>;

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoadin) {
		content = <p>Loading...</p>;
	}

	return (
		<Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</Fragment>
	);
};

export default Module_14;
