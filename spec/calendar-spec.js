let calendar_funcs = require('../calendar');

describe('Calendar Functions',() => {
	it('Function 1: Should return the correct week day', () => {
		let week_day_1 = calendar_funcs.get_week_day1;
		let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		expect(week_day_1(1, 1, 2000, 1990, week, 13, 21)).toEqual('Tuesday');
	})

	it('Function 2: Should return the correct week day', () => {
		let week_day_2 = calendar_funcs.get_week_day1;
		let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		expect(week_day_2(1, 1, 2000, 1990, week, 13, 21)).toEqual('Tuesday');
	})
})