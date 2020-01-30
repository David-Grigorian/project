export const request = (url) => {
  const xhr = new XMLHttpRequest();
  
  return new Promise((resolve, reject) => {
    xhr.open('GET', url);

    xhr.addEventListener('readystatechange', () =>  {
      if(xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else if (xhr.status !== 200) {
        reject(`Error: ${xhr.status}`);
      }
    })

    xhr.send();
  })
}