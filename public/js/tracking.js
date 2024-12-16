// // console.log(orderduser);

// const trackingDot1 = document.querySelectorAll(".tracking-order .one");
// const trackingDot2 = document.querySelectorAll(".tracking-order .two");
// const trackingDot3 = document.querySelectorAll(".tracking-order .three");
// const trackingDot4 = document.querySelectorAll(".tracking-order .four");
// const trackline = document.querySelectorAll(".tracking .trackline");

// console.log(
//   trackline.forEach((item) => {
//     if (item.classList.contains("delivery")) {
//       console.log(item.div);
//     }
//     console.log(trackingDot4);
//   })
// );

// orderduser.forEach((order) => {
//   if (
//     order.isdeliverd === "order-placed" &&
//     trackline.classList.contains("order-placed")
//   ) {
//     trackingDot1.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//   }
//   if (
//     order.isdeliverd === "shipping" &&
//     trackline.classList.contains("shippping")
//   ) {
//     // trackingDot1.forEach((dot) => {
//     //   dot.style.backgroundColor = "green";
//     // });
//     trackingDot2.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//   }
//   if (
//     order.isdeliverd === "out-for-delivery" &&
//     trackline.classList.contains("out-for-delivery")
//   ) {
//     // trackingDot1.forEach((dot) => {
//     //   dot.style.backgroundColor = "green";
//     // });
//     // trackingDot2.forEach((dot) => {
//     //   dot.style.backgroundColor = "green";
//     // });
//     trackingDot3.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//     trackingDot4.forEach((dot) => {
//       dot.style.backgroundColor = "none";
//     });
//   }
//   if (
//     order.isdeliverd === "delivered" &&
//     trackline.classList.contains("delivered")
//   ) {
// trackingDot1.forEach((dot) => {
//   dot.style.backgroundColor = "green";
// });
// trackingDot2.forEach((dot) => {
//   dot.style.backgroundColor = "green";
// });
// trackingDot3.forEach((dot) => {
//   dot.style.backgroundColor = "green";
// });
//     trackingDot4.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//   }
// });

// for (let line of trackline) {
//   if (line.classList.contains("order-placed")) {
//     trackingDot1.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//   } else if (line.classList.contains("shipping")) {
//     trackingDot1.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//     trackingDot2.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//   } else if (line.classList.contains("out-for-delivery")) {
//     trackingDot1.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//     trackingDot2.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//     trackingDot3.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//   } else if (line.classList.contains("delivered")) {
//     trackingDot1.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//     trackingDot2.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//     trackingDot3.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//     trackingDot4.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//   }
// }

// for (let order of orderduser) {
//   switch (order.isdeliverd) {
//     case "order-placed":
//       trackingDot1.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });
//       trackingDot2.forEach((dot) => {
//         dot.style.backgroundColor = "gray";
//       });
//       trackingDot3.forEach((dot) => {
//         dot.style.backgroundColor = "gray";
//       });
//       trackingDot4.forEach((dot) => {
//         dot.style.backgroundColor = "gray";
//       });

//       break;
//     case "shipping":
//       trackingDot1.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });
//       trackingDot2.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });

//       break;
//     case "out-for-delivery":
//       trackingDot1.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });
//       trackingDot2.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });
//       trackingDot3.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });

//       break;
//     case "delivered":
//       trackingDot1.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });
//       trackingDot2.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });
//       trackingDot3.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });
//       trackingDot4.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });
//   }
// }

// orderduser.forEach((order) => {
//   if (
//     order.isdeliverd === "delivered" &&
//     order._id === trackingDot1.getAttribute("id")
//   ) {
//     console.log(trackingDot1.getAttribute("id"));
//     console.log(order._id);
//     trackingDot1.style.backgroundColor = "green";
//     trackingDot2.style.backgroundColor = "green";
//     trackingDot3.style.backgroundColor = "green";
//     trackingDot4.style.backgroundColor = "green";
//   }
// });

// for (let order of orderduser) {
//   if (order.isdeliverd === "order-placed") {
//     trackingDot1.find((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//   } else if (order.isdeliverd === "shipping") {
//     trackingDot1.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//     trackingDot2.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//   } else if (order.isdeliverd === "out-for-delivery") {
//     trackingDot1.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//     trackingDot2.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//     trackingDot3.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//   } else if (order.isdeliverd === "delivered") {
//     trackingDot1.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//     trackingDot2.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//     trackingDot3.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//     trackingDot4.forEach((dot) => {
//       dot.style.backgroundColor = "green";
//     });
//   }
// }

