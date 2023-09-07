import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from './components/GalleryView';
import Home from './components/Home';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className = 'pageWrapper'>
    <GalleryNavigation galleries = {harvardArt.records}/>
    <Switch>
    <Route exact path = '/'>
      <Home />
    </Route>
    <Route path = '/galleries/:galleryId'>
      <GalleryView galleries={harvardArt.records}/>
    </Route>
    <Route>
        <h2>Page Not Found :/</h2>
    </Route>
    </Switch>
    </div>
  );
}

export default App;
