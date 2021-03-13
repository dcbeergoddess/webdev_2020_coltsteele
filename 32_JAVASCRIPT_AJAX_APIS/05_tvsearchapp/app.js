const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
  // prevent page from refreshing on click
  e.preventDefault();
  // console.log("SUBMITTED")
  // console.dir(form)
  console.log(form.elements.query.value) //grab what user enters
  const searchTerm = form.elements.query.value
  // const res = await axios.get(`http://api.tvmaze.com/search/shows?q="${searchTerm}`) // BREAKDOWN query //HELPS WITH MULTIPLE
  const config = { params: { q: searchTerm } }; //can add headers in here too.
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config)
  console.log(res.data) //ARRAY OF SHOWS THAT MATCH
  console.log(res.data[0].show.image.medium) //image for first element in data array
  /*
  //CRATE IMG TAG IN HTML==> move to map over all results in seperate function
  const img = document.createElement('IMG');
  img.src = res.data[0].show.image.medium
  document.body.append(img)
  */
 makeImages(res.data)
 //clear input
 form.elements.query.value = '';
})

//SEPARATE FUNCTION TO LOOP OVER RESULTS
//Exepects Array of SHows as argument
const makeImages = (shows) => {
  for(let res of shows){
    console.log(res)
    if(res.show.image){
      const img = document.createElement('IMG');
      img.src = res.show.image.medium;
      document.body.append(img)
    }
  }
}