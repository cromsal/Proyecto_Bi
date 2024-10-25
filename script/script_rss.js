// URL del feed RSS de El País
var rssFeedUrl = 'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/economia/portada';

// Obtener el feed RSS
fetch(rssFeedUrl)
    .then(response => response.text()) // Convertir la respuesta a texto
    .then(xml => {
        // Parsear el XML del feed RSS
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xml, 'text/xml');

        // Obtener los elementos <item> del feed RSS
        var items = xmlDoc.querySelectorAll('item');

        // Crear una lista para mostrar los elementos del feed RSS
        var rssFeedContainer = document.getElementById('rss-feed');
        var ul = document.createElement('ul');

        // Iterar sobre los elementos <item> y agregarlos a la lista
        items.forEach(function(item) {
            var li = document.createElement('li');
            var title = item.querySelector('title').textContent; // Obtener el título del elemento
            var link = item.querySelector('link').textContent; // Obtener el enlace del elemento
            li.innerHTML = '<a href="' + link + '">' + title + '</a>'; // Crear el enlace con el título
            ul.appendChild(li); // Agregar el elemento a la lista
        });

        // Agregar la lista al contenedor del feed RSS
        rssFeedContainer.appendChild(ul);
    })
    .catch(error => console.error('Error al obtener el feed RSS:', error));// Capturar errores y mostrarlos en la consola
