//fetch function - gets the shows data from a remote server and passes it to the function that pulls apart the data into categories
const register = "f83af9e3-a0ca-491a-89a6-19bc033c1de2";
let collectShowTimes = fetch("https://project-1-api.herokuapp.com/showdates?api_key=f83af9e3-a0ca-491a-89a6-19bc033c1de2");

collectShowTimes.then((response) => {
    return response.json();
}).then((data) => {
    // console.log(data);
    
    for (let i = 0; i < data.length; i++) {
        let showsTable = document.getElementById('showsTable');
        //  table row is created and appended to the table
        let showsTr = document.createElement('tr');
        showsTable.appendChild(showsTr);
        // 3 table cells per row are created and appended to the row
        let showsTd1 = document.createElement('td');
        showsTr.appendChild(showsTd1);
        let showsTd2 = document.createElement('td');
        showsTr.appendChild(showsTd2);
        let showsTd3 = document.createElement('td');
        showsTr.appendChild(showsTd3);
        //2 spans for first cell and one span for second cell are created and appended to each respective cell
        let dateSpan = document.createElement('span');
        let placeSpan = document.createElement('span');
        showsTd1.appendChild(dateSpan);
        showsTd1.appendChild(placeSpan);
        //a span for a second cell is created and appended
        let locationSpan = document.createElement('span');
        showsTd2.appendChild(locationSpan);
        //a link to ticket website is created and appended to the parent table cell
        let tixBtnLink = document.createElement('a');
        showsTd3.appendChild(tixBtnLink);
        tixBtnLink.setAttribute("href", "https://www1.ticketmaster.ca/");
        //a button element is created and inserted inside of the previously made <a> tag
        let getTixbtn = document.createElement('button');
        tixBtnLink.appendChild(getTixbtn);
        getTixbtn.classList.add('getTixBtn');
        //each created element is being populated with information from the above data that was fetched from a server
        dateSpan.innerHTML = data[i].date;
        placeSpan.innerHTML = data[i].place;
        locationSpan.innerHTML = data[i].place;
        getTixbtn.innerHTML = "Get tickets";
    }
});
