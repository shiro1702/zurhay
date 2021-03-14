export function getYYYYMM(amountMM, date = new Date()){
  let d = new Date(date);
  if (amountMM) {
    d.setMonth(d.getMonth() + amountMM)
  } 
  let month  = d.getMonth() + 1;
  month = month>9?''+month: '0'+month
  return '' + d.getFullYear() +'-'+ month;
}