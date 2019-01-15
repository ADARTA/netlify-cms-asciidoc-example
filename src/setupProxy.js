// https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
const fsExpressAPI = require('netlify-cms-backend-fs/dist/fs');
const express = require('express');

const proxy = function(app) {
  app.use('/images', express.static('starter/slides/images'));
  fsExpressAPI(app)
}

module.exports = proxy;
