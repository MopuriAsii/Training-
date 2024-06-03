// let salaries = {
//     john:100,
//     abhi:200,
//     };

//     console.log(Object.keys(salaries));
//     console.log(Object.values(salaries));

// function movie(domain, genre,year)
// {
//     return `http://${domain}${genre}genre${year}year`;
// };

// console.log(movie("imdb.com","thriller", 2020));

// let sentence = "Hello world from JavaScript";
// let transformed = transformSentence(sentence);
// console.log(transformed); // Output: "JAVASCRIPT FROM WORLD HELLO"

// function transformSentence(sentence){
//     var a=sentence.toUpperCase();
//     var b=a.split(' ')
//     var c=b.reverse();
//     var d=c.join(' ');
//     return d;
//     }

//        or

// return sentence.toUpperCase().split(" ").reverse().join(" ");

// function processNames(names) {
//     let result = [];
//     for (let i = 0; i < names.length; i++) {
//       let upperCaseName = names[i].toUpperCase();
//       let nameParts = upperCaseName.split(" ");
//       let joinedName = nameParts.join("_");
//       result.push(joinedName);
//     }
//     return result;
//   }

const namesArray = ["john doe", "jane smith", "alice jones"];
console.log(processNames(namesArray));

function processNames(names) {
  let result = [];
  for (let i = 0; i < names.length; i++) {
    let abc = names[i].toUpperCase().split(" ").join("_");
    result.push(abc);
  }
  return result;
}
