export function getYYYYMM(amountMM = 0, date = new Date(), separatorYYYYMM = '-' ){
  let d = new Date(date);
  if (isNaN(d.getTime())) {
    d = new Date(date+ 'T00:00:00');
  }
  // In case its IOS, parse the fulldate parts and re-create the date object.
  if(Number.isNaN(d.getMonth())) {
    let arr = fullDate.split(/[- :]/);
    d = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
  }
  if (amountMM) {
    d.setMonth(d.getMonth() + amountMM)
  } 
  let month = d.getMonth() + 1;
  month = month>9?''+month: '0'+month
  return '' + d.getFullYear() + separatorYYYYMM + month;
}

export function getYYYYMMDD(amountDD = 0, date = new Date(), separatorYYYYMM = '-', separatorMMDD = '-'){

  let d = new Date(date);  
  // In case its IOS, parse the fulldate parts and re-create the date object.
  if(Number.isNaN(d.getMonth())) {
    let arr = fullDate.split(/[- :]/);
    d = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
  }
  if (amountDD) {
    d.setDate(d.getDate() + amountDD)
  } 
  let month  = d.getMonth() + 1;
  month = month>9?''+month: '0'+month
  let day = d.getDate();
  day = day>9?day:'0'+day;
  return '' + d.getFullYear() + separatorYYYYMM + month + separatorMMDD + day;
}