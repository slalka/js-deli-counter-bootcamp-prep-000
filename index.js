var katzDeli = []
function takeANumber(l,n){
  l.push(n);
  return `Welcome, ${n}. You are number ${l.length} in line.`;
}
function nowServing(l){
  if(!l.length) return 'There is nobody waiting to be served!';
  return `Currently serving ${l.shift()}.`;
}
function currentLine(l){
  if(!l.length) return "The line is currently empty.";

}
