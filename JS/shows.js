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
        tixBtnLink.setAttribute("href", "https://www1.ticketmaster.ca/walk-off-the-earth-toronto-ontario-02-15-2019/event/1000554AB8084DEF?site=10085&pageType=178230&nativePromo=3211&slot=1&campaign=732286&flight=7410029&nativeId=7769792&artistid=1692033&majorcatid=10001&minorcatid=1");
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

   // data.forEach(element => {
    //     console.log(element.place);
    // });

//function that categorizes parts of the shows data, creates empty html elements for it and places each data type into its allocated container; also, adds class names so that css styling is applied
// function commentDisplay(data) {
    // for (let i = 0; i <= commentDisplay.length; i++) {
    //     let userComments = document.getElementById('userComments');
    //     // below creates a div that is a child of userComments but a parent to the 2 spans and a p elements.
    //     //  < !--parent - child-- >
    //     let commentDiv = document.createElement('div');
    //     // children of the CommentDiv
    //     let commentSpan = document.createElement('span');
    //     let commentDate = document.createElement('span');
    //     let commentP = document.createElement('p');
    //     // below appends children to the parent containers
    //     // userComments.appendChild(commentDiv);
    //     commentDiv.appendChild(commentSpan);
    //     commentDiv.appendChild(commentDate);
    //     commentDiv.appendChild(commentP);
    //     // below adds class namdes to the created p and span elements
    //     commentDiv.classList.add('userComments2');
    //     commentSpan.classList.add("commentSpan");
    //     commentDate.classList.add("commentDate");
    //     commentP.classList.add("commentP");
    //     // takes information collected by the below function from the input fields and fills the empty elements
    //     commentSpan.innerHTML = data[i].name;
    //     commentDate.innerHTML = "LALALA";
    //     commentP.innerHTML = data[i].comment;
    // }
// };

//function that grabs data types (show date, place and location) from fetched data array and creates a new object
//function addComment() {
    // event.preventDefault();
    // document.getElementById("inputForm").reset();
    // let userName = document.querySelector('input[name=userName]').value;
    // let uComment = document.querySelector('input[name=userComment]').value;

    // let showDate = document.getElementById;
    // let showPlace = document.getElementById;
    // let showLocation = document.getElementById;

    // let newComment = {
    //     date: userName,
    //     place: "timeAgo",
    //     location: uComment
    // }

// caller of the function that displays comments on the page (lines 21-31)
//     commentDisplay(newComment);
// };