import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




import {NetflixRegisterComponent} from'./components/Netflix/NetflixRegisterComponent';
import NetflixIndexComponent from './components/Netflix/NetflixIndexComponent';

import RegisterComponent from './components/ClassComponent';
import DataBindingComponent from './components/DataBindingComponent';
import DataBinding from './components/DataBinding';
import UseStateDataBinding from './components/UseStateDataBinding';
import ShoppingComponent from './components/ShopingComponent';
import EventBindingComponent from './components/EventBindingComponent';
import TwoWayBinding from './components/TwoWayBinding';
import TwoWayClassBinding from './components/TwoWayClassBinding';
import ShoppingClassComponent from './components/ShoppingClassComponent';
import LoginComponent from './components/LoginComponentDynamicCss';
import FormComponent from './components/FormComponent';
import FormikComponent from './components/FormikComponent';
import FormikValidation from './components/FormikValidation';
import YupValidation from './components/YupValidation';
import YupValidationComponent from './components/YupValidationComponent';
import LifeCycleDemo from './components/LifeCycleDemo';
import ReactHookDemo from './components/ReactHookDemo';
import ContextDemo from './components/ContextDemo';
import CookieUserLogin from './components/CookieUserLogin';

import { CookiesProvider } from 'react-cookie';
import ReducerDemo from './components/ReducerDemo';
import CustomeHookDemo from './components/CustomeHookDemo';
import JQueryAjaxDemo from './components/JQueryAjaxDemo';
import AxiosDemo from './components/AxiosDemo';
import ShoppingIndex from './components/shopping/ShoppingIndex';
import SPAComponents from './components/SPAComponents';
import IShopIndex from './components/ishop/IShopIndex';
import MainComponent from './components/BanksApp/MainComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>

     {/* <App />  */}

    {/* <NetflixIndexComponent /> */}

    {/* <RegisterComponent /> */}
    
    {/* <DataBindingComponent /> */}

    {/* <DataBinding /> */}

    {/* <UseStateDataBinding /> */}

    {/* <ShoppingComponent /> */}

    {/* <EventBindingComponent /> */}

    {/* <TwoWayBinding /> */}

    {/* <TwoWayClassBinding /> */}

    {/* <ShoppingClassComponent /> */}

    {/* <LoginComponent /> */}

    {/* <FormComponent /> */}

    {/* <FormikComponent /> */}

    {/* <FormikValidation /> */}

    {/* <YupValidation /> */}

    {/* <YupValidationComponent /> */}

    {/* <LifeCycleDemo /> */}

    {/* <ReactHookDemo /> */}

    {/* <ContextDemo /> */}

    {/* <CookiesProvider>
      <CookieUserLogin />
    </CookiesProvider> */}

    {/* <ReducerDemo /> */}

    {/* <CustomeHookDemo /> */}

    {/* <CookiesProvider>
      <CookieUserLogin />
    </CookiesProvider> */}

    {/* <JQueryAjaxDemo /> */}

    {/* <AxiosDemo /> */}

    {/* <ShoppingIndex /> */}

    {/* <SPAComponents /> */}

    {/* <IShopIndex /> */}

    <MainComponent />

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
