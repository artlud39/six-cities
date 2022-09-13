import MainPage from '../../pages/main-page/main-page';
import { offers } from '../../mock/mock';

function App(): JSX.Element {
  return (<MainPage offers={offers}/>);

}

export default App;
