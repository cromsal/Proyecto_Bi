document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos el contenedor del carrusel y todas las imágenes del carrusel
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');

    // Modal y contenido del modal
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-body');
    const span = document.getElementsByClassName('close')[0];

    // Contador para controlar la imagen actual en el carrusel
    let counter = 0;
    // Tamaño de la imagen (ancho)
    const size = carouselImages[0].clientWidth;

    // Función para actualizar la posición del carrusel
    function updateCarousel() {
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    // Intervalo para cambiar la imagen cada 3 segundos
    setInterval(() => {
        counter++;
        // Reiniciamos el contador si llegamos al final de las imágenes
        if (counter >= carouselImages.length) {
            counter = 0;
        }
        updateCarousel();
    }, 3000);

    // Añadimos un evento de clic a cada imagen del carrusel
    carouselImages.forEach(image => {
        image.addEventListener('click', function() {
            // Obtenemos la información asociada a la imagen
            const info = this.getAttribute('data-info');
            fetchModalContent(info);
        });
    });

    // Cerrar el modal cuando se hace clic en la "X"
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // Cerrar el modal cuando se hace clic fuera del modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Función para obtener y mostrar el contenido del modal
    function fetchModalContent(info) {
        // Simulando la obtención de datos desde una fuente externa con un array en constante global
        const infoContent = {
            info1: "La entidad financiera BBVA marca un caso de éxito con el uso del Business Intelligence, ya que no solo lo aplicó para mejorar sus servicios, sino que además lo puso a disposición de sus clientes. Especialmente para las pequeñas y medianas empresas (PYMES). El objetivo es ayudarlos a mejorar su rentabilidad y desempeño comercial. Pero, ¿de qué manera funciona? La empresa le brindó a sus clientes comerciales acceso a lo que denominaron Commerce 360, una herramienta de análisis de datos que proporciona información sobre ventas con tarjetas de crédito. Así, los comerciantes y pequeños empresarios tienen información relevante sobre su negocio y el sector en el que se desenvuelven.",
            info2: "La empresa Bimbo se convirtió en el líder de su sector, gracias a su estrategia de Inteligencia Empresarial basada en el análisis de datos en tiempo real. Trabajaron en procesar la información que generaban sus agencias en todo el país para determinar patrones de ventas, órdenes y cotizaciones, y así generar un plan que estandarizara y optimizara todas sus sedes. El plan debía satisfacer las necesidades del consumidor, al igual que reducir costos de mantenimiento y mejorar la toma de decisiones en las operaciones diarias. Conectando cada una de las acciones que se realizan dentro de la empresa, lograron estandarizar los procesos de cotizaciones y órdenes. A través de la digitalización, alcanzaron un sistema más flexible que arrojara datos en tiempo real, lo que permitió optimizar la producción y distribución. Como puedes darte cuenta, manejaron información de relevancia y para ello debieron implementar protocolos como marcos de ciberseguridad que evitaran la filtración de datos.",
            info3: 'La compañía analizó los datos de las máquinas de gaseosa y descubrieron cuáles eran los sabores que los consumidores preferían para hacer sus propias bebidas. De esa manera tomaron los gustos de sus clientes y elaboraron un nuevo producto. Este es un claro ejemplo de empresas que utilizan Business Intelligence para el desarrollo de productos. Con todo, esa es solo una parte de la información a la que Coca-cola le da utilidad. También recopilan los comentarios que el público deja sobre sus productos en las redes sociales y estudian los datos de sus clientes. Para ello, aplican planes de ciberseguridad y protección de datos personales, lo que les permite conocer mejor al público sin poner en riesgo su privacidad. Se trata de un plan bien estructurado que les ayuda a saber cómo los perciben los consumidores, y qué le gusta a sus clientes por edades, ubicación geográfica y nivel socioeconómico, entre otros factores. De esa forma, como vimos con el caso de Cherry Sprite, pueden ofrecerles justo lo',
            info4: 'Sin lugar a dudas, Amazon es un experto en el uso de la información como medio para mejorar la experiencia de compra de sus clientes y para optimizar sus procesos internos. Aunque parezca que Amazon no es un gran representante del Business Intelligence, la empresa ha sido pionera en esta categoría de estrategias de negocio. Al haber surgido como un servicio 100 % digital, la inteligencia de negocios se ha construido a la par de su éxito comercial. Amazon cuenta con un grupo experto de ingenieros en Business Intelligence que generan herramientas y procesos para traducir la información captada por la plataforma de compras para tomar decisiones de negocios. ',
            info5: 'Apple es un gran representante de este punto de vista al momento de almacenar y procesar información de sus consumidores. En los últimos años se ha generado una tendencia por buscar la protección de los datos de las personas. La compañía tecnológica, en contraposición a Meta o a Alphabet, ha centrado sus esfuerzos en asegurar esta privacidad para sus usuarios, en lugar de usar su información como objeto de venta. Actualmente, Apple ofrece una de las mejores soluciones de encriptación de datos y de protección de la información de sus clientes. Asimismo, la compañía ha desarrollado tecnologías de Aprendizaje de Máquinas y de analítica de datos que mejoran la experiencia de sus usuarios. Por ejemplo, los portadores de sus relojes inteligentes pueden acceder a métricas de desempeño físico (durante los entrenamientos) y a índices biométricos, gracias a los potentes motores de Inteligencia Artificial que procesan datos de millones de usuarios en todo el mundo, sin comprometer la privacidad de su información. '
        };
        // Establecemos el contenido del modal
        modalContent.textContent = infoContent[info];
        modal.style.display = 'flex';
    }
});