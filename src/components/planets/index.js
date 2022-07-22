import React from "react";
import Planet from "./planet";

const clickOnPlanet = (planet_name) => {
console.log(`Um clique no planet ${planet_name}`)
}

const Planets = () => {
    return (
        <>
            <h1>Planet list</h1>
            <Planet planet_name="Mércurio"
                description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. "
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/420px-Mercury_in_color_-_Prockter07-edit1.jpg"
                link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                clickOnPlanet={clickOnPlanet}
            />

            <Planet planet_name="Terra"
                description="A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos,[13] incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida."
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/450px-The_Blue_Marble_%28remastered%29.jpg"
                clickOnPlanet={clickOnPlanet}

            />
        </>
        // Todo o conteúdo precisa estar dentro de um único nó
    );
}

export default Planets;