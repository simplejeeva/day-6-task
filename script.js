//Class - Movie
// class Movie{
//     constructor(tittle,studio,rating){
//         this.tittle=tittle;
//         this.studio=studio;
//         if (rating == undefined){
//             this.rating ="PG";
//         } else{
//             this.rating=rating;
//         }

//     }
//     getPG(array){
//         var result=[];
//         for(var i=0;i<array.length;i++){
//             if(array[i].rating=="PG"){
//                 result.push(array[i]);
//             }
//         }return result;
//     }
    
// }
// var movie1 = new Movie("ABC","jeeva production");
// var movie2 = new Movie("Casino Royale","Eon Productions","PG­13");
// var movie3 = new Movie("mersal","leio production",)
// var movie4 = new Movie("master","sun production","PG13")
// var arr =[movie1,movie2,movie3,movie4]
// console.log(movie1.getPG(arr))   

//output
//(2) [Movie, Movie]
//0
//: 
//Movie {tittle: 'ABC', studio: 'jeeva production', rating: 'PG'}
//1
//: 
//Movie {tittle: 'mersal', studio: 'leio production', rating: 'PG'}
//length
//: 
//2
//--------------------------------------------------------------------------------

//2. Circle - Clas
//  class Circle{
//     constructor(radius,color){
//         this.radius= radius;
//         this.color= color
//     }
//     get radiusCircle(){
//         return this.radius;
//     }
//     get colorCircle(){
//         return this.color
//     } 
//     set radiusCircle(radius){
//             this.radius=radius;
//     }
//     set colorCircle(color){
//         this.color =color;
//     }
//     get toString(){
//         return`"Circle[radius=${this.radius},color=${this.color}]"`;
        
//     }
//     get areaCircle(){
//         return Math.PI*this.radius*this.radius;
//     }
//     get circumferenceCircle(){
//         return 2 * Math.PI *this.radius;
//     }
//  }
//  var obj1= new Circle(1.0,"red");
//  //console.log(obj1.radiusCircle);//1
//  //console.log(obj1.colorCircle)//red
//  //console.log(obj1.toString)//"Circle[radius=1,color=red]"
//  //console.log(obj1.areaCircle)//3.141592653589793
//  //console.log(obj1.circumferenceCircle)//6.283185307179586
//-----------------------------------------------------------------------------
// //3.Write a “person” class to hold all the details.

//  class Person{
//     constructor(name,fname,age,gender,salery){
//         this.name=name;
//         this.fname=fname;
//         this.age=age;
//         this.gender=gender;
//         this.salery=salery
//     }
//     } 
//     var test= new Person("jeeva","palanisamy",23,"male","20k");
//     console.log(`${test.name},${test.fname},${test.age},${test.gender},${test.salery}`)
//     //output;jeeva,palanisamy,23,male,20k
//-------------------------------------------------------------------------------------------
//4.write a class to calculate the uber price.
// function counter(distance) {
//    distance = distance * 1000;
//    let totalCost = 0;
//     if (distance > 500) {
//       totalCost += (distance - 500) * 10;
//       distance = 500;
//     }
//     if (distance > 100) {
//      totalCost += (distance - 100) * 50;
//       distance = 100;
//     }
//     if(distance>0)
//      totalCost += distance * 100;
  
//    return totalCost;
//   }
  
//   console.log(counter(.1))
//   console.log(counter(.01))
//   //output
//   10000
//    1000

