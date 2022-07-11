// Automatic Update
setInterval( () => {

    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
    let ampm = document.getElementById('ampm')

    let hh = document.getElementById('hh')
    let mm = document.getElementById('mm')
    let ss = document.getElementById('ss')

    let hr_dot = document.querySelector('.hr_dot')
    let min_dot = document.querySelector('.min_dot')
    let sec_dot = document.querySelector('.sec_dot')

    // This gets local browser / OS time  [ not net based synched time ]
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let am = (h >= 12)? 'PM': 'AM'

    // Converting 24 hr clock to 12 hr clock format
    h = (h > 12)? (h - 12): h
    if(h < 10) h = '0' + h
    if(m < 10) m = '0' + m
    if(s < 10) s = '0' + s


    hours.innerHTML = h + '<br><span>HOURS</span>'
    minutes.innerHTML = m + '<br><span>MINUTES</span>'
    seconds.innerHTML = s + '<br><span>SECONDS</span>'
    ampm.innerHTML = am

    // Circular SVG Graphics
    hh.style.strokeDashoffset = 440 - (440 * h) / 12  // 12 hours
    mm.style.strokeDashoffset = 440 - (440 * m) / 60  // 60 minutes
    ss.style.strokeDashoffset = 440 - (440 * s) / 60  // 60 seconds

    //Dots - Use backtick for variable replacement
    hr_dot.style.transform = `rotate(${h * 30}deg)`  //   360 / 12 = 30
    min_dot.style.transform = `rotate(${m * 6}deg)`  //   360 / 60 = 30
    sec_dot.style.transform = `rotate(${s * 6}deg)`  //   360 / 60 = 30
    
})
