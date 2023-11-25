let a = "Đây là biến a";
let b = 100;

////// Cú pháp lưu trữ trên LS như sau
/*
localStorage.setItem("key", JSON.stringify(value))
*/

////// Cú pháp truy vấn dữ liệu trên LS như sau
/*
JSON.parse(localStorage.getItem("key"))
*/


////// Thực hành lưu trữ biến a và b lên LS
localStorage.setItem("a", JSON.stringify(a));


///// Thực hành lưu trữ  biến b 
localStorage.setItem("b", JSON.stringify(b));


// Thực hành lấy giá khóa a
console.log(
  JSON.parse(localStorage.getItem("a"))
);

// Thực hành lấy giá khóa b
console.log(
  JSON.parse(
    localStorage.getItem("b")
  )
);


///// Đề bài:
let users = [
  {
    name: "Ngần",
    age: 30,
    job: "OP",
  },
  {
    name: "Trọng",
    age: 20,
    job: "Security",
  }
]

/*
1. Lưu trữ users này lên LS
2. In ra job của 2 user trong mảng
3. In ra name của user nào có tuổi lớn hơn 25.

*/


//// bài chữa
/// 1 
localStorage.setItem("users", JSON.stringify(users));

//// 2
for (let key of users) {
  console.log(key.job);

}

//// 3
for (let key of users) {
  if (key.age >= 25) {
    console.log(key.name);
  }
}
