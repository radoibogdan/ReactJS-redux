import { Fragment } from 'react';
import { useSelector } from 'react-redux';

//Components
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {
  // Access redux store using useSelector => then access auth slice and its isAuthenticated property
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
