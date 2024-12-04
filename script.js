

// const students={
//     name:"maria hussain",
//     age:27,
//     isfollow:true,
//     grade:10,
//     subjects:["maths,science"],


// }
// students["name"]="maria hussain attaria";
// console.log(students["name"]);



// console.log("a=",a,"& b=",b );
// console.log("a+b =",a+b);
// console.log("a-b =",a-b);
// console.log("a*b =",a*b);
// console.log("a/b =",a/b);
// console.log("a%b =", a%b);
// console.log("a**b =", a**b);
// console.log("a++=",a++);
// let a=8;
// let b=5;
// console.log("a=",a,"& b=",b );
// b++;
// console.log("b=",b);

// 
// a%=4;
// console.log("a=",a);

// b%=3;
// console.log("b=",b);


// let age=27;
// if(age>=18){
//     console.log("you can vote");
// }
// if(age<18){
//     console.log("you cannot vote")
// }


//conditional statement

// let age =14
// if(age<16){
//     console.log("you cannot vote");
// }
// else{
//     console.log("you can vote");
// }


// let mode="dark";
// if(mode==="dark"){
//     console.log("bulb is on")
// }
// else{
//     console.log("please switch the light mode")
//

// let marks=78;
// let grade;
// if(marks >=90 && marks <=100){
//     grade="A-1 GRADE";
// }else if(marks >=70 && marks <=89){
//     grade="A GRADE";
// }else if(marks >=60 && marks <=69){
//     grade="B GRADE";

// }else if(marks >=50 && marks<=59){
//     grade="C GRADE";

// }else if(marks >=0 && marks<=49){
//     grade="F GRADES";
// }else{
//     grade="failed";
// }

// console.log("accrording to your marks your grade is",grade)




// let mode="pink";
// let color;
// if(mode==="dark"){
//     color="black";
// }else if(mode==="light"){
//     color="pink"
// }else if(mode==="pink"){
//     color="yellow";
// }else{
//     color="purple";
// }
// console.log(color);



// let age=25;
// let result=(age<18?"adult":"not adult");
// console.log(result);


////loops///

// for(let i=1; i<=5; i++){
//     console.log("apna college");
// }


// let sum=0;
// let n=100;
// for(let i=1; i<=n; i++){
//     sum=sum+i;
// }
// console.log(sum);


//switch case//

// let month=10;
// switch(month){
//     case 1:
//         console.log("jan");
//         break;
// case 2:
//     console.log("feb");
//     break;
//     case 3:
//         console.log("march");
//         break;
//         case 4:
//     console.log("april");
//     break;
//     case 5:
//     console.log("may");
//     break;
//     case 6:
//     console.log("june");
//     break;
//     case 7:
//     console.log("july");
//     break;
//     case 8:
//     console.log("Aug");
//     break;
//     case 9:
//     console.log("sep");
//     break;
//     case 10:
//     console.log("oct");
//     break;
//     case 11:
//     console.log("nov");
//     break;
//     case 12:
//     console.log("dec");
//     break;
//     break;
//     default:
//         console.log("PLease enter the valid number");
// }
//
// let a=prompt("Enter the number of your choice");
// let b=prompt("Enter the number of your choice");
// let num2=prompt("whicch operation do you want to perform");

// a=parseInt(a);
// b=parseInt(b);

// if(num2==="+" || num2==="addition"|| num2==="add" || num2==="plus" || num2==="PLUS"){
//     document.write("the sum of a & b is =",a+b);
// }
// else if(num2==="-" || num2==="subtraction"|| num2==="sub" || num2==="minus" || num2==="MINUS"){
//     document.write("the subtraction of a & b is =",a-b);
// }
// else if(num2==="*" || num2==="multiplication"|| num2==="multiply" || num2==="mult" || num2==="MULTI"){
//     document.write("the multiplication of a & b is =",a*b);
// }
// else if(num2==="%" || num2==="modulus"|| num2==="mode" || num2==="modd" || num2==="MODULUS"){
//     document.write("the modulus of a & b is =",a%b);
// }

