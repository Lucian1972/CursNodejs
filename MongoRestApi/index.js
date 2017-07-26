"use strict";
var express = require('express');
var mongodb = require('mongodb');
var uuidv1 = require('uuid/v1');

var mProducts = require('./modules/producs');
var mOrders = require('./modules/orders');

var MongoClient = mongo.MongoClient;

var app = express();
//product related request
{
    //create
    app.put('/products', function (req, res) {
        res.end();

    });
    //update
    app.post('/products', function (req, res) {
        res.end();

    });
     //get list
    app.get('/products', function (req, res) {
        res.end();

    });
    //delete
    app.delete('/products', function (req, res) {
        res.end();

    });
}
//orders related request
{
    //create
    app.put('/orders', function (req, res) {
        res.end();

    });
    //update
    app.post('/orders', function (req, res) {
        res.end();

    });
    //get list
    app.get('/orders', function (req, res) {
        res.end();

    });
    //delete
    app.delete('/orders', function (req, res) {
        res.end();

    });


    app.listen(3000, function () {
        console.log('Mongo rest api listening on port 3000!');
    });


}