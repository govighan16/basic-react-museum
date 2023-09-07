import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from './components/GalleryView';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className = 'pageWrapper'>
    <GalleryNavigation galleries = {harvardArt.records}/>
    <Route path = '/galleries/:galleryId'>
      <GalleryView galleries={harvardArt.records}/>
    </Route>
    </div>
  );
}

export default App;
