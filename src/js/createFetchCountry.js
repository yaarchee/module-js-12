


function crateFetchCountry(nameCountry) {
  return fetch(`https://restcountries.eu/rest/v2/name/${nameCountry}`).
  then(response=>{
    // if(!response.ok){
    //   throw new Error("Bad boys\n" +
    //     "Whatcha want, watcha want\n" +
    //     "Whatcha gonna do")
    // }
    return response.json()
  });
}

export default crateFetchCountry;


