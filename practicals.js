const topics = [
  {
    "id": "basic-programming-constructs",
    "name": "Basic Programming Constructs",
    "icon": "🔢",
    "color": "pink",
    "description": "Basic programming constructs including variables, data types, operators, and control structures.",
    "practicals": [
      {

        "number": 1,
        "title": "Hello World",
        "question": "Hello World",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical1{ \npublic static void main(String args[]){ //under main function w/o creating object\nSystem.out.println(\"Hello World\"); //printing hello world\n}\n}",
        "screenshot": "assets/screenshots/1.png"
      },
      {
        "number": 2,
        "title": "Sum of Two Numbers",
        "question": "Sum of Two Numbers",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical2{\npublic static void main(String args[]){\nint a=10; //assigning value to var\nint b=20;\nSystem.out.println(\"Sum is: \"+(a+b)); //printing sum using plus\n}\n}",
        "screenshot": "assets/screenshots/2.png"
      },
      {
        "number": 3,
        "title": "Product of Two Numbers",
        "question": "Product of Two Numbers",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical3{\npublic static void main(String args[]){\nint a=20;\nint b=45;\nSystem.out.println(\"product is:\"+(a*b)); //multiply\n}\n}",
        "screenshot": "assets/screenshots/3.png"
      },
      {
        "number": 4,
        "title": "Arithmetic Operations on Two Numbers",
        "question": "Arithmetic Operations on Two Numbers",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical4{\npublic static void main(String args[]){\nint a=89;\nint b=65;\n//printing the arithmetic operators\nSystem.out.println(\"SUM IS:\" +(a+b));\nSystem.out.println(\"SUBTRACT IS:\" +(a-b));\nSystem.out.println(\"PRODUCT IS:\" +(a*b));\nSystem.out.println(\"DIVISION IS:\" +(a/b));\n}\n}",
        "screenshot": "assets/screenshots/4.png"
      },
      {
        "number": 5,
        "title": "Swap Two Numbers",
        "question": "Swap Two Numbers",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical5{\npublic static void main(String[] args) {\nint a=10;\nint b=20;\nint t;\nt=a;//swapping the numbrs\na=b;\nb=t;\nSystem.out.println(\"a=\"+a+\", b=\"+b);\n}\n}",
        "screenshot": "assets/screenshots/5.png"
      },
      {
        "number": 6,
        "title": "Sum of Digits",
        "question": "Sum of Digits",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical6 {\npublic static void main(String args[]){\njava.util.Scanner s=new java.util.Scanner(System.in);//taking input\nint n=s.nextInt(),sum=0;\nn=Math.abs(n);\nwhile(n>0){\nsum+=n%10;//convrting decimal\nn/=10;\n}\nSystem.out.println(sum);\n}\n}",
        "screenshot": "assets/screenshots/6.png"
      },
      {
        "number": 7,
        "title": "Compare Two Numbers",
        "question": "Compare Two Numbers",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical7{\npublic static void main(String args[]){\nint a=10;\nint b=20;\nif(a>b){\nSystem.out.println(\"a is greater than b\");\n}else if(a<b){\nSystem.out.println(\"b is greater than a\");\n}\nelse{\nSystem.out.println(\"Both numbers are equal\");\n}\n}\n}",
        "screenshot": "assets/screenshots/7.png"
      },
      {
        "number": 8,
        "title": "Find ASCII Value of a Character",
        "question": "Find ASCII Value of a Character",
        "code": "package basicprogrammingconstructs;\nclass Practical8{\npublic static void main(String[] args){\nchar ch='A';\nint ascii=ch; //convert character to ASCII value\nSystem.out.println(\"ASCII value of \"+ch+\" is \"+ascii);\n}\n}",
        "screenshot": "assets/screenshots/8.png"
      },
      {
        "number": 9,
        "title": "Calculate n + nn + nnn",
        "question": "Calculate n + nn + nnn",
        "code": "package basicprogrammingconstructs;\nclass Practical9{\npublic static void main(String[] args){\nint n=5;\nint result=n+n*11+n*111; //calculate n+nn+nnn\nSystem.out.println(\"Result=\"+result);\n}\n}",
        "screenshot": "assets/screenshots/9.png"
      },
      {
        "number": 10,
        "title": "Convert String to Integer",
        "question": "Convert String to Integer",
        "code": "package basicprogrammingconstructs;\nclass Practical10{\npublic static void main(String[] args){\nString str=\"123\";\nint num=Integer.parseInt(str); //convert string to integer\nSystem.out.println(\"Integer value=\"+num);\n}\n}",
        "screenshot": "assets/screenshots/10.png"
      },
      {
        "number": 11,
        "title": "Convert Seconds into Hours, Minutes and Seconds",
        "question": "Convert Seconds into Hours, Minutes and Seconds",
        "code": "package basicprogrammingconstructs;\nclass Practical11{\npublic static void main(String[] args){\nint seconds=3665;\nint hours=seconds/3600; //calculate hours\nint minutes=(seconds%3600)/60; //calculate remaining minutes\nint remainingSeconds=seconds%60; //calculate remaining seconds\nSystem.out.println(\"Hours=\"+hours);\nSystem.out.println(\"Minutes=\"+minutes);\nSystem.out.println(\"Seconds=\"+remainingSeconds);\n}\n}",
        "screenshot": "assets/screenshots/11.png"
      },
      {
        "number": 12,
        "title": "Find Square Root",
        "question": "Find Square Root",
        "code": "package basicprogrammingconstructs;\nclass Practical12{\npublic static void main(String[] args){\ndouble num=25;\ndouble root=Math.sqrt(num); //calculate square root\nSystem.out.println(\"Square root=\"+root);\n}\n}",
        "screenshot": "assets/screenshots/12.png"
      },
      {
        "number": 13,
        "title": "Add Two Numbers Without Arithmetic Operators",
        "question": "Add Two Numbers Without Arithmetic Operators",
        "code": "package basicprogrammingconstructs;\nclass Practical13{\npublic static void main(String[] args){\nint a=10;\nint b=20;\nwhile(b!=0){\nint carry=a&b; //find carry bits\na=a^b; //add bits without carry\nb=carry<<1; //shift carry to the left\n}\nSystem.out.println(\"Sum=\"+a);\n}\n}",
        "screenshot": "assets/screenshots/13.png"
      },
      {
        "number": 14,
        "title": "Calculate Area of Circle",
        "question": "Calculate Area of Circle",
        "code": "package basicprogrammingconstructs;\nclass Practical14{\npublic static void main(String[] args){\ndouble radius=5;\ndouble area=Math.PI*radius*radius;//calculate area\nSystem.out.println(\"Area of circle=\"+area);\n}\n}",
        "screenshot": "assets/screenshots/14.png"
      },
      {
        "number": 15,
        "title": "Calculate Average Marks",
        "question": "Calculate Average Marks",
        "code": "package basicprogrammingconstructs;\nclass Practical15{\npublic static void main(String[] args){\nint a=80;\nint b=75;\nint c=90;\nint d=85;\nint e=70;\ndouble average=(a+b+c+d+e)/5.0;//calculate average marks\nSystem.out.println(\"Average marks=\"+average);\n}\n}",
        "screenshot": "assets/screenshots/15.png"
      },
      {
        "number": 16,
        "title": "Simple Calculator Using Switch",
        "question": "Simple Calculator Using Switch",
        "code": "package basicprogrammingconstructs;\nclass Practical16{\npublic static void main(String[] args){\ndouble a=20;\ndouble b=10;\nchar operator='+';\nswitch(operator){\ncase '+':\nSystem.out.println(\"Result=\"+(a+b));//addition\nbreak;\ncase '-':\nSystem.out.println(\"Result=\"+(a-b));//subtraction\nbreak;\ncase '*':\nSystem.out.println(\"Result=\"+(a*b));//multiplication\nbreak;\ncase '/':\nif(b!=0){\nSystem.out.println(\"Result=\"+(a/b));//division\n}else{\nSystem.out.println(\"Division by zero is not allowed\");\n}\nbreak;\ndefault:\nSystem.out.println(\"Invalid operator\");\n}\n}\n}",
        "screenshot": "assets/screenshots/16.png"
      },
      {
        "number": 17,
        "title": "Check Vowel or Consonant",
        "question": "Check Vowel or Consonant",
        "code": "package basicprogrammingconstructs;\nclass Practical17{\npublic static void main(String[] args){\nchar ch='e';\nif(ch>='A'&&ch<='Z'){\nch=(char)(ch+32);//convert uppercase to lowercase\n}\nif(ch>='a'&&ch<='z'){\nif(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){\nSystem.out.println(\"Vowel\");\n}else{\nSystem.out.println(\"Consonant\");\n}\n}else{\nSystem.out.println(\"Not an alphabet\");\n}\n}\n}",
        "screenshot": "assets/screenshots/17.png"
      },
      {
        "number": 18,
        "title": "Check Even or Odd",
        "question": "Check Even or Odd",
        "code": "package basicprogrammingconstructs;\nclass Practical18{\npublic static void main(String[] args){\nint n=10;\nif(n%2==0){//check divisibility by 2\nSystem.out.println(\"Even number\");\n}else{\nSystem.out.println(\"Odd number\");\n}\n}\n}",
        "screenshot": "assets/screenshots/18.png"
      },
      {
        "number": 19,
        "title": "Check Positive, Negative or Zero",
        "question": "Check Positive, Negative or Zero",
        "code": "package basicprogrammingconstructs;\nclass Practical19{\npublic static void main(String[] args){\nint n=-5;\nif(n>0){//check positive number\nSystem.out.println(\"Positive number\");\n}else if(n<0){//check negative number\nSystem.out.println(\"Negative number\");\n}else{\nSystem.out.println(\"Zero\");\n}\n}\n}",
        "screenshot": "assets/screenshots/19.png"
      },
      {
        "number": 20,
        "title": "Check Leap Year",
        "question": "Check Leap Year",
        "code": "package basicprogrammingconstructs;\nclass Practical20{\npublic static void main(String[] args){\nint year=2024;\nif((year%400==0)||(year%4==0&&year%100!=0)){//check leap year conditions\nSystem.out.println(\"Leap year\");\n}else{\nSystem.out.println(\"Not a leap year\");\n}\n}\n}",
        "screenshot": "assets/screenshots/20.png"
      },
      {
        "number": 21,
        "title": "Find Largest of Three Numbers",
        "question": "Find Largest of Three Numbers",
        "code": "package basicprogrammingconstructs;\nclass Practical21{\npublic static void main(String[] args){\nint a=10;\nint b=25;\nint c=15;\nif(a>=b&&a>=c){//check if a is largest\nSystem.out.println(\"Largest=\"+a);\n}else if(b>=a&&b>=c){//check if b is largest\nSystem.out.println(\"Largest=\"+b);\n}else{\nSystem.out.println(\"Largest=\"+c);\n}\n}\n}",
        "screenshot": "assets/screenshots/21.png"
      },
      {
        "number": 22,
        "title": "Check Valid Triangle",
        "question": "Check Valid Triangle",
        "code": "package basicprogrammingconstructs;\nclass Practical22{\npublic static void main(String[] args){\nint a=5;\nint b=6;\nint c=7;\nif(a+b>c&&a+c>b&&b+c>a){//check triangle inequality\nSystem.out.println(\"Valid triangle\");\n}else{\nSystem.out.println(\"Invalid triangle\");\n}\n}\n}",
        "screenshot": "assets/screenshots/22.png"
      },
      {
        "number": 23,
        "title": "Check Prime Number",
        "question": "Check Prime Number",
        "code": "package basicprogrammingconstructs;\nclass Practical23{\npublic static void main(String[] args){\nint n=17;\nboolean prime=true;\nif(n<=1){//numbers less than or equal to 1 are not prime\nprime=false;\n}else{\nfor(int i=2;i<=n/2;i++){\nif(n%i==0){//check for divisors\nprime=false;\nbreak;\n}\n}\n}\nif(prime){\nSystem.out.println(\"Prime number\");\n}else{\nSystem.out.println(\"Not a prime number\");\n}\n}\n}",
        "screenshot": "assets/screenshots/23.png"
      },
      {
        "number": 24,
        "title": "Find Factorial",
        "question": "Find Factorial",
        "code": "package basicprogrammingconstructs;\nclass Practical24{\npublic static void main(String[] args){\nint n=5;\nlong factorial=1;\nfor(int i=1;i<=n;i++){//multiply numbers from 1 to n\nfactorial=factorial*i;\n}\nSystem.out.println(\"Factorial=\"+factorial);\n}\n}",
        "screenshot": "assets/screenshots/24.png"
      },
      {
        "number": 25,
        "title": "Print Fibonacci Series",
        "question": "Print Fibonacci Series",
        "code": "package basicprogrammingconstructs;\nclass Practical25{\npublic static void main(String[] args){\nint n=10;\nint a=0;\nint b=1;\nfor(int i=1;i<=n;i++){//generate Fibonacci series\nSystem.out.print(a+\" \");\nint c=a+b;\na=b;\nb=c;\n}\nSystem.out.println();\n}\n}",
        "screenshot": "assets/screenshots/25.png"
      },
      {
        "number": 26,
        "title": "Print Multiplication Table",
        "question": "Print Multiplication Table",
        "code": "package basicprogrammingconstructs;\nclass Practical26{\npublic static void main(String[] args){\nint n=5;\nfor(int i=1;i<=10;i++){//print table from 1 to 10\nSystem.out.println(n+\" x \"+i+\" = \"+(n*i));\n}\n}\n}",
        "screenshot": "assets/screenshots/26.png"
      },
      {
        "number": 27,
        "title": "Find Sum of Digits",
        "question": "Find Sum of Digits",
        "code": "package basicprogrammingconstructs;\nclass Practical27{\npublic static void main(String[] args){\nint n=12345;\nint sum=0;\nn=Math.abs(n);//convert negative number to positive\nwhile(n>0){\nsum=sum+n%10;//add last digit\nn=n/10;//remove last digit\n}\nSystem.out.println(\"Sum of digits=\"+sum);\n}\n}",
        "screenshot": "assets/screenshots/27.png"
      },
      {
        "number": 28,
        "title": "Reverse a Number",
        "question": "Reverse a Number",
        "code": "package basicprogrammingconstructs;\nclass Practical28{\npublic static void main(String[] args){\nint n=12345;\nint reverse=0;\nwhile(n!=0){\nint digit=n%10;//extract last digit\nreverse=reverse*10+digit;//build reversed number\nn=n/10;//remove last digit\n}\nSystem.out.println(\"Reversed number=\"+reverse);\n}\n}",
        "screenshot": "assets/screenshots/28.png"
      },
      {
        "number": 29,
        "title": "Check Palindrome Number",
        "question": "Check Palindrome Number",
        "code": "package basicprogrammingconstructs;\nclass Practical29{\npublic static void main(String[] args){\nint n=121;\nint original=n;\nint reverse=0;\nwhile(n>0){\nint digit=n%10;//extract last digit\nreverse=reverse*10+digit;//reverse the number\nn=n/10;//remove last digit\n}\nif(original==reverse){//compare original and reversed numbers\nSystem.out.println(\"Palindrome number\");\n}else{\nSystem.out.println(\"Not a palindrome number\");\n}\n}\n}",
        "screenshot": "assets/screenshots/29.png"
      },
      {
        "number": 30,
        "title": "Check Armstrong Number",
        "question": "Check Armstrong Number",
        "code": "package basicprogrammingconstructs;\nclass Practical30{\npublic static void main(String[] args){\nint n=153;\nint original=n;\nint sum=0;\nint digits=String.valueOf(n).length();//count digits\nwhile(n>0){\nint digit=n%10;//extract last digit\nsum+=Math.pow(digit,digits);//add digit raised to digit count\nn=n/10;//remove last digit\n}\nif(original==sum){//compare sum with original number\nSystem.out.println(\"Armstrong number\");\n}else{\nSystem.out.println(\"Not an Armstrong number\");\n}\n}\n}",
        "screenshot": "assets/screenshots/30.png"
      },
      {
        "number": 31,
        "title": "Count Digits in a Number",
        "question": "Count Digits in a Number",
        "code": "package basicprogrammingconstructs;\nclass Practical31{\npublic static void main(String[] args){\nint n=12345;\nn=Math.abs(n);//convert to positive\nint count=0;\nif(n==0){\ncount=1;//zero has one digit\n}else{\nwhile(n>0){\ncount++;//increase digit count\nn=n/10;//remove last digit\n}\n}\nSystem.out.println(\"Number of digits=\"+count);\n}\n}",
        "screenshot": "assets/screenshots/31.png"
      },
      {
        "number": 32,
        "title": "Find GCD of Two Numbers",
        "question": "Find GCD of Two Numbers",
        "code": "package basicprogrammingconstructs;\nclass Practical32{\npublic static void main(String[] args){\nint a=24;\nint b=36;\nwhile(b!=0){\nint remainder=a%b;//calculate remainder\na=b;\nb=remainder;\n}\nSystem.out.println(\"GCD=\"+a);\n}\n}",
        "screenshot": "assets/screenshots/32.png"
      },
      {
        "number": 33,
        "title": "Find LCM of Two Numbers",
        "question": "Find LCM of Two Numbers",
        "code": "package basicprogrammingconstructs;\nclass Practical33{\npublic static void main(String[] args){\nint a=12;\nint b=18;\nint x=a;\nint y=b;\nwhile(y!=0){\nint remainder=x%y;//calculate remainder\nx=y;\ny=remainder;\n}\nint lcm=(a*b)/x;//calculate LCM using GCD\nSystem.out.println(\"LCM=\"+lcm);\n}\n}",
        "screenshot": "assets/screenshots/33.png"
      },
      {
        "number": 34,
        "title": "Display Factors of a Number",
        "question": "Display Factors of a Number",
        "code": "package basicprogrammingconstructs;\nclass Practical34{\npublic static void main(String[] args){\nint n=12;\nfor(int i=1;i<=n;i++){\nif(n%i==0){//check whether i is a factor\nSystem.out.print(i+\" \");\n}\n}\nSystem.out.println();\n}\n}",
        "screenshot": "assets/screenshots/34.png"
      },
      {
        "number": 35,
        "title": "Check Perfect Number",
        "question": "Check Perfect Number",
        "code": "package basicprogrammingconstructs;\nclass Practical35{\npublic static void main(String[] args){\nint n=28;\nint sum=0;\nfor(int i=1;i<n;i++){\nif(n%i==0){//add proper divisors\nsum+=i;\n}\n}\nif(sum==n){\nSystem.out.println(\"Perfect number\");\n}else{\nSystem.out.println(\"Not a perfect number\");\n}\n}\n}",
        "screenshot": "assets/screenshots/35.png"
      },
      {
        "number": 36,
        "title": "Print Prime Numbers in a Range",
        "question": "Print Prime Numbers in a Range",
        "code": "package basicprogrammingconstructs;\nclass Practical36{\npublic static void main(String[] args){\nint start=1;\nint end=50;\nfor(int n=start;n<=end;n++){\nboolean prime=n>1;\nfor(int i=2;i<=n/2&&prime;i++){\nif(n%i==0){//check for divisors\nprime=false;\n}\n}\nif(prime){\nSystem.out.print(n+\" \");\n}\n}\nSystem.out.println();\n}\n}",
        "screenshot": "assets/screenshots/36.png"
      },
      {
        "number": 37,
        "title": "Print Star Triangle Pattern",
        "question": "Print Star Triangle Pattern",
        "code": "package basicprogrammingconstructs;\nclass Practical37{\npublic static void main(String[] args){\nint rows=5;\nfor(int i=1;i<=rows;i++){\nfor(int j=1;j<=i;j++){//print stars in each row\nSystem.out.print(\"* \");\n}\nSystem.out.println();\n}\n}\n}",
        "screenshot": "assets/screenshots/37.png"
      },
      {
        "number": 38,
        "title": "Print Inverted Star Triangle",
        "question": "Print Inverted Star Triangle",
        "code": "package basicprogrammingconstructs;\nclass Practical38{\npublic static void main(String[] args){\nint rows=5;\nfor(int i=rows;i>=1;i--){\nfor(int j=1;j<=i;j++){//print decreasing stars\nSystem.out.print(\"* \");\n}\nSystem.out.println();\n}\n}\n}",
        "screenshot": "assets/screenshots/38.png"
      },
      {
        "number": 39,
        "title": "Print Number Triangle",
        "question": "Print Number Triangle",
        "code": "package basicprogrammingconstructs;\nclass Practical39{\npublic static void main(String[] args){\nint rows=5;\nfor(int i=1;i<=rows;i++){\nfor(int j=1;j<=i;j++){//print numbers from 1 to row number\nSystem.out.print(j+\" \");\n}\nSystem.out.println();\n}\n}\n}",
        "screenshot": "assets/screenshots/39.png"
      },
      {
        "number": 40,
        "title": "Print Pyramid Pattern",
        "question": "Print Pyramid Pattern",
        "code": "package basicprogrammingconstructs;\nclass Practical40{\npublic static void main(String[] args){\nint rows=5;\nfor(int i=1;i<=rows;i++){\nfor(int j=1;j<=rows-i;j++){//print spaces\nSystem.out.print(\" \");\n}\nfor(int j=1;j<=2*i-1;j++){//print stars\nSystem.out.print(\"*\");\n}\nSystem.out.println();\n}\n}\n}",
        "screenshot": "assets/screenshots/40.png"
      },
      {
        "number": 41,
        "title": "Print Inverted Pyramid",
        "question": "Print Inverted Pyramid",
        "code": "package basicprogrammingconstructs;\nclass Practical41{\npublic static void main(String[] args){\nint rows=5;\nfor(int i=rows;i>=1;i--){\nfor(int j=1;j<=rows-i;j++){//print spaces\nSystem.out.print(\" \");\n}\nfor(int j=1;j<=2*i-1;j++){//print stars\nSystem.out.print(\"*\");\n}\nSystem.out.println();\n}\n}\n}",
        "screenshot": "assets/screenshots/41.png"
      },
      {
        "number": 42,
        "title": "Print Diamond Pattern",
        "question": "Print Diamond Pattern",
        "code": "package basicprogrammingconstructs;\nclass Practical42{\npublic static void main(String[] args){\nint rows=5;\nfor(int i=1;i<=rows;i++){\nfor(int j=1;j<=rows-i;j++){//print spaces\nSystem.out.print(\" \");\n}\nfor(int j=1;j<=2*i-1;j++){//print stars\nSystem.out.print(\"*\");\n}\nSystem.out.println();\n}\nfor(int i=rows-1;i>=1;i--){\nfor(int j=1;j<=rows-i;j++){//print spaces\nSystem.out.print(\" \");\n}\nfor(int j=1;j<=2*i-1;j++){//print stars\nSystem.out.print(\"*\");\n}\nSystem.out.println();\n}\n}\n}",
        "screenshot": "assets/screenshots/42.png"
      },
      {
        "number": 43,
        "title": "Print Floyd's Triangle",
        "question": "Print Floyd's Triangle",
        "code": "package basicprogrammingconstructs;\nclass Practical43{\npublic static void main(String[] args){\nint rows=5;\nint num=1;\nfor(int i=1;i<=rows;i++){\nfor(int j=1;j<=i;j++){//print consecutive numbers\nSystem.out.print(num+\" \");\nnum++;\n}\nSystem.out.println();\n}\n}\n}",
        "screenshot": "assets/screenshots/43.png"
      },
      {
        "number": 44,
        "title": "Print Pascal's Triangle",
        "question": "Print Pascal's Triangle",
        "code": "package basicprogrammingconstructs;\nclass Practical44{\npublic static void main(String[] args){\nint rows=5;\nfor(int i=0;i<rows;i++){\nint num=1;\nfor(int j=0;j<=i;j++){\nSystem.out.print(num+\" \");//print binomial coefficient\nnum=num*(i-j)/(j+1);\n}\nSystem.out.println();\n}\n}\n}",
        "screenshot": "assets/screenshots/44.png"
      },
      {
        "number": 45,
        "title": "Print Hollow Square Pattern",
        "question": "Print Hollow Square Pattern",
        "code": "package basicprogrammingconstructs;\nclass Practical45{\npublic static void main(String[] args){\nint n=5;\nfor(int i=1;i<=n;i++){\nfor(int j=1;j<=n;j++){\nif(i==1||i==n||j==1||j==n){//print border stars\nSystem.out.print(\"* \");\n}else{\nSystem.out.print(\"  \");\n}\n}\nSystem.out.println();\n}\n}\n}",
        "screenshot": "assets/screenshots/45.png"
      },
      {
        "number": 46,
        "title": "Print Number Pyramid",
        "question": "Print Number Pyramid",
        "code": "package basicprogrammingconstructs;\nclass Practical46{\npublic static void main(String[] args){\nint rows=5;\nfor(int i=1;i<=rows;i++){\nfor(int j=1;j<=rows-i;j++){//print spaces\nSystem.out.print(\" \");\n}\nfor(int j=1;j<=i;j++){//print ascending numbers\nSystem.out.print(j);\n}\nfor(int j=i-1;j>=1;j--){//print descending numbers\nSystem.out.print(j);\n}\nSystem.out.println();\n}\n}\n}",
        "screenshot": "assets/screenshots/46.png"
      },
      {
        "number": 47,
        "title": "Print Multiplication Table Using Nested Loops",
        "question": "Print Multiplication Table Using Nested Loops",
        "code": "package basicprogrammingconstructs;\nclass Practical47{\npublic static void main(String[] args){\nfor(int i=1;i<=5;i++){\nfor(int j=1;j<=10;j++){//print each multiplication result\nSystem.out.print(i*j+\"\\t\");\n}\nSystem.out.println();\n}\n}\n}",
        "screenshot": "assets/screenshots/47.png"
      },
      {
        "number": 48,
        "title": "Calculate Power",
        "question": "Calculate Power",
        "code": "package basicprogrammingconstructs;\nclass Practical48{\npublic static void main(String[] args){\nint base=2;\nint exponent=5;\nint result=1;\nfor(int i=1;i<=exponent;i++){//multiply base repeatedly\nresult=result*base;\n}\nSystem.out.println(\"Power=\"+result);\n}\n}",
        "screenshot": "assets/screenshots/48.png"
      },
      {
        "number": 49,
        "title": "Convert Decimal to Binary",
        "question": "Convert Decimal to Binary",
        "code": "package basicprogrammingconstructs;\nclass Practical49{\npublic static void main(String[] args){\nint n=10;\nint binary=0;\nint place=1;\nwhile(n>0){\nint remainder=n%2;//get binary digit\nbinary=binary+remainder*place;\nplace=place*10;\nn=n/2;//divide by 2\n}\nSystem.out.println(\"Binary=\"+binary);\n}\n}",
        "screenshot": "assets/screenshots/49.png"
      },
      {
        "number": 50,
        "title": "Convert Binary to Decimal",
        "question": "Convert Binary to Decimal",
        "code": "package basicprogrammingconstructs;\nclass Practical50{\npublic static void main(String[] args){\nint binary=1010;\nint decimal=0;\nint base=1;\nwhile(binary>0){\nint digit=binary%10;//extract last binary digit\ndecimal=decimal+digit*base;//calculate decimal value\nbase=base*2;//update base\nbinary=binary/10;//remove last digit\n}\nSystem.out.println(\"Decimal=\"+decimal);\n}\n}",
        "screenshot": "assets/screenshots/50.png"
      },
      {
        "number": 51,
        "title": "Convert Decimal to Octal",
        "question": "Convert Decimal to Octal",
        "code": "package basicprogrammingconstructs;\nclass Practical51{\npublic static void main(String[] args){\nint n=25;\nint octal=0;\nint place=1;\nwhile(n>0){\nint remainder=n%8;//get octal digit\noctal=octal+remainder*place;\nplace=place*10;\nn=n/8;//divide by 8\n}\nSystem.out.println(\"Octal=\"+octal);\n}\n}",
        "screenshot": "assets/screenshots/51.png"
      },
      {
        "number": 52,
        "title": "Convert Decimal to Hexadecimal",
        "question": "Convert Decimal to Hexadecimal",
        "code": "package basicprogrammingconstructs;\nclass Practical52{\npublic static void main(String[] args){\nint n=255;\nString hexadecimal=\"\";//store hexadecimal digits\nchar[] digits=\"0123456789ABCDEF\".toCharArray();\nwhile(n>0){\nint remainder=n%16;//get remainder\nhexadecimal=digits[remainder]+hexadecimal;\nn=n/16;//divide by 16\n}\nSystem.out.println(\"Hexadecimal=\"+hexadecimal);\n}\n}",
        "screenshot": "assets/screenshots/52.png"
      },
      {
        "number": 53,
        "title": "Find Sum of Natural Numbers",
        "question": "Find Sum of Natural Numbers",
        "code": "package basicprogrammingconstructs;\nclass Practical53{\npublic static void main(String[] args){\nint n=10;\nint sum=0;\nfor(int i=1;i<=n;i++){//add natural numbers\nsum=sum+i;\n}\nSystem.out.println(\"Sum=\"+sum);\n}\n}",
        "screenshot": "assets/screenshots/53.png"
      },
      {
        "number": 54,
        "title": "Find Sum of Even Numbers",
        "question": "Find Sum of Even Numbers",
        "code": "package basicprogrammingconstructs;\nclass Practical54{\npublic static void main(String[] args){\nint n=20;\nint sum=0;\nfor(int i=2;i<=n;i+=2){//add even numbers\nsum=sum+i;\n}\nSystem.out.println(\"Sum of even numbers=\"+sum);\n}\n}",
        "screenshot": "assets/screenshots/54.png"
      },
      {
        "number": 55,
        "title": "Find Sum of Odd Numbers",
        "question": "Find Sum of Odd Numbers",
        "code": "package basicprogrammingconstructs;\nclass Practical55{\npublic static void main(String[] args){\nint n=20;\nint sum=0;\nfor(int i=1;i<=n;i+=2){//add odd numbers\nsum=sum+i;\n}\nSystem.out.println(\"Sum of odd numbers=\"+sum);\n}\n}",
        "screenshot": "assets/screenshots/55.png"
      },
      {
        "number": 56,
        "title": "Check Strong Number",
        "question": "Check Strong Number",
        "code": "package basicprogrammingconstructs;\nclass Practical56{\npublic static void main(String[] args){\nint n=145;\nint original=n;\nint sum=0;\nwhile(n>0){\nint digit=n%10;//extract digit\nint factorial=1;\nfor(int i=1;i<=digit;i++){//calculate digit factorial\nfactorial=factorial*i;\n}\nsum=sum+factorial;\nn=n/10;//remove last digit\n}\nif(sum==original){//compare sum with original\nSystem.out.println(\"Strong number\");\n}else{\nSystem.out.println(\"Not a strong number\");\n}\n}\n}",
        "screenshot": "assets/screenshots/56.png"
      },
      {
        "number": 57,
        "title": "Check Automorphic Number",
        "question": "Check Automorphic Number",
        "code": "package basicprogrammingconstructs;\nclass Practical57{\npublic static void main(String[] args){\nint n=25;\nint square=n*n;\nint digits=String.valueOf(n).length();//count digits\nint divisor=(int)Math.pow(10,digits);\nif(square%divisor==n){//check ending digits\nSystem.out.println(\"Automorphic number\");\n}else{\nSystem.out.println(\"Not an automorphic number\");\n}\n}\n}",
        "screenshot": "assets/screenshots/57.png"
      },
      {
        "number": 58,
        "title": "Check Neon Number",
        "question": "Check Neon Number",
        "code": "package basicprogrammingconstructs;\nclass Practical58{\npublic static void main(String[] args){\nint n=9;\nint square=n*n;\nint sum=0;\nwhile(square>0){\nsum=sum+square%10;//add square digits\nsquare=square/10;\n}\nif(sum==n){\nSystem.out.println(\"Neon number\");\n}else{\nSystem.out.println(\"Not a neon number\");\n}\n}\n}",
        "screenshot": "assets/screenshots/58.png"
      },
      {
        "number": 59,
        "title": "Check Harshad Number",
        "question": "Check Harshad Number",
        "code": "package basicprogrammingconstructs;\nclass Practical59{\npublic static void main(String[] args){\nint n=18;\nint original=n;\nint sum=0;\nwhile(n>0){\nsum=sum+n%10;//add digits\nn=n/10;\n}\nif(sum!=0&&original%sum==0){//check divisibility by digit sum\nSystem.out.println(\"Harshad number\");\n}else{\nSystem.out.println(\"Not a Harshad number\");\n}\n}\n}",
        "screenshot": "assets/screenshots/59.png"
      },
      {
        "number": 60,
        "title": "Check Abundant Number",
        "question": "Check Abundant Number",
        "code": "package basicprogrammingconstructs;\nclass Practical60{\npublic static void main(String[] args){\nint n=12;\nint sum=0;\nfor(int i=1;i<n;i++){\nif(n%i==0){//add proper divisors\nsum=sum+i;\n}\n}\nif(sum>n){//check if divisor sum exceeds number\nSystem.out.println(\"Abundant number\");\n}else{\nSystem.out.println(\"Not an abundant number\");\n}\n}\n}",
        "screenshot": "assets/screenshots/60.png"
      },
      {
        "number": 61,
        "title": "Check Deficient Number",
        "question": "Check Deficient Number",
        "code": "package basicprogrammingconstructs;\nclass Practical61{\npublic static void main(String[] args){\nint n=8;\nint sum=0;\nfor(int i=1;i<n;i++){\nif(n%i==0){//add proper divisors\nsum=sum+i;\n}\n}\nif(sum<n){//check if divisor sum is smaller\nSystem.out.println(\"Deficient number\");\n}else{\nSystem.out.println(\"Not a deficient number\");\n}\n}\n}",
        "screenshot": "assets/screenshots/61.png"
      },
      {
        "number": 62,
        "title": "Check Amicable Numbers",
        "question": "Check Amicable Numbers",
        "code": "package basicprogrammingconstructs;\nclass Practical62{\npublic static void main(String[] args){\nint a=220;\nint b=284;\nint sumA=0;\nint sumB=0;\nfor(int i=1;i<a;i++){\nif(a%i==0){//sum proper divisors of a\nsumA=sumA+i;\n}\n}\nfor(int i=1;i<b;i++){\nif(b%i==0){//sum proper divisors of b\nsumB=sumB+i;\n}\n}\nif(sumA==b&&sumB==a){//check amicable pair\nSystem.out.println(\"Amicable numbers\");\n}else{\nSystem.out.println(\"Not amicable numbers\");\n}\n}\n}",
        "screenshot": "assets/screenshots/62.png"
      },
      {
        "number": 63,
        "title": "Find Product of Digits",
        "question": "Find Product of Digits",
        "code": "package basicprogrammingconstructs;\nclass Practical63{\npublic static void main(String[] args){\nint n=234;\nint product=1;\nwhile(n>0){\nint digit=n%10;//extract last digit\nproduct=product*digit;//multiply digits\nn=n/10;//remove last digit\n}\nSystem.out.println(\"Product of digits=\"+product);\n}\n}",
        "screenshot": "assets/screenshots/63.png"
      },
      {
        "number": 64,
        "title": "Find First and Last Digit",
        "question": "Find First and Last Digit",
        "code": "package basicprogrammingconstructs;\nclass Practical64{\npublic static void main(String[] args){\nint n=12345;\nn=Math.abs(n);//handle negative numbers\nint last=n%10;//extract last digit\nint first=n;\nwhile(first>=10){\nfirst=first/10;//remove digits until first remains\n}\nSystem.out.println(\"First digit=\"+first);\nSystem.out.println(\"Last digit=\"+last);\n}\n}",
        "screenshot": "assets/screenshots/64.png"
      },
      {
        "number": 65,
        "title": "Check Whether Two Numbers Are Co-Prime",
        "question": "Check whether two numbers are co-prime.",
        "code": "package basicprogrammingconstructs;\nclass Practical65{\npublic static void main(String[] args){\nint a=8;\nint b=15;\nint x=a;\nint y=b;\nwhile(y!=0){\nint remainder=x%y;//calculate remainder\nx=y;\ny=remainder;\n}\nif(x==1){//check if GCD is 1\nSystem.out.println(\"Co-prime numbers\");\n}else{\nSystem.out.println(\"Not co-prime numbers\");\n}\n}\n}",
        "screenshot": "assets/screenshots/65.png"
      },
      {
        "number": 66,
        "title": "Find the Number of Factors",
        "question": "Find the number of factors of a number.",
        "code": "package basicprogrammingconstructs;\nclass Practical66{\npublic static void main(String[] args){\nint n=12;\nint count=0;\nfor(int i=1;i<=n;i++){\nif(n%i==0){//check whether i is a factor\ncount++;\n}\n}\nSystem.out.println(\"Number of factors=\"+count);\n}\n}",
        "screenshot": "assets/screenshots/66.png"
      },
      {
        "number": 67,
        "title": "Find the Sum of Factors",
        "question": "Find the sum of factors of a number.",
        "code": "package basicprogrammingconstructs;\nclass Practical67{\npublic static void main(String[] args){\nint n=12;\nint sum=0;\nfor(int i=1;i<=n;i++){\nif(n%i==0){//add each factor\nsum=sum+i;\n}\n}\nSystem.out.println(\"Sum of factors=\"+sum);\n}\n}",
        "screenshot": "assets/screenshots/67.png"
      },
      {
        "number": 68,
        "title": "Print a Square Number Pattern",
        "question": "Print a square number pattern.",
        "code": "package basicprogrammingconstructs;\nclass Practical68{\npublic static void main(String[] args){\nint n=5;\nfor(int i=1;i<=n;i++){\nfor(int j=1;j<=n;j++){//print numbers in each row\nSystem.out.print(j+\" \");\n}\nSystem.out.println();\n}\n}\n}",
        "screenshot": "assets/screenshots/68.png"
      },
      {
        "number": 69,
        "title": "Convert String to Lowercase",
        "question": "Convert all characters in a string to lowercase.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical69{\npublic static void main(String[] args){\nString str=\"HELLO JAVA\";\nSystem.out.println(\"Lowercase String: \"+str.toLowerCase()); //convert to lowercase\n}\n}",
        "screenshot": "assets/screenshots/69.png"
      },
      {
        "number": 70,
        "title": "Convert String to Uppercase",
        "question": "Convert all characters in a string to uppercase.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical70{\npublic static void main(String[] args){\nString str=\"hello java\";\nSystem.out.println(\"Uppercase String: \"+str.toUpperCase()); //convert to uppercase\n}\n}",
        "screenshot": "assets/screenshots/70.png"
      },
      {
        "number": 71,
        "title": "Trim a String",
        "question": "Trim a string by removing leading and trailing whitespaces.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical71{\npublic static void main(String[] args){\nString str=\"  Hello Java  \";\nSystem.out.println(\"Original String: '\"+str+\"'\");\nSystem.out.println(\"Trimmed String: '\"+str.trim()+\"'\"); //remove leading and trailing spaces\n}\n}",
        "screenshot": "assets/screenshots/71.png"
      },
      {
        "number": 72,
        "title": "Get a Substring",
        "question": "Get a substring between two specified positions.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical72{\npublic static void main(String[] args){\nString str=\"Hello Java Programming\";\nString sub=str.substring(6,10); //extract characters from index 6 to 9\nSystem.out.println(\"Substring: \"+sub);\n}\n}",
        "screenshot": "assets/screenshots/72.png"
      },
      {
        "number": 73,
        "title": "Replace Characters in a String",
        "question": "Replace all d characters with f in a string.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical73{\npublic static void main(String[] args){\nString str=\"daily dose of data\";\nString result=str.replace('d','f'); //replace d with f\nSystem.out.println(\"Original String: \"+str);\nSystem.out.println(\"Modified String: \"+result);\n}\n}",
        "screenshot": "assets/screenshots/73.png"
      },
      {
        "number": 74,
        "title": "Find the Length of a String",
        "question": "Find the length of a string.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical74{\npublic static void main(String[] args){\nString str=\"Hello Java\";\nSystem.out.println(\"String: \"+str);\nSystem.out.println(\"Length of String: \"+str.length()); //count characters\n}\n}",
        "screenshot": "assets/screenshots/74.png"
      },
      {
        "number": 75,
        "title": "Print Current Date and Time",
        "question": "Print current date and time in a specified format.",
        "code": "package basicprogrammingconstructs; //declare package\nimport java.time.LocalDateTime;\nimport java.time.format.DateTimeFormatter;\nclass Practical75{\npublic static void main(String[] args){\nLocalDateTime now=LocalDateTime.now();\nDateTimeFormatter format=DateTimeFormatter.ofPattern(\"dd-MM-yyyy HH:mm:ss\"); //specify date and time format\nSystem.out.println(\"Current Date and Time: \"+now.format(format));\n}\n}",
        "screenshot": "assets/screenshots/75.png"
      },
      {
        "number": 76,
        "title": "Get Character at Specified Index",
        "question": "Get the character at a specified index.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical76{\npublic static void main(String[] args){\nString str=\"Hello Java\";\nint index=6;\nSystem.out.println(\"Character at index \"+index+\": \"+str.charAt(index)); //get character at index\n}\n}",
        "screenshot": "assets/screenshots/76.png"
      },
      {
        "number": 77,
        "title": "Remove a Particular Character from a String",
        "question": "Remove a particular character from a string.",
        "code": "package basicprogrammingconstructs;\nclass Practical77{\npublic static void main(String[] args){\nString str=\"Hello Java\";\nchar remove='a';\nString result=str.replace(String.valueOf(remove),\"\"); //remove the specified character\nSystem.out.println(\"Original String: \"+str);\nSystem.out.println(\"Modified String: \"+result);\n}\n}",
        "screenshot": "assets/screenshots/77.png"
      },
      {
        "number": 78,
        "title": "Reverse a String",
        "question": "Reverse a string.",
        "code": "package basicprogrammingconstructs;\nclass Practical78{\npublic static void main(String[] args){\nString str=\"Hello Java\";\nString reversed=new StringBuilder(str).reverse().toString(); //reverse the string\nSystem.out.println(\"Original String: \"+str);\nSystem.out.println(\"Reversed String: \"+reversed);\n}\n}",
        "screenshot": "assets/screenshots/78.png"
      },
      {
        "number": 79,
        "title": "Remove HTML Tags from a String",
        "question": "Remove HTML tags from a string.",
        "code": "package basicprogrammingconstructs;\nclass Practical79{\npublic static void main(String[] args){\nString str=\"<html><body><h1>Hello Java</h1></body></html>\";\nString result=str.replaceAll(\"<[^>]*>\",\"\"); //remove HTML tags\nSystem.out.println(\"Original String: \"+str);\nSystem.out.println(\"String without HTML tags: \"+result);\n}\n}",
        "screenshot": "assets/screenshots/79.png"
      },
      {
        "number": 80,
        "title": "Find Sum of Array Elements",
        "question": "Find the sum of array elements.",
        "code": "package basicprogrammingconstructs;\nclass Practical80{\npublic static void main(String[] args){\nint[] arr={10,20,30,40,50};\nint sum=0;\nfor(int i=0;i<arr.length;i++){\nsum=sum+arr[i]; //add array elements\n}\nSystem.out.println(\"Sum of array elements=\"+sum);\n}\n}",
        "screenshot": "assets/screenshots/80.png"
      },
      {
        "number": 81,
        "title": "Find Index of an Array Element",
        "question": "Find the index of a specified array element.",
        "code": "package basicprogrammingconstructs;\nclass Practical81{\npublic static void main(String[] args){\nint[] arr={10,20,30,40,50};\nint element=30;\nint index=-1;\nfor(int i=0;i<arr.length;i++){\nif(arr[i]==element){\nindex=i; //store element index\nbreak;\n}\n}\nSystem.out.println(\"Index of \"+element+\"=\"+index);\n}\n}",
        "screenshot": "assets/screenshots/81.png"
      },
      {
        "number": 82,
        "title": "Find Average of Array Elements",
        "question": "Find the average of array elements.",
        "code": "package basicprogrammingconstructs;\nclass Practical82{\npublic static void main(String[] args){\nint[] arr={10,20,30,40,50};\nint sum=0;\nfor(int i=0;i<arr.length;i++){\nsum=sum+arr[i]; //calculate sum\n}\ndouble average=(double)sum/arr.length;\nSystem.out.println(\"Average of array elements=\"+average);\n}\n}",
        "screenshot": "assets/screenshots/82.png  "
      },
      {
        "number": 83,
        "title": "Search an Element in an Array",
        "question": "Search for an element in an array.",
        "code": "package basicprogrammingconstructs;\nclass Practical83{\npublic static void main(String[] args){\nint[] arr={10,20,30,40,50};\nint element=30;\nboolean found=false;\nfor(int i=0;i<arr.length;i++){\nif(arr[i]==element){\nfound=true; //element found\nbreak;\n}\n}\nif(found){\nSystem.out.println(element+\" is present in the array\");\n}else{\nSystem.out.println(element+\" is not present in the array\");\n}\n}\n}",
        "screenshot": "assets/screenshots/83.png"
      },
      {
        "number": 84,
        "title": "Find Maximum and Minimum in an Array",
        "question": "Find the maximum and minimum values in an array.",
        "code": "package basicprogrammingconstructs;\nclass Practical84{\npublic static void main(String[] args){\nint[] arr={10,50,20,5,40};\nint max=arr[0];\nint min=arr[0];\nfor(int i=1;i<arr.length;i++){\nif(arr[i]>max){\nmax=arr[i]; //update maximum\n}\nif(arr[i]<min){\nmin=arr[i]; //update minimum\n}\n}\nSystem.out.println(\"Maximum value=\"+max);\nSystem.out.println(\"Minimum value=\"+min);\n}\n}",
        "screenshot": "assets/screenshots/84.png"
      },
      {
        "number": 85,
        "title": "Insert an Element into an Array",
        "question": "Insert an element at a specified position in an array.",
        "code": "package basicprogrammingconstructs;\nclass Practical85{\npublic static void main(String[] args){\nint[] arr={10,20,30,40,50};\nint element=25;\nint position=2; //zero-based index\nint[] newArr=new int[arr.length+1];\nfor(int i=0,j=0;i<newArr.length;i++){\nif(i==position){\nnewArr[i]=element; //insert element\n}else{\nnewArr[i]=arr[j];\nj++;\n}\n}\nSystem.out.print(\"Array after insertion: \");\nfor(int i=0;i<newArr.length;i++){\nSystem.out.print(newArr[i]+\" \");\n}\n}\n}",
        "screenshot": "assets/screenshots/85.png"
      },
      {
        "number": 86,
        "title": "Reverse an Array",
        "question": "Reverse the elements of an array.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical86{\npublic static void main(String[] args){\nint[] arr={10,20,30,40,50};\nSystem.out.print(\"Reversed array: \");\nfor(int i=arr.length-1;i>=0;i--){\nSystem.out.print(arr[i]+\" \"); //print elements in reverse order\n}\n}\n}",
        "screenshot": "assets/screenshots/86.png"
      },
      {
        "number": 87,
        "title": "Find Common Elements in Two Arrays",
        "question": "Find common elements in two arrays.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical87{\npublic static void main(String[] args){\nint[] arr1={10,20,30,40,50};\nint[] arr2={30,40,60,70};\nSystem.out.print(\"Common elements: \");\nfor(int i=0;i<arr1.length;i++){\nfor(int j=0;j<arr2.length;j++){\nif(arr1[i]==arr2[j]){\nSystem.out.print(arr1[i]+\" \");\nbreak;\n}\n}\n}\n}\n}",
        "screenshot": "assets/screenshots/87.png"
      },
      {
        "number": 88,
        "title": "Find Duplicate Values in an Array",
        "question": "Find duplicate values in an array.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical88{\npublic static void main(String[] args){\nint[] arr={10,20,30,20,40,10,50};\nSystem.out.print(\"Duplicate values: \");\nfor(int i=0;i<arr.length;i++){\nboolean alreadyChecked=false;\nfor(int k=0;k<i;k++){\nif(arr[i]==arr[k]){\nalreadyChecked=true;\nbreak;\n}\n}\nif(alreadyChecked){\ncontinue;\n}\nfor(int j=i+1;j<arr.length;j++){\nif(arr[i]==arr[j]){\nSystem.out.print(arr[i]+\" \");\nbreak;\n}\n}\n}\n}\n}",
        "screenshot": "assets/screenshots/88.png"
      },
      {
        "number": 89,
        "title": "Add Two Matrices",
        "question": "Add two matrices.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical89{\npublic static void main(String[] args){\nint[][] a={{1,2},{3,4}};\nint[][] b={{5,6},{7,8}};\nint[][] sum=new int[2][2];\nfor(int i=0;i<2;i++){\nfor(int j=0;j<2;j++){\nsum[i][j]=a[i][j]+b[i][j]; //add matrix elements\n}\n}\nSystem.out.println(\"Sum of matrices:\");\nfor(int i=0;i<2;i++){\nfor(int j=0;j<2;j++){\nSystem.out.print(sum[i][j]+\" \");\n}\nSystem.out.println();\n}\n}\n}",
        "screenshot": "assets/screenshots/89.png"
      },
      {
        "number": 90,
        "title": "Find Second Largest Number in an Array",
        "question": "Find the second largest number in an array.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical90{\npublic static void main(String[] args){\nint[] arr={10,50,30,40,20};\nint largest=Integer.MIN_VALUE;\nint secondLargest=Integer.MIN_VALUE;\nfor(int i=0;i<arr.length;i++){\nif(arr[i]>largest){\nsecondLargest=largest;\nlargest=arr[i];\n}else if(arr[i]>secondLargest&&arr[i]!=largest){\nsecondLargest=arr[i];\n}\n}\nif(secondLargest==Integer.MIN_VALUE){\nSystem.out.println(\"Second largest number does not exist\");\n}else{\nSystem.out.println(\"Second largest number=\"+secondLargest);\n}\n}\n}",
        "screenshot": "assets/screenshots/90.png"
      },
      {
        "number": 91,
        "title": "Find Second Smallest Number in an Array",
        "question": "Find the second smallest number in an array.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical91{\npublic static void main(String[] args){\nint[] arr={10,50,30,40,20};\nint smallest=Integer.MAX_VALUE;\nint secondSmallest=Integer.MAX_VALUE;\nfor(int i=0;i<arr.length;i++){\nif(arr[i]<smallest){\nsecondSmallest=smallest;\nsmallest=arr[i];\n}else if(arr[i]<secondSmallest&&arr[i]!=smallest){\nsecondSmallest=arr[i];\n}\n}\nif(secondSmallest==Integer.MAX_VALUE){\nSystem.out.println(\"Second lowest number does not exist\");\n}else{\nSystem.out.println(\"Second lowest number=\"+secondSmallest);\n}\n}\n}",
        "screenshot": "assets/screenshots/91.png"
      },
      {
        "number": 92,
        "title": "Count Even and Odd Numbers in an Array",
        "question": "Count even and odd numbers in an array.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical92{\npublic static void main(String[] args){\nint[] arr={10,15,20,25,30,35};\nint even=0;\nint odd=0;\nfor(int i=0;i<arr.length;i++){\nif(arr[i]%2==0){\neven++; //count even numbers\n}else{\nodd++; //count odd numbers\n}\n}\nSystem.out.println(\"Even numbers=\"+even);\nSystem.out.println(\"Odd numbers=\"+odd);\n}\n}",
        "screenshot": "assets/screenshots/92.png"
      },
      {
        "number": 93,
        "title": "Find Difference Between Largest and Smallest Array Elements",
        "question": "Find the difference between the largest and smallest elements in an array.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical93{\npublic static void main(String[] args){\nint[] arr={10,50,30,5,40};\nint max=arr[0];\nint min=arr[0];\nfor(int i=1;i<arr.length;i++){\nif(arr[i]>max){\nmax=arr[i];\n}\nif(arr[i]<min){\nmin=arr[i];\n}\n}\nSystem.out.println(\"Difference=\"+(max-min));\n}\n}",
        "screenshot": "assets/screenshots/93.png"
      },
      {
        "number": 94,
        "title": "Separate Zeros and Ones in an Array",
        "question": "Arrange zeros and ones in an array.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical94{\npublic static void main(String[] args){\nint[] arr={1,0,1,0,1,0,0,1};\nint left=0;\nint right=arr.length-1;\nwhile(left<right){\nwhile(left<right&&arr[left]==0){\nleft++;\n}\nwhile(left<right&&arr[right]==1){\nright--;\n}\nif(left<right){\nint temp=arr[left];\narr[left]=arr[right];\narr[right]=temp;\n}\n}\nSystem.out.print(\"Modified array: \");\nfor(int i=0;i<arr.length;i++){\nSystem.out.print(arr[i]+\" \");\n}\n}\n}",
        "screenshot": "assets/screenshots/94.png"
      },
      {
        "number": 95,
        "title": "Rotate an Array by One Position",
        "question": "Rotate the elements of an array by one position.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical95{\npublic static void main(String[] args){\nint[] arr={1,2,3,4,5};\nint last=arr[arr.length-1];\nfor(int i=arr.length-1;i>0;i--){\narr[i]=arr[i-1]; //shift elements right\n}\narr[0]=last;\nSystem.out.print(\"Rotated array: \");\nfor(int i=0;i<arr.length;i++){\nSystem.out.print(arr[i]+\" \");\n}\n}\n}",
        "screenshot": "assets/screenshots/95.png"
      },
      {
        "number": 96,
        "title": "Print Unique Elements in an Array",
        "question": "Print unique elements in an array.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical96{\npublic static void main(String[] args){\nint[] arr={10,20,10,30,40,20,50};\nSystem.out.print(\"Unique elements: \");\nfor(int i=0;i<arr.length;i++){\nboolean unique=true;\nfor(int j=0;j<arr.length;j++){\nif(i!=j&&arr[i]==arr[j]){\nunique=false;\nbreak;\n}\n}\nif(unique){\nSystem.out.print(arr[i]+\" \");\n}\n}\n}\n}",
        "screenshot": "assets/screenshots/96.png"
      },
      {
        "number": 97,
        "title": "Sort Array in Ascending Order",
        "question": "Sort an array in ascending order.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical97{\npublic static void main(String[] args){\nint[] arr={50,20,40,10,30};\nfor(int i=0;i<arr.length-1;i++){\nfor(int j=0;j<arr.length-1-i;j++){\nif(arr[j]>arr[j+1]){\nint temp=arr[j];\narr[j]=arr[j+1];\narr[j+1]=temp; //swap elements\n}\n}\n}\nSystem.out.print(\"Array in ascending order: \");\nfor(int i=0;i<arr.length;i++){\nSystem.out.print(arr[i]+\" \");\n}\n}\n}",
        "screenshot": "assets/screenshots/97.png"
      },
      {
        "number": 98,
        "title": "Sort Array in Descending Order",
        "question": "Sort an array in descending order.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical98{\npublic static void main(String[] args){\nint[] arr={50,20,40,10,30};\nfor(int i=0;i<arr.length-1;i++){\nfor(int j=0;j<arr.length-1-i;j++){\nif(arr[j]<arr[j+1]){\nint temp=arr[j];\narr[j]=arr[j+1];\narr[j+1]=temp; //swap elements\n}\n}\n}\nSystem.out.print(\"Array in descending order: \");\nfor(int i=0;i<arr.length;i++){\nSystem.out.print(arr[i]+\" \");\n}\n}\n}",
        "screenshot": "assets/screenshots/98.png"
      },
      {
        "number": 99,
        "title": "Sort Names in Alphabetical Order",
        "question": "Sort names in alphabetical order.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical99{\npublic static void main(String[] args){\nString[] names={\"Riya\",\"Aman\",\"Karan\",\"Simran\",\"Neha\"};\nfor(int i=0;i<names.length-1;i++){\nfor(int j=0;j<names.length-1-i;j++){\nif(names[j].compareToIgnoreCase(names[j+1])>0){\nString temp=names[j];\nnames[j]=names[j+1];\nnames[j+1]=temp; //swap names\n}\n}\n}\nSystem.out.println(\"Names in alphabetical order:\");\nfor(int i=0;i<names.length;i++){\nSystem.out.println(names[i]);\n}\n}\n}",
        "screenshot": "assets/screenshots/99.png"
      },
      {
        "number": 100,
        "title": "Transpose of a Matrix",
        "question": "Find the transpose of a matrix.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical100{\npublic static void main(String[] args){\nint[][] matrix={{1,2,3},{4,5,6}};\nint rows=matrix.length;\nint cols=matrix[0].length;\nSystem.out.println(\"Transpose of matrix:\");\nfor(int i=0;i<cols;i++){\nfor(int j=0;j<rows;j++){\nSystem.out.print(matrix[j][i]+\" \");\n}\nSystem.out.println();\n}\n}\n}",
        "screenshot": "assets/screenshots/100.png"
      },
      {
        "number": 101,
        "title": "Linear Search in an Array",
        "question": "Search for an element in an array using linear search.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical101{\npublic static void main(String[] args){\nint[] arr={10,20,30,40,50};\nint key=30;\nboolean found=false;\nfor(int i=0;i<arr.length;i++){\nif(arr[i]==key){\nSystem.out.println(\"Element found at index \"+i);\nfound=true;\nbreak;\n}\n}\nif(!found){\nSystem.out.println(\"Element not found\");\n}\n}\n}",
        "screenshot": "assets/screenshots/101.png"
      },
      {
        "number": 102,
        "title": "Calculate Total Marks and Percentage",
        "question": "Calculate total marks and percentage of five subjects.",
        "code": "package basicprogrammingconstructs; //declare package\nimport java.util.Scanner;\nclass Practical102{\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nint total=0;\nint subjects=5;\nSystem.out.println(\"Enter marks for 5 subjects (out of 100):\");\nfor(int i=1;i<=subjects;i++){\nSystem.out.print(\"Subject \"+i+\": \");\nint marks=sc.nextInt();\ntotal=total+marks; //calculate total\n}\ndouble percentage=(double)total/(subjects*100)*100;\nSystem.out.println(\"Total marks=\"+total);\nSystem.out.println(\"Percentage=\"+percentage+\"%\");\nsc.close();\n}\n}",
        "screenshot": "assets/screenshots/102.png"
      },
      {
        "number": 103,
        "title": "Print Numbers from 1 to 10",
        "question": "Print numbers from 1 to 10.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical103{\npublic static void main(String[] args){\nfor(int i=1;i<=10;i++){\nSystem.out.println(i); //print each number\n}\n}\n}",
        "screenshot": "assets/screenshots/103.png"
      },
      {
        "number": 104,
        "title": "Sum of First 10 Natural Numbers",
        "question": "Find the sum of first 10 natural numbers.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical104{\npublic static void main(String[] args){\nint sum=0;\nfor(int i=1;i<=10;i++){\nsum=sum+i; //add natural numbers\n}\nSystem.out.println(\"Sum of first 10 natural numbers=\"+sum);\n}\n}",
        "screenshot": "assets/screenshots/104.png"
      },
      {
        "number": 105,
        "title": "Multiplication Table Using User Input",
        "question": "Print the multiplication table of a user-entered number.",
        "code": "package basicprogrammingconstructs; //declare package\nimport java.util.Scanner;\nclass Practical105{\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nSystem.out.print(\"Enter a number: \");\nint n=sc.nextInt();\nfor(int i=1;i<=10;i++){\nSystem.out.println(n+\" x \"+i+\" = \"+(n*i));\n}\nsc.close();\n}\n}",
        "screenshot": "assets/screenshots/105.png"
      },
      {
        "number": 106,
        "title": "Factorial Using User Input",
        "question": "Calculate the factorial of a user-entered number.",
        "code": "package basicprogrammingconstructs; //declare package\nimport java.util.Scanner;\nclass Practical106{\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nSystem.out.print(\"Enter a non-negative integer: \");\nint n=sc.nextInt();\nif(n<0){\nSystem.out.println(\"Factorial is not defined for negative numbers\");\n}else if(n>20){\nSystem.out.println(\"Please enter a number between 0 and 20\");\n}else{\nlong factorial=1;\nfor(int i=1;i<=n;i++){\nfactorial=factorial*i; //calculate factorial\n}\nSystem.out.println(\"Factorial of \"+n+\" = \"+factorial);\n}\nsc.close();\n}\n}",
        "screenshot": "assets/screenshots/106.png"
      },
      {
        "number": 107,
        "title": "Area of Rectangle",
        "question": "Calculate the area of a rectangle.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical107{\npublic static void main(String[] args){\ndouble length=10;\ndouble breadth=5;\ndouble area=length*breadth; //calculate area\nSystem.out.println(\"Area of rectangle=\"+area);\n}\n}",
        "screenshot": "assets/screenshots/107.png"
      },
      {
        "number": 108,
        "title": "Area of Triangle",
        "question": "Calculate the area of a triangle.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical108{\npublic static void main(String[] args){\ndouble base=10;\ndouble height=5;\ndouble area=0.5*base*height; //calculate area\nSystem.out.println(\"Area of triangle=\"+area);\n}\n}",
        "screenshot": "assets/screenshots/108.png"
      },
      {
        "number": 109,
        "title": "Area of Equilateral Triangle",
        "question": "Calculate the area of an equilateral triangle.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical109{\npublic static void main(String[] args){\ndouble side=6;\ndouble area=(Math.sqrt(3)/4)*side*side; //calculate area\nSystem.out.println(\"Area of equilateral triangle=\"+area);\n}\n}",
        "screenshot": "assets/screenshots/109.png"
      },
      {
        "number": 110,
        "title": "Area of Rhombus",
        "question": "Calculate the area of a rhombus.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical110{\npublic static void main(String[] args){\ndouble diagonal1=10;\ndouble diagonal2=8;\ndouble area=(diagonal1*diagonal2)/2; //calculate area\nSystem.out.println(\"Area of rhombus=\"+area);\n}\n}",
        "screenshot": "assets/screenshots/110.png"
      },
      {
        "number": 111,
        "title": "Area of Parallelogram",
        "question": "Calculate the area of a parallelogram.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical111{\npublic static void main(String[] args){\ndouble base=10;\ndouble height=6;\ndouble area=base*height; //calculate area\nSystem.out.println(\"Area of parallelogram=\"+area);\n}\n}",
        "screenshot": "assets/screenshots/111.png"
      },
      {
        "number": 112,
        "title": "Surface Area of Triangular Prism",
        "question": "Calculate the surface area of a triangular prism.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical112{\npublic static void main(String[] args){\ndouble base=4;\ndouble height=3;\ndouble length=10;\ndouble side1=3;\ndouble side2=4;\ndouble side3=5;\ndouble triangleArea=0.5*base*height;\ndouble lateralArea=length*(side1+side2+side3);\ndouble area=2*triangleArea+lateralArea; //calculate total surface area\nSystem.out.println(\"Surface area of triangular prism=\"+area);\n}\n}",
        "screenshot": "assets/screenshots/112.png"
      },
      {
        "number": 113,
        "title": "Volume of Sphere",
        "question": "Calculate the volume of a sphere.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical113{\npublic static void main(String[] args){\ndouble radius=5;\ndouble volume=(4.0/3.0)*Math.PI*radius*radius*radius; //calculate volume\nSystem.out.println(\"Volume of sphere=\"+volume);\n}\n}",
        "screenshot": "assets/screenshots/113.png"
      },
      {
        "number": 114,
        "title": "Volume of Cylinder",
        "question": "Calculate the volume of a cylinder.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical114{\npublic static void main(String[] args){\ndouble radius=5;\ndouble height=10;\ndouble volume=Math.PI*radius*radius*height; //calculate volume\nSystem.out.println(\"Volume of cylinder=\"+volume);\n}\n}",
        "screenshot": "assets/screenshots/114.png"
      },
      {
        "number": 115,
        "title": "Volume of Cuboid",
        "question": "Calculate the volume of a cuboid.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical115{\npublic static void main(String[] args){\ndouble length=10;\ndouble breadth=5;\ndouble height=4;\ndouble volume=length*breadth*height; //calculate volume\nSystem.out.println(\"Volume of cuboid=\"+volume);\n}\n}",
        "screenshot": "assets/screenshots/115.png"
      },
      {
        "number": 116,
        "title": "Volume of Cone",
        "question": "Calculate the volume of a cone.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical116{\npublic static void main(String[] args){\ndouble radius=5;\ndouble height=10;\ndouble volume=(1.0/3.0)*Math.PI*radius*radius*height; //calculate volume\nSystem.out.println(\"Volume of cone=\"+volume);\n}\n}",
        "screenshot": "assets/screenshots/116.png"
      },
      {
        "number": 117,
        "title": "Surface Area of Cuboid",
        "question": "Calculate the surface area of a cuboid.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical117{\npublic static void main(String[] args){\ndouble length=10;\ndouble breadth=5;\ndouble height=4;\ndouble area=2*(length*breadth+breadth*height+height*length); //calculate surface area\nSystem.out.println(\"Surface area of cuboid=\"+area);\n}\n}",
        "screenshot": "assets/screenshots/117.png"
      },
      {
        "number": 118,
        "title": "Surface Area of Cylinder",
        "question": "Calculate the total surface area of a cylinder.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical118{\npublic static void main(String[] args){\ndouble radius=5;\ndouble height=10;\ndouble area=2*Math.PI*radius*(radius+height); //calculate total surface area\nSystem.out.println(\"Surface area of cylinder=\"+area);\n}\n}",
        "screenshot": "assets/screenshots/118.png"
      },
      {
        "number": 119,
        "title": "Surface Area of Cube",
        "question": "Calculate the surface area of a cube.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical119{\npublic static void main(String[] args){\ndouble side=5;\ndouble area=6*side*side; //calculate surface area\nSystem.out.println(\"Surface area of cube=\"+area);\n}\n}",
        "screenshot": "assets/screenshots/119.png"
      },
      {
        "number": 120,
        "title": "Sum of First N Natural Numbers",
        "question": "Calculate the sum of the first N natural numbers.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical120{\npublic static void main(String[] args){\nint n=10;\nint sum=0;\nfor(int i=1;i<=n;i++){\nsum=sum+i; //add numbers\n}\nSystem.out.println(\"Sum of first \"+n+\" natural numbers=\"+sum);\n}\n}",
        "screenshot": "assets/screenshots/120.png"
      },
      {
        "number": 121,
        "title": "Calculate Electricity Bill",
        "question": "Calculate an electricity bill based on units consumed.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical121{\npublic static void main(String[] args){\nint units=250;\ndouble bill;\nif(units<=100){\nbill=units*1.5;\n}else if(units<=200){\nbill=100*1.5+(units-100)*2.5;\n}else{\nbill=100*1.5+100*2.5+(units-200)*4;\n}\nSystem.out.println(\"Units consumed=\"+units);\nSystem.out.println(\"Electricity bill=Rs. \"+bill);\n}\n}",
        "screenshot": "assets/screenshots/121.png"
      },
      {
        "number": 122,
        "title": "Convert CGPA to Percentage",
        "question": "Convert CGPA to percentage.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical122{\npublic static void main(String[] args){\ndouble cgpa=8.5;\ndouble percentage=cgpa*9.5; //convert CGPA to percentage\nSystem.out.println(\"CGPA=\"+cgpa);\nSystem.out.println(\"Percentage=\"+percentage+\"%\");\n}\n}",
        "screenshot": "assets/screenshots/122.png"
      },
      {
        "number": 123,
        "title": "Calculate Compound Interest",
        "question": "Calculate compound interest and total amount.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical123{\npublic static void main(String[] args){\ndouble principal=10000;\ndouble rate=5;\ndouble time=2;\ndouble amount=principal*Math.pow(1+rate/100,time);\ndouble interest=amount-principal; //calculate compound interest\nSystem.out.println(\"Compound interest=\"+interest);\nSystem.out.println(\"Total amount=\"+amount);\n}\n}",
        "screenshot": "assets/screenshots/123.png"
      },
      {
        "number": 124,
        "title": "Calculate Cricket Batting Average",
        "question": "Calculate a cricket player's batting average.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical124{\npublic static void main(String[] args){\nint runs=500;\nint dismissals=10;\nif(dismissals>0){\ndouble average=(double)runs/dismissals; //calculate batting average\nSystem.out.println(\"Batting average=\"+average);\n}else{\nSystem.out.println(\"Batting average cannot be calculated\");\n}\n}\n}",
        "screenshot": "assets/screenshots/124.png"
      },
      {
        "number": 125,
        "title": "Calculate Commission Percentage",
        "question": "Calculate commission percentage.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical125{\npublic static void main(String[] args){\ndouble sales=50000;\ndouble commission=5000;\ndouble percentage=(commission/sales)*100; //calculate commission percentage\nSystem.out.println(\"Commission percentage=\"+percentage+\"%\");\n}\n}",
        "screenshot": "assets/screenshots/125.png"
      },
      {
        "number": 126,
        "title": "Distance Between Two Points",
        "question": "Calculate the distance between two points.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical126{\npublic static void main(String[] args){\ndouble x1=2;\ndouble y1=3;\ndouble x2=6;\ndouble y2=7;\ndouble distance=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)); //calculate distance\nSystem.out.println(\"Distance between points=\"+distance);\n}\n}",
        "screenshot": "assets/screenshots/126.png"
      },
      {
        "number": 127,
        "title": "Find Greatest of Three Numbers",
        "question": "Find the greatest of three numbers.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical127{\npublic static void main(String[] args){\nint a=25;\nint b=40;\nint c=15;\nif(a>=b&&a>=c){\nSystem.out.println(\"Greatest number=\"+a);\n}else if(b>=a&&b>=c){\nSystem.out.println(\"Greatest number=\"+b);\n}else{\nSystem.out.println(\"Greatest number=\"+c);\n}\n}\n}",
        "screenshot": "assets/screenshots/127.png"
      },
      {
        "number": 128,
        "title": "Find Number of Days in a Month",
        "question": "Find the number of days in a given month and year.",
        "code": "package basicprogrammingconstructs; //declare package\nclass Practical128{\npublic static void main(String[] args){\nint month=2;\nint year=2024;\nint days;\nswitch(month){\ncase 1: case 3: case 5: case 7: case 8: case 10: case 12:\ndays=31;\nbreak;\ncase 4: case 6: case 9: case 11:\ndays=30;\nbreak;\ncase 2:\nif((year%400==0)||(year%4==0&&year%100!=0)){\ndays=29; //leap year\n}else{\ndays=28;\n}\nbreak;\ndefault:\ndays=0;\n}\nif(days==0){\nSystem.out.println(\"Invalid month\");\n}else{\nSystem.out.println(\"Number of days=\"+days);\n}\n}\n}",
        "screenshot": "assets/screenshots/128.png"
      }
    ]

  },
  {
    "id": "single-arrays",
    "name": "Single-Dimensional Arrays",
    "icon": "🔢",
    "color": "green",
    "description": "Array traversal, frequency, rotation and sorting.",
    "practicals": [
      {
        "number": 1,
        "title": "Copy Array Elements",
        "question": "Copy all elements of one array into another array.",
        "code": "package singledimensionarray; //declare package\npublic class Practical1{\npublic static void main(String[] args){\nint a[]={10,20,30,40,50}; //declare source array\nint b[]=new int[a.length]; //create destination array\nfor(int i=0;i<a.length;i++){\nb[i]=a[i]; //copy each element\n}\nfor(int i=0;i<b.length;i++){\nSystem.out.print(b[i]+\" \"); //display copied elements\n}\n}\n}",
        "screenshot": "assets/screenshots/array-practical-1.png"
      },
      {
        "number": 2,
        "title": "Frequency of Each Element",
        "question": "Find the frequency of each element in an array.",
        "code": "package singledimensionarray; //declare package\npublic class Practical2{\npublic static void main(String[] args){\nint a[]={10,20,10,30,20,10}; //declare array\nboolean visited[]=new boolean[a.length]; //track counted elements\nfor(int i=0;i<a.length;i++){\nif(visited[i]) continue; //skip counted elements\nint count=1; //initialize frequency\nfor(int j=i+1;j<a.length;j++){\nif(a[i]==a[j]){\ncount++; //increase frequency\nvisited[j]=true; //mark element counted\n}\n}\nSystem.out.println(a[i]+\" occurs \"+count+\" times\"); //display frequency\n}\n}\n}",
        "screenshot": "assets/screenshots/array-practical-2.png"
      },
      {
        "number": 3,
        "title": "Left Rotate an Array",
        "question": "Left rotate the elements of an array by one position.",
        "code": "package singledimensionarray; //declare package\npublic class Practical3{\npublic static void main(String[] args){\nint a[]={10,20,30,40,50}; //declare array\nint first=a[0]; //store first element\nfor(int i=0;i<a.length-1;i++){\na[i]=a[i+1]; //shift elements left\n}\na[a.length-1]=first; //move first element to end\nfor(int i=0;i<a.length;i++){\nSystem.out.print(a[i]+\" \"); //display rotated array\n}\n}\n}",
        "screenshot": "assets/screenshots/array-practical-3.png"
      },
      {
        "number": 4,
        "title": "Print Duplicate Elements",
        "question": "Print the duplicate elements of an array.",
        "code": "package singledimensionarray; //declare package\npublic class Practical4{\npublic static void main(String[] args){\nint a[]={10,20,30,20,40,10}; //declare array\nfor(int i=0;i<a.length;i++){\nboolean printed=false; //check if already printed\nfor(int k=0;k<i;k++){\nif(a[i]==a[k]) printed=true; //duplicate appeared earlier\n}\nif(printed) continue; //skip repeated value\nfor(int j=i+1;j<a.length;j++){\nif(a[i]==a[j]){\nSystem.out.println(a[i]); //display duplicate\nbreak;\n}\n}\n}\n}\n}",
        "screenshot": "assets/screenshots/array-practical-4.png"
      },
      {
        "number": 5,
        "title": "Print Array Elements",
        "question": "Print all elements of an array.",
        "code": "package singledimensionarray; //declare package\npublic class Practical5{\npublic static void main(String[] args){\nint a[]={10,20,30,40,50}; //declare array\nfor(int i=0;i<a.length;i++){\nSystem.out.print(a[i]+\" \"); //display each element\n}\n}\n}",
        "screenshot": "assets/screenshots/array-practical-5.png"
      },
      {
        "number": 6,
        "title": "Reverse Array Order",
        "question": "Print array elements in reverse order.",
        "code": "package singledimensionarray; //declare package\npublic class Practical6{\npublic static void main(String[] args){\nint a[]={10,20,30,40,50}; //declare array\nfor(int i=a.length-1;i>=0;i--){\nSystem.out.print(a[i]+\" \"); //display elements in reverse\n}\n}\n}",
        "screenshot": "assets/screenshots/array-practical-6.png"
      },
      {
        "number": 7,
        "title": "Even Positions",
        "question": "Print elements at even positions, counting positions from 1.",
        "code": "package singledimensionarray; //declare package\npublic class Practical7{\npublic static void main(String[] args){\nint a[]={10,20,30,40,50,60}; //declare array\nfor(int i=1;i<a.length;i+=2){\nSystem.out.print(a[i]+\" \"); //display positions 2, 4, 6\n}\n}\n}",
        "screenshot": "assets/screenshots/array-practical-7.png"
      },
      {
        "number": 8,
        "title": "Odd Positions",
        "question": "Print elements at odd positions, counting positions from 1.",
        "code": "package singledimensionarray; //declare package\npublic class Practical8{\npublic static void main(String[] args){\nint a[]={10,20,30,40,50,60}; //declare array\nfor(int i=0;i<a.length;i+=2){\nSystem.out.print(a[i]+\" \"); //display positions 1, 3, 5\n}\n}\n}",
        "screenshot": "assets/screenshots/array-practical-8.png"
      },
      {
        "number": 9,
        "title": "Largest Array Element",
        "question": "Find the largest element in an array.",
        "code": "package singledimensionarray; //declare package\npublic class Practical9{\npublic static void main(String[] args){\nint a[]={10,50,30,20,40}; //declare array\nint largest=a[0]; //initialize largest\nfor(int i=1;i<a.length;i++){\nif(a[i]>largest) largest=a[i]; //update largest\n}\nSystem.out.println(\"Largest element: \"+largest); //display result\n}\n}",
        "screenshot": "assets/screenshots/array-practical-9.png"
      },
      {
        "number": 10,
        "title": "Smallest Array Element",
        "question": "Find the smallest element in an array.",
        "code": "package singledimensionarray; //declare package\npublic class Practical10{\npublic static void main(String[] args){\nint a[]={10,50,30,20,40}; //declare array\nint smallest=a[0]; //initialize smallest\nfor(int i=1;i<a.length;i++){\nif(a[i]<smallest) smallest=a[i]; //update smallest\n}\nSystem.out.println(\"Smallest element: \"+smallest); //display result\n}\n}",
        "screenshot": "assets/screenshots/array-practical-10.png"
      },
      {
        "number": 11,
        "title": "Count Array Elements",
        "question": "Print the number of elements in an array.",
        "code": "package singledimensionarray; //declare package\npublic class Practical11{\npublic static void main(String[] args){\nint a[]={10,20,30,40,50}; //declare array\nSystem.out.println(\"Number of elements: \"+a.length); //display array length\n}\n}",
        "screenshot": "assets/screenshots/array-practical-11.png"
      },
      {
        "number": 12,
        "title": "Sum Array Elements",
        "question": "Print the sum of all array elements.",
        "code": "package singledimensionarray; //declare package\npublic class Practical12{\npublic static void main(String[] args){\nint a[]={10,20,30,40,50}; //declare array\nint sum=0; //initialize sum\nfor(int i=0;i<a.length;i++){\nsum+=a[i]; //add current element\n}\nSystem.out.println(\"Sum: \"+sum); //display sum\n}\n}",
        "screenshot": "assets/screenshots/array-practical-12.png"
      },
      {
        "number": 13,
        "title": "Right Rotate an Array",
        "question": "Right rotate the elements of an array by one position.",
        "code": "package singledimensionarray; //declare package\npublic class Practical13{\npublic static void main(String[] args){\nint a[]={10,20,30,40,50}; //declare array\nint last=a[a.length-1]; //store last element\nfor(int i=a.length-1;i>0;i--){\na[i]=a[i-1]; //shift elements right\n}\na[0]=last; //move last element to beginning\nfor(int i=0;i<a.length;i++){\nSystem.out.print(a[i]+\" \"); //display rotated array\n}\n}\n}",
        "screenshot": "assets/screenshots/array-practical-13.png"
      },
      {
        "number": 14,
        "title": "Sort in Ascending Order",
        "question": "Sort array elements in ascending order.",
        "code": "package singledimensionarray; //declare package\npublic class Practical14{\npublic static void main(String[] args){\nint a[]={40,10,50,20,30}; //declare array\nfor(int i=0;i<a.length-1;i++){\nfor(int j=0;j<a.length-1-i;j++){\nif(a[j]>a[j+1]){\nint temp=a[j]; //store temporary value\na[j]=a[j+1]; //swap elements\na[j+1]=temp;\n}\n}\n}\nfor(int i=0;i<a.length;i++){\nSystem.out.print(a[i]+\" \"); //display sorted array\n}\n}\n}",
        "screenshot": "assets/screenshots/array-practical-14.png"
      },
      {
        "number": 15,
        "title": "Sort in Descending Order",
        "question": "Sort array elements in descending order.",
        "code": "package singledimensionarray; //declare package\npublic class Practical15{\npublic static void main(String[] args){\nint a[]={40,10,50,20,30}; //declare array\nfor(int i=0;i<a.length-1;i++){\nfor(int j=0;j<a.length-1-i;j++){\nif(a[j]<a[j+1]){\nint temp=a[j]; //store temporary value\na[j]=a[j+1]; //swap elements\na[j+1]=temp;\n}\n}\n}\nfor(int i=0;i<a.length;i++){\nSystem.out.print(a[i]+\" \"); //display sorted array\n}\n}\n}",
        "screenshot": "assets/screenshots/array-practical-15.png"
      }
    ]
  },
  {
    "id": "strings",
    "name": "Strings & StringBuffer",
    "icon": "📝",
    "color": "pink",
    "description": "String operations, character handling and StringBuffer methods.",
    "practicals": [

      {
        "number": 1,
        "title": "Check Whether a String Contains Only Digits",
        "question": "Write a Java program to check whether a string contains only digits.",
        "code": "package strings; //declare package\npublic class Practical1{\npublic static void main(String[] args){\nString s=\"123456\"; //declare string\nboolean digits=true; //assume all characters are digits\nfor(int i=0;i<s.length();i++){\nif(!Character.isDigit(s.charAt(i))){\ndigits=false; //character is not a digit\nbreak;\n}\n}\nif(digits){\nSystem.out.println(\"String contains only digits.\"); //display result\n}else{\nSystem.out.println(\"String does not contain only digits.\"); //display result\n}\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-1.png"
      },
      {
        "number": 2,
        "title": "Demonstrate String Immutability",
        "question": "Write a Java program to demonstrate that strings are immutable.",
        "code": "package strings; //declare package\npublic class Practical2{\npublic static void main(String[] args){\nString s=\"Hello\"; //create string\nSystem.out.println(\"Original String: \"+s); //display original string\ns.concat(\" World\"); //attempt to modify string\nSystem.out.println(\"After concat: \"+s); //original string remains unchanged\ns=s.concat(\" World\"); //assign new string\nSystem.out.println(\"After assignment: \"+s); //display modified reference\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-2.png"
      },
      {
        "number": 3,
        "title": "Remove a Particular Character from a String",
        "question": "Write a Java program to remove a particular character from a string.",
        "code": "package strings; //declare package\npublic class Practical3{\npublic static void main(String[] args){\nString s=\"programming\"; //declare string\nchar ch='m'; //character to remove\nString result=\"\"; //initialize result\nfor(int i=0;i<s.length();i++){\nif(s.charAt(i)!=ch){\nresult=result+s.charAt(i); //append characters other than target\n}\n}\nSystem.out.println(\"Original String: \"+s); //display original string\nSystem.out.println(\"Updated String: \"+result); //display result\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-3.png"
      },
      {
        "number": 4,
        "title": "Append a String Using StringBuffer",
        "question": "Write a Java program to append a string using StringBuffer.",
        "code": "package strings; //declare package\npublic class Practical4{\npublic static void main(String[] args){\nStringBuffer sb=new StringBuffer(\"Hello\"); //create StringBuffer object\nsb.append(\" World\"); //append string\nSystem.out.println(\"Updated String: \"+sb); //display result\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-4.png"
      },
      {
        "number": 5,
        "title": "Insert a String Using StringBuffer",
        "question": "Write a Java program to insert a string at a specified index using StringBuffer.",
        "code": "package strings; //declare package\npublic class Practical5{\npublic static void main(String[] args){\nStringBuffer sb=new StringBuffer(\"Hello World\"); //create StringBuffer object\nsb.insert(6,\"Java \"); //insert string at index 6\nSystem.out.println(\"Updated String: \"+sb); //display result\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-5.png"
      },
      {
        "number": 6,
        "title": "Append Two Strings",
        "question": "Write a Java program to append two strings.",
        "code": "package strings; //declare package\npublic class Practical6{\npublic static void main(String[] args){\nString s=\"Hello\"; //declare string\ns=s+\" Java\"; //append another string\nSystem.out.println(\"Updated String: \"+s); //display result\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-6.png"
      },
      {
        "number": 7,
        "title": "Check Whether Two Strings Are Anagrams",
        "question": "Write a Java program to check whether two strings are anagrams.",
        "code": "package strings; //declare package\nimport java.util.Arrays; //import Arrays class\npublic class Practical7{\npublic static void main(String[] args){\nString s1=\"listen\"; //first string\nString s2=\"silent\"; //second string\nchar a[]=s1.toLowerCase().toCharArray(); //convert first string to array\nchar b[]=s2.toLowerCase().toCharArray(); //convert second string to array\nArrays.sort(a); //sort first array\nArrays.sort(b); //sort second array\nif(Arrays.equals(a,b)){\nSystem.out.println(\"Strings are anagrams.\"); //display result\n}else{\nSystem.out.println(\"Strings are not anagrams.\"); //display result\n}\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-7.png"
      },
      {
        "number": 8,
        "title": "Check Whether a String Is a Palindrome",
        "question": "Write a Java program to check whether a string is a palindrome.",
        "code": "package strings; //declare package\npublic class Practical8{\npublic static void main(String[] args){\nString s=\"madam\"; //declare string\nString reverse=\"\"; //initialize reverse string\nfor(int i=s.length()-1;i>=0;i--){\nreverse=reverse+s.charAt(i); //reverse string\n}\nif(s.equals(reverse)){\nSystem.out.println(\"String is a palindrome.\"); //display result\n}else{\nSystem.out.println(\"String is not a palindrome.\"); //display result\n}\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-8.png"
      },
      {
        "number": 9,
        "title": "Split a String into Words",
        "question": "Write a Java program to split a string into words and display them.",
        "code": "package strings; //declare package\npublic class Practical9{\npublic static void main(String[] args){\nString s=\"Java is easy\"; //declare string\nString a[]=s.split(\" \"); //split string into words\nSystem.out.println(\"String array elements:\"); //display message\nfor(int i=0;i<a.length;i++){\nSystem.out.println(a[i]); //display each word\n}\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-9.png"
      },
      {
        "number": 10,
        "title": "Count Words in a String",
        "question": "Write a Java program to count the number of words in a string.",
        "code": "package strings; //declare package\npublic class Practical10{\npublic static void main(String[] args){\nString s=\"Java is an easy language\"; //declare string\nString a[]=s.trim().split(\"\\\\s+\"); //split string into words\nSystem.out.println(\"Number of words: \"+a.length); //display word count\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-10.png"
      },
      {
        "number": 11,
        "title": "Count Total Characters in a String",
        "question": "Write a Java program to count the total characters in a string.",
        "code": "package strings; //declare package\npublic class Practical11{\npublic static void main(String[] args){\nString s=\"Hello Java\"; //declare string\nSystem.out.println(\"Total characters: \"+s.length()); //display character count\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-11.png"
      },
      {
        "number": 12,
        "title": "Count Vowels and Consonants",
        "question": "Write a Java program to count vowels and consonants in a string.",
        "code": "package strings; //declare package\npublic class Practical12{\npublic static void main(String[] args){\nString s=\"Hello Java\"; //declare string\nint vowels=0,consonants=0; //initialize counters\ns=s.toLowerCase(); //convert to lowercase\nfor(int i=0;i<s.length();i++){\nchar ch=s.charAt(i); //get character\nif(ch>='a'&&ch<='z'){\nif(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){\nvowels++; //count vowels\n}else{\nconsonants++; //count consonants\n}\n}\n}\nSystem.out.println(\"Vowels: \"+vowels); //display vowels\nSystem.out.println(\"Consonants: \"+consonants); //display consonants\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-12.png"
      },
      {
        "number": 13,
        "title": "Reverse a String",
        "question": "Write a Java program to reverse a string.",
        "code": "package strings; //declare package\npublic class Practical13{\npublic static void main(String[] args){\nString s=\"Hello Java\"; //declare string\nString reverse=\"\"; //initialize reverse string\nfor(int i=s.length()-1;i>=0;i--){\nreverse=reverse+s.charAt(i); //reverse characters\n}\nSystem.out.println(\"Original String: \"+s); //display original string\nSystem.out.println(\"Reversed String: \"+reverse); //display reversed string\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-13.png"
      },
      {
        "number": 14,
        "title": "Get Character at a Specified Index",
        "question": "Write a Java program to get the character at a specified index.",
        "code": "package strings; //declare package\npublic class Practical14{\npublic static void main(String[] args){\nString s=\"Programming\"; //declare string\nint index=3; //specify index\nSystem.out.println(\"Character at index \"+index+\": \"+s.charAt(index)); //display character\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-14.png"
      },
      {
        "number": 15,
        "title": "Insert a String at a Specified Position",
        "question": "Write a Java program to insert a string at a specified position.",
        "code": "package strings; //declare package\npublic class Practical15{\npublic static void main(String[] args){\nString s1=\"Hello World\"; //original string\nString s2=\"Java \"; //string to insert\nint index=6; //insertion position\nString result=s1.substring(0,index)+s2+s1.substring(index); //insert string\nSystem.out.println(\"Original String: \"+s1); //display original string\nSystem.out.println(\"Updated String: \"+result); //display result\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-15.png"
      },
      {
        "number": 16,
        "title": "Display Each Character of a String",
        "question": "Write a Java program to display each character of a string.",
        "code": "package strings; //declare package\npublic class Practical16{\npublic static void main(String[] args){\nString s=\"Java\"; //declare string\nfor(int i=0;i<s.length();i++){\nSystem.out.println(s.charAt(i)); //display each character\n}\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-16.png"
      },
      {
        "number": 17,
        "title": "Remove Whitespaces from a String",
        "question": "Write a Java program to remove all whitespaces from a string.",
        "code": "package strings; //declare package\npublic class Practical17{\npublic static void main(String[] args){\nString s=\"Java is easy\"; //declare string\nString result=s.replaceAll(\"\\\\s\",\"\"); //remove white spaces\nSystem.out.println(\"Original String: \"+s); //display original string\nSystem.out.println(\"Updated String: \"+result); //display result\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-17.png"
      },
      {
        "number": 18,
        "title": "Toggle Case of Characters in a String",
        "question": "Write a Java program to convert uppercase characters to lowercase and lowercase characters to uppercase.",
        "code": "package strings; //declare package\npublic class Practical18{\npublic static void main(String[] args){\nString s=\"Java Programming\"; //declare string\nString result=\"\"; //initialize result\nfor(int i=0;i<s.length();i++){\nchar ch=s.charAt(i); //get character\nif(Character.isUpperCase(ch)){\nresult=result+Character.toLowerCase(ch); //convert uppercase to lowercase\n}else if(Character.isLowerCase(ch)){\nresult=result+Character.toUpperCase(ch); //convert lowercase to uppercase\n}else{\nresult=result+ch; //retain other characters\n}\n}\nSystem.out.println(\"Original String: \"+s); //display original string\nSystem.out.println(\"Updated String: \"+result); //display result\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-18.png"
      },
      {
        "number": 19,
        "title": "Replace Spaces with Hyphens",
        "question": "Write a Java program to replace spaces in a string with hyphens.",
        "code": "package strings; //declare package\npublic class Practical19{\npublic static void main(String[] args){\nString s=\"Java is easy\"; //declare string\nString result=s.replace(' ','-'); //replace spaces with hyphens\nSystem.out.println(\"Original String: \"+s); //display original string\nSystem.out.println(\"Updated String: \"+result); //display result\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-19.png"
      },
      {
        "number": 20,
        "title": "Split a String Using Comma",
        "question": "Write a Java program to split a string using a comma as the delimiter.",
        "code": "package strings; //declare package\npublic class Practical20{\npublic static void main(String[] args){\nString s=\"Java,Python,CSharp\"; //declare string\nString a[]=s.split(\",\"); //split string using comma\nSystem.out.println(\"Substrings:\"); //display message\nfor(int i=0;i<a.length;i++){\nSystem.out.println(a[i]); //display each substring\n}\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-20.png"
      },
      {
        "number": 21,
        "title": "Check Whether a String Contains Another String",
        "question": "Write a Java program to check whether one string contains another string.",
        "code": "package strings; //declare package\npublic class Practical21{\npublic static void main(String[] args){\nString s1=\"Java Programming\"; //first string\nString s2=\"Programming\"; //second string\nif(s1.contains(s2)){\nSystem.out.println(\"First string contains second string.\"); //display result\n}else{\nSystem.out.println(\"First string does not contain second string.\"); //display result\n}\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-21.png"
      },
      {
        "number": 22,
        "title": "Reverse a String Using StringBuffer",
        "question": "Write a Java program to reverse a string using StringBuffer.",
        "code": "package strings; //declare package\npublic class Practical22{\npublic static void main(String[] args){\nStringBuffer sb=new StringBuffer(\"Hello Java\"); //create StringBuffer object\nsb.reverse(); //reverse string\nSystem.out.println(\"Reversed String: \"+sb); //display result\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-22.png"
      },
      {
        "number": 23,
        "title": "Demonstrate StringBuffer Methods",
        "question": "Write a Java program to demonstrate append, insert, delete and replace methods of StringBuffer.",
        "code": "package strings; //declare package\npublic class Practical23{\npublic static void main(String[] args){\nStringBuffer sb=new StringBuffer(\"Hello\"); //create StringBuffer object\nsb.append(\" Java\"); //append string\nSystem.out.println(\"After append: \"+sb); //display result\nsb.insert(6,\"World \"); //insert string\nSystem.out.println(\"After insert: \"+sb); //display result\nsb.delete(6,12); //delete characters\nSystem.out.println(\"After delete: \"+sb); //display result\nsb.replace(6,10,\"Code\"); //replace characters\nSystem.out.println(\"After replace: \"+sb); //display result\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-23.png"
      },
      {
        "number": 24,
        "title": "Display Words with Even Length",
        "question": "Write a Java program to display words having even length in a string.",
        "code": "package strings; //declare package\npublic class Practical24{\npublic static void main(String[] args){\nString s=\"Java is an easy language\"; //declare string\nString a[]=s.split(\"\\\\s+\"); //split string into words\nSystem.out.println(\"Even length words:\"); //display message\nfor(int i=0;i<a.length;i++){\nif(a[i].length()%2==0){\nSystem.out.println(a[i]); //display even length word\n}\n}\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-24.png"
      },
      {
        "number": 25,
        "title": "Print Individual Characters of a String",
        "question": "Write a Java program to print individual characters of a string.",
        "code": "package strings; //declare package\npublic class Practical25{\npublic static void main(String[] args){\nString s=\"Java\"; //declare string\nSystem.out.println(\"Individual characters:\"); //display message\nfor(int i=0;i<s.length();i++){\nSystem.out.println(s.charAt(i)); //display each character\n}\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-25.png"
      },
      {
        "number": 26,
        "title": "Swap Two Strings Without a Third Variable",
        "question": "Write a Java program to swap two strings without using a third variable.",
        "code": "package strings; //declare package\npublic class Practical26{\npublic static void main(String[] args){\nString a=\"Hello\"; //first string\nString b=\"Java\"; //second string\nSystem.out.println(\"Before swapping: \"+a+\" \"+b); //display original strings\na=a+b; //combine both strings\nb=a.substring(0,a.length()-b.length()); //extract first string\na=a.substring(b.length()); //extract second string\nSystem.out.println(\"After swapping: \"+a+\" \"+b); //display swapped strings\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-26.png"
      },
      {
        "number": 27,
        "title": "Reverse the Order of Words in a String",
        "question": "Write a Java program to print the words of a string in reverse order.",
        "code": "package strings; //declare package\npublic class Practical27{\npublic static void main(String[] args){\nString s=\"Java is easy\"; //declare string\nString a[]=s.split(\"\\\\s+\"); //split into words\nSystem.out.println(\"Words in reverse order:\"); //display message\nfor(int i=a.length-1;i>=0;i--){\nSystem.out.print(a[i]+\" \"); //display words in reverse order\n}\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-27.png"
      },
      {
        "number": 28,
        "title": "Find First Non-Repeated Character",
        "question": "Write a Java program to find the first non-repeated character in a string.",
        "code": "package strings; //declare package\npublic class Practical28{\npublic static void main(String[] args){\nString s=\"swiss\"; //declare string\nfor(int i=0;i<s.length();i++){\nchar ch=s.charAt(i); //get current character\nif(s.indexOf(ch)==s.lastIndexOf(ch)){\nSystem.out.println(\"First non-repeated character: \"+ch); //display result\nbreak;\n}\n}\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-28.png"
      },
      {
        "number": 29,
        "title": "Find Duplicate Characters in a String",
        "question": "Write a Java program to find duplicate characters in a string.",
        "code": "package strings; //declare package\npublic class Practical29{\npublic static void main(String[] args){\nString s=\"programming\"; //declare string\nSystem.out.println(\"Duplicate characters:\"); //display message\nfor(int i=0;i<s.length();i++){\nchar ch=s.charAt(i); //get character\nif(s.indexOf(ch)!=i){\ncontinue; //skip previously checked characters\n}\nif(s.indexOf(ch)!=s.lastIndexOf(ch)){\nSystem.out.println(ch); //display duplicate character\n}\n}\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-29.png"
      },
      {
        "number": 30,
        "title": "Count Frequency of Each Character",
        "question": "Write a Java program to count the frequency of each character in a string.",
        "code": "package strings; //declare package\npublic class Practical30{\npublic static void main(String[] args){\nString s=\"hello\"; //declare string\nfor(int i=0;i<s.length();i++){\nchar ch=s.charAt(i); //get character\nif(s.indexOf(ch)!=i){\ncontinue; //skip previously counted characters\n}\nint count=0; //initialize frequency\nfor(int j=0;j<s.length();j++){\nif(s.charAt(j)==ch){\ncount++; //increase frequency\n}\n}\nSystem.out.println(ch+\" occurs \"+count+\" times\"); //display frequency\n}\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-30.png"
      },
      {
        "number": 31,
        "title": "Replace Spaces with a Character",
        "question": "Write a Java program to replace spaces in a string with a specified character.",
        "code": "package strings; //declare package\npublic class Practical31{\npublic static void main(String[] args){\nString s=\"Java is easy\"; //declare string\nchar ch='-'; //replacement character\nString result=s.replace(' ',ch); //replace spaces\nSystem.out.println(\"Original String: \"+s); //display original string\nSystem.out.println(\"Updated String: \"+result); //display updated string\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-31.png"
      },
      {
        "number": 32,
        "title": "Swap Adjacent Characters in a String",
        "question": "Write a Java program to swap adjacent characters in a string.",
        "code": "package strings; //declare package\npublic class Practical32{\npublic static void main(String[] args){\nString s=\"ABCDEFGH\"; //declare string\nString result=\"\"; //initialize result\nfor(int i=0;i<s.length();i+=2){\nif(i+1<s.length()){\nresult=result+s.charAt(i+1)+s.charAt(i); //swap adjacent characters\n}else{\nresult=result+s.charAt(i); //retain last character if unpaired\n}\n}\nSystem.out.println(\"Original String: \"+s); //display original string\nSystem.out.println(\"After swapping pairs: \"+result); //display result\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-32.png"
      },
      {
        "number": 33,
        "title": "Check Whether Two Strings Contain the Same Characters",
        "question": "Write a Java program to check whether two strings contain the same characters.",
        "code": "package strings; //declare package\nimport java.util.Arrays; //import Arrays class\npublic class Practical33{\npublic static void main(String[] args){\nString s1=\"listen\"; //first string\nString s2=\"silent\"; //second string\nchar a[]=s1.toCharArray(); //convert first string to array\nchar b[]=s2.toCharArray(); //convert second string to array\nArrays.sort(a); //sort first array\nArrays.sort(b); //sort second array\nif(Arrays.equals(a,b)){\nSystem.out.println(\"Both strings contain the same characters.\"); //display result\n}else{\nSystem.out.println(\"Both strings do not contain the same characters.\"); //display result\n}\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-33.png"
      },
      {
        "number": 34,
        "title": "Print a String on Multiple Lines",
        "question": "Write a Java program to print a string on multiple lines using the newline escape sequence.",
        "code": "package strings; //declare package\npublic class Practical34{\npublic static void main(String[] args){\nString s=\"Hello\\nJava\\nProgramming\"; //use newline escape sequence\nSystem.out.println(s); //display string on separate lines\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-34.png"
      },
      {
        "number": 35,
        "title": "Append Characters and Strings Using StringBuffer",
        "question": "Write a Java program to append characters and strings using StringBuffer.",
        "code": "package strings; //declare package\npublic class Practical35{\npublic static void main(String[] args){\nStringBuffer sb=new StringBuffer(\"Java\"); //create StringBuffer object\nsb.append(' '); //append a space\nsb.append(\"Programming\"); //append text\nsb.append('!'); //append a character\nSystem.out.println(\"Updated String: \"+sb); //display result\n}\n}",
        "screenshot": "assets/screenshots/strings-practical-35.png"
      }
    ]
  },
  {
    "id": "oop",
    "name": "Classes & Objects",
    "icon": "🧱",
    "color": "blue",
    "description": "Classes, objects, constructors, methods and encapsulation.",
    "practicals": [
      {
        "number": 1,
        "title": "Create a Person Class",
        "question": "Create a Person class with name and age and display details of two persons.",
        "code": "package objectorientedprogramming; //declare package\nclass Person{\nString name;\nint age;\nPerson(String n,int a){\nname=n;\nage=a;\n}\nvoid display(){\nSystem.out.println(\"Name=\"+name);\nSystem.out.println(\"Age=\"+age);\n}\n}\nclass Practical1{\npublic static void main(String[] args) {\nPerson p1=new Person(\"Aman\",20);//create first object\nPerson p2=new Person(\"Riya\",21);//create second object\np1.display();\np2.display();\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-1.png"
      },
      {
        "number": 2,
        "title": "Create a Dog Class",
        "question": "Create a Dog class with name and breed and demonstrate updating its attributes.",
        "code": "package objectorientedprogramming; //declare package\nclass Dog{\nString name;\nString breed;\nDog(String n,String b){\nname=n;\nbreed=b;\n}\nvoid setName(String n){\nname=n;//update name\n}\nvoid setBreed(String b){\nbreed=b;//update breed\n}\nvoid display(){\nSystem.out.println(\"Name=\"+name);\nSystem.out.println(\"Breed=\"+breed);\n}\n}\nclass Practical2{\npublic static void main(String[] args) {\nDog d1=new Dog(\"Tommy\",\"Labrador\");\nDog d2=new Dog(\"Rocky\",\"Pug\");\nd1.setName(\"Bruno\");\nd2.setBreed(\"German Shepherd\");\nd1.display();\nd2.display();\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-2.png"
      },
      {
        "number": 3,
        "title": "Rectangle Class",
        "question": "Create a Rectangle class to calculate area and perimeter.",
        "code": "package objectorientedprogramming; //declare package\nclass Rectangle{\ndouble width;\ndouble height;\nRectangle(double w,double h){\nwidth=w;\nheight=h;\n}\ndouble area(){\nreturn width*height;//calculate area\n}\ndouble perimeter(){\nreturn 2*(width+height);//calculate perimeter\n}\n}\nclass Practical3{\npublic static void main(String[] args) {\nRectangle r=new Rectangle(10,5);\nSystem.out.println(\"Area=\"+r.area());\nSystem.out.println(\"Perimeter=\"+r.perimeter());\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-3.png"
      },
      {
        "number": 4,
        "title": "Circle Class",
        "question": "Create a Circle class to calculate area and circumference and update its radius.",
        "code": "package objectorientedprogramming; //declare package\nclass Circle{\ndouble radius;\nCircle(double r){\nradius=r;\n}\nvoid setRadius(double r){\nradius=r;//modify radius\n}\ndouble calculateArea(){\nreturn 3.14*radius*radius;\n}\ndouble calculateCircumference(){\nreturn 2*3.14*radius;\n}\n}\nclass Practical4{\npublic static void main(String[] args) {\nCircle c=new Circle(7);\nSystem.out.println(\"Area=\"+c.calculateArea());\nSystem.out.println(\"Circumference=\"+c.calculateCircumference());\nc.setRadius(5);//change radius\nSystem.out.println(\"Updated Area=\"+c.calculateArea());\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-4.png"
      },
      {
        "number": 5,
        "title": "Book Class Using ArrayList",
        "question": "Create a Book class and demonstrate adding and removing books using ArrayList.",
        "code": "package objectorientedprogramming; //declare package\nimport java.util.ArrayList;\nclass Book{\nString title;\nString author;\nString isbn;\nBook(String t,String a,String i){\ntitle=t;\nauthor=a;\nisbn=i;\n}\npublic String toString(){\nreturn title+\" by \"+author+\" ISBN: \"+isbn;\n}\n}\nclass Practical5{\npublic static void main(String[] args) {\nArrayList<Book> books=new ArrayList<>();\nBook b1=new Book(\"Java Basics\",\"James\",\"101\");\nBook b2=new Book(\"Python Basics\",\"Guido\",\"102\");\nbooks.add(b1);//add book\nbooks.add(b2);\nSystem.out.println(\"Books: \"+books);\nbooks.remove(b1);//remove book\nSystem.out.println(\"After removing: \"+books);\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-5.png"
      },
      {
        "number": 6,
        "title": "Employee Class",
        "question": "Create an Employee class to calculate salary with bonus and update salary.",
        "code": "package objectorientedprogramming; //declare package\nclass Employee{\nString name;\nString jobTitle;\ndouble salary;\nEmployee(String n,String j,double s){\nname=n;\njobTitle=j;\nsalary=s;\n}\ndouble calculateSalary(double bonus){\nreturn salary+bonus;//calculate salary with bonus\n}\nvoid updateSalary(double s){\nsalary=s;//update salary\n}\nvoid display(){\nSystem.out.println(\"Name=\"+name);\nSystem.out.println(\"Job Title=\"+jobTitle);\nSystem.out.println(\"Salary=\"+salary);\n}\n}\nclass Practical6{\npublic static void main(String[] args) {\nEmployee e=new Employee(\"Aman\",\"Developer\",30000);\ne.display();\nSystem.out.println(\"Salary with bonus=\"+e.calculateSalary(5000));\ne.updateSalary(35000);\ne.display();\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-6.png"
      },
      {
        "number": 7,
        "title": "Bank and Account Classes",
        "question": "Create Bank and Account classes to demonstrate adding accounts, depositing money, withdrawing money and removing accounts.",
        "code": "package objectorientedprogramming; //declare package\nimport java.util.ArrayList;\nclass Account{\nint accountNumber;\nString customerName;\ndouble balance;\nAccount(int n,String name,double b){\naccountNumber=n;\ncustomerName=name;\nbalance=b;\n}\nvoid deposit(double amount){\nif(amount>0){\nbalance+=amount;//deposit money\n}\n}\nvoid withdraw(double amount){\nif(amount>0&&amount<=balance){\nbalance-=amount;//withdraw money\n}\nelse{\nSystem.out.println(\"Insufficient balance or invalid amount\");\n}\n}\nvoid display(){\nSystem.out.println(\"Account Number=\"+accountNumber);\nSystem.out.println(\"Customer=\"+customerName);\nSystem.out.println(\"Balance=\"+balance);\n}\n}\nclass Bank{\nArrayList<Account> accounts=new ArrayList<>();\nvoid addAccount(Account a){\naccounts.add(a);//add account\n}\nvoid removeAccount(Account a){\naccounts.remove(a);//remove account\n}\n}\nclass Practical7{\npublic static void main(String[] args) {\nBank bank=new Bank();\nAccount a=new Account(101,\"Riya\",5000);\nbank.addAccount(a);\na.deposit(1000);\na.withdraw(2000);\na.display();\nbank.removeAccount(a);\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-7.png"
      },
      {
        "number": 8,
        "title": "Traffic Light Class",
        "question": "Create a TrafficLight class to change light colour and check whether it is red or green.",
        "code": "package objectorientedprogramming; //declare package\nclass TrafficLight{\nString color;\nint duration;\nTrafficLight(String c,int d){\ncolor=c;\nduration=d;\n}\nvoid changeColor(String c){\ncolor=c;//change light color\n}\nboolean isRed(){\nreturn color.equalsIgnoreCase(\"Red\");\n}\nboolean isGreen(){\nreturn color.equalsIgnoreCase(\"Green\");\n}\nvoid display(){\nSystem.out.println(\"Color=\"+color);\nSystem.out.println(\"Duration=\"+duration+\" seconds\");\n}\n}\nclass Practical8{\npublic static void main(String[] args) {\nTrafficLight t=new TrafficLight(\"Red\",30);\nt.display();\nSystem.out.println(\"Is Red? \"+t.isRed());\nt.changeColor(\"Green\");\nt.display();\nSystem.out.println(\"Is Green? \"+t.isGreen());\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-8.png"
      },
      {
        "number": 9,
        "title": "Employee Years of Service",
        "question": "Create an Employee class to calculate years of service using hire date.",
        "code": "package objectorientedprogramming; //declare package\nimport java.time.LocalDate;\nimport java.time.Period;\nclass Employee{\nString name;\ndouble salary;\nLocalDate hireDate;\nEmployee(String n,double s,LocalDate h){\nname=n;\nsalary=s;\nhireDate=h;\n}\nint yearsOfService(){\nreturn Period.between(hireDate,LocalDate.now()).getYears();//calculate service\n}\n}\nclass Practical9{\npublic static void main(String[] args) {\nEmployee e=new Employee(\"Riya\",40000,LocalDate.of(2020,1,10));\nSystem.out.println(\"Name=\"+e.name);\nSystem.out.println(\"Salary=\"+e.salary);\nSystem.out.println(\"Years of Service=\"+e.yearsOfService());\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-9.png"
      },
      {
        "number": 10,
        "title": "Student Class Using ArrayList",
        "question": "Create a Student class to add and remove courses using ArrayList.",
        "code": "package objectorientedprogramming; //declare package\nimport java.util.ArrayList;\nclass Student{\nString name;\nString grade;\nArrayList<String> courses=new ArrayList<>();\nStudent(String n,String g){\nname=n;\ngrade=g;\n}\nvoid addCourse(String c){\ncourses.add(c);//add course\n}\nvoid removeCourse(String c){\ncourses.remove(c);//remove course\n}\nvoid display(){\nSystem.out.println(\"Name=\"+name);\nSystem.out.println(\"Grade=\"+grade);\nSystem.out.println(\"Courses=\"+courses);\n}\n}\nclass Practical10{\npublic static void main(String[] args) {\nStudent s=new Student(\"Aman\",\"A\");\ns.addCourse(\"Java\");\ns.addCourse(\"DBMS\");\ns.addCourse(\"Python\");\ns.removeCourse(\"DBMS\");\ns.display();\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-10.png"
      },
      {
        "number": 11,
        "title": "Library Class",
        "question": "Create a Library class to add, remove and display books.",
        "code": "package objectorientedprogramming; //declare package\nimport java.util.ArrayList;\nclass Library{\nArrayList<String> books=new ArrayList<>();\nvoid addBook(String b){\nbooks.add(b);//add book\n}\nvoid removeBook(String b){\nbooks.remove(b);//remove book\n}\nvoid display(){\nSystem.out.println(\"Library Books: \"+books);\n}\n}\nclass Practical11{\npublic static void main(String[] args) {\nLibrary l=new Library();\nl.addBook(\"Java\");\nl.addBook(\"Python\");\nl.addBook(\"DBMS\");\nl.display();\nl.removeBook(\"Python\");\nl.display();\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-11.png"
      },
      {
        "number": 12,
        "title": "Airplane Class",
        "question": "Create an Airplane class to display flight details, check status and delay a flight.",
        "code": "package objectorientedprogramming; //declare package\nclass Airplane{\nString flightNumber;\nString destination;\nString departureTime;\nint delay;\nAirplane(String f,String d,String t){\nflightNumber=f;\ndestination=d;\ndepartureTime=t;\ndelay=0;\n}\nvoid checkStatus(){\nSystem.out.println(\"Flight \"+flightNumber+\" is scheduled\");\n}\nvoid delayFlight(int minutes){\ndelay+=minutes;//update delay\nSystem.out.println(\"Flight delayed by \"+delay+\" minutes\");\n}\nvoid display(){\nSystem.out.println(\"Flight Number=\"+flightNumber);\nSystem.out.println(\"Destination=\"+destination);\nSystem.out.println(\"Departure Time=\"+departureTime);\n}\n}\nclass Practical12{\npublic static void main(String[] args) {\nAirplane a=new Airplane(\"AI101\",\"Delhi\",\"10:30 AM\");\na.display();\na.checkStatus();\na.delayFlight(30);\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-12.png"
      },
      {
        "number": 13,
        "title": "Inventory Management System",
        "question": "Create an Inventory class to add products, remove products and check product stock.",
        "code": "package objectorientedprogramming; //declare package\nimport java.util.HashMap;\nclass Inventory{\nHashMap<String,Integer> products=new HashMap<>();\nvoid addProduct(String p,int q){\nproducts.put(p,products.getOrDefault(p,0)+q);//add product quantity\n}\nvoid removeProduct(String p){\nproducts.remove(p);//remove product\n}\nvoid checkInventory(String p){\nint q=products.getOrDefault(p,0);\nif(q<5){\nSystem.out.println(p+\" has low inventory: \"+q);\n}\nelse{\nSystem.out.println(p+\" stock is sufficient: \"+q);\n}\n}\nvoid display(){\nSystem.out.println(products);\n}\n}\nclass Practical13{\npublic static void main(String[] args) {\nInventory i=new Inventory();\ni.addProduct(\"Laptop\",10);\ni.addProduct(\"Mouse\",3);\ni.checkInventory(\"Mouse\");\ni.checkInventory(\"Laptop\");\ni.display();\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-13.png"
      },
      {
        "number": 14,
        "title": "School Management System",
        "question": "Create a School class to add and remove students and teachers and create classes.",
        "code": "package objectorientedprogramming; //declare package\nimport java.util.ArrayList;\nclass School{\nArrayList<String> students=new ArrayList<>();\nArrayList<String> teachers=new ArrayList<>();\nArrayList<String> classes=new ArrayList<>();\nvoid addStudent(String s){\nstudents.add(s);//add student\n}\nvoid removeStudent(String s){\nstudents.remove(s);//remove student\n}\nvoid addTeacher(String t){\nteachers.add(t);//add teacher\n}\nvoid removeTeacher(String t){\nteachers.remove(t);//remove teacher\n}\nvoid createClass(String c){\nclasses.add(c);//create class\n}\nvoid display(){\nSystem.out.println(\"Students=\"+students);\nSystem.out.println(\"Teachers=\"+teachers);\nSystem.out.println(\"Classes=\"+classes);\n}\n}\nclass Practical14{\npublic static void main(String[] args) {\nSchool s=new School();\ns.addStudent(\"Aman\");\ns.addStudent(\"Riya\");\ns.addTeacher(\"Mr. Sharma\");\ns.createClass(\"BCA\");\ns.display();\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-14.png"
      },
      {
        "number": 15,
        "title": "Music Library",
        "question": "Create a MusicLibrary class to add and remove songs and play a random song.",
        "code": "package objectorientedprogramming; //declare package\nimport java.util.ArrayList;\nimport java.util.Random;\nclass MusicLibrary{\nArrayList<String> songs=new ArrayList<>();\nvoid addSong(String s){\nsongs.add(s);//add song\n}\nvoid removeSong(String s){\nsongs.remove(s);//remove song\n}\nvoid playRandomSong(){\nif(songs.isEmpty()){\nSystem.out.println(\"No songs available\");\nreturn;\n}\nRandom r=new Random();\nint i=r.nextInt(songs.size());//select random song index\nSystem.out.println(\"Now playing: \"+songs.get(i));\n}\n}\nclass Practical15{\npublic static void main(String[] args) {\nMusicLibrary m=new MusicLibrary();\nm.addSong(\"Perfect\");\nm.addSong(\"Until I Found You\");\nm.addSong(\"Photograph\");\nm.removeSong(\"Photograph\");\nm.playRandomSong();\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-15.png"
      },
      {
        "number": 16,
        "title": "Default Constructor",
        "question": "Create a Student class and initialize its attributes using a default constructor.",
        "code": "package objectorientedprogramming; //declare package\nclass Student{\nint rollno;\nString name;\nStudent(){\nrollno=1;\nname=\"Aman\";//initialize values\n}\nvoid display(){\nSystem.out.println(\"Roll Number=\"+rollno);\nSystem.out.println(\"Name=\"+name);\n}\n}\nclass Practical16{\npublic static void main(String[] args) {\nStudent s=new Student();//call default constructor\ns.display();\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-16.png"
      },
      {
        "number": 17,
        "title": "Parameterized Constructor",
        "question": "Create a Student class and initialize its attributes using a parameterized constructor.",
        "code": "package objectorientedprogramming; //declare package\nclass Student{\nint rollno;\nString name;\nStudent(int r,String n){\nrollno=r;\nname=n;//initialize using parameters\n}\nvoid display(){\nSystem.out.println(\"Roll Number=\"+rollno);\nSystem.out.println(\"Name=\"+name);\n}\n}\nclass Practical17{\npublic static void main(String[] args) {\nStudent s=new Student(101,\"Riya\");\ns.display();\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-17.png"
      },
      {
        "number": 18,
        "title": "Copy Constructor",
        "question": "Create a Student class and copy the data of one object into another using a copy constructor.",
        "code": "package objectorientedprogramming; //declare package\nclass Student{\nint rollno;\nString name;\nStudent(int r,String n){\nrollno=r;\nname=n;\n}\nStudent(Student s){\nrollno=s.rollno;//copy roll number\nname=s.name;//copy name\n}\nvoid display(){\nSystem.out.println(\"Roll Number=\"+rollno);\nSystem.out.println(\"Name=\"+name);\n}\n}\nclass Practical18{\npublic static void main(String[] args) {\nStudent s1=new Student(101,\"Aman\");\nStudent s2=new Student(s1);//copy object data\ns1.display();\ns2.display();\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-18.png"
      },
      {
        "number": 19,
        "title": "Student Details Using Array of Objects",
        "question": "Create an array of Student objects to accept and display details of 10 students.",
        "code": "package objectorientedprogramming; //declare package\nimport java.io.BufferedReader;\nimport java.io.InputStreamReader;\nimport java.io.IOException;\nclass Student{\nstatic int count=0;\nint rollno;\nString name;\nString studentClass;\nStudent(String n,String c){\ncount++;\nrollno=count;//generate roll number automatically\nname=n;\nstudentClass=c;\n}\nvoid display(){\nSystem.out.println(\"Roll Number=\"+rollno);\nSystem.out.println(\"Name=\"+name);\nSystem.out.println(\"Class=\"+studentClass);\n}\n}\nclass Practical19{\npublic static void main(String[] args) throws IOException {\nBufferedReader br=new BufferedReader(new InputStreamReader(System.in));\nStudent[] s=new Student[10];\nfor(int i=0;i<10;i++){\nSystem.out.println(\"Enter details of student \"+(i+1));\nSystem.out.print(\"Enter name: \");\nString name=br.readLine();\nSystem.out.print(\"Enter class: \");\nString studentClass=br.readLine();\ns[i]=new Student(name,studentClass);//create student object\n}\nSystem.out.println(\"Student Details:\");\nfor(int i=0;i<10;i++){\ns[i].display();\n}\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-19.png"
      },
      {
        "number": 20,
        "title": "Method Overloading",
        "question": "Create an Area class to demonstrate method overloading for calculating the area of a circle and rectangle.",
        "code": "package objectorientedprogramming; //declare package\nclass Area{\ndouble calculate(double radius){\nreturn 3.14*radius*radius;//circle area\n}\ndouble calculate(double length,double width){\nreturn length*width;//rectangle area\n}\n}\nclass Practical20{\npublic static void main(String[] args) {\nArea a=new Area();\nSystem.out.println(\"Area of Circle=\"+a.calculate(7));\nSystem.out.println(\"Area of Rectangle=\"+a.calculate(10,5));\n}\n}",
        "screenshot": "assets/screenshots/oop-practical-20.png"
      }
    ]
  },
  {
    "id": "inheritance",
    "name": "Inheritance",
    "icon": "🌳",
    "color": "teal",
    "description": "Overriding, super, abstract classes and inheritance types.",
    "practicals": [
      {
        "number": 1,
        "title": "Method Overriding",
        "question": "Demonstrate method overriding.",
        "code": "package inheritance; //declare package\nclass Animal{\nvoid makeSound(){System.out.println(\"Animal makes a sound\");} //parent method\n}\nclass Cat extends Animal{\nvoid makeSound(){System.out.println(\"Cat barks\");} //override method\n}\npublic class Practical1{\npublic static void main(String[] args){\nCat c=new Cat(); //create Cat object\nc.makeSound(); //call overridden method\n}\n}",
        "screenshot": "assets/screenshots/inheritance-practical-1.png"
      },
      {
        "number": 2,
        "title": "Vehicle and Car",
        "question": "Override a method in a subclass.",
        "code": "package inheritance; //declare package\nclass Vehicle{\nvoid drive(){System.out.println(\"Vehicle is moving\");} //parent method\n}\nclass Car extends Vehicle{\nvoid drive(){System.out.println(\"Car is driving\");} //override method\n}\npublic class Practical2{\npublic static void main(String[] args){\nCar c=new Car(); //create Car object\nc.drive(); //call overridden method\n}\n}",
        "screenshot": "assets/screenshots/inheritance-practical-2.png"
      },
      {
        "number": 3,
        "title": "Use of super Keyword",
        "question": "Access parent class method using super.",
        "code": "package inheritance; //declare package\nclass Parent{\nint value=10; //parent variable\nvoid display(){System.out.println(\"Parent method\");} //parent method\n}\nclass Child extends Parent{\nint value=20; //child variable\nvoid show(){System.out.println(super.value);super.display();} //access parent members\n}\npublic class Practical3{\npublic static void main(String[] args){\nChild c=new Child(); //create Child object\nc.show(); //call child method\n}\n}",
        "screenshot": "assets/screenshots/inheritance-practical-3.png"
      },
      {
        "number": 4,
        "title": "Use of super Constructor",
        "question": "Call superclass constructor using super().",
        "code": "package inheritance; //declare package\nclass Parent{\nParent(){System.out.println(\"Parent constructor\");} //parent constructor\n}\nclass Child extends Parent{\nChild(){super();System.out.println(\"Child constructor\");} //call parent constructor\n}\npublic class Practical4{\npublic static void main(String[] args){\nChild c=new Child(); //create Child object\n}\n}",
        "screenshot": "assets/screenshots/inheritance-practical-4.png"
      },
      {
        "number": 5,
        "title": "Dynamic Method Dispatch",
        "question": "Demonstrate dynamic method dispatch.",
        "code": "package inheritance; //declare package\nclass Animal{\nvoid sound(){System.out.println(\"Animal sound\");} //parent method\n}\nclass Dog extends Animal{\nvoid sound(){System.out.println(\"Dog barks\");} //override method\n}\nclass Cat extends Animal{\nvoid sound(){System.out.println(\"Cat meows\");} //override method\n}\npublic class Practical5{\npublic static void main(String[] args){\nAnimal a=new Dog(); //parent reference to Dog\na.sound(); //call Dog method\na=new Cat(); //parent reference to Cat\na.sound(); //call Cat method\n}\n}",
        "screenshot": "assets/screenshots/inheritance-practical-5.png"
      },
      {
        "number": 6,
        "title": "Abstract Class",
        "question": "Demonstrate an abstract class and its subclasses.",
        "code": "package inheritance; //declare package\nabstract class Animal{\nabstract void sound(); //abstract method\n}\nclass Lion extends Animal{\nvoid sound(){System.out.println(\"Lion roars\");} //implement method\n}\nclass Tiger extends Animal{\nvoid sound(){System.out.println(\"Tiger growls\");} //implement method\n}\npublic class Practical6{\npublic static void main(String[] args){\nAnimal a=new Lion(); //create Lion object\na.sound(); //call method\nAnimal b=new Tiger(); //create Tiger object\nb.sound(); //call method\n}\n}",
        "screenshot": "assets/screenshots/inheritance-practical-6.png"
      },
      {
        "number": 7,
        "title": "Multilevel Inheritance",
        "question": "Demonstrate multilevel inheritance.",
        "code": "package inheritance; //declare package\nclass Animal{\nvoid eat(){System.out.println(\"Animal eats\");} //base method\n}\nclass Dog extends Animal{\nvoid bark(){System.out.println(\"Dog barks\");} //derived method\n}\nclass Puppy extends Dog{\nvoid weep(){System.out.println(\"Puppy weeps\");} //derived method\n}\npublic class Practical7{\npublic static void main(String[] args){\nPuppy p=new Puppy(); //create Puppy object\np.eat(); //call base method\np.bark(); //call Dog method\np.weep(); //call Puppy method\n}\n}",
        "screenshot": "assets/screenshots/inheritance-practical-7.png"
      },
      {
        "number": 8,
        "title": "Hierarchical Inheritance",
        "question": "Demonstrate hierarchical inheritance.",
        "code": "package inheritance; //declare package\nclass Animal{\nvoid eat(){System.out.println(\"Animal eats\");} //parent method\n}\nclass Dog extends Animal{\nvoid bark(){System.out.println(\"Dog barks\");} //Dog method\n}\nclass Cat extends Animal{\nvoid meow(){System.out.println(\"Cat meows\");} //Cat method\n}\npublic class Practical8{\npublic static void main(String[] args){\nDog d=new Dog(); //create Dog object\nd.eat();d.bark(); //call inherited and own methods\nCat c=new Cat(); //create Cat object\nc.eat();c.meow(); //call inherited and own methods\n}\n}",
        "screenshot": "assets/screenshots/inheritance-practical-8.png"
      }
    ]
  },
  {
    "id": "interfaces",
    "name": "Interfaces",
    "icon": "🔌",
    "color": "purple",
    "description": "Defining and implementing Java interfaces.",
    "practicals": [
      {
        "number": 1,
        "title": "Shape Interface",
        "question": "Implement an interface to calculate areas.",
        "code": "package interfaces; //declare package\ninterface Shape{\ndouble area(); //interface method\n}\nclass Rectangle implements Shape{\ndouble length=10,width=5; //dimensions\npublic double area(){return length*width;} //implement area\n}\nclass Circle implements Shape{\ndouble radius=7; //radius\npublic double area(){return 3.14*radius*radius;} //implement area\n}\npublic class Practical1{\npublic static void main(String[] args){\nShape r=new Rectangle(); //create Rectangle\nShape c=new Circle(); //create Circle\nSystem.out.println(\"Rectangle area: \"+r.area()); //display area\nSystem.out.println(\"Circle area: \"+c.area()); //display area\n}\n}",
        "screenshot": "assets/screenshots/interface-practical-1.png"
      },
      {
        "number": 2,
        "title": "Animal Interface",
        "question": "Implement an Animal interface in Dog.",
        "code": "package interfaces; //declare package\ninterface Animal{\nvoid bark(); //interface method\n}\nclass Dog implements Animal{\npublic void bark(){System.out.println(\"Dog barks\");} //implement method\n}\npublic class Practical2{\npublic static void main(String[] args){\nDog d=new Dog(); //create Dog object\nd.bark(); //call method\n}\n}",
        "screenshot": "assets/screenshots/interface-practical-2.png"
      },
      {
        "number": 3,
        "title": "Flyable Interface",
        "question": "Implement an interface in different classes.",
        "code": "package interfaces; //declare package\ninterface Flyable{\nvoid fly(); //interface method\n}\nclass Airplane implements Flyable{\npublic void fly(){System.out.println(\"Airplane flies\");} //implement method\n}\nclass Helicopter implements Flyable{\npublic void fly(){System.out.println(\"Helicopter flies\");} //implement method\n}\npublic class Practical3{\npublic static void main(String[] args){\nFlyable a=new Airplane(); //create Airplane object\na.fly(); //call method\nFlyable h=new Helicopter(); //create Helicopter object\nh.fly(); //call method\n}\n}",
        "screenshot": "assets/screenshots/interface-practical-4.png"
      },
      {
        "number": 4,
        "title": "Resizable Interface",
        "question": "Implement a Resizable interface.",
        "code": "package interfaces; //declare package\ninterface Resizable{\nvoid resize(int percent); //interface method\n}\nclass Rectangle implements Resizable{\nint length=10,width=5; //dimensions\npublic void resize(int percent){length=length*percent/100;width=width*percent/100;} //resize rectangle\nvoid display(){System.out.println(length+\" x \"+width);} //display dimensions\n}\npublic class Practical4{\npublic static void main(String[] args){\nRectangle r=new Rectangle(); //create Rectangle\nr.resize(150); //increase size by 50 percent\nr.display(); //display dimensions\n}\n}",
        "screenshot": "assets/screenshots/interface-practical-3.png"
      },
      {
        "number": 5,
        "title": "Drawable Interface",
        "question": "Implement a Drawable interface.",
        "code": "package interfaces; //declare package\ninterface Drawable{\nvoid draw(); //interface method\n}\nclass Circle implements Drawable{\npublic void draw(){System.out.println(\"Drawing Circle\");} //implement method\n}\nclass Rectangle implements Drawable{\npublic void draw(){System.out.println(\"Drawing Rectangle\");} //implement method\n}\npublic class Practical5{\npublic static void main(String[] args){\nDrawable c=new Circle(); //create Circle\nc.draw(); //call draw\nDrawable r=new Rectangle(); //create Rectangle\nr.draw(); //call draw\n}\n}",
        "screenshot": "assets/screenshots/interface-practical-5.png"
      }
    ]
  },
  {
    "id": "packages",
    "name": "Packages",
    "icon": "📦",
    "color": "orange",
    "description": "Import statements, qualified names and package access.",
    "practicals": [
      {
        "number": 1,
        "title": "Access Date Using Import",
        "question": "Access java.util.Date using import and print current date.",
        "code": "package packages; //declare package\nimport java.util.Date; //import Date class\npublic class Practical1{\npublic static void main(String[] args){\nDate d=new Date(); //create Date object\nSystem.out.println(\"Current System Date: \"+d); //display date\n}\n}",
        "screenshot": "assets/screenshots/package-practical-1.png"
      },
      {
        "number": 2,
        "title": "Access Date Using Qualified Name",
        "question": "Access java.util.Date using its fully qualified name.",
        "code": "package packages; //declare package\npublic class Practical2{\npublic static void main(String[] args){\njava.util.Date d=new java.util.Date(); //create Date object using qualified name\nSystem.out.println(\"Current System Date: \"+d); //display date\n}\n}",
        "screenshot": "assets/screenshots/package-practical-2.png"
      },
      {

        "number": 3,
        "title": "Create Multiple Default Classes",
        "question": "Create multiple default-access classes in a package.",
        "code": "package packages; //declare package\nclass First{\nvoid display(){System.out.println(\"First class\");} //display first class message\n}\nclass Second{\nvoid display(){System.out.println(\"Second class\");} //display second class message\n}\npublic class Practical3{\npublic static void main(String[] args){\nFirst f=new First(); //create First object\nSecond s=new Second(); //create Second object\nf.display(); //call First class method\ns.display(); //call Second class method\n}\n}",
        "screenshot": "assets/screenshots/package-practical-3.png"
      },
      {
        "number": 4,
        "title": "Create Multiple Default Classes",
        "question": "Create multiple default-access classes in a package.",
        "code": "package packages; //declare package\nclass First{\npublic void display(){System.out.println(\"First class\");} //display message\n}\nclass Second{\npublic void display(){System.out.println(\"Second class\");} //display message\n}\nclass Third{\npublic void display(){System.out.println(\"Third class\");} //display message\n}\npublic class Practical4{\npublic static void main(String[] args){\nFirst f=new First(); //create First object\nSecond s=new Second(); //create Second object\nThird t=new Third(); //create Third object\nf.display(); //call First method\ns.display(); //call Second method\nt.display(); //call Third method\n}\n}",
        "screenshot": "assets/screenshots/package-practical-4.png"
      },
      {
        "number": 5,
        "title": "Protected Members Access",
        "question": "Access protected class members from another class in the same package.",
        "code": "package packages; //declare package\nclass Parent{\nprotected int value=100; //declare protected member\nprotected void display(){System.out.println(\"Protected Value: \"+value);} //display value\n}\npublic class Practical5{\npublic static void main(String[] args){\nParent p=new Parent(); //create Parent object\np.display(); //access protected method within same package\n}\n}",
        "screenshot": "assets/screenshots/package-practical-5.png"
      },
      {
        "number": 6,
        "title": "nested package c4.sample",
        "question": "Access nested package c4.sample and display a message.",
        "code": "package c4.sample; //declare nested package\npublic class Practical6{\npublic void display(){System.out.println(\"Welcome to nested package c4.sample\");} //display message\npublic static void main(String[] args){\nPractical6 obj=new Practical6(); //create object\nobj.display(); //call method\n}\n}",
        "screenshot": "assets/screenshots/package-practical-6.png"
      },
      {
        "number": 7,
        "title": "public class in package",
        "question": "Access public class in package and display a message.",
        "code": "package packages; //declare package\nclass PublicExample{\npublic int value=50; //declare public variable\npublic void display(){System.out.println(\"Public Value: \"+value);} //display public member\n}\npublic class Practical7{\npublic static void main(String[] args){\nPublicExample obj=new PublicExample(); //create object\nSystem.out.println(\"Value: \"+obj.value); //access public variable\nobj.display(); //call public method\n}\n}",
        "screenshot": "assets/screenshots/package-practical-7.png"
      }
    ]
  },
  {
    "id": "exceptions",
    "name": "Exception Handling",
    "icon": "⚠️",
    "color": "pink",
    "description": "try-catch, throw, throws and user-defined exceptions.",
    "practicals": [
      {
        "number": 1,
        "title": "Handle Arithmetic Exception",
        "question": "Demonstrate throwing and handling an ArithmeticException.",
        "code": "package exceptionhandling; //declare package\nclass Practical1{\npublic static void main(String[] args) {\ntry{\nint a=10;\nint b=0;\nif(b==0){\nthrow new ArithmeticException(\"Cannot divide by zero\");\n}\nSystem.out.println(\"Result=\"+(a/b));\n}\ncatch(ArithmeticException e){\nSystem.out.println(\"Exception caught: \"+e.getMessage());//handle exception\n}\n}\n}",
        "screenshot": "assets/screenshots/a.png"
      },
      {
        "number": 2,
        "title": "Throw IllegalArgumentException",
        "question": "Throw an exception when the entered number is odd.",
        "code": "package exceptionhandling; //declare package\nclass Practical2{\nstatic void checkNumber(int n){\nif(n%2!=0){\nthrow new IllegalArgumentException(\"Number is odd\");//throw exception\n}\nSystem.out.println(\"Number is even\");\n}\npublic static void main(String[] args) {\ntry{\ncheckNumber(7);//call method\n}\ncatch(IllegalArgumentException e){\nSystem.out.println(\"Exception caught: \"+e.getMessage());\n}\n}\n}",
        "screenshot": "assets/screenshots/b.png"
      },
      {
        "number": 3,
        "title": "Handle FileNotFoundException",
        "question": "Read a file and handle the FileNotFoundException.",
        "code": "package exceptionhandling; //declare package\nimport java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.Scanner;\nclass Practical3{\nstatic void readFile(String filename) throws FileNotFoundException{\nFile f=new File(filename);\nScanner sc=new Scanner(f);//open file\nwhile(sc.hasNextLine()){\nSystem.out.println(sc.nextLine());//read file contents\n}\nsc.close();\n}\npublic static void main(String[] args) {\ntry{\nreadFile(\"sample.txt\");//provide file name\n}\ncatch(FileNotFoundException e){\nSystem.out.println(\"Exception caught: File not found\");\n}\n}\n}",
        "screenshot": "assets/screenshots/c.png"
      },
      {
        "number": 4,
        "title": "Throw Exception for Positive Number",
        "question": "Read integers from a file and throw an exception when a positive number is found.",
        "code": "package exceptionhandling; //declare package\nimport java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.Scanner;\nclass Practical4{\npublic static void main(String[] args) {\ntry{\nFile f=new File(\"numbers.txt\");\nScanner sc=new Scanner(f);//open file\nwhile(sc.hasNextInt()){\nint n=sc.nextInt();//read number\nSystem.out.println(n);\nif(n>0){\nthrow new ArithmeticException(\"Positive number found: \"+n);\n}\n}\nsc.close();\n}\ncatch(FileNotFoundException e){\nSystem.out.println(\"Exception caught: File not found\");\n}\ncatch(ArithmeticException e){\nSystem.out.println(\"Exception caught: \"+e.getMessage());\n}\n}\n}",
        "screenshot": "assets/screenshots/d.png"
      },
      {
        "number": 5,
        "title": "Handle Empty File Exception",
        "question": "Read a file and throw an exception if the file is empty.",
        "code": "package exceptionhandling; //declare package\nimport java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.Scanner;\nclass Practical5{\npublic static void main(String[] args) {\ntry{\nFile f=new File(\"sample.txt\");\nScanner sc=new Scanner(f);//open file\nif(!sc.hasNextLine()){\nsc.close();\nthrow new IllegalArgumentException(\"File is empty\");\n}\nwhile(sc.hasNextLine()){\nSystem.out.println(sc.nextLine());//read file contents\n}\nsc.close();\n}\ncatch(FileNotFoundException e){\nSystem.out.println(\"Exception caught: File not found\");\n}\ncatch(IllegalArgumentException e){\nSystem.out.println(\"Exception caught: \"+e.getMessage());\n}\n}\n}",
        "screenshot": "assets/screenshots/e.png"
      },
      {
        "number": 6,
        "title": "Detect Duplicate Numbers",
        "question": "Accept integers and throw an exception if a duplicate number is entered.",
        "code": "package exceptionhandling; //declare package\nimport java.util.Scanner;\nclass Practical6{\npublic static void main(String[] args) {\nScanner sc=new Scanner(System.in);\ntry{\nSystem.out.print(\"Enter number of integers: \");\nint n=sc.nextInt();\nint[] a=new int[n];//create array\nfor(int i=0;i<n;i++){\nSystem.out.print(\"Enter number: \");\na[i]=sc.nextInt();\nfor(int j=0;j<i;j++){\nif(a[i]==a[j]){\nthrow new IllegalArgumentException(\"Duplicate number found: \"+a[i]);\n}\n}\n}\nSystem.out.println(\"No duplicate numbers found\");\n}\ncatch(IllegalArgumentException e){\nSystem.out.println(\"Exception caught: \"+e.getMessage());\n}\nfinally{\nsc.close();//close scanner\n}\n}\n}",
        "screenshot": "assets/screenshots/f.png"
      },
      {
        "number": 7,
        "title": "Check String for Vowels",
        "question": "Throw an exception if a string does not contain any vowels.",
        "code": "package exceptionhandling; //declare package\nclass Practical7{\nstatic void checkString(String s){\nif(!s.matches(\"(?i).* [aeiou].*\".replace(\" \",\"\"))){\nthrow new IllegalArgumentException(\"String does not contain vowels\");\n}\nSystem.out.println(\"String contains vowels\");\n}\npublic static void main(String[] args) {\ntry{\ncheckString(\"Hello\");//check string\n}\ncatch(IllegalArgumentException e){\nSystem.out.println(\"Exception caught: \"+e.getMessage());\n}\n}\n}",
        "screenshot": "assets/screenshots/g.png"
      },
      {
        "number": 8,
        "title": "Declare IOException Using throws",
        "question": "Declare and handle an IOException from a method.",
        "code": "package exceptionhandling; //declare package\nimport java.io.IOException;\nclass Practical8{\nstatic void checkFile() throws IOException{\nthrow new IOException(\"File operation failed\");//declare exception\n}\npublic static void main(String[] args) {\ntry{\ncheckFile();//call method\n}\ncatch(IOException e){\nSystem.out.println(\"Exception caught: \"+e.getMessage());\n}\n}\n}",
        "screenshot": "assets/screenshots/h.png"
      },
      {
        "number": 9,
        "title": "Multiple Catch Blocks",
        "question": "Demonstrate handling different exceptions using multiple catch blocks.",
        "code": "package exceptionhandling; //declare package\nclass Practical9{\npublic static void main(String[] args) {\ntry{\nint a=Integer.parseInt(\"abc\");//causes NumberFormatException\nSystem.out.println(a);\nint b=10/0;//causes ArithmeticException\nSystem.out.println(b);\n}\ncatch(NumberFormatException e){\nSystem.out.println(\"Number format exception caught\");\n}\ncatch(ArithmeticException e){\nSystem.out.println(\"Arithmetic exception caught\");\n}\ncatch(Exception e){\nSystem.out.println(\"General exception caught\");\n}\n}\n}",
        "screenshot": "assets/screenshots/i.png"
      },
      {
        "number": 10,
        "title": "Nested Try-Catch Blocks",
        "question": "Demonstrate nested try-catch blocks.",
        "code": "package exceptionhandling; //declare package\nclass Practical10{\npublic static void main(String[] args) {\ntry{\nSystem.out.println(\"Outer try block started\");\ntry{\nint a=10/0;//causes ArithmeticException\nSystem.out.println(a);\n}\ncatch(ArithmeticException e){\nSystem.out.println(\"Inner catch: Division by zero\");\n}\nint b=10/2;\nSystem.out.println(\"Result=\"+b);\n}\ncatch(Exception e){\nSystem.out.println(\"Outer catch: \"+e.getMessage());\n}\n}\n}",
        "screenshot": "assets/screenshots/j.png"
      }
    ]
  },
  {
    "id": "io",
    "name": "Input / Output",
    "icon": "📂",
    "color": "teal",
    "description": "Reading input and files with Java I/O classes.",
    "practicals": [
      {
        "number": 1,
        "title": "Enter Character",
        "question": "Read a character using InputStreamReader.",
        "code": "package inputoutput; //declare package\nimport java.io.*; //import input output classes\npublic class Practical1{\npublic static void main(String[] args) throws IOException{\nInputStreamReader isr=new InputStreamReader(System.in); //create reader\nSystem.out.print(\"Enter a character: \"); //prompt user\nint ch=isr.read(); //read character\nSystem.out.println(\"Character: \"+(char)ch); //display character\n}\n}",
        "screenshot": "assets/screenshots/io-practical-1.png"
      },
      {
        "number": 2,
        "title": "Enter String using BufferedReader",
        "question": "Read a line of text using BufferedReader.",
        "code": "package inputoutput; //declare package\nimport java.io.*; //import input output classes\npublic class Practical2{\npublic static void main(String[] args) throws IOException{\nBufferedReader br=new BufferedReader(new InputStreamReader(System.in)); //create reader\nSystem.out.print(\"Enter a line: \"); //prompt user\nString line=br.readLine(); //read line\nSystem.out.println(\"You entered: \"+line); //display line\n}\n}",
        "screenshot": "assets/screenshots/io-practical-2.png"
      },
      {
        "number": 3,
        "title": "Enter Integer",
        "question": "Read an integer from user input.",
        "code": "package inputoutput; //declare package\nimport java.io.*; //import input output classes\npublic class Practical3{\npublic static void main(String[] args) throws IOException{\nBufferedReader br=new BufferedReader(new InputStreamReader(System.in)); //create reader\nSystem.out.print(\"Enter an integer: \"); //prompt user\nint n=Integer.parseInt(br.readLine()); //read integer\nSystem.out.println(\"Integer: \"+n); //display integer\n}\n}",
        "screenshot": "assets/screenshots/io-practical-3.png"
      },
      {
        "number": 4,
        "title": "Enter Float",
        "question": "Read a float value from user input.",
        "code": "package inputoutput; //declare package\nimport java.io.*; //import input output classes\npublic class Practical4{\npublic static void main(String[] args) throws IOException{\nBufferedReader br=new BufferedReader(new InputStreamReader(System.in)); //create reader\nSystem.out.print(\"Enter a float: \"); //prompt user\nfloat n=Float.parseFloat(br.readLine()); //read float\nSystem.out.println(\"Float: \"+n); //display float\n}\n}",
        "screenshot": "assets/screenshots/io-practical-4.png"
      },
      {
        "number": 5,
        "title": "Enter Double",
        "question": "Read a double value from user input.",
        "code": "package inputoutput; //declare package\nimport java.io.*; //import input output classes\npublic class Practical5{\npublic static void main(String[] args) throws IOException{\nBufferedReader br=new BufferedReader(new InputStreamReader(System.in)); //create reader\nSystem.out.print(\"Enter a double: \"); //prompt user\ndouble n=Double.parseDouble(br.readLine()); //read double\nSystem.out.println(\"Double: \"+n); //display double\n}\n}",
        "screenshot": "assets/screenshots/io-practical-5.png"
      },
      {
        "number": 6,
        "title": "Enter Boolean",
        "question": "Read a boolean value from user input.",
        "code": "package inputoutput; //declare package\nimport java.io.*; //import input output classes\npublic class Practical6{\npublic static void main(String[] args) throws IOException{\nBufferedReader br=new BufferedReader(new InputStreamReader(System.in)); //create reader\nSystem.out.print(\"Enter true or false: \"); //prompt user\nboolean b=Boolean.parseBoolean(br.readLine()); //read boolean\nSystem.out.println(\"Boolean: \"+b); //display boolean\n}\n}",
        "screenshot": "assets/screenshots/io-practical-6.png"
      },
      {
        "number": 7,
        "title": "Enter Short",
        "question": "Read a short integer from user input.",
        "code": "package inputoutput; //declare package\nimport java.io.*; //import input output classes\npublic class Practical7{\npublic static void main(String[] args) throws IOException{\nBufferedReader br=new BufferedReader(new InputStreamReader(System.in)); //create reader\nSystem.out.print(\"Enter a short integer: \"); //prompt user\nshort n=Short.parseShort(br.readLine()); //read short integer\nSystem.out.println(\"Short Integer: \"+n); //display value\n}\n}",
        "screenshot": "assets/screenshots/io-practical-7.png"
      },
      {
        "number": 8,
        "title": "Enter Long",
        "question": "Read a long integer from user input.",
        "code": "package inputoutput; //declare package\nimport java.io.*; //import input output classes\npublic class Practical8{\npublic static void main(String[] args) throws IOException{\nBufferedReader br=new BufferedReader(new InputStreamReader(System.in)); //create reader\nSystem.out.print(\"Enter a long integer: \"); //prompt user\nlong n=Long.parseLong(br.readLine()); //read long integer\nSystem.out.println(\"Long Integer: \"+n); //display value\n}\n}",
        "screenshot": "assets/screenshots/io-practical-8.png"
      },
      {
        "number": 9,
        "title": "Read Characters from File",
        "question": "Read characters from a file and count them.",
        "code": "package inputoutput; //declare package\nimport java.io.*; //import file handling classes\npublic class Practical9{\npublic static void main(String[] args) throws IOException{\nFileReader fr=new FileReader(\"input.txt\"); //open file\nint ch; //declare character variable\nwhile((ch=fr.read())!=-1){System.out.print((char)ch);} //read and display characters\nfr.close(); //close file\n}\n",
        "screenshot": "assets/screenshots/io-practical-9.png"
      },
      {
        "number": 10,
        "title": "Read words and count lines, words, characters",
        "question": "Read a file and count lines, words, and characters.",
        "code": "package inputoutput; //declare package\nimport java.io.*; //import file handling classes\npublic class Practical10{\npublic static void main(String[] args) throws IOException{\nBufferedReader br=new BufferedReader(new FileReader(\"input.txt\")); //open file\nint lines=0,words=0,characters=0; //initialize counters\nString line; //declare line variable\nwhile((line=br.readLine())!=null){\nlines++; //count lines\ncharacters+=line.length(); //count characters excluding newline characters\nString trimmed=line.trim(); //remove surrounding spaces\nif(!trimmed.isEmpty()){words+=trimmed.split(\"\\\\s+\").length;} //count words\n}\nbr.close(); //close file\nSystem.out.println(\"Lines: \"+lines); //display line count\nSystem.out.println(\"Words: \"+words); //display word count\nSystem.out.println(\"Characters: \"+characters); //display character count\n}\n}",
        "screenshot": "assets/screenshots/io-practical-10.png"
      }
    ]
  },
  {
    "id": "multithreading",
    "name": "Multithreading",
    "icon": "🧵",
    "color": "yellow",
    "description": "Thread, Runnable, priorities and synchronization.",
    "practicals": [
      {
        "number": 1,
        "title": "Create a Thread",
        "question": "Create a thread by extending Thread.",
        "code": "package multithreading; //declare package\npublic class Practical1 extends Thread{\npublic void run(){System.out.println(\"Hello World\");} //thread task\npublic static void main(String[] args){\nPractical1 t=new Practical1(); //create thread object\nt.start(); //start thread\n}\n}",
        "screenshot": "assets/screenshots/multithread-practical-1.png"
      },
      {
        "number": 2,
        "title": "Multiple Threads",
        "question": "Create multiple threads by extending Thread.",
        "code": "package multithreading; //declare package\npublic class Practical2{\npublic static void main(String[] args) throws InterruptedException{\nclass MyThread extends Thread{\nString message; //store thread message\nMyThread(String m){message=m;} //initialize message\npublic void run(){System.out.println(message);} //thread task\n}\npublic class Practical2{\npublic static void main(String[] args){\nMyThread t1=new MyThread(\"First thread\"); //create first thread\nMyThread t2=new MyThread(\"Second thread\"); //create second thread\nt1.start(); //start first thread\nt2.start(); //start second thread\n}\n}\n}\n}",
        "screenshot": "assets/screenshots/multithread-practical-2.png"
      },
      {
        "number": 3,
        "title": "Runnable Interface",
        "question": "Create a thread by implementing Runnable.",
        "code": "package multithreading; //declare package\npublic class Practical3{\npublic static void main(String[] args) throws InterruptedException{\nclass MyTask implements Runnable{\npublic void run(){System.out.println(\"Runnable thread running\");} //thread task\n}\npublic class Practical3{\npublic static void main(String[] args){\nThread t=new Thread(new MyTask()); //create thread using Runnable\nt.start(); //start thread\n}\n}\n}\n}",
        "screenshot": "assets/screenshots/multithread-practical-3.png"
      },
      {
        "number": 4,
        "title": "Thread Priorities",
        "question": "Set thread names and priorities.",
        "code": "package multithreading; //declare package\npublic class Practical4{\npublic static void main(String[] args) throws InterruptedException{\nThread t1=new Thread(()->System.out.println(Thread.currentThread().getName())); //create thread\nThread t2=new Thread(()->System.out.println(Thread.currentThread().getName())); //create thread\nt1.setName(\"FirstThread\"); //set first name\nt2.setName(\"SecondThread\"); //set second name\nt1.setPriority(Thread.MIN_PRIORITY); //set minimum priority\nt2.setPriority(Thread.MAX_PRIORITY); //set maximum priority\nt1.start(); //start first thread\nt2.start(); //start second thread\n}\n}",
        "screenshot": "assets/screenshots/multithread-practical-4.png"
      },
      {
        "number": 5,
        "title": "Synchronized Method",
        "question": "Demonstrate synchronization with two threads.",
        "code": "package multithreading; //declare package\npublic class Practical5{\npublic static void main(String[] args) throws InterruptedException{\nclass Counter{\nint count=0; //shared counter\nsynchronized void increment(){count++;} //synchronized increment\n}\npublic class Practical5{\npublic static void main(String[] args) throws InterruptedException{\nCounter c=new Counter(); //create shared counter\nThread t1=new Thread(()->{for(int i=0;i<1000;i++)c.increment();}); //first task\nThread t2=new Thread(()->{for(int i=0;i<1000;i++)c.increment();}); //second task\nt1.start();t2.start(); //start threads\nt1.join();t2.join(); //wait for completion\nSystem.out.println(\"Count: \"+c.count); //display final count\n}\n}\n}\n}",
        "screenshot": "assets/screenshots/multithread-practical-5.png"
      },
      {
        "number": 6,
        "title": "Thread Sleep",
        "question": "Pause a thread using sleep().",
        "code": "package multithreading; //declare package\npublic class Practical6{\npublic static void main(String[] args){\nObject lock=new Object(); //create shared lock object\nThread t1=new Thread(()->{synchronized(lock){try{System.out.println(\"Thread 1 is waiting\");lock.wait();System.out.println(\"Thread 1 resumed\");}catch(InterruptedException e){System.out.println(e);}}}); //wait for notification\nThread t2=new Thread(()->{try{Thread.sleep(1000);synchronized(lock){System.out.println(\"Thread 2 sends notification\");lock.notify();}}catch(InterruptedException e){System.out.println(e);}}); //sleep and notify\n t1.start(); //start waiting thread\nt2.start(); //start notifying thread\n}\n}",
        "screenshot": "assets/screenshots/multithread-practical-6.png"
      },
      {
        "number": 7,
        "title": "Thread Join",
        "question": "Demonstrate thread join() method.",
        "code": "package multithreading; //declare package\npublic class Practical7 extends Thread{\npublic void run(){for(int i=1;i<=3;i++){System.out.println(getName()+\": \"+i);Thread.yield();}} //display values and yield execution\npublic static void main(String[] args) throws InterruptedException{\nPractical7 t1=new Practical7(); //create first thread\nPractical7 t2=new Practical7(); //create second thread\nt1.setName(\"Thread 1\"); //set first thread name\nt2.setName(\"Thread 2\"); //set second thread name\nt1.start(); //start first thread\nt1.join(); //wait for first thread to finish\nt2.start(); //start second thread after first finishes\n}\n}",
        "screenshot": "assets/screenshots/multithread-practical-7.png"
      }
    ]
  },
  {
    "id": "matrices",
    "name": "Multidimensional Arrays",
    "icon": "▦",
    "color": "blue",
    "description": "Matrix display, addition, multiplication, subtraction and transpose.",
    "practicals": [
      {
        "number": 1,
        "title": "Display a Matrix",
        "question": "Enter-style example to display a two-dimensional array.",
        "code": "package arrays; //declare package\npublic class Practical1{\npublic static void main(String[] args){\nint a[][]={{1,2},{3,4}}; //declare matrix\nfor(int i=0;i<a.length;i++){\nfor(int j=0;j<a[i].length;j++) System.out.print(a[i][j]+\" \"); //display row values\nSystem.out.println(); //move to next row\n}\n}\n}",
        "screenshot": "assets/screenshots/multi-practical-1.png"
      },
      {
        "number": 2,
        "title": "Add Two Matrices",
        "question": "Add two matrices.",
        "code": "package arrays; //declare package\npublic class Practical2{\npublic static void main(String[] args){\nint a[][]={{1,2},{3,4}}; //first matrix\nint b[][]={{5,6},{7,8}}; //second matrix\nint c[][]=new int[2][2]; //result matrix\nfor(int i=0;i<2;i++) for(int j=0;j<2;j++) c[i][j]=a[i][j]+b[i][j]; //add elements\nfor(int i=0;i<2;i++){for(int j=0;j<2;j++) System.out.print(c[i][j]+\" \");System.out.println();} //display result\n}\n}",
        "screenshot": "assets/screenshots/multi-practical-2.png"
      },
      {
        "number": 3,
        "title": "Multiply Two Matrices",
        "question": "Multiply two matrices.",
        "code": "package arrays; //declare package\npublic class Practical3{\npublic static void main(String[] args){\nint a[][]={{1,2},{3,4}}; //first matrix\nint b[][]={{5,6},{7,8}}; //second matrix\nint c[][]=new int[2][2]; //result matrix\nfor(int i=0;i<2;i++) for(int j=0;j<2;j++) for(int k=0;k<2;k++) c[i][j]+=a[i][k]*b[k][j]; //multiply matrices\nfor(int i=0;i<2;i++){for(int j=0;j<2;j++) System.out.print(c[i][j]+\" \");System.out.println();} //display result\n}\n}",
        "screenshot": "assets/screenshots/multi-practical-3.png"
      },
      {
        "number": 4,
        "title": "Subtract Two Matrices",
        "question": "Subtract one matrix from another.",
        "code": "package arrays; //declare package\npublic class Practical4{\npublic static void main(String[] args){\nint a[][]={{8,7},{6,5}}; //first matrix\nint b[][]={{1,2},{3,4}}; //second matrix\nint c[][]=new int[2][2]; //result matrix\nfor(int i=0;i<2;i++) for(int j=0;j<2;j++) c[i][j]=a[i][j]-b[i][j]; //subtract elements\nfor(int i=0;i<2;i++){for(int j=0;j<2;j++) System.out.print(c[i][j]+\" \");System.out.println();} //display result\n}\n}",
        "screenshot": "assets/screenshots/multi-practical-4.png"
      },
      {
        "number": 5,
        "title": "Transpose a Matrix",
        "question": "Find the transpose of a matrix.",
        "code": "package arrays; //declare package\npublic class Practical5{\npublic static void main(String[] args){\nint a[][]={{1,2,3},{4,5,6}}; //declare matrix\nfor(int j=0;j<a[0].length;j++){\nfor(int i=0;i<a.length;i++) System.out.print(a[i][j]+\" \"); //display transposed row\nSystem.out.println(); //move to next row\n}\n}\n}",
        "screenshot": "assets/screenshots/multi-practical-5.png"
      }
    ]
  }
];
