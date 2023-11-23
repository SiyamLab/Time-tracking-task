var data = [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7
        },
        weekly: {
          current: 32,
          previous: 36
        },
        monthly: {
          current: 103,
          previous: 128
        }
      }
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2
        },
        weekly: {
          current: 10,
          previous: 8
        },
        monthly: {
          current: 23,
          previous: 29
        }
      }
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 7
        },
        monthly: {
          current: 13,
          previous: 19
        }
      }
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 5
        },
        monthly: {
          current: 11,
          previous: 18
        }
      }
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3
        },
        weekly: {
          current: 5,
          previous: 10
        },
        monthly: {
          current: 21,
          previous: 23
        }
      }
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 2,
          previous: 2
        },
        monthly: {
          current: 7,
          previous: 11
        }
      }
    }
  ]

  function DailyPeriod(){
    document.getElementById('hrs1').innerHTML = data[0].timeframes.daily.current + "hrs"
    document.getElementById('previoushrs1').innerHTML = "Last Week - " + data[0].timeframes.daily.previous + "hrs"
    document.getElementById('hrs2').innerHTML = data[1].timeframes.daily.current + "hrs"
    document.getElementById('previoushrs2').innerHTML = "Last Week - " + data[1].timeframes.daily.previous + "hrs"
    document.getElementById('hrs3').innerHTML = data[2].timeframes.daily.current + "hrs"
    document.getElementById('previoushrs3').innerHTML = "Last Week - " + data[2].timeframes.daily.previous + "hrs"
    document.getElementById('hrs4').innerHTML = data[3].timeframes.daily.current + "hrs"
    document.getElementById('previoushrs4').innerHTML = "Last Week - " + data[3].timeframes.daily.previous + "hrs"
    document.getElementById('hrs5').innerHTML = data[4].timeframes.daily.current + "hrs"
    document.getElementById('previoushrs5').innerHTML = "Last Week - " + data[4].timeframes.daily.previous + "hrs"
    document.getElementById('hrs6').innerHTML = data[5].timeframes.daily.current + "hrs"
    document.getElementById('previoushrs6').innerHTML = "Last Week - " + data[5].timeframes.daily.previous + "hrs"

    // document.getElementsByClassName('button').style.color = "orange"
  }
  function WeeklyPeriod(){
    document.getElementById('hrs1').innerHTML = data[0].timeframes.weekly.current + "hrs"
    document.getElementById('previoushrs1').innerHTML = "Last Week - " + data[0].timeframes.weekly.previous + "hrs"
    document.getElementById('hrs2').innerHTML = data[1].timeframes.weekly.current + "hrs"
    document.getElementById('previoushrs2').innerHTML = "Last Week - " + data[1].timeframes.weekly.previous + "hrs"
    document.getElementById('hrs3').innerHTML = data[2].timeframes.weekly.current + "hrs"
    document.getElementById('previoushrs3').innerHTML = "Last Week - " + data[2].timeframes.weekly.previous + "hrs"
    document.getElementById('hrs4').innerHTML = data[3].timeframes.weekly.current + "hrs"
    document.getElementById('previoushrs4').innerHTML = "Last Week - " + data[3].timeframes.weekly.previous + "hrs"
    document.getElementById('hrs5').innerHTML = data[4].timeframes.weekly.current + "hrs"
    document.getElementById('previoushrs5').innerHTML = "Last Week - " + data[4].timeframes.weekly.previous + "hrs"
    document.getElementById('hrs6').innerHTML = data[5].timeframes.weekly.current + "hrs"
    document.getElementById('previoushrs6').innerHTML = "Last Week - " + data[5].timeframes.weekly.previous + "hrs"

  }
  function MonthlyPeriod(){
    document.getElementById('hrs1').innerHTML = data[0].timeframes.monthly.current + "hrs"
    document.getElementById('previoushrs1').innerHTML = "Last Week - " + data[0].timeframes.monthly.previous + "hrs"
    document.getElementById('hrs2').innerHTML = data[1].timeframes.monthly.current + "hrs"
    document.getElementById('previoushrs2').innerHTML = "Last Week - " + data[1].timeframes.monthly.previous + "hrs"
    document.getElementById('hrs3').innerHTML = data[2].timeframes.monthly.current + "hrs"
    document.getElementById('previoushrs3').innerHTML = "Last Week - " + data[2].timeframes.monthly.previous + "hrs"
    document.getElementById('hrs4').innerHTML = data[3].timeframes.monthly.current + "hrs"
    document.getElementById('previoushrs4').innerHTML = "Last Week - " + data[3].timeframes.monthly.previous + "hrs"
    document.getElementById('hrs5').innerHTML = data[4].timeframes.monthly.current + "hrs"
    document.getElementById('previoushrs5').innerHTML = "Last Week - " + data[4].timeframes.monthly.previous + "hrs"
    document.getElementById('hrs6').innerHTML = data[5].timeframes.monthly.current + "hrs"
    document.getElementById('previoushrs6').innerHTML = "Last Week - " + data[5].timeframes.monthly.previous + "hrs"
  }
