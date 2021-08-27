//UC1--Asynchronous nature of Javascript
function showTime()
{
    const date=new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() + "Minutes:" + date.getMilliseconds() + "MilliSeconds:";
}

function showSessionExpire()
{
    console.log("Activity B: Your session expired at "+showTime());
}
console.log("Activity A: Triggering Activity-B at "+showTime());
setTimeout(showSessionExpire,10000);
console.log("Activity A: Triggering Activity-B at "+showTime() +"will execute after 10 Seconds");
