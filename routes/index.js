const express = require('express');
const userRoutes = require('./users.route.js');

const routes = (app) => {
    // parse requests of content-type - application/json
    app.use(express.json());
    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(express.urlencoded({ extended: true }));

    app.use("/api/users", userRoutes);
};

module.exports = routes;