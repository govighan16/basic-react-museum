import {NavLink} from 'react-router-dom';
import './GalleryNavigation.css'

function GalleryNavigation({galleries}) {
    galleries.splice(4,1)
    return (
    <nav>
        <h1> Galleries </h1>
        <NavLink to = '/'>Home</NavLink>
        {galleries.map(gallery => {
            return <NavLink key={gallery.gallerynumber} to = {`/galleries/${gallery.gallerynumber}`}> {gallery.name} </NavLink>
        })}
    </nav>
    )
}

export default GalleryNavigation;
