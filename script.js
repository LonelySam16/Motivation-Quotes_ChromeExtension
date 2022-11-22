fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let i= Math.floor(Math.random()*1000)+1;
    
    const qt = data[i].text;
    const qtt = data[i].author;
    const jokeElement = document.getElementById('je');


    jokeElement.innerHTML = qt+" <br> ~ "+ qtt;
   
  });

// fetch("https://type.fit/api/quotes").then(res => res.json()).then(data => console.log(data)).catch(err => console.log(`Error: ${err}`))