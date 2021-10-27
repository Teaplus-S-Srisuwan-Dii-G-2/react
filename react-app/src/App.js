import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import GlobalStyle from './features/GlobalStyle.js';
import Navbar from './features/Navbar.js';
import Container from './features/Container.js';
import Home from './features/Home';
import AddForm from './features/Product/AddForm.js';
import UpdateForm from './features/Product/UpdateForm.js';
import { fetchProducts } from './features/Product/actions';

function App() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const products = await axios.get(
        'https://run.mocky.io/v3/a091c6f3-dd51-43c8-973a-c7b6fd07a84a'
      );
      dispatch(fetchProducts(products.data));
    }

    getProducts();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
      {products.length > 0 ? (
          <Switch>
            <Route path="/create-product">
              <AddForm />
            </Route>
            <Route path="/update-product/:id">
              <UpdateForm />
            </Route>
            <Route path="/">
              <Home products={products} />
            </Route>
          </Switch>
        ) : (
          <div>Loading products....</div>
        )}
      </Container>
    </>
  );
}

export default App;
