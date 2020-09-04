// 1)
var danylo = {
  name: 'Danylo',
  age: 14,
  height: '160 cm',
  place: 'Lviv',
}


console.log(danylo.name);
console.log(danylo.age);
console.log(danylo.height);
console.log(danylo.place);
for(var key in danylo){
  console.log('key: '+  key + danylo[key])
};
//JSON
//#1
var danyloJson = JSON.stringify(danylo);
console.log(danyloJson);
//#2
var danylo2 = JSON.parse(danyloJson);
console.log(danylo2);

//clone
var danyloClone =Object.assign((),danylo);
for (var key in danyloClone){
  console.log(danyloClone[key]);
}


//map
var contacts = new Map();
contacts.set('Dan', '00000000');
contacts.set('Jhon','11111111');
contacts.set('Nik', '22222222');
console.log(contacts);
for (var [key,value] of contacts) {
console.log(key + ' call: ' + value);
}
