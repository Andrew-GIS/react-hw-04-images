import React from "react";
import styles from "./Button.module.css";
import PropTypes from 'prop-types';

function Button ({onClick}){
	
	return (
			<div className={styles.Conteiner}>
				<button type="button" className={styles.Button} onClick={onClick}>
					Load More
				</button>
			</div>
		);
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;