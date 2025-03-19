//fetch()  è una funzione del browser che torna una promise
//Codice produttore

//http .... protocollo
//request / response .... utenti
let getPosts = async() => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        let posts = document.getElementById("post");
        posts.innerHTML = data.slice(0, 10) // Mostro solo i primi 10 commenti
                    .map(post => `<p><strong>${post.title}:</strong> ${post.body}</p>`)
                    .join("");
    } catch (error) {
        console.log(error);
    }
};

getPosts();

document.querySelectorAll("input[type='submit']").forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        let getComments = async () => {
            try {
                let response = await fetch('https://jsonplaceholder.typicode.com/comments');
                let data = await response.json();
                
                // Seleziono l'elemento con id "commenti"
                let commentiContainer = document.getElementById("commenti");

                // Converto i commenti in una lista HTML
                commentiContainer.innerHTML = data.slice(0, 10) // Mostro solo i primi 10 commenti
                    .map(comment => `<p><strong>${comment.name}:</strong> ${comment.body}</p>`)
                    .join("");

            } catch (error) {
                console.log(error);
            }
        };

        getComments();
    });
});


