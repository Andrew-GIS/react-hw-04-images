import React from "react";
import { useEffect } from "react";
import styles from './Modal.module.css';

export function Modal ({closeAction, imageURL, tags}){

	useEffect(() => {
		const keyPressed = event => {
		if (event.code === 'Escape')
			closeAction();
		}
		window.addEventListener('keydown', keyPressed);
		return () => {
			window.removeEventListener('keydown', keyPressed);
		};
	}, [closeAction]);

		return (
			<div className={styles.Overlay} onClick={closeAction}>
  				<div className={styles.Modal}>
    				<img src={imageURL} alt={tags}/>
  				</div>
			</div>
		);
}