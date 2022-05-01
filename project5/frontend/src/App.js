import './App.css';
// import HookCakeContainer from './components/HookCakeContainer';
// import CakeContainer from './components/CakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import IceCreamContainer from './components/IceCreamContainer'
import HotDogContainer from './components/HotDogContainer';
import BeerContainer from './components/BeerContainer';
// import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <div className="App">
      <UserContainer/>
      {/* <ItemContainer cake/>
      <ItemContainer icecream/>
      <CakeContainer/> */}
      <IceCreamContainer/>
      <HotDogContainer />
      <BeerContainer/>
      {/* <HookCakeContainer/> */}
      <NewCakeContainer/>
    </div>
  );
}

export default App;
