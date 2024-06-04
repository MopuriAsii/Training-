// const cart = [
//     { name: "Apple" , price :0.5 , quantity: 4 },
//     { name: "Banana" , price :0.25 , quantity: 6 },

// ];

// const newItems = [
//     { name: "Cherry" , price :0.75 , quantity: 5 },
//     { name: "Date" , price :1 , quantity: 3 },

// ];

// const hello = [...cart , ...newItems]
// console.log(hello);
// var total=0
// for(let i=0;i<hello.length;i++){
//     total+=(hello[i].price*hello[i].quantity);
// }
// console.log(total);

// const cart = [
//          { name: "Apple" , price :0.5 , quantity: 4 },
//          { name: "Banana" , price :0.25 , quantity: 6 },

//      ];

//      const newItems = [
//          { name: "Cherry" , price :0.75 , quantity: 5 },
//          { name: "Date" , price :1 , quantity: 3 },

//      ];

// const hello = [...cart ,...newItems]
// console.log(hello);
// var total=0;
// for(const{price,quantity} of hello){
//     total+=price*quantity;
// }
// console.log(total);

// for(let item of hello){
//     const{price,quantity} = item;
//     total+=price*quantity;
// }

// for(let item of allitems){
//     let cost= item.price * item.quantity;
//     total=total+cost;
// }

// const books = [
//     {title:"Infinte Jest" , rating : 4.5 , genre:"fiction"},
//     {title:"A Brief History Of Time" , rating : 4.8 , genre:"Science"},
//     {title:"The Catcher in the Rye" , rating : 3.9 , genre:"fiction"},
//     {title:"sapiens" , rating : 4.9 , genre:"history"},
//     {title:"clean code" , rating : 4.7 , genre:"technology"},
//  ]

//  for(let i=0;i<books.length;i++)
//     {
//         if(books[i].rating>4.7)
//             console.log(books[i].title);
//     }

//                    or
// let highRated=[];
// for(let book of books){
//     if()
//         highRated.push[book.title];
// }
// }

// const employes= [
//     {id: 1, name: "alice", grade: 78},
//     {id: 2, name: "bob", grade: 85},
//     {id: 3, name: "charlie", grade: 92},
//     {id: 4, name: "david", grade: 88},
//     {id: 5, name: "eva", grade: 76},
// ]
// var j = [];
// for(let i=0;i<employes.length;i++)
//     {
//         if(employes[i].grade>80)
//         j.push({id:employes[i].id,status:"promoted"});
//     }
//     console.log(j);

// if()
//     goodEMployee.push({
// ...employee,status:"promotd",
// });

// const movies = [
//     {title: "inception" , ratings : [5,4,5,4,5] },
//     {title: "interstellar" , ratings : [5,5,4,5,4] },
//     {title: "inception" , ratings : [4,4,4,3,4] },
//     {title: "The Dark Knight" , ratings : [5,5,5,5,5] },
//     {title: "Memento" , ratings : [4,5,4,5,4] },
// ]

// function getAvg(ratings){
//     var sum=0;
//     for(let i=0;i<ratings.length;i++){
//         sum=sum+ratings[i];
// }
// return sum/ratings.length;
// }

// var topRated = null;
// var highAvg = 0;

// for(var i=0;i<movies.length;i++)
//     {
//         var avgRating =getAvg(movies[i].ratings);
//         if(avgRating > highAvg){
//             highAvg=avgRating;
//             topRated = movies[i];
//         }
//     }

//     console.log(topRated.title);

/**
 *
 * @param {*} x
 * @returns
 */

function multiply(x) {
  y = x.toUpperCase();
  return y;
}
