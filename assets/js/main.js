/* var num = prompt(),
    i = 0;
    sum = 0;

while (num) {
    i = num % 10;
    num = (num-i)/10;
    sum=(sum*10)+ i;
}
alert(sum); 

// TASK 1
var sum=0;

for (let i = 1; i<= 100; i++) {
    if (i%2==0) {
        sum += i;
    }
}
console.log(sum);


var i=1;
    sum=0;

while (i<=100) {
    if(i%2==0){
        sum +=i;
    }
    i++;
}
alert(sum) */

var num=0;
    j=0;
    sum=0;
    count=0;

for (let i=0; i<=100; i++){
    if(i%15==0){
        num = i/15;
        j += i;
        count++;
        sum= j/num;
    }
}
alert(sum);