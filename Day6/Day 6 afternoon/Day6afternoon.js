// Return 'yes' if the sentence contains only unique characters, 'no' otherwise
function allUniqueCharacters(sentence) 
{
  var repetition=0;
  for(var i=0;i<sentence.length;i++)
  {		
	if(sentence[i]!==" ")
	{
		var count=0;
		for(var j=0;j<sentence.length;j++)
		{
			if(sentence[i]==sentence[j])
			{
				count++;
			}
		}
		
		if(count>1)
		{
			repetition=1;
		}
	}
  }
  
	  if(repetition==1)
	  {
			return 'no';
	  }
	  else
	  {
			return 'yes';
	  }
  
}

// One number 1-10 is missing. Return it!
function missingNum(numbers) 
{
	
	
	for(var i=1;i<11;i++)
	{
		var found=0;
		for(var j=0;j<numbers.length;j++)
		{
			if(i==numbers[j])
			{
				found=1;
			}
		}
		
		if(found==0)
			return i;
	}
}

// Return 'yes' if array1 and array2 are rotated versions of each other, 'no' otherwise
// e.g. [1,2,3,6,7,8] and [3,6,7,8,1,2] are rotated versions of each other
function areRotatedVersions(array1, array2) 
{
	for(var i=0;i<array1.length;i++)
	{
		var found=0;
		for(var j=0;j<array2.length;j++)
		{
			if(array1[i]==array2[j])
			{
				found=1;
			}
		}
		
		if(found==0)
		{
			return 'no';
		}
	}
	
	return 'yes';
}

// Return a string of the first n prime numbers, separated by commas
// e.g. "1,2,3,4"
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
function nPrimeNums(n) 
{
	var answer="";
	var found=0;
	var i=1;
	while(found<n)
	{
		if(isPrime(i))
		{
			found++;
			
			if(answer.length==0)
				answer+=i;
			else
				answer+=","+i;
				
			
		}
		i++;
	}
	
	return answer;
}



// Return the output of running the function f twice
// e.g. doitTwice(function f() {return 1;}) === 2
function doItTwice(f) 
{
	return (f()+f());
}

// Return an object that has the properties: first name, last name, age, email, and favorite color
function objectFun(first, last, age, email, color) 
{	
	this.first_name=first;
	this.last_name=last;
	this.age=age;
	this.email=email;
	this.fav_color=color;
		
    var person = 
	{
		first_name,
		last_name,
		age,
		email,
		fav_color,
    };
    return person;
}

// Return the number of "children" obj has
function numChildren(obj) 
{

	return obj.children.length;

}

function greeting(name) 
{
    return "Hello, " + name + "!";
}

// Say hello! This function takes a function as a parameter (greet should be a function)
function sayHello(first, last, greet) 
{
	var name=first+" "+last;
	return greet(name);
}