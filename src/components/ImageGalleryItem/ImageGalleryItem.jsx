import React, { useState } from 'react';
import { Img, Li } from './ImageGalleryItem.styled';
import Modal from '../Modal';

const ImageGalleryItem = React.forwardRef(({ image }, ref) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Li ref={ref}>
      <Img src={image.urls.small} alt={image.alt_description} onClick={toggleModal} />
      {showModal && (
        <Modal
          largeImageURL={image.urls.regular}
          tags={image.alt_description}
          onClose={toggleModal}
        />
      )}
    </Li>
  );
});

ImageGalleryItem.displayName = "ImageGalleryItem";


export default ImageGalleryItem;