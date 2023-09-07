import {useParams, Route} from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';
import ArtDescription from '../ArtDescription';


function GalleryView({galleries}) {
    const {galleryId} = useParams();
    const galleryData = galleries.find(gallery => {
        return gallery.gallerynumber === galleryId
    })
    //<ArtImageTile gallery={galleryData} />
    // {galleryData.objects.images.map((image) => {
    //     return <ArtImageTile art = {image.baseimageurl} />
    // })}

    const imagesData = galleryData.objects.map(obj => {return obj.images})
    //console.log(galleryData.objects[0].images[0].baseimageurl)
    //console.log(images)
    //console.log(images)
    // const artUrls = images.map(obj => {
    //     return obj.baseimageurl;
    // })

    
    return (
    <div>
    <h1> Hello from GalleryView | Please click on any image to get details below </h1>
    <h2> {galleryData.name}</h2>
    <Route path = '/galleries/:galleryId'>
    {imagesData.map(data => {
        return <ArtImageTile art = {data[0]} galleryId = {galleryId} />
    })}
    </Route>
    <Route path = '/galleries/:galleryId/art/:artId'>
        <ArtDescription gallery = {galleryData}/>
    </Route>
    <h2>{galleryData.url.objects}</h2>
    </div>

    )
}

export default GalleryView;
