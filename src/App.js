import Counter from './components/Counter.js';
import Auth from './components/Auth.js';
import Header from './components/Header.js';
import { useSelector, useDispatch } from 'react-redux';
import UserProfile from './components/UserProfile.js';


function App() {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <>
      {isAuthenticated && (
        <>
          <Header></Header>
          <UserProfile></UserProfile>
        </>
      )}
      {!isAuthenticated && <Auth></Auth>}
      <Counter />
    </>
  );
}

export default App;
