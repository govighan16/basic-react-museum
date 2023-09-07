import {useParams, Link, NavLink} from 'react-router-dom';

function ArtDescription({gallery}) {
    const {objects} = gallery;
    const description = objects[0].description === null ? 'Not available' : objects[0].description;
    const credit = objects[0].creditline === null ? 'Not available' : objects[0].creditline;
    const technique = objects[0].technique === null ? 'Not available' : objects[0].technique;
    const {galleryId, artId} = useParams();

    return (
        <div>
            <h2> Description: {description} </h2>
            <h2> Credit: 
                <a href= {`${gallery.url}`}>{credit}</a>
            </h2>
            <h2> Technique: {technique} </h2>
            <h2> Gallery Id: {galleryId}</h2>
            <Link to = {`/galleries/${galleryId}`}>Back to Gallery</Link>
        </div>
    )

}

export default ArtDescription;
