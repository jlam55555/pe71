function isReduced(n, d) {
  while(n != d && n != 0 && d != 0) {
    if(n > d) {
      n %= d;
    } else {
      d %= n;
    }
  }
  return (n || d) == 1;
}

var closest = 0;
var closestDistance = 3/7;
for(var d = 1; d < 1e6; d++) {
  for(var n = Math.floor(3/7*d); n > 0; n--) {
    if(isReduced(n, d)) {
      if(closestDistance > 3/7 - n/d) {
        closestDistance = 3/7 - n/d;
        closest = n;
      }
      break;
    }
  }
}

var ans = n;
