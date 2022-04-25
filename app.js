// console.log("Let's get this party started!");
// ('vrbragdon@gmail.com', 'vbGiphy91', 'asdfjkl;')
// token = PQlV3mCNBryfkMSvGFIc1HQgW6JbAL9m

$('form').on('submit', async function (e) {
   e.preventDefault()

   let searchVal = $('#enter-search').val()
   $('#enter-search').val('')
   // console.log(searchVal)
   const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
      params: {
         q: searchVal,
         api_key: 'PQlV3mCNBryfkMSvGFIc1HQgW6JbAL9m'
      }
   })
   appendGif(res.data)
})


function appendGif(res) {
   let numResults = res.data.length

   if (numResults) {
      let randGIF = Math.floor(Math.random() * numResults)

      let newDiv = document.createElement('div')
      let newImg = document.createElement('img')
      $(newImg).attr('src', res.data[randGIF].images.original.url)
      // console.log(res.data[randGIF].images.original.url)
      // console.log(newImg)
      newDiv.append(newImg)
      $('#found-gifs').append(newDiv)
   }
}

$('#remove').on('click', function () {
   $('#found-gifs').empty()
})










