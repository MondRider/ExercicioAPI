const container = document.querySelector('#container')

fetch('https://fakestoreapi.com/products')
.then((res) => res.json())
.then((data) => {

    data.forEach((produto) => {
        const itemLista = document.createElement('div')
        itemLista.className = 'card'
        itemLista.innerHTML = `<img src=${produto.image} alt='imagem produto' class='produto-image'>
        <h1 class="produto-name">${produto.title}</h1>
        <p class="produto-description">${produto.description}</p>` 
        container.appendChild(itemLista)
    })

    console.log(data);
})
.catch((err) => console.log(err))