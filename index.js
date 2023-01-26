const btnEl = document.getElementById("btn");
btnEl.addEventListener("click", getJoke);
const options = {
  method: 'GET',
  headers: { 'X-Api-Key': apiKey },
}

async function getJoke() {
  document.getElementById("joke").innerHTML = 'fetching....';
  const response = await fetch(apiUrl, options);
  const data = await response.json();
  document.getElementById("joke").innerHTML = data[0].joke;
}
