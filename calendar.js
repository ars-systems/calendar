let start_year = 1990;
let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let mounth_length = 13;
let mounth_days = 21;
console.log(get_week_day1(1, 1, 2000, start_year, week, mounth_length, mounth_days));
console.log(get_week_day2(1, 1, 2000, start_year, week, mounth_length, mounth_days));

function get_week_day1 (day, mounth, year, start_year, week, mounth_length, mounth_days){
	let days = 0;
	for(let i = start_year; i <= year; i++){
		for (let  j = 1; j <= mounth_length; j++) {
			if(i == year && j == mounth) {
				days += day;
				break;
			} else {
				days += mounth_days + j%2;
				if(i%5 == 0 && j == mounth_length){
					days += 1;
				}
			}
		}
	}
	console.log(days)
	return days%week.length? week[(days%week.length) - 1] : week[week.length-1];
}

function get_week_day2 (day, mounth, year, start_year, week, mounth_length, mounth_days){
	let year_count = year - start_year;
	days = year_count * (mounth_length * mounth_days + Math.ceil(mounth_length/2)) + (mounth-1) * mounth_days + Math.ceil((mounth-1)/2) + day + Math.floor((start_year%5?start_year%5:1 + year_count - 1)/5);
	console.log(days)
	return days%week.length? week[(days%week.length) - 1] : week[week.length-1];
}

module.exports = {
	get_week_day1,
	get_week_day2
}