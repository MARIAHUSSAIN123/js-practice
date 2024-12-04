// let colors=["red","green","yellow"];
// let password="";
// for(let i=0; i<1;i++){
//     password+=colors[Math.floor(Math.random()*colors.length)];
//     document.write(password);
// }

// document.body.style.backgroundColor=password;

//password=password+colors[]



// let letters='0123456789ABCDEF' ;
//    let color="#";
//    for(let i=0;i<6;i++){
//     color+= letters[Math.floor(Math.random()*16)];
//    }
//    document.body.style.backgroundColor=color;
// //colors=colors+letter



////functions//
//specific function perform krny k lye function use krty hai
//hmry progrm mein aesav piece ya block of code jo koi specific
//kam krta hai uska fix mtlb h k agr is block of code ko bulaya
// jaega to ye wohi same kaam krdega ek bar create krty h or kbhi b 
//call krskty hain function hmra esaa black box h jisko hm kuch 
//input deskty hain like console .log mein log ko pta h k ussy console screen per
// ja k kuch log krwana hai jo print krwana h wo hmein ussy pass krna hoga
//INPUT LETA HAI OUTPUT RETURN KRTA HAI
// function Myfun(msg){
//     console.log(msg);
//     console.log("welcome to js world:)");
//  }
// Myfun("hi how are you");
//function def k andar hm jis variable ko use krty h wo parameter
//kehllata h or function call k andar jo value hm pass krty h wo argument kehlata h
//sum of 2 num//

// function sum(a,b){
//     console.log(a+b);
// }
// sum("the sum of a & b is",4+6);


//function return

// kuch input lety h to kuch value return kr k bhi dety h jesy hm chahty h k function
// value print nakrwae just return krwae



// function sum(a,b){
//     //ab ye parameter local variable ki trhn act krty h yani bs
//     // isi block of code tk zinda hai//func k param act like a locak vari of func
//     s=a+b;
//     return s;
// }
// let val=sum("The sum of a and b is",56+76);
// console.log(val);

//arrow function

// compact way of writing a function
// const c= (a,b)=>{
// console.log(a+b);
// }

// let newvar=(a,b)=>{
//     console.log(a*b);
// };

// let newvar=(a,b)=>{
//     return a*b;
// };

// let printhello=()=>{
//     console.log("hello");
// };


// function vowels(str){
//     let count=0;
//     for(let str=0;str<str.length;str++){
//         // if(count==="a"||count=="e"||count==="i"||count==="o"||count==="u")
//            console.log(str)
//     }
// }\


// let checktocity="karachi";
// let otherchar="ston";
// let firstchar=checktocity.slice(0,1);
// let secondchar=otherchar.slice(1);
// checktocity=checktocity.toUpperCase();
// otherchar=otherchar.toLowerCase();
// let combinedcity=firstchar+secondchar;
// document.write(combinedcity);

// let name="captain";
// let name2=name.slice(1,3);
// document.write(name2);


//switch case//

// switch(new Date().getDay()){
//     case 0:
//         document.write("today is sunday");
//         break;
//         case 1:
//             document.write("today is monday");
//             break;
//             case 2:
//                 document.write("today is tuesday");
//                 break;
//                 case 3:
//                     document.write("today is wednesday");
//                     break;
//                     case 4:
//                         document.write("today is thursday");
//                         break;
//                         case 5:
//                             document.write("today is friday");
                
//                             break;
//                             case 6:
//                                 document.write("today is saturday");
//                                 break;
//                                 default:
//                                     document.write("invalid day");;
//                                     break;

// }


// let a=Math.floor(Math.random()*10)+1;
// document.write(a);


// let day=["sun","mon","tue","wed","thu","fri","sat"];
// let d=new Date('january 20,2012');
// document.write(d.getDate());
// document.write(d.getFullYear());


// let a= new Date();
// document.write(a.getDate() + "/" + a.getMonth() + "/" + a.getFullYear());



// for(let i=0;i<=3;i++){
//     document.write("outer loop iteration");
//     for(let j=1;j<=2;j++){
//         document.write("inner ldocumop")
//     }

//
function loginpassword(username){
    if(!username===undefined){
        document.write("please enter valid number")
        return;
    }
    return`${username} just logged in`;
}
document.write(loginpassword());