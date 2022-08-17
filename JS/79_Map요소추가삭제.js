let map = new Map();

map.set("name", "john"); //string key
map.set(123, 456); //numbet key
map.set(true, "bool_type"); //boolean key

console.log(map); //Map(3) { 'name' => 'john', 123 => 456, true => 'bool_type' }
console.log(map.get(123)); //456
console.log(map.get("name")); //john
console.log(map.size); //3

map.clear();
console.log(map); //Map(0) {}
map.set("name", "alice").set(123, 456).set(false, "bool_type"); //이런식으로도 쓸 수 있음!
console.log(map); //Map(3) { 'name' => 'alice', 123 => 456, false => 'bool_type' }
