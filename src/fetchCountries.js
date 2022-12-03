export function fetchCountries(name) {
  const URL = `https://restcountries.com`;
  const fields = `fields=name,capital,population,flags,languages`;

  return fetch(`${URL}/v3.1/name/${name}?${fields}`).then(resp => {
    if (!resp.ok) {
      return Promise.reject(new Error());
    }

    return resp.json();
  });
}
