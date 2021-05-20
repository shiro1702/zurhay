
exports.getYYYYMM = function(amountMM = 0, date = new Date(), separatorYYYYMM = '-' ) {
  let d = new Date(date);
  if (amountMM) {
    d.setMonth(d.getMonth() + amountMM)
  } 
  let month = d.getMonth() + 1;
  month = month>9?''+month: '0'+month
  return '' + d.getFullYear() + separatorYYYYMM + month;
}

exports.getYYYYMMDD = function(amountDD = 0, date = new Date(), separatorYYYYMM = '-', separatorMMDD = '-') {
  
  let d = new Date(date);
  if (amountDD) {
    d.setDate(d.getDate() + amountDD)
  } 
  let month  = d.getMonth() + 1;
  month = month>9?''+month: '0'+month
  let day = d.getDate();
  day = day>9?day:'0'+day;
  return '' + d.getFullYear() + separatorYYYYMM + month + separatorMMDD + day;
}