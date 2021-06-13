function covidDetails()
{
    var request=new XMLHttpRequest();
    var country=document.getElementById("country").value;
    let url = `https://api.covid19api.com/live/country/${country}`;
    request.open('GET',url,true);
    request.send()
    let table=document.createElement("TABLE")
    request.onload=function()
    {
        table.border="1"
        let row=table.insertRow(-1);
        let date=row.insertCell(-1);
        let active=row.insertCell(-1);
        let deaths=row.insertCell(-1);
        let province=row.insertCell(-1);
            date.innerHTML = "Date"
            active.innerHTML = "Active"
            deaths.innerHTML = "Deaths"
            province.innerHTML ="Province"
            let result = JSON.parse(this.response);
        result.forEach(day=> {
            let row= table.insertRow(-1);
            let date= row.insertCell(-1)
            let active= row.insertCell(-1)
            let deaths= row.insertCell(-1)
            let province= row.insertCell(-1)
                date.innerHTML=day.Date
                active.innerHTML=day.Active
                deaths.innerHTML=day.Deaths
                province.innerHTML=day.Province
        });
    }
    dispTable=document.getElementById("div")
    dispTable.append(table)
}