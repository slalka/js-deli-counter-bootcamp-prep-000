var katzDeli = []
function takeANumber(l,n){
  l.push(n);
  return l.length;
}
function nowServing(l){
  return l.shift();
}