let user = {
  name: "SDK",
};

let admin = {
  name: "Seo",
};

//hello_func 내 this값은 런타임에 결정
function hello_func() {
  console.log("hello" + this.name);
}

user.func = hello_func; //this->user
admin.func = hello_func; //this->admin

user.func();
admin.func();

//'.'말고도 '대괄호[]'를 통해서도 객체 내부에 접근 가능!
user["func"]();
admin["func"]();

user["name"];
