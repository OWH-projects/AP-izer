/*

Expects a number or a parsable string. Rounds off decimals, so keep that in mind.

Sample usage: 
toAp("4,333")
toAp(22)
toAp("$4,333")
toAp("33%")

*/
 
function toAp(num) {
 
  // handle strings and commas and parens and % and currency
    if (typeof(num) != "string") 
    { numstripped = parseInt(num) }
    else { 
        numstring = num.replace(/,|$|€|¥|%|(|)/g,'');
        numstripped = parseInt(numstring);
      };
  
  // format numbers under 10
  if (numstripped < 10) {
  var apnums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  return apnums[numstripped]
  }
  
  // format millions, billions, trillions
  else if (numstripped > 999999)
  {
    var striplength = numstripped.toString().length;
  
   if (striplength >= 7 && striplength <= 9)
    {return ((numstripped / 1000000).toFixed(2) + ' million').replace('.00','')}
   if (striplength >= 10 && striplength <= 12)
    {return ((numstripped / 1000000000).toFixed(2) + ' billion').replace('.00','')}
   if (striplength >= 13 && striplength <= 15)
    {return ((numstripped / 1000000000000).toFixed(2) + ' trillion').replace('.00','')}
        }
 
  // add thousand separators -> borrowed from Michelle Minkoff
  else if (999 > numstripped < 999999) 
  { numstripped += '';
  x = numstripped.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
       }
    return x1 + x2;
  }
  
  // otherwise, return the number
  else 
    { return numstripped }
  }
