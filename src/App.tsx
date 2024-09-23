import React from 'react'
import "./App.css";
import TradeScreen from './pages/tradeScreen';
import { Route, Routes} from 'react-router-dom';
import DashBoard from './pages/dashBoardScreen';
import PaymentSuccessfulScreen from './pages/paymentSuccessful';
import PurchaseScreen from './pages/purchaseScreen';
import { Provider } from 'react-redux';
import store from './Components/store';
import { ThemeProvider } from '@mui/material';
import theme from './themes';
function App() {
  return (
    <>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
       <Routes>
    <Route path='/' element={<DashBoard/>}/> 
    <Route path='/TradeScreen' element={<TradeScreen/>}/>
    <Route path='/purchase-screen' element={<PurchaseScreen/>}/>
    <Route path='/payment-successfull' element={<PaymentSuccessfulScreen successType='buy' price='0.0234510 BTC'/>}/>

      </Routes>
      </ThemeProvider>
      </Provider>
     
    </>
  );
};

export default App;