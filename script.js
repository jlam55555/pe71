function gcf(a, b) {
  while(a != b && a != NaN && b != NaN) {
    if(a > b)
      a %= b;
    else
      b %= a;
    console.log(a, b)
  }
  return a;
}


var ans = gcf(2, 3);
/*
var closest = 0;
var closestDistance = 3/7;
for(var d = 600000; d < 1e6; d++) {
  for(var n = Math.floor(d*3/7)-5; n < d*3/7; n++) {
    if(gcf(n, d) == 1) {
      if(3/7 - n/d < closestDistance) {
        closestDistance = 3/7 - n/d;
        closest = n;
      }
    }
  }
}

var ans = closest;
*/
