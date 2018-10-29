// Current Date Script
let n = new Date();
let y = n.getFullYear();
let m = n.getMonth() + 1;
let d = n.getDate();
let calcDate = document.getElementById("date").innerHTML = m + "." + d + "." + y;
//Script Source: https://stackoverflow.com/questions/32540044/html-display-current-date/3254019
//------------------------------------------------------------------------------------------------------------------>

// Audio Play & Pause Script
let myAudio = document.getElementById("myAudio");
function togglePlay() {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
};
//Script Source: https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link
//------------------------------------------------------------------------------------------------------------------>

// Comments Input and Displaying Functions
//global variable declaration
let anyvar = [];

/* This function creates empty div, span and paragraph elements for user comments, appends class names and fills them with the information provided by the user through the form's input fields.
*/
function commentDisplay(data) {
    for (let i = 0; i < data.length; i++) {
        let currentComment = data[i];
        let userComments = document.getElementById('userComments');
        // below creates a div that is a child of userComments but a parent to the 2 spans and a p element
        //  < !--parent - child-- >
        let commentDiv = document.createElement('div');
        // children of the CommentDiv
        let commentSpan = document.createElement('span');
        let commentDate = document.createElement('span');
        let commentP = document.createElement('p');
        let commentLike = document.createElement('span');
        let likeCount = document.createElement('span');
        // below appends children to the parent containers
        userComments.appendChild(commentDiv);
        commentDiv.appendChild(commentSpan);
        commentDiv.appendChild(commentDate);
        commentDiv.appendChild(commentP);
        commentDiv.appendChild(commentLike);
        commentDiv.appendChild(likeCount);
        // below adds class namdes to the created p and span elements
        commentDiv.classList.add('userComments2');
        commentSpan.classList.add("commentSpan");
        commentDate.classList.add("commentDate");
        commentP.classList.add("commentP");
        likeCount.classList.add("likeCount");
        // takes information collected by the below function from the input fields and fills the empty elements
        commentSpan.innerHTML = currentComment.name;
        // timeSince(currentComment.timestamp);
        commentDate.innerHTML = timeSince(currentComment.timestamp);
        commentP.innerHTML = currentComment.comment;
        //below inserts 'heart' icon to represent likes
        commentLike.innerHTML = '<i class="fas fa-heart"></i>';
        likeCount.innerHTML = "0";
        //adds onclick event listener onto the "like" button and ties "likes" count with the onclick event
        //on the "like" button
        commentLike.addEventListener("click", function () {
            commentLike.innerHTML = '<i class="fas fa-heart" style="color:red"></i>';
            likeCount.innerHTML = myFunction(clicks);
            // clicks = likeCount.innerHTML; --> increases likes count beyond one but summarizes all comments'
            //likes into one total, does not keep the likes for each comment separately;   
        });
        //Source: https://stackoverflow.com/questions/20499920/how-to-toggle-the-innerhtml-of-element-on-click
    }
};

//click function that increments likes' count
let clicks = 0;
function myFunction(clicks) {
    clicks ++;   
    return clicks;
}
//Source: https://stackoverflow.com/questions/22402777/html-javascript-button-click-counter

// Below gets the sample comments from an outside server
let collectComments = fetch("https://project-1-api.herokuapp.com/comments?api_key=f83af9e3-a0ca-491a-89a6-19bc033c1de2");
collectComments.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
    anyvar = data;
    // console.log("global:", anyvar);
    commentDisplay(data);
});
//------------------------------------------------------------------------------------------------------>

//onsubmit event handler, form input field collection function
document.getElementById('inputForm').onsubmit = function addComment() { 
    event.preventDefault();
    // document.getElementById("inputForm").reset();
    let userName = document.querySelector('input[name=userName]').value;
    let uComment = document.querySelector('input[name=userComment]').value;
    let commentArr = 
        { 
            name: userName,
            comment: uComment
        }
    // commentDisplay(commentArr);
    sendComment(commentArr);
};

// POST fetch request function - information entered by the user is sent to an outside server for storage
function sendComment(commentData) {
    const init = {
        body: JSON.stringify(commentData),
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    };

    let promise = fetch("https://project-1-api.herokuapp.com/comments?api_key=f83af9e3-a0ca-491a-89a6-19bc033c1de2", init);
    promise.then(function (response) {
        return (response.json());
    })
        .then(function (data) {
            anyvar.push(data);
            clearFunc();
            commentDisplay(anyvar);
        });
}

//Clears out information entered by the user from the input fields upon submit
function clearFunc() {
    document.querySelector('input[name=userName]').value = " ";
    document.querySelector('input[name=userComment]').value = " ";
    document.getElementById('userComments').innerHTML = " ";
}

// Time Ago calculator
function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years ago";
    }

    interval = Math.floor(seconds / 2592000);

    if (interval > 1) {
        return interval + " months ago";
    } 

    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days ago";
    } 

    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    }

    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes ago";
    }

    return Math.floor(seconds) + " seconds ago";
}
// Source: https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site