// else if(num2==="/" || num2==="divide"|| num2==="division" || num2==="div" || num2==="DIVISION"){
//     document.write("the division of a & b is =",a/b);
// }else{
//     document.write("the operation you are performing is invalid");
// }
// document.write("the sum of a & b is =",a+b,);
// document.write("the subtraction of a & b is =",a-b);
// document.write("the multiplication of a & b is =",a*b);
// document.write("the modulus of a & b is =",a%b);
// document.write("the division of a & b is =",a/b);



//guess the number//


// let a=45;
// let b=prompt("guess the number");

// if(a==b){
//     console.log("congratuation you are successfully guessed");
// }else if(a == ++b){
//     console.log("too close try again")
// }else if(a == 44){
//     console.log("too close try again")
// }

///loops///

//  for(let i=1; i<=5; i++){
//     console.log("apna college");
//  }


// let sum=0;
// let n=20;
// for(let i=1; i<=n; i++){
//     sum=sum+i;
//  }
// console.log(sum);




// 

///while loop//
//  let i=1;
//  while(i<=100){
//     console.log("maria hussain");
//     i++;
//  }

///do while loop//
//  let i=1;
//  do{
//     console.log("i=",i);
//     i++;

//  }while (i<=5);



///for of loop//

// let str="mariahussain";
// let length=0;
// for( let i of str){
//     console.log("i=",i);//     length++;
// }
// console.log("the length of str is=",length);



//for in loop


// let wedding={
//     bridename:"maria hussain",
//     groomname:"null",
//     age:25,
//     venue:"lawyers club",
//     food:"biryani",
// }
// for(let key in wedding){
//     console.log("key=",key ,"value=",wedding[key]);
// }



//pratice question//

// let i=0;
// for(let i=1;i<=100;i++)
//     if(i%2===0){
//     console.log("i=",i)
// }


//no 2//


// let gameNum=25;
// let userNum=prompt("GUESS THE  NUMBER!");

// while (userNum != gameNum) {
//    userNum=prompt("you entered the wrong number!try again");

// }
// console.log("congratulations you guess the correct number!");

// let sum=0;
//  let n=20;
//  for(let i=1; i<=n; i++){
//      sum=sum+i;
//   }
//  console.log(sum);


 //0+1=1      
 //1+2=3     
 //3+3=6
 //6+4=10
 //10+5=15
 //15+6=21
 //21+7=28
 //28+8=36
 //36+9=45
//45+10=55
//55+11=66
//66+12=67
//67+13=79
//79+14=93
//93+15=108
//108+16=124
//

// let sum=0;
// let i=5;
// for(let i=5; i<=15; i+=2){

//     console.log(i)
// }  

// let sum=1;
// let n=5;
// for(let i=1;i<=n;i++){
//     sum=sum*i;
// }
//     console.log(sum);


// for(let i=10;i<=20;i+=2){
//    console.log(i)
// }

// let m=prompt("ask me a number?");
// let sum=0;
// for(let i=1;i<=m;i++){
//  sum=i*i;
// }
// console.log(sum);

// let sum=0;
// let n=prompt("enter a number?");

// for(let i=1;i<n;i++){
//     sum=sum*9;
// console.log(sum);
// }


// let sum=0;
// let n=prompt("Ask mea number?");
// for(let i=0; i<=10;i++){
//     sum=i*3;
//     console.log(sum)

// }



// let sum=1;
// for(let i=1; i<=5; i++){
//     sum=sum*i;
// }
//     console.log(sum);

// let n=prompt("ask me a  number")

// for(let i=0; i<=n; i++){
//     if(i%2===0){
//     console.log(i)
//     }
// }
// }else if(i%2!==0){
//     console.log(i+" is odd num")
// }
// }
// let table=prompt("Enter a number?");
// for(let i=0;i<=10;i++){
//    console.log(table + "x" + i + "=" + table*i);
// }

