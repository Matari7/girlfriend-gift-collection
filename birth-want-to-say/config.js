// https://github.com/AJLoveChina/birthday
var config = {
    // La longitud de las frases puede ser cualquiera, puedes escribir diez frases o veinte frases
    // Intenta que cada frase no supere los 15 caracteres, de lo contrario, el efecto de visualización puede no ser muy bueno
    texts: [
        "Para mi",       // Aquí, el último coma al final de cada frase debe estar en inglés!! ¡¡Es muy importante!!
        "Hermosa profesora",   // Lo mismo aquí...
        "el 8 de diciembre es tu cumpleaños",
        "y este es el",
        "El Primer cumpleaños tuyo juntos",
        "Conozco tus",
        "expresiones raras",
        "expresiones tiernas",
        "sobretodo tus expresiones enojadas",
        "y con todas me gustas, ",
        "Por cierto, cuidate muy bien, si?",
        "Este año tienes que comer bien",
        "estar panchochita",
        "y así tener energía para esas clases y tu trabajo",
        "¡y para que pienses solo en mi :v!",
        "¡Feliz cumpleaños te amo!",
    ],
    /**
     * imgs no es obligatorio, pero si decides completarlo, debes seguir el formato a continuación
     * "Texto correspondiente al anterior, debe ser exactamente igual": "Ruta de la imagen, puedes colocar las imágenes en la carpeta imgs"
     * Por ejemplo:
     * "Mi pequeño amorcito": "./imgs/xiaokeai.jpg"
     *
     * Si no quieres imágenes, simplemente coloca dos barras de comentarios al inicio de cada línea. Por ejemplo, la imagen de "hoy es tu cumpleaños" no se mostrará:
     * Tip: Es mejor usar imágenes cuadradas o casi cuadradas para obtener un mejor efecto visual
     */
    imgs: {
        "Para mi": "./imgs/nino.png",
        "Hermosa profesora": "./imgs/gaby.jpeg",
        "el 8 de diciembre es tu cumpleaños": "./imgs/feliz.jpg",
        "y este es el": "./imgs/conejo.jpeg",
        "El Primer cumpleaños tuyo juntos": "./imgs/juntos.jpg",
        "Conozco tus": "./imgs/cora.jpg",
        "expresiones raras": "./imgs/raro.jpg",
        "expresiones tiernas": "./imgs/tierno.png",
        "sobretodo tus expresiones enojadas": "./imgs/enojado.jpg",
        "y con todas me gustas, ": "./imgs/stitch.png",
        "Por cierto, cuidate muy bien, si?": "./imgs/bella.jpg",
        "Este año tienes que comer bien": "./imgs/comiendo.jpeg",
        "estar panchochita": "./imgs/lleno.jpg",
        "y así tener energía para esas clases y tu trabajo": "./imgs/profesora.jpg",
        "¡y para que pienses solo en mi :v!": "./imgs/yo.jpeg",
        "¡Feliz cumpleaños te amo!": "./imgs/amo.jpeg"
    },
    
    // Descripción de los botones, estas son las descripciones predeterminadas en inglés, puedes cambiarlas a tu gusto
    desc: {
        turn_on: "Haz clic para empezar",
        play: "Pon musiquita",
        bannar_coming: "Pon algo de color",
        balloons_flying: "Parece que falta algo",
        cake_fadein: "Pastelito",
        light_candle: "¿Velas?",
        wish_message: "¡Feliz cumpleaños amooooooor!",
        story: "UN MENSAJE PARA TI"
    },

    // Mensaje final
    loveText: 'De tu novio Matari (Ariel jajaja)'
};
