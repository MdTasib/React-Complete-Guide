import { Fragment, useState } from 'react';
import './Module_14.css';
import MoviesList from './components/MoviesList';

const Module_14 = () => {
	const [movies, setMovies] = useState([]);

	async function fetchMoviesHandler() {
		const response = await fetch('https://swapi.dev/api/films');
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
	}

	return (
		<Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				<MoviesList movies={movies} />
			</section>
		</Fragment>
	);
};

export default Module_14;
