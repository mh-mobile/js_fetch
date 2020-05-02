async function requestBootcampURL () {
  const response = await fetch('https://bootcamp.fjord.jp/')
  return await response.text()
}

requestBootcampURL().then(function (text) {
  console.log(text)
})
