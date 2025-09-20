'use client';

import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';
import FloatingMessengerButton from './FloatingMessange/FloatingMessange';
import  {store} from '@/Redux/store'
import PopupModal from './PopupModal/PopupModal';
import MessengerForm from './PopupModal/MessangerForm';
import { Provider } from 'react-redux';


export default function LayoutClient({ children }) {
  return (
    <Provider store={store}>
    <div>
       {/* <FullScreenLoader /> */}
      <Navbar />
      
      {/* Popup Modal */}
      <div>
        <PopupModal
        >
          <MessengerForm />
        </PopupModal>
      </div>
      {children}
      <FloatingMessengerButton/>
      <Footer />

    </div>
     
   </Provider>
  );
}
