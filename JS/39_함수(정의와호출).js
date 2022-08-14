function print_add(x, y = 10) {
  console.log(x + y);
}

print_add(10, 20, 30);
print_add(10);

function print_min() {
  console.log(arguments[0] - arguments[1]);
}

print_min(10, 20, 30);
