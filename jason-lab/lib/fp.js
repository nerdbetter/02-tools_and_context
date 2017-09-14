'use strict';

module.exports = exports = {};

exports.mapFunction = function (array, cb){
  return array.prototype.map.call(array, cb);
};
