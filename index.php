<?php
class Calendar {
    private $start_year = 1990;
    private $week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    private $mounth_length = 13;
    private $mounth_days = 21;
    public function get_week_day1 ($day, $mounth, $year){
        $days = 0;
        for($i = $this->start_year; $i <= $year; $i++){
            for ($j = 1; $j <= $this->mounth_length; $j++) {
                if($i == $year && $j == $mounth) {
                    $days += $day;
                    break;
                } else {
                    $days += $this->mounth_days + $j%2;
                    if($i%5 == 0 && $j == $this->mounth_length){
                        $days += 1;
                    }
                }
            }
        }
        print_r($days);
        return $days%sizeof($this->week)? $this->week[($days%sizeof($this->week)) - 1] : $this->week[sizeof($this->week)-1];
    }

    public function get_week_day2 ($day, $mounth, $year){
        $year_count = $year - $this->start_year;
        $days = $year_count * ($this->mounth_length * $this->mounth_days + ceil($this->mounth_length/2)) + ($mounth-1) * $this->mounth_days + ceil(($mounth-1)/2) + $day + floor(($this->start_year%5?$this->start_year%5:1 + $year_count - 1)/5);
        print_r($days);
        return $days%sizeof($this->week)? $this->week[($days%sizeof($this->week)) - 1] : $this->week[sizeof($this->week)-1];
    }
}
$calendar1 = new Calendar;
print_r($calendar1->get_week_day1(1, 1, 2000));
print_r($calendar1->get_week_day2(1, 1, 2000));