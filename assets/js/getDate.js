export function getYYYYMM(amountMM, date = new Date(), separatorYYYYMM = '-' ){
  let d = new Date(date);
  if (amountMM) {
    d.setMonth(d.getMonth() + amountMM)
  } 
  let month = d.getMonth() + 1;
  month = month>9?''+month: '0'+month
  return '' + d.getFullYear() + separatorYYYYMM + month;
}

export function getYYYYMMDD(amountDD, date = new Date(), separatorYYYYMM = '-', separatorMMDD = '-'){

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