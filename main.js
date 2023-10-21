document.write(" print a pattern decrement of left using do-while loop "+"<br>");
document.write("-------------------------"+"<br>");
let n=parseInt(prompt("Enter a number:"));
let i=n;
do{
    let j=i;
    do{
        document.write("*");
        j--;
    }
    while(j>=1)
    i--;
    document.write("<br>");
}
while(i>=1)