// for (let i = 0; i < orderduser.length; i++) {
//   const trackingDot1 = document.querySelector(".tracking-order .one");
//   const trackingDot2 = document.querySelector(".tracking-order .two");
//   const trackingDot3 = document.querySelector(".tracking-order .three");
//   const trackingDot4 = document.querySelector(".tracking-order .four");
//   trackline.forEach((line) => {
//     if (line.classList.contains("order-placed")) {
//       trackingDot1.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });
//       trackingDot2.forEach((dot) => {
//         dot.style.backgroundColor = "none";
//       });
//       trackingDot3.forEach((dot) => {
//         dot.style.backgroundColor = "none";
//       });
//       trackingDot4.forEach((dot) => {
//         dot.style.backgroundColor = "none";
//       });
//     }
//     if (line.classList.contains("shipping")) {
//       trackingDot1.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });
//       trackingDot2.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });
//       trackingDot3.forEach((dot) => {
//         dot.style.backgroundColor = "none";
//       });
//       trackingDot4.forEach((dot) => {
//         dot.style.backgroundColor = "none";
//       });
//     }
//     if (line.classList.contains("out-for-delivery")) {
//       trackingDot1.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });
//       trackingDot2.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });
//       trackingDot3.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });

//       trackingDot4.forEach((dot) => {
//         dot.style.backgroundColor = "none";
//       });
//     }
//     if (line.classList.contains("delivered")) {
//       trackingDot1.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });
//       trackingDot2.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });
//       trackingDot3.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });
//       trackingDot4.forEach((dot) => {
//         dot.style.backgroundColor = "green";
//       });
//     }
//   });
// }
// }
// if (order.isdeliverd === "order-placed") {
//   trackline.style.height = "30px";
// }

// if (order.isdeliverd === "shipping") {
//   trackline.style.height = "120px";
// }
// if (order.isdeliverd === "out for delivery") {
//   trackline.style.height = "170px";
// }
// if (order.isdeliverd === "delivered") {
//   trackline.style.height = "200px";
// }
// }

// for (let i = 0; i < orderduser.length; i++) {
//   trackline.classList.add("placeorder");
//   console.log(orderduser[i].isdeliverd);
//   if (orderduser[i].isdeliverd === "order-placed") {
//     trackline.classList.add("placeorder");
//   }
//   if (orderduser[i].isdeliverd === "shipping") {
//     trackline.classList.add("shipping");
//   }
//   if (orderduser[i].isdeliverd === "out for delivery") {
//     trackline.classList.add("outfordelivery");
//   }
//   if (orderduser[i].isdeliverd === "delivered") {
//     trackline.classList.add("delivered");
//   }
// }

// orderduser.find((order) => {
//   const trackline = document.querySelector(".tracking .trackline");
//   if (order.isdeliverd === "order-placed") {
//     trackline.style.height = "30px";
//   }
// });
// orderduser.find((order) => {
//   const trackline = document.querySelector(".tracking .trackline");
//   if (order.isdeliverd === "shipping") {
//     trackline.style.height = "120px";
//   }
// });
// orderduser.find((order) => {
//   const trackline = document.querySelector(".tracking .trackline");
//   if (order.isdeliverd === "out for delivery") {
//     trackline.style.height = "170px";
//   }
// });
// orderduser.find((order) => {
//   const trackline = document.querySelector(".tracking .trackline");
//   if (order.isdeliverd === "delivered") {
//     trackline.style.height = "200px";
//   }
// });

// orderduser.forEach((order) => {
//   let orders = order.isdeliverd;
//   let orderStatus = "";

//   if (orders === "order-placed") {
//     orderStatus = "placeorder";
//   } else if (orders === "shipping") {
//     orderStatus = "shipping";
//   } else if (orders === "out for delivery") {
//     orderStatus = "outfordelivery";
//   } else if (orders === "delivered") {
//     orderStatus = "delivered";
//   }
//   console.log(orderStatus);
//   trackline.classList.add(orderStatus);
// });
