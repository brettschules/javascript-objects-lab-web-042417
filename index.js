var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
   return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key] = value
   return object
}

function deleteFromObjectByKey(object, key) {
  var o = object
  return delete o.key
}

function destructivelyDeleteFromObjectByKey(object, key) {
  object[key] = undefined
  return object
}
