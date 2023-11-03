// let fruits = [
//   ["grapes", 15],
//   ["pineapple", 5],
//   ["mango", 10],
//   ["apple", 20]
// ]


// ///// In ra số  tên quả và số lượng tương ứng đi kèm
// // console.log(
// //   `I have ${fruits[0][1]} ${fruits[0][0]}`
// // );

// for (let i = 0; i < fruits.length; i++) {
//   console.log(
//     `I have ${fruits[i][1]} ${fruits[i][0]}`
//   );
// }


// //// Bài 3

// let myDog = {
//   name: "Ngáo",
//   "legs": 4,
//   "friends": ["everything!"]
// };


// // Đổi tên:
// myDog.name = "Husky";

// //// Bổ sung thêm thuộc tính cho đối tượng này:
// myDog.color = "brown"


// //// Xóa đi thuộc tính "friends";
// delete myDog.friends

// console.log(myDog);


///////// Vòng lặp for in với object
// for (let key in myDog) {
//   console.log(myDog[key]);
// }

///// NX: Key trong for in => đại diện cho "khóa"



/////// For in với array
// let arr = [1, 2, 3, 4, 5, 56, 67, 7, 87];
// for (let i in arr) {
//   console.log(i);
// }
// ////// NX: i trong for in đại diện cho vị trí phần tử trong mảng

/// In ra giá trị trong mảng với for in
// for (let i in arr) {
//   console.log(arr[i]);
// }


///////// FOR OF
///// FOR OF trong object
// let obj = {
//   name: "Hiếu",
//   age: 26,
//   job: "Web Developer"
// }

// for (let key of obj) {
//   console.log(key);
// }

////// For of trong Array
// let arr = [1, 2, 3, 5];
// for (let key of arr) {
//   console.log(key);
// }
////// NX: Biến key trong vòng lặp for of => dại diện cho "giá trị" của từng phần tử trong mảng
