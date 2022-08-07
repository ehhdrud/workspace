let map = new Map();

map.set("name", "john"); //string key
map.set(123, 456); //numbet key
map.set(true, "bool_type"); //boolean key
//Map(3) { 'name' => 'john', 123 => 456, true => 'bool_type' }

console.log(map);
console.log(map.get(123));
console.log(map.get("name"));
console.log(map.size);
//output: Map(3) { 'name' => 'john', 123 => 456, true => 'bool_type' }

map.clear();
console.log(map);
map.set("name", "alice").set(123, 456).set(false, "bool_type"); //이런식으로도 쓸 수 있음!
console.log(map);
