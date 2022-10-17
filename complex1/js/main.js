const getQuote = () => {

  fetch (`https://api.quotable.io/random`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector("blockquote p").innertext = data.content
    document.querySelector("blockquote cite").innertext = data.author

    fetch(`https://api.unsplash.com/search/photos/?query=${data.author}&client_id=bE-XTF2avjVMUDbXQ2JGBrNSFEHeMEUEr0VMeAIeuSU`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        //console.log(data)
        console.log(data)

        document.querySelector('img').src = data.results[0].urls.small
    })
    .catch(err => {

    });


  })
    .catch(err => {
        console.log(`error ${err}`)
  })
}

getQuote();
document.querySelector("button").addEventListener("click", getQuote);