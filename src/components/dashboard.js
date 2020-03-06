import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Table } from 'react-bootstrap';

import EmployeeData from '../data/employee-data.json';

export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch("/EmployeeData")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json.EmployeeData));
        return json.EmployeeData;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
