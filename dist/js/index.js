var quotes = [
    {
        "quote": "\"Tem uma mulher aqui bastante perigosa que disse: Cada um vai ter de mim exatamente o que plantou, isso significa então que se eu plantar a vara nela, ela irá virar um travesti.\"",
        "author": "Luan Vitola"
    },
    {
        "quote": "\"Sabonete liquido é ruim em qualquer situação, exceto quando você está preso!\"",
        "author": "Luan Vitola"
    },
    {
        "quote": "\"Esse anime faz você ter pena do Câncer!\"",
        "author": "Luan Vitola"
    },
    {
        "quote": "\"Pelo menos o frete é grátis\"",
        "author": "Luan Vitola"
    },
    {
        "quote": "\"A vida é assim, numa hora tu ta falando um assunto e na outra com um travesti.\"",
        "author": "Luan Vitola"
    },
    {
        "quote": "\"Olá você poderia mever uma rol.... um croquete, por favor!\"",
        "author": "Luan Vitola"
    },
    {
        "quote": "\"O Luan sempre foi um cara feedado.\"",
        "author": "Ulk-Chan"
    },
    {
        "quote": "\"O Luan é tipo um usuário de cocaina, mas sem usar cocaína.\"",
        "author": "Vava"
    },
    {
        "quote": "\"É a palavra do Luan contra da Lady Gaga.\"",
        "author": "Vava"
    },
    {
        "quote": "\"1 em cada três pessoas são gays.\" \" * Silêncio * \" \"!RIAN SURGE GRITANDO!\"",
        "author": "Vergachov"
    },
    {
        "quote": "\"Aqui eu posso ouvir Lady Gaga tranquilo.\" \"Aqui você está entre machos!\"",
        "author": "Vava"
    },
    {
        "quote": "\"Surra de pau mole!\"",
        "author": "Luan Vitola"
    },
    {
        "quote": "\"É uma bosta mesmo!\"",
        "author": "Luan Vitola"
    },
    {
        "quote": "\"Valeu toda gozada na cara!!\"",
        "author": "Vava"
    },
    {
        "quote": "\"Legaliza o canibalismo, resolve a fome no mundo!\"",
        "author": "Entidade"
    },
    {
        "quote": "\"Todo mundo vota, menos o Rian!\" \"O que tu quer?\" \"DEMOCRACIA!\"",
        "author": "Ultimate"
    },
    {
        "quote": "\"Ta foda na Bolivia!\"",
        "author": "Vergachov"
    },
    {
        "quote": "\"Cartilagem é coisa de criança!\"",
        "author": "Vava"
    },
    {
        "quote": "\"Aquele goleiro pegava até AIDS!\"",
        "author": "Ultimate"
    },
    {
        "quote": "\"Dia bizarro eu não sei te dizer, mas dia feliz eu não tive!\"",
        "author": "Entidade"
    },
    {
        "quote": "\"O Luan é oniausente!\"",
        "author": "Vava"
    },
    {
        "quote": "\"Prefiro ver a Amazônia pegando fogo!\"",
        "author": "Vava"
    },
]


function generateQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomNumber];
    //    document.getElementById("quote").textContent = quote.quote;
    //    document.getElementById("author").textContent = quote.author;
    $("#quote, #author").fadeOut(500, function () {
        $("#quote").text(quote.quote);
        $("#author").text(quote.author);
        $(this).fadeIn(500);
    });
}
