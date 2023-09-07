import {Link, useRouteMatch} from 'react-router-dom';

function ArtImageTile({art: {imageid, baseimageurl}, galleryId}) {
    const {url} = useRouteMatch();
    console.log(imageid)
    return (
        <Link to = {`/galleries/${galleryId}/art/${imageid}`}>
        <img src = {baseimageurl} ></img>
        </Link>
    
    )
}

export default ArtImageTile;
