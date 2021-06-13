function fetchWeather()
{
    var request=new XMLHttpRequest();
    var city=document.getElementById("cid").value;
    console.log(city)
    var apiKey='e78c79129015af8503ace50b6cee953a'
    var url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
    request.open('GET',url,true);
    request.send()
    let table=document.createElement("TABLE")
    request.onload=function()
    {
        table.border="1"
        let row=table.insertRow(-1);
        let sno=row.insertCell(-1);
        let date=row.insertCell(-1);
        let time=row.insertCell(-1);
        let mintemp=row.insertCell(-1);
        let maxtemp=row.insertCell(-1);
            date.innerHTML = "Date"
            time.innerHTML = "Time"
            sno.innerHTML = "S.no"
            mintemp.innerHTML = "Min Temp"
            maxtemp.innerHTML = "Max temp"
            let result = JSON.parse(this.response);
        result.list.forEach(day=> {
            let date= day.dt_txt.split(" ");
            let row= table.insertRow(-1);
            let sno= row.insertCell(-1)
            let dateDisplay= row.insertCell(-1)
            let timeDisplay= row.insertCell(-1)
            let mintempdis = row.insertCell(-1)
            let maxtempdis= row.insertCell(-1)
            timeDisplay.innerHTML= date[1]
            sno.innerHTML=result.list.indexOf(day)+1
                dateDisplay.innerHTML=date[0]
                mintempdis.innerHTML=day.main.temp_min
                maxtempdis.innerHTML=day.main.temp_max
        });
    }
    dispTable=document.getElementById("div")
    dispTable.append(table)
}