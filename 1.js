var a=10;
var b=20;
var c;
c=a;
a=b;
b=c;
console.log(a);
console.log(b);




var e=30,f=40;
e=e+f;
f=e-f;
e=e-f;
console.log(e);
console.log(f);



//es6 中语法;
var g=1,h=2;
[g,h]=[h,g];console.log(g,h);