import {useParams} from 'react-router-dom';

function GalleryView({galleries}) {
    const {galleryId} = useParams();
    const galleryData = galleries.find(gallery => {
        return gallery.gallerynumber === galleryId
    })
    return (
    <div>
    <h1> Hello from GalleryView </h1>
    <h2> {galleryData.name}</h2>
    </div>

    )
}

export default GalleryView;
