import { Ul } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, firstNewElementRef, galleryRef }) => {
  return (
    <Ul ref={galleryRef}>
      {images.map((image, index) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          ref={index === images.length - 12 ? firstNewElementRef : null}
        />
      ))}
    </Ul>
  );
};

export default ImageGallery;
