/* @flow */
var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'addStock',
  'deleteStock',
  'updateStocks',
]);

//TIP:https://github.com/reflux/refluxjs
//TIP: This will add listeners to all actions actionName who have a corresponding onActionName (or actionName if you prefer) method in the store. 
//TIP: for example, updateStocks will be OnUpdateStocks in store, and index.js views/stock/index.js
module.exports = Actions;
