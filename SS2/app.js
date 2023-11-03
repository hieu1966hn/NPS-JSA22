/////Ví dụ với while
// let i = 1;
// while (i < 11) {
//   console.log(i);
//   i = i + 1; /// i++; i tăng 1 đơn vị sau mỗi lần lặp.
// }

///// Ví dụ với do while
// let i = 1;
// do {
//   console.log(i);
//   i = i + 1;
// }
// while (i < 11);


// Ví dụ với for
/*
for(box1;box2 ;box3 ){
 Coding...
}

box1: Câu lệnh chạy lần đầu tiên và duy nhất trong vòng lặp
box2: Điều kiện lặp
box3: Câu lệnh chạy cuối cùng sau mỗi lần lặp

*/

// for(let i = 1; i < 11 ; i = i+1){
//   console.log(i);
// }

/*
Đề bài:
1. Nhập vào số nguyên dương "n" và (promt)
in ra tổng các số từ 1 -> n (gồm cả chính n)
input: 3
output: 6

2. Nhập vào số nguyên dương "n" và in ra màn hình các số chẵn từ 1 -> n.
input: 3
output: 2
*/

// Lưu ý: hàm prompt => khi nhận giá trị đầu vào mặc định là KDL "string"
/// Nên ta cần ép kiểu về Number
//// Ví dụ
// let n = Number(prompt("Mời người dùng nhập vào số nguyên dương n"));
// console.log(n);

// let i = 1;
// let sum = 0;
// while (i < n + 1) {
//   sum = sum + i; // 0+1
//   i = i + 1;
// }

// console.log("sum", sum);



///// Chữa bài 2:
// let n = Number(prompt("Mời người dùng nhập vào số nguyên dương n"));

// let i = 1;
// while (i <= n) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }



///////// Array - mảng - danh sách
// let shoppingList = ["rau", "thịt", "cá"];
// //// Số phần tử trong mảng
// console.log(
//   shoppingList.length
// );

// ////// In ra vị trí thứ [1] trong mảng:
// console.log(shoppingList[1]);


// //// In ra toàn bộ mảng
// console.log(shoppingList);

// //// Thay đổi giá trị phần tử trong mảng dựa vào vị trí phần tử []
// shoppingList[2] = "cơm"
// console.log(shoppingList); /// đã update


// //// Thêm 1 phần tử vào cuối mảng
// shoppingList.push("tôm");

// /// Thêm 1 phần tử vào đầu mảng
// shoppingList.unshift("gia vị")

// /// Xóa 1 phần tử ở cuối mảng
// shoppingList.pop();

// /// Xóa 1 phần tử ở đầu mảng
// shoppingList.shift();




/////// Object: Đối tượng
let Dog = {
  name: "John",
  age: 5,
  type: "Husky",
  origin: "Siberia",
  vaccinated: "full",


  walk() {
    alert("Đi bộ đê");
  },

  bark() {
    alert("gâu gâu")
  },

  eat() {
    alert("xì xụp");
  }
}

console.log(Dog);