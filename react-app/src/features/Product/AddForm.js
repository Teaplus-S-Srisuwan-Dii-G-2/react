import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addProduct } from './actions';

//เดียวusereducer
function AddForm() {
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [type, setType] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(addProduct({ name, type, imageURL }));
    history.push('/');
  }

    return (
        <>
          <h1>Add Product</h1>
          <form id="create-form" onSubmit={onSubmit}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
    
            <div className=" input-group">
              <label htmlFor="imageURL">Image URL</label>
              <input
                name="imageURL"
                type="text"
                id="imageURL"
                value={imageURL}
                onChange={(event) => setImageURL(event.target.value)}
              />
            </div>
    
            <div className=" input-group">
              <label htmlFor="type">Type</label>
              <input
                name="type"
                type="text"
                id="type"
                value={type}
                onChange={(event) => setType(event.target.value)}
              />
            </div>
    
            <button type="submit">Add product</button>
          </form>
        </>
      );

}


export default AddForm;