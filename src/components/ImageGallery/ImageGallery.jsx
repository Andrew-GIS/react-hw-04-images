import React from "react";
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallrey ({items, onClick}){
		return (
			<ul className={styles.ImageGallery}>
				{items.map(item => {
					const { id, previewURL, tags } = item;
					return (
						<ImageGalleryItem
							key={id}
							id={id}
							previewURL={previewURL}
							tags={tags}
							onClick={() => onClick({image: item}) } />
					)
				})}
			</ul>
		);
}

ImageGallrey.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      previewURL: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallrey;