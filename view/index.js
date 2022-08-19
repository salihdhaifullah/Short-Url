const form = document.querySelector("form");



const createShortUrl = (event) => {
    event.preventDefault();    
    const url = document.getElementById('url').value;
        console.log("form submitted");
        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: url
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('shortUrl').innerHTML = "your Short url is " + data.shortUrl;
            document.getElementById('shortUrl').href = data.shortUrl;
            document.getElementById('shortUrl').style.display = 'block'
        }).catch(err => {
            if (err) {
                console.log(err);
                document.getElementById('error').style.display = 'block'
            }
        });
}


form.addEventListener("submit", createShortUrl);