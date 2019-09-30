//EXERCISE: Convert a number into hours, minutes, and seconds

function humanReadable(seconds) {
  if (seconds >= 0) {
    let hh = (seconds - (seconds % (60 * 60))) / 60 / 60;
    let ss = (seconds % (60 * 60)) % 60;
    let mm = ((seconds % (60 * 60)) - ss)/60;
    ss = ss > 9 ? ss : `0${ss.toString()}`;
    mm = mm > 9 ? mm : `0${mm.toString()}`;
    hh = hh > 9 ? hh : `0${hh.toString()}`;
    return `${hh}:${mm}:${ss}`;
  } else return `no valid`;
}

console.log(humanReadable(45296));