// let i=prompt("ask me my name?");
// for(let i=0; i<=25)


// let n=prompt("enter num of your choice?");
// let sum=0;
// for(let i=0;i<=n;i++){

// sum=sum+i;

// }
// console.log(sum);


// let i=1;
// while(i<=25){
//     console.log("maria hussain");
//     i++;
// }

// let i=1;
// do{
//     console.log("maria hussain");
//     i++;
// }while(i<=90);


// let size=0;
// let str="maria hussain";
// for(let i of str){
//     console.log("i=",i);
// size++;
// }
// console.log("the size of =",size);


// for(let i=0;i<3;i++){
//     console.log(i)
//         for(let j=0;j<=5;j++){
//             console.log(j)
//         }
//     }
// for(let i=1; i<100;i=i+10){
//     for(let j=i; j< i+10; j++){
//      document.write(j +" ");
// }
// document.write("<br>");
// }
// for(let a=1;a<=5;a++){
//     for(let b=1;b<=a;b++){
//         document.write(b + "");
//     }



//     document.write("<br>");
// }

// for(let a=1;a<=5;a++){
//     for(let b=1;b<=a;b++){
//         document.write(a);
//     }
//     document.write("<br>")
// }

// let a = [1,2,3,4,5,];
// console.log(a.push(6));
// console.log(a);


// for(let i=0; i<=6; i++){
//     document.write("outer loop" + i + "<br>");
//     for(let j=0;j<3; j++){
//         document.write("inner loop" + j + "<br>");
//     }
// }



// for(let i=0; i<=5; i++){
//     document.write(i);
//     for (j=0; j<=3; j++){
//         document.write(j);
//     }
// }


// var n ="John Appleseed";
// var newName = n.slice(5,10);
// console.log(newName);


// let str=prompt("enter some text");
// let numChars=str.length;

// for(i=0;i<=numChars;i++){
//     if(str.slice(i,i+2)===""){
//         console.log("no double space");
//         break;
//     }
// }


// let marks=[85,97,44,37,76,60];
// let totalmarks=85+97+44+37+76+60;
// let avgmarks=totalmarks/marks.length;
// console.log(avgmarks);


// let shoppingmenu=["jeans","t-shirt", "purse", "pouch", "handbag"];

// let price=[4500,5677,8900, 3400,7899];
// let discount=["40%", "50%","30%"];
// document.write("SHOPPINGMENU\t\t \t\t\t "+"PRICE<br>");
// document.write("=======================");

//  document.write("<br>"+shoppingmenu[0] + " : ");
//  document.write(price[0]);
//  document.write("<br>"+shoppingmenu[1] + ": ");
//  document.write(price[1]);
//  document.write("<br>"+shoppingmenu[2] + " : ");
//  document.write(price[2]);
//  document.write("<br>"+shoppingmenu [3] + ": ");
//  document.write(price[3]);
// document.write("<br>"+shoppingmenu [4] + ": ");
// document.write(price[4] +"<br>");
// let Sum=price[0]+price[1]+price[2]+price [3]+price[4];
//  document.write("TOTAL BILL :",Sum, "<br>");

//  let dis=8900*50/100;
//  document.write("Discount :"  +dis);

// for storing multiple time of data we use array//
// let arr=[1,2,4,5,7]
// arr[0]=5666;
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(typeof arr);

// console.log(arr.toString());
// console.log(arr.join(" and "));
// arr.pop();
// // console.log(arr);
// arr.push(9);
// console.log(arr);
// arr.push("maria");
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift("maria");
// delete arr[5];
// console.log(arr.length);


// let arr=[34,56,78,90]
// let arr2=[1,2,3,4,5]
// let arr3=[5,6,7,9,0]
// console.log(arr.concat(arr2,arr3));
// arr.splice(1,3,90);
// console.log(arr);
// arr2.splice(1,3);
// console.log(arr2)

