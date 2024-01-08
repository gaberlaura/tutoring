import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import About from './components/About/about.component';
import Scheduling from './utils/scheduling/scheduling.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import Footer from './components/footer/footer.component';
import ContactForm from './components/contact-form/contact-form.component';
import { setCurrentUser } from './store/user/user.action';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from './utils/firebase/firebase.utils';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<ContactForm />} />
          <Route path='appointments' element={<Scheduling />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
