fetch("https://jsonplaceholder.typicode.com/users").then(function(placeholder){
  return placeholder.json();
}).then(function(placeholder){
  let lista = document.createElement('ul')
  for (i=0; i<placeholder.length;i++){
    let li = document.createElement('li')
    li.textContent = `Nome Cognome Utente: ${placeholder[i].name}`
    lista.appendChild(li)
  }
  document.body.appendChild(lista)
  return placeholder;
}).then(function(result){

  let nomecittà = document.createElement('ul')
  for (i=0; i<result.length;i++){
    let li = document.createElement('li')
    li.textContent = `${result[i].name}: ${result[i].address.city}`
    nomecittà.appendChild(li)
  }
  document.body.appendChild(nomecittà)

  return result;
}).then(function(uss){

  let lista = document.createElement('ul')
  for (i=0; i<uss.length;i++){
    if (uss[i].address.city === 'McKenziehaven' || uss[i].address.city === 'Bartholomebury'){
      let li = document.createElement('li')
      li.textContent = uss[i].name
      lista.appendChild(li)
    }
  }
  document.body.appendChild(lista)
})