// for(let i =0; i<arr.length;i++){
//     console.log(arr[i*i]);
// }

// let name=prompt("Enter your name:");
// let gender=prompt("Enter your gender:");
// let religion=prompt("Enter your religion:");
// religion=religion.toLowerCase();
// if(religion=="muslim"){

//     document.write("Assalam-o-Alaikum  ".concat(name));
// }else if(religion=="non-muslim"){
//     document.write("hi ".concat( name));
// }

// for(let i =0;i <=100; i++){
//     document.write("you are selected <br>");
// }

// let i=25;
// while(i<100){
//     document.write("<br> selected");
//     i++;
// }
// let  i=1;
// do{
//     document.write("selected   <br>");
//     i++;
// }while(i<100);



//break and continue//
// for(let i=0;i<10;i++){
//     if(i==3){
//         document.write("perfect"+"<br>");
//         break;
//     }
//     document.write("number:" +i+"<br>");
// }
// let user=prompt("Ask user choice");
// let snacks=["potatosticks","chocochips","bisconni"]
// for(let i=0;i<=3;i++){
//     if(user=="snacks"){
//         document.write("papar milgya");
//     }
// }




// for(let y=0;y<100;y++){
//     if(y==3){
//      document.write("selected"+ "<br>");
//      break;
//     }
//     document.write("number:"+y +"<br>");
// }

// for(let a=1;a<=100;a=a+10){
//     for(let b=a; b<a+10;b++){
//     document.write(b + " ");
// }
// document.write(" <br>");
// }
// for(let a=5;a>=1;a--){
//     for(let b=1;b<=a;b++){
//     document.write(a + "    ");

// }
//     document.write(" <br>");

// }   

// for(let a=5;a>=1;a--){
//     for(let b=a;b>=1;b--){
//         document.write(b + " ");
//     }
//     document.write("<br>");
// }\



// let ary=[12,34,56,78,90,34];
// let sum=0;
// for(let i=0;i<5;i++){
//    document.write(ary[i]+ "<br>");
//    sum=sum+ary[i];
// }
// document.write("total sum="+ sum);


// let ary=[23,45,67];
// let a=ary[0]+ary[1]+ary[2];
// document.write(ary+ "<br>" + "Total OF ary is :"+ a);




// let ary=newary();
// ary[0]=10;
// ary[1]=67;
// ary[2]="harry";
// ary[3]=34;
// ary[4]="salman";
// for(let i =0;i<5;i++){
//     console.log(ary[i]);
// }
// let snacks = prompt("Enter snack of your choice \npotatosticks\nringo\nacharpops\nchocochips");
//  snacks = snacks.toLowerCase();
//  let snacksname = ["potatosticks", "ringo", "rollypolly", "acharpops", "chocochips"];
// for (let i = 0; i <= 4; i++) {
// if (snacks === snacksname[i]) {
// alert("papar milgaya");

// }else{
//     alert("dosri shop per jao");
// }


// }
// let a =[
//     ["maria", 25,"female","b-com"],
//     ["sobia",28,"female","masters"],
//     ["saleem",34,"male","master"],
//     ["mar",23,"male","master"]
// ];
// for(let i=0;i<4;i++){

//     for(let b=0;b<4;b++){
// document.write(a[i][b] + " ");
//         document.write("<br>");
// }
// }

// let a=["harry",18,"bca"];
// a[1]="maria";
// document.write(a);


// let a="maria hussain";
// document.write(a.replace("maria","maro"));



// let a="karachi";
// let b=Array.isArray(a);
// document.write(b);



// let a =["sanjay","aman","rehman","maria","sanjay"];
// a.find();
// document.write(a);


// let text="world war II was a significant event in history.many remember world war II for its impact";
// let m=text.replaceAll(/world war II/g,"second world war II");
// console.log(m);

