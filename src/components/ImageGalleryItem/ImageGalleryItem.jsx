import React from "react";
import styles from "./ImageGalleryItem.module.css";
import PropTypes from 'prop-types';

function ImageGalleryItem ({id, previewURL, tags, onClick}){
	
		return (
			<li className={styles.ImageGalleryItem} onClick={()=>onClick(id)}>
				<img className={styles['ImageGalleryItem-image']}
					src={previewURL}
					alt={tags} />
			</li>
		);
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  previewURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;