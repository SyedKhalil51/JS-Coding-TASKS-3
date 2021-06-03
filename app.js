//2. Problem Name: AssignmentOperators:
// What will happen if:  x=3; x+1; x+=3;

var x = 3;
console.log(x);
x=x+1;
console.log(x);
x+=3;
console.log(x);

//  3. Problem Name: LogicalOperators:
// 5>4 && 2<5 AND Operator 


if(5>4 && 2<5)
{
  console.log("Both conditions are true and the answer is true True");
}
else
{
  console.log("One of the given Condition is false so the ans is False.")
}

// 2==9 || 2==2 OR Operator 
if(2==9 || 2==2)
{
  console.log("If One of the condition is true, the answer is true");
}
else
{
  console.log("Both Condition are false so the ans is False.")
}


// !(!(4>2)) NOT operator
if (!(4>2))
{
  console.log("If One of the condition is true, the answer is true");
}
else
{
  console.log("Both Condition are false so the ans is False.")
}

//4. Problem Name: LogicalOperators-RocketExample 

var is_Rain = prompt("Enter Value in true or false ?");
var is_Snow = prompt("Enter Value in true or false ? ");
var is_Speed = prompt("Enter Value in no");

if(is_Rain=="True" && is_Snow == "True" && is_Speed<20)
{
  console.log("Rocket is Launching");
}
elseif(is_Rain=="False" && is_Snow == "False" && is_Speed>20)
{
  console.log("Rocket is Not Launching");
}

// 5. Problem Name: IfElseCondition
var marks = prompt("Enter Your Marks");
if(marks>=50)
{
  console.log("Pass");

}
else
{
  console.log("Fail");
}

//6. Problem Name: SwitchCase:

var student_marks = prompt("Enter Your Marks");
switch (student_marks)
{
case (student_marks >= 85):
console.log("A");
break;
case (student_marks >= 80):
console.log("A-");
break;

case (student_marks >= 70):
console.log("B");
break;

case (student_marks >= 60):
console.log("C");
break;

case (student_marks >= 40):
console.log("D");
break;

case (student_marks <= 40):
console.log("E");
break;

case (student_marks <= 35):
console.log("F");
break;

default:
console.log("You Have Entered Wrong percentage");
}
