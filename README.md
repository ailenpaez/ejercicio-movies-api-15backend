<h1 align="center"> Fetch, APIs y Async/Await </h1>

<img src="https://help.figma.com/hc/article_attachments/6372251804567/VIDEO_2_ASSET_2.gif" />

<h2 align="center"> ¿Qué es una API? </h2>

Las interfaces de programación de aplicaciones (**A**pplication **P**rogramming **I**nterface) son, como su nombre lo indican, interfaces. La palabra _interfaz_ viene del inglés _interface_, compuesto por _inter_ (entre) y _face_ (cara), y hace referencia a "lo que está entre caras". Dentro del contexto de la programación **Frontend**, las interfaces de usuario son sitios/aplicaciones con gráficos interactivos que permiten a casi cualquier usuario interactuar con un componente de software sin necesidad de saber nada de informática. Es decir, que la función principal es la de **traducir**.

En el caso de la programación **Backend**, a la interfaz gráfica de usuario la reemplaza la interfaz de programación de aplicaciones o API, que cumple exactamente la misma función, con la única diferencia de que accedemos y manipulamos sus datos a través de rutas/url que apuntan a los recursos de la base de datos.

<img src="https://blogs.sap.com/wp-content/uploads/2021/02/1ea2bf43d262adc533f6ba78a7772a9c.gif" />

Las APIs están compuestas por un conjunto de definiciones y protocolos que permiten integrar, comunicar y desarrollar múltiples componentes de software.

<h2 align="center"> Fetch API </h2>

Cada vez que necesitemos consumir datos de una **API**, podemos hacerlo usando la **API de Fetch**. Básicamente, nos proporciona una _interfaz_ para solicitar y/o manipular recursos de la WEB. Supongamos que quiero saber las opciones de recursos que tengo para consultar a la API de Rick & Morty:

`const API_URL = new URL('https://rickandmortyapi.com/api');`

`const promise = fetch(API_URL);`

Es recomendable crear objetos de tipo URL para tener a disposición todas sus propieades. Dentro de `response` tendremos almacenada una promesa que está en estado de pendiente. Esto es así porque las peticiones a recursos que están en Internet generalmente tardan un tiempo mayor al que tarda el procesador en hacer sus tareas. Entonces, para que todo el flujo del programa no se detenga a esperar este tiempo indefinido, la función `fetch()` devuelve instantáneamente una promesa **que está en estado de pendiente a ser resuelta**, en cuanto el resultado esté disponible.

<p align="center"> <img src="https://i.ibb.co/yh5RXW5/Promise.jpg" alt="Promise" border="0"> </p>

<h2 align="center"> Manejando asincronías con ASYNC|AWAIT </h2>

Una de las herramientas que tenemos para poder resolver el estado `Promise{ Pending }` de la promesa que nos devuelve la función `fetch()` es la función asíncrona. Con la palabra reservada `async` podemos manejar posibles asincronías dentro de su contexto de bloque, con su palabra complementaria `await`:

`const API_URL = new URL('https://rickandmortyapi.com/api');`

`async function fetchData(url: URL) {`

`   const response = await fetch(url);`

`   const result = await response.json();`

`   console.log(result);`

`};`

`fetchData(API_URL);`

La función `fetchData(url: URL)` está declarada con la palabra reservada _async_. Esto permite que, dentro de su contexto de bloque, podamos detener el flujo de ejecución del programa y esperar `await` a que la tarea termine. De esta forma, en el ejemplo primero resolvemos la promesa arrojada por `fetch()`, y luego usamos el método `json()` del objecto Response, para convertir a un objecto de Javascript la respuesta. Una vez terminadas esas tareas, imprimimos el resultado en la terminal.

<h2 align="center"> DESAFÍOS </h2>

1. Te propongo que investigues como consumir los datos de la API de Open Movies DB. El objetivo es desarrollar una app que permita buscar películas por su título. Separá la lógica de la APP en dos módulos:

- index.ts | Es el encargado de recibir las solicitudes del usuario, de comunicarlas al modelo, y de imprimirlas en la terminal con algún formato que te guste.
- model.ts | Es el encargado de recibir las solicitudes de INDEX.ts y de consultar a la API.
- history.json | Es una pequeña base de datos local en la que figuran todas las búsquedas realizadas.

Para realizar las solicitudes, pueden usar **process.argv**, la dependencia **readline**, o directamente consultar desde la función main() de index.ts.

2. Para este segundo ejercicio, te propongo que investigues la API de WeatherAPI (ver link más abajo) y armes una app muy similar a la anterior, con las siguientes características:

- La API sirve para obtener datos climáticos relativos a cada ciudad del planeta. El usuario tiene que poder solicitar por los datos relativos a una ciudad. Es decir, que el parámetro de búsqueda del programa es la ciudad: 'London', 'Buenos Aires', etc.
- El objetivo es imprimir en la terminal la temperatura máxima y mínima de los últimos 3 días, de la ciudad ingresada como parámetro.

<h2 align="center"> LINKS </h2>

- [Constructor de URLs](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL)
- [ASYNC|AWAIT en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Usando ASYNC|AWAIT](https://lenguajejs.com/javascript/asincronia/async-await/)
- [API de Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [API de OMDB](https://www.omdbapi.com/)
- [API del clima](https://www.weatherapi.com/docs/)
