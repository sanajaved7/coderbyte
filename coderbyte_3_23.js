// Coding challenges I worked on in Javascript through Coderbyte.com

//For this challenge you will be determining the largest word in a string.
function LongestWord(sen) {
  var word_list = sen.split(" ");
  var max_length = 0;
  for (var i in word_list) {
    var word_len = word_list[i].length;
    //console.log(len);
    if (word_len > max_length) {
      king_word = word_list[i];
      max_length = word_len;
      console.log(king_word);
    }
  }
  // code goes here
  return sen;

}

//For this challenge you will be comparing two numbers and determining which one is greater.

function CheckNums(num1,num2) {
  if (num2 > num1) {
    return "true"; }
  else if (num2 == num1) {
    return "-1";}
  else {
    return "false"; }
}

//For this challenge you will be determining the difference in hours and minutes between two given times.
function TimeConvert(num) {
  var hour = (num/60);
    var minute = (num % 60);
    console.log(Math.floor(hour));
    console.log(minute);
    return Math.floor(hour)+":"+minute

}


/// Take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
function LetterCapitalize(str) {
 var words = str.split(" ");
 console.log(words);
 var new_string = "";
 for (i in words) {
  new_word = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  new_string = new_string + " " + new_word;
 }
 return new_string.trim();

}
