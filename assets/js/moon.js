export const phases = ['moon-new', 'moon-waning-crescent', 'moon-last-quarter', 'moon-waning-gibbous', 'moon-full', 'moon-waxing-gibbous', 'moon-first-quarter', 'moon-waxing-crescent'];

export function getMoonPhase(date) {
    date = new Date(date);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hours = date.getTimezoneOffset()/60;

    let c = 0, e = 0, jd = 0, b = 0;

    if (month < 3) {
      year--;
      month += 12;
    }

    ++month;
    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + day + hours/24 - 694039.09; // jd is total days elapsed
    jd /= 29.5305882; // divide by the moon cycle
    b = parseInt(jd); // int(jd) -> b, take integer part of jd
    jd -= b; // subtract integer part to leave fractional part of original jd
    b = Math.round(jd * 8); // scale fraction from 0-8 and round

    if (b >= 8) b = 0; // 0 and 8 are the same so turn 8 into 0
    
    return {phase: b, name: phases[b], moonDate: Math.ceil(jd * 29.5305882) };
};