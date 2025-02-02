let showjoke = document.getElementById('joke');
let btn = document.getElementById('btn');

btn.addEventListener('click',async() => {
    try {
        showjoke.innerText = "Updating .."
        let url = `https://api.api-ninjas.com/v1/jokes`;
        let apiKey = 't4A4pWuLqmLcuCVM0PL6/A==kU2IAGtK7aLNhNIu';

        let headers = { "X-Api-Key": apiKey } ;
        let response = await fetch(url, {
            method: "GET",
            headers: headers
        });

        let jokes = await response.json();
        showjoke.innerText = jokes[0].joke;
    } catch (err) {
         console.error(err);
    }
})

