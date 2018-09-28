const recipes = {};

/*
var updateObjectWithKeyAndValue = function(object, key, value){
  let newObject = Object.assign(key: value, object);
  
};
*/

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
  return object[key] = value;
};
