///// Giới thiệu về hàm map => trả về 1 mảng mới thực hiện hết các yêu cầu 
// mà không ảnh hưởng tới mảng cũ.

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

///// Đề bài: Tăng gấp đôi các giá trị của từng phần tử mảng arr => và in ra nó.
let arrMap = arr.map(function (key) {
  return key * 2;
})
console.log(arrMap);


//// Cách viết 2 của map gọn hơn với hàm mũi tên
let arrMapArrow = arr.map(key => key * 2);
console.log("arrMapArrow: ", arrMapArrow);

console.log(arr);