import React from 'react';
import { useState } from 'react';
import styles from './Searchbar.module.css';
import { ReactComponent as SearchIcon } from './searchIcon.svg';
import { PropTypes } from 'prop-types';
import Notiflix from 'notiflix';

const notiflixOptions = Notiflix.Notify.init({
  width: '400px',
  position: 'top-right',
  distance: '50px',
  borderRadius: '10px',
  clickToClose: true,
  useIcon: false,
  fontSize: '23px',
});

export function SearchBar ({onSubmit}){
	
	const [query, setQuery] = useState('');

	const onInputSubmit = (event) => {
		if (query.trim() === '') {
			return Notiflix.Notify.warning('No data to show, enter valid query',
            notiflixOptions,)
		}
		else{
			event.preventDefault();
			onSubmit(query);
			setQuery('');
		}
	}

	const onChange = event => {
		setQuery(event.target.value.toLowerCase().trim());
	}

		return (
			<header className={styles.searchbar}>
				<form className={styles.searchForm} onSubmit={onInputSubmit}>
					<button type="submit"
						className={styles.searchFormButton}>
							<SearchIcon/>
							<span className={styles.searchFormButtonLabel}>Search</span>
					</button>

					<input
						className={styles.searchFormInput}
						type="text"
						autoComplete="off"
						autoFocus
						placeholder="Search images and photos"
						value={query}
						onChange={onChange} />
				</form>
			</header>
		);
}

SearchBar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};