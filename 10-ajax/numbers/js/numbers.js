const fetchFact = function () {
    const xhr = new XMLHttpRequest();

    // xhr.readyState equals 4 MEANS that the AJAX request is finished
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            return;
        }

        // convert the JSON string into an actual Javascript object
        const data = JSON.parse( xhr.responseText );

        // create a DOM node
        const p = document.createElement('p');
        // put the text in the DOM node
        p.innerHTML = data.text;
        // attach the DOM node to the page
        document.body.appendChild(p);
    };

    xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
    xhr.send(); // this is asynchronous (it runs in the background)
};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact(); // First fact free
