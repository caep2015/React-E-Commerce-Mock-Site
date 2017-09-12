import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import Clothes from './components/Clothes'
import ProductInfo from './components/ProductInfo'
import Dolls from './components/Dolls'
import Weather from './components/Weather'
import Toys from './components/Toys'
import Holiday from './components/Holiday'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/clothes/:product' component={ProductInfo} />
        <Route path='/clothes' component={Clothes} />
        <Route path='/dolls/:product' component={ProductInfo} />
        <Route path='/dolls' component={Dolls} />
        <Route path='/toys/:product' component={ProductInfo} />
        <Route path='/toys' component={Toys} />
        <Route path='/weather/:product' component={ProductInfo} />
        <Route path='/weather' component={Weather} />
        <Route path='/holiday/:product' component={ProductInfo} />
        <Route path='/holiday' component={Holiday} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
