function average(numbers_list) {
    var sum = 0;//numbers_list.length + 1;
    for (var i = 0; i < numbers_list.length; i++) 
	{
        sum += numbers_list[i];
    }
    var average = sum/numbers_list.length ;// sum;
    return average ;//+ 2;
}

function assignGrade(grade) 
{
    if (grade < 60) 
	{
        return 'F';
    } 
	
    else if(grade >= 70 && grade < 80) {
        return 'C';
    }
    else if(grade > 80 && grade < 90) {
        return 'B';
    }
    else if(grade > 90) {
        return 'A';
    }
	else if(grade) 
	{
        return 'D';
    }
}

function pluralize(num, noun) {
    if(num === 1) {
        return num + " " + noun ;
    } else
        return num + " " + noun + "s";
}

function longestWord(sentence) 
{
    var splitSentence = sentence.split(" ");
    var currLongestWord = " ";
    var currLongestLength=0;
    for (var i = 0; i <splitSentence.length; i++) 
	{
        var tempLength = splitSentence[i].length;
        if(tempLength > currLongestLength) 
		{
            currLongestLength=tempLength;
            currLongestWord = splitSentence[i];
        }
    }
    return currLongestWord;
}


function isPalindrome(string) 
{
  if(string.length <= 1) 
    return true;
  
  if(string.charAt(0) != string.charAt(string.length - 1))
    return false; 
  
  return isPalindrome( string.substr(1, string.length - 2) );
}

function palindrome(word) 
{
    // if (palindrome)
    //     return 'yes'
    // else 
    //     return 'no'
	
	if(isPalindrome(word))
	{
		return 'yes';
	}
	
	else	
		return 'no';
	
}

function letterCounter(phrase, letter)
 {
    var currCount=0;
    for(var i = 0; i < phrase.length; i++) 
	{
        if(phrase[i] === letter)
            currCount++;
    }
    return currCount;
}

function longestPalindrome(sentence) 
{
    // if (longest word in sentence is a palindrome) {
    //     return longest + " is a palindrome";
    // }
    // else {
    //     return longest + " is not a palindrome";
    // }
	
	if(isPalindrome(longestWord(sentence)))
	{
		return longestWord(sentence) + " is a palindrome";
	}
	else
	{
		return longestWord(sentence) + " is not a palindrome";
	}
}

function Anagrams (sentence1, sentence2) 
{
	var passed=1;
	
	for(var i=0; i<sentence1.length;i++)
	{
		if(passed==1)
		{
			var found=0;
			for(var j=0; j<sentence2.length;j++)
			{
				if(sentence1[i]==sentence2[j])
				{
					found=1;
				}
			}
			
			if(found==0)
			{
				passed=0;
			}
		}
	}
	
	return passed;
}

function areAnagrams(sentence1,sentence2)
{
	var Test1one=Anagrams(sentence1, sentence2);
	var Testtwo=Anagrams(sentence2, sentence1);
	
	if(Test1one==1 && Testtwo==1)
	{
		return 'yes';
	}
	
	else 
	{
		return 'no'
	}
}