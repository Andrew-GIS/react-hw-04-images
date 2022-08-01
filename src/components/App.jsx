import React from 'react';
import { useState, useEffect } from 'react';
import fetchPictures from "../services/api";
import { Modal } from './Modal/Modal';
import { SearchBar } from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallrey from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Notiflix from 'notiflix';
import Header from './Header/Header';

const notiflixOptions = Notiflix.Notify.init({
  width: '400px',
  position: 'top-right',
  distance: '50px',
  borderRadius: '10px',
  clickToClose: true,
  useIcon: false,
  fontSize: '23px',
});

export function App() {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    if (query === '') {
      return;
    }
    else{
    setStatus('pending');
    fetchPictures(query, page)
      .then(newItems => {
        setItems(items => [...items, ...newItems]);
            if (newItems.length === 0) {
              return Notiflix.Notify.warning('No data to show, enter valid query', notiflixOptions);
            }
      })
      .finally(() => {
        setStatus('idle');
      });
    }
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
    setItems([]);
  }

  const loadMore = () => {
    setPage(page + 1);
  }

  const openLargePicture = ({ image }) => {
    setCurrentImage(image);
    setStatus('modal');
  }

  const modalCloseHandle = () => {
    setStatus('idle');
  };

      return (
        <>
          <SearchBar onSubmit={handleSubmit} />
          {!(query) && <Header/>}
          {(items.length > 0) && status==="idle" &&
            <>
            <ImageGallrey items={items} onClick={openLargePicture} />
            <Button onClick={loadMore} />
            </>
          }
          {status === "pending" && <Loader/>}
          
          {status === 'modal' && (
            <Modal
              closeAction={modalCloseHandle}
              imageURL={currentImage.imageURL}
              tags={currentImage.tags}/>
          )}
        </>
      );
};

  // const errorHandler = () => {
  //   setStatus('idle');
  //   return Notiflix.Notify.warning('No data to show, enter valid query', notiflixOptions);
  // }