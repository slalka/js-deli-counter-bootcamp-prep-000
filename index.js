var katzDeli = []
function takeANumber(l,n){
  l.push(n);
  return `Welcome, ${n}. You are number ${l.length} in line.`;
}
function nowServing(l){
  return l.shift();
}