// let score=40.892;
// console.log(score);
// // let balance=new Number(100.34);
// // console.log(balance.toString().length);
// console.log(score.toPrecision(3));


// let num=10000000;
// console.log(num.toLocaleString());




/////maths////

// console.log(Math.abs(-90,));
// console.log(Math.ceil(0.97));
//  console.log(Math.floor(7.9));
// console.log(Math.max(4,5,6,7,8,9));

//math.random
// let min=10;
// let max=20;
// console.log(Math.floor(Math.random()*(max-min)+1)+min);


// let password= '';
// for(let i=0;i<12;i++){
//     password+=String.fromCharCode(Math.floor(Math.random()*10)+48);
// }
//  console.log(password);

// let min=15;
// let max=25;


// let x=Math.floor(Math.random()*(max-min))+15;
// console.log(x);



///DOM IN JAVASCRIPT//
// const text="ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&* ";
// document.write(text.length);
// const passwordlength=18;
// let password="";

// for(let i=0;i<passwordlength;i++){
//     const chr=Math.floor(Math.random()*text.length);//0.8978888*71
//     password+=text[chr];//password=password+text
// }
// document.write("secure password generator"+"<br>");
// document.write("your password"+password);


// let password="";
// for(let i=0;i<19;i++){e
//     password+=String.fromCharCode
//     (Math.floor(Math.random()*62)+48);

// }
// document.write(password);
// window.alert("hello world!");
// console.log(window);
// window.console.log("Hello2");
//hamara html ka jo code hota hai ya html k sary elements hoty hain wo js k andar aaky ek obj k andar
//convert hojaty hain or us special obj ko hum name dety hai document ka or ye document avialble
//hota hai hmry window obj mein/ window object -- k andar --document name ka object or ajata hai
//to jo pura ka pura hmra html ka code hai that is available on document object or ye document obj 
//kahan available hota hai or ye avaialble hota hai window object
//console.log just print krwata hai jb k console.dir hmry document k properties or methods
//ko print krwata hai console.dir lo use krty hn apny obj ko print krwany k liye

////childnode means ek node k andar kitni nodes hain
//dom k andar hm js k code ko access karskty hain
//javascript k andar hum dynamic change krty hi html k andar 
// console.dir(document.body.childNodes[1].innerText="Salam zindagi") ;
// console.dir(document.body.style.background="purple");
// console.dir(document.body.childNodes[1].style.color="yellow");
// console.dir(document.body.childNodes[3].style.background="yellow");


//dom manupilation//
//hm kesy dom mein changes krskty hain using js
//accessing elements//
//selecting with id//
// let a=document.getElementById("head1");
// console.dir(a);
// let c=document.getElementsByClassName("n");
// console.dir(c);
// let n =document.getElementsByTagName("p");
// console.dir(n);



// //selecting with queryselector
// //dom mein value ko access krny k liye hum query sleector use krty hai p sy parah//
//.classname #idname kr k
//dom manipulation properties
///value ko get nd set donu karskty hain
// let firstele=document.querySelector("#head1");
// console.dir(firstele);
// let  secondele=document.querySelector(".n");
// console.dir(secondele);
// let thirdele=document.querySelector("p")
// console.dir(thirdele);
//hum console mein ja k jesy firstele likhyengy to wo  tadega k ye heading h then hum firse 
//ele k sth tagname likhengy to wo hmein btaega k ye ek heading h like h

///date
// let now=new Date();
// // document.write(now.toDateString());//to make date readable and make it simplier
// document.write(now.getMilliseconds());//getday,getmonth,getfullyear//get




// let s=document.getElementById("head1").innerText="abcd";
// console.dir(s);
// let m=document.getElementsByClassName("n");
// console.dir(m);
// console.log(m);



// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let now = new Date();
// console.log(now);
// let theDay = now.getDay();
// console.log(theDay);
// let nameOfToday = dayNames[theDay]
// console.log(nameOfToday);


// let month=["jan","feb","march","april","may","june","july","aug","sep","oct","nov","dec"];
// let m=new Date();
// console.log(m);
// let newmonth=m.getMonth();
// console.log(newmonth);



// console.dir(document.body.childNodes[4]);
// console.log(document.body);
// document.body.childNodes[2].innerText="AMINA HUSSAIN";
// document.getElementById("one").innerHTML="AMINA   HUSSAIN";
// document.getElementsByClassName("p").innerText="hussain"
// let a=document.getElementsByClassName("class");
// console.dir(a);
// let c=document.getElementsByTagName("p").innerText="karachi";
// console.dir(c);
// console.log(c);
//  let ele=document.querySelectorAll("p");
//  console.dir(ele);
//  let ele2=document.querySelector(".class");
//  console.dir(ele2);



// let div= document.querySelector("div");
// console.dir(div);////inner text mein just text aata hai inner html mein pure html tags related content bhi aata hai




//agr ek naya div bhi bnana hoto div.innerHtml ="<div>inner html<div>" aesy likhen to naya div
// ban jaega



// let divs=document.querySelectorAll(".box");
// console.dir(divs);
// divs[0].innerText="maria hussain";
// divs[1].innerText="amina hussain";
// divs[2].innerText="Abdul razzaq hussain";


// let h2=document.querySelector("h2");
// h2.innerText = h2.innerText+" from apna college"
 
// let p = document.querySelectorAll(".para");
// console.log(p[0]);


// let colors=["red","green","yellow"];
// let password="";
// for(let i=0; i<1;i++){
//     password+=colors[Math.floor(Math.random()*colors.length)];
//     document.write(password);
// }

// document.body.style.backgroundColor=password;




// const text="ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&* ";
//  document.write(text.length);
// const passwordlength=18;g
// let password="";

// for(let i=0;i<passwordlength;i++){
//     const chr=Math.floor(Math.random()*text.length);//0.8978888*71
//     password+=text[chr];//password=password+text
//  }
// document.write("secure password generator"+"<br>");
// document.write("your password"+password);


//dom part 2//
//aditional information about elements is called attributes//class is a attribute value is a paragraph
// let div = document.querySelector("div");
// console.dir(div);
// console.log(div);
///
//to get attribute value we use getettribute agr kisi bhi div k 
//liye usky attribute ko call krna hai to us node k liye get attribute ko call krskty h
// let id=div.getAttribute("id")
// console.log(id);
//kisi bhi element k attribute ki value ko access krny k lye getattribute ko hum call krty h

// let name=div.getAttribute("name");
// console.log(name);
//  let para=document.querySelector("p");
//  console.log(para.getAttribute("class"));
 


 //to set or change the attribute value
 // setAttribute(attr,value)
 //agr class name change krna ho to class ko call kr k new value deskty hn
//  let para=document.querySelector("p");
//  console.log(para);
//  console.log(para.getAttribute("class"));
//  console.log(para.setAttribute("class","newsession"));4


//nodes.style
// let d=document.querySelector("div");
// console.log(d);
// div.style.backgroundColor="green";
// div.style.fontSize="25px";
// div.style.fontFamily="helvetica";
// div.innerHTML="hello world";



//INSERT ELEMENTS
//new element ko add kesy krengy
//ussy pehly access krengy dco

// let newheading=document.createElement("button");
// newheading.innerText="click on me";
//   document.querySelector("div").remove(d);
//   document.querySelector("body").append(newheading);
//   newheading.style.backgroundColor="green";
//   newheading.style.color="white";
  //node.append node.prepend node.after node.before node.remove
  //appendchild   all



//note hm jb new class style.css mein banaty hia or ussy js k andat add krn=na ho 
//k purani styling bhi rahy to whn hm classlist.add ka istemal krty hai
// let p=document.querySelector("p");
// console.log(p);


// let div=document.querySelector("div");
// div.onmouseover= () =>{
//   console.log("mouse is clicked");
// };


  
  
  

  
  








 

 