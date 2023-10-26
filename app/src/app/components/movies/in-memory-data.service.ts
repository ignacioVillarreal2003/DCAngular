import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pelicula } from './peliculas/pelicula';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const peliculas = [
      { 
        id: 1, 
        nombre: 'Batman Begins', 
        year: 'Año de lanzamiento: 2005',
        descripcion: 'Sinopsis: Batman Begins es una película que narra los orígenes de Batman, desde su entrenamiento en las montañas hasta su lucha contra el crimen en Gotham City.', 
        fotoPrincipal: 'Batman1.jpg',
        genero: 'Genero: Acción, Drama',
        direccion: 'Direccion: Christopher Nolan',
        reparto: 'Reparto: Christian Bale, Michael Caine, Liam Neeson',
        duracion: 'Duracion: 140 minutos',
        calificacion: 'Calificacion IMDb: 8.2/10',
        curiosidades: 'La película marca el reinicio de la franquicia de Batman y es el comienzo de la aclamada trilogía de Christopher Nolan.'
    },
    { 
        id: 2, 
        nombre: 'Guardianes de la Galaxia', 
        year: 'Año de lanzamiento: 2014',
        descripcion: 'Sinopsis: Un grupo de inadaptados espaciales se une para formar los Guardianes de la Galaxia y salvar el universo de una amenaza intergaláctica.', 
        fotoPrincipal: 'Guardianes-de-la-galaxia.jpg',
        genero: 'Genero: Acción, Aventura, Ciencia ficción',
        direccion: 'Direccion: James Gunn',
        reparto: 'Reparto: Reparto: Chris Pratt, Zoe Saldana, Dave Bautista',
        duracion: 'Duracion: 121 minutos',
        calificacion: 'Calificacion IMDb: 8.0/10',
        curiosidades: 'La película presenta una banda sonora increíblemente popular que incluye canciones de los años 70 y 80.'
    },
    { 
        id: 3, 
        nombre: 'Ironman', 
        year: 'Año de lanzamiento: 2008',
        descripcion: 'Sinopsis: Tony Stark, un industrial multimillonario, construye un traje de alta tecnología para luchar contra las fuerzas del mal y proteger al mundo como Iron Man.', 
        fotoPrincipal: 'Ironman1.jpg',
        genero: 'Genero: Acción, Aventura, Ciencia ficción',
        direccion: 'Direccion: Jon Favreau',
        reparto: 'Reparto: Robert Downey Jr., Gwyneth Paltrow, Jeff Bridges',
        duracion: 'Duracion: 126 minutos',
        calificacion: 'Calificacion IMDb: 7.9/10',
        curiosidades: 'Esta película marcó el inicio del Universo Cinematográfico de Marvel (MCU).'
    },
    { 
        id: 4, 
        nombre: 'Joker', 
        year: 'Año de lanzamiento: 2019',
        descripcion: 'Sinopsis: Arthur Fleck, un comediante fracasado, se convierte en el infame Joker y desencadena el caos en Gotham City.', 
        fotoPrincipal: 'Joker.jpg',
        genero: 'Genero: Crimen, Drama, Suspenso',
        direccion: 'Direccion: Todd Phillips',
        reparto: 'Reparto: Joaquin Phoenix, Robert De Niro, Zazie Beetz',
        duracion: 'Duracion: 122 minutos',
        calificacion: 'Calificacion IMDb: 8.4/10',
        curiosidades: 'Joaquin Phoenix ganó un premio de la Academia por su interpretación del Joker.'
    },
    { 
        id: 5, 
        nombre: 'AntMan', 
        year: 'Año de lanzamiento: 2015',
        descripcion: 'Sinopsis: Scott Lang, un ladrón con un traje que le otorga la habilidad de encogerse pero aumentar su fuerza, se convierte en el héroe Ant-Man y debe ayudar a su mentor en un robo que podría salvar al mundo.', 
        fotoPrincipal: 'AntMan.jpeg',
        genero: 'Genero: Acción, Aventura, Comedia',
        direccion: 'Direccion: Peyton Reed',
        reparto: 'Reparto: Paul Rudd, Evangeline Lilly, Michael Douglas',
        duracion: 'Duracion: 117 minutos',
        calificacion: 'Calificacion IMDb: 7.3/10',
        curiosidades: 'Ant-Man es conocido por su uso innovador de la tecnología para alterar tamaños y jugar con la perspectiva en las escenas de acción.'
    },
    { 
        id: 6, 
        nombre: 'Aquaman', 
        year: 'Año de lanzamiento: 2018',
        descripcion: 'Sinopsis: Arthur Curry, mitad humano y mitad atlante, debe reclamar su derecho como rey de Atlantis y detener una guerra entre la superficie y el reino submarino.', 
        fotoPrincipal: 'Aquaman.jpeg',
        genero: 'Genero: Acción, Aventura, Fantasía',
        direccion: 'Direccion: James Wan',
        reparto: 'Reparto: Jason Momoa, Amber Heard, Willem Dafoe',
        duracion: 'Duracion: 143 minutos',
        calificacion: 'Calificacion IMDb: 6.9/10',
        curiosidades: 'Aquaman es conocido por sus impresionantes efectos visuales submarinos y su representación visualmente impactante de Atlantis.'
    },
    { 
        id: 7, 
        nombre: 'Batman 2', 
        year: 'Año de lanzamiento: 2007',
        descripcion: 'Sinopsis: Batman debe proteger Gotham City del despiadado Joker mientras se enfrenta a su propio pasado.', 
        fotoPrincipal: 'Batman2.jpeg',
        genero: 'Genero: Acción, Aventura',
        direccion: 'Direccion: Tim Burton',
        reparto: 'Reparto: Michael Keaton, Jack Nicholson, Kim Basinger',
        duracion: 'Duracion: 126 minutos',
        calificacion: 'Calificacion IMDb: 7.5/10',
        curiosidades: 'Batman (1989) marcó el comienzo de la exitosa serie de películas de Batman dirigidas por Tim Burton.'
    },
    { 
        id: 8, 
        nombre: 'Batman 3', 
        year: 'Año de lanzamiento: 2012',
        descripcion: 'Sinopsis: Batman debe enfrentarse a Bane, un terrorista enmascarado que amenaza con destruir Gotham City y exponer la verdad sobre Harvey Dent.', 
        fotoPrincipal: 'Batman3.jpeg',
        genero: 'Genero: Acción, Aventura, Crimen',
        direccion: 'Direccion: Christopher Nolan',
        reparto: 'Reparto: Christian Bale, Tom Hardy, Anne Hathaway',
        duracion: 'Duracion: 164 minutos',
        calificacion: 'Calificacion IMDb: 8.4/10',
        curiosidades: 'The Dark Knight Rises es la tercera y última película de la trilogía de Batman dirigida por Christopher Nolan.'
    },
    { 
        id: 9, 
        nombre: 'Batman VS Superman',
        year: 'Año de lanzamiento: 2016', 
        descripcion: 'Sinopsis: Batman y Superman se enfrentan en una batalla épica mientras un nuevo enemigo amenaza a la humanidad.', 
        fotoPrincipal: 'BatmanVSSuperman.jpeg',
        genero: 'Genero: Acción, Aventura, Ciencia ficción',
        direccion: 'Direccion: Zack Snyder',
        reparto: 'Reparto: Ben Affleck, Henry Cavill, Amy Adams',
        duracion: 'Duracion: 152 minutos',
        calificacion: 'Calificacion IMDb: 6.4/10',
        curiosidades: 'Esta película establece las bases para la formación de la Liga de la Justicia en el Universo Extendido de DC.'
    },
    { 
        id: 10, 
        nombre: 'Black Panther', 
        year: 'Año de lanzamiento: 2018',
        descripcion: 'Sinopsis: T\'Challa, el rey de Wakanda, se convierte en el superhéroe Black Panther para proteger su país y el mundo de una amenaza poderosa.', 
        fotoPrincipal: 'BlackPanther.jpeg',
        genero: 'Genero: Acción, Aventura, Ciencia ficción',
        direccion: 'Direccion: Ryan Coogler',
        reparto: 'Reparto: Chadwick Boseman, Michael B. Jordan, Lupita Nyong\'o',
        duracion: 'Duracion: 134 minutos',
        calificacion: 'Calificacion IMDb: 7.3/10',
        curiosidades: 'Black Panther recibió tres premios de la Academia y fue aclamada por su representación diversa y su impacto cultural.'
    },
    { 
        id: 11, 
        nombre: 'Capitana Marvel', 
        year: 'Año de lanzamiento: 2019',
        descripcion: 'Sinopsis: Carol Danvers, una piloto de la Fuerza Aérea, se convierte en la poderosa heroína Capitana Marvel y descubre su verdadero origen.', 
        fotoPrincipal: 'CapitanaMarvel.jpeg',
        genero: 'Genero: Acción, Aventura, Ciencia ficción',
        direccion: 'Direccion: Anna Boden, Ryan Fleck',
        reparto: 'Reparto: Brie Larson, Samuel L. Jackson, Jude Law',
        duracion: 'Duracion: 123 minutos',
        calificacion: 'Calificacion IMDb: 6.8/10',
        curiosidades: 'Capitana Marvel es la primera película de Marvel Studios centrada en una superheroína como personaje principal.'
    },
    { 
        id: 12, 
        nombre: 'Captain America', 
        year: 'Año de lanzamiento: 2011',
        descripcion: 'Sinopsis: Steve Rogers, un joven débil físicamente, se somete a un experimento que lo convierte en el súper soldado Capitán América para luchar en la Segunda Guerra Mundial.', 
        fotoPrincipal: 'CaptainAmerica.jpeg',
        genero: 'Genero: Acción, Aventura, Ciencia ficción',
        direccion: 'Direccion: Joe Johnston',
        reparto: 'Reparto: Chris Evans, Hugo Weaving, Hayley Atwell',
        duracion: 'Duracion: 124 minutos',
        calificacion: 'Calificacion IMDb: 6.9/10',
        curiosidades: 'Captain America es uno de los primeros personajes de cómic en recibir una adaptación moderna en el Universo Cinematográfico de Marvel.'
    },
    { 
        id: 13, 
        nombre: 'Captain America: Civil War', 
        year: 'Año de lanzamiento: 2016',
        descripcion: 'Sinopsis: Los Vengadores se dividen en dos facciones enfrentadas, lideradas por Capitán América e Iron Man, debido a diferencias en cómo manejar la supervisión y responsabilidad de sus acciones.', 
        fotoPrincipal: 'CivilWar.jpeg',
        genero: 'Genero: Acción, Aventura, Ciencia ficción',
        direccion: 'Direccion: Anthony Russo, Joe Russo',
        reparto: 'Reparto: Chris Evans, Robert Downey Jr., Scarlett Johansson',
        duracion: 'Duracion: 147 minutos',
        calificacion: 'Calificacion IMDb: 7.8/10',
        curiosidades: 'Esta película es conocida por su impresionante enfrentamiento entre los héroes en el aeropuerto.'
    },
    { 
        id: 14, 
        nombre: 'Dreed', 
        year: 'Año de lanzamiento: 2012',
        descripcion: 'Sinopsis: En un futuro distópico, el juez Dredd es un oficial de policía que tiene la autoridad para actuar como juez, jurado y verdugo, persiguiendo a los criminales en Mega-City One.', 
        fotoPrincipal: 'Dreed.jpeg',
        genero: 'Genero: Acción, Ciencia ficción',
        direccion: 'Direccion: Pete Travis',
        reparto: 'Reparto: Karl Urban, Olivia Thirlby, Lena Headey',
        duracion: 'Duracion: 95 minutos',
        calificacion: 'Calificacion IMDb: 7.1/10',
        curiosidades: 'Dredd es una adaptación de la serie de cómics británica "Judge Dredd" creada por John Wagner y Carlos Ezquerra.'
    },
    { 
        id: 15, 
        nombre: 'Hulk', 
        year: 'Año de lanzamiento: 2003',
        descripcion: 'Sinopsis: Bruce Banner, un científico expuesto a una dosis letal de radiación, se transforma en Hulk cuando siente ira o estrés. Debe lidiar con su alter ego mientras es perseguido por el ejército.', 
        fotoPrincipal: 'Hulk.jpeg',
        genero: 'Genero: Acción, Ciencia ficción',
        direccion: 'Direccion: Ang Lee',
        reparto: 'Reparto: Eric Bana, Jennifer Connelly, Sam Elliott',
        duracion: 'Duracion: 138 minutos',
        calificacion: 'Calificacion IMDb: 5.6/10',
        curiosidades: 'Hulk es la primera película basada en el personaje de Marvel Comics, pero no está conectada al Universo Cinematográfico de Marvel.'
    },
    { 
        id: 16, 
        nombre: 'Ironman 2', 
        year: 'Año de lanzamiento: 2010',
        descripcion: 'Sinopsis: Tony Stark, también conocido como Iron Man, debe enfrentarse a enemigos poderosos mientras lidia con su salud en declive debido a su reactor arc.', 
        fotoPrincipal: 'Ironman2.jpeg',
        genero: 'Genero: Acción, Aventura, Ciencia ficción',
        direccion: 'Direccion: Jon Favreau',
        reparto: 'Reparto: Robert Downey Jr., Mickey Rourke, Gwyneth Paltrow',
        duracion: 'Duracion: 124 minutos',
        calificacion: 'Calificacion IMDb: 7.0/10',
        curiosidades: 'Esta película establece la preparación para la formación de los Vengadores en el Universo Cinematográfico de Marvel.'
    },
    { 
        id: 17, 
        nombre: 'Logan', 
        year: 'Año de lanzamiento: 2017',
        descripcion: 'Sinopsis: En un futuro cercano, un envejecido y cansado Logan, también conocido como Wolverine, cuida a un profesor X enfermo. Pronto se ve involucrado en la protección de una joven mutante.', 
        fotoPrincipal: 'Logan.jpeg',
        genero: 'Genero: Acción, Drama, Ciencia ficción',
        direccion: 'Direccion: James Mangold',
        reparto: 'Reparto: Hugh Jackman, Patrick Stewart, Dafne Keen',
        duracion: 'Duracion: 137 minutos',
        calificacion: 'Calificacion IMDb: 8.1/10',
        curiosidades: 'Logan es una película más oscura y violenta en comparación con otras de la franquicia de X-Men, marcando el retiro de Hugh Jackman como Wolverine.'
    },
    { 
        id: 18, 
        nombre: 'Spideman lejos de casa',
        year: 'Año de lanzamiento: 2019', 
        descripcion: 'Sinopsis: Peter Parker, también conocido como Spider-Man, va en un viaje escolar a Europa y se encuentra enfrentando una nueva amenaza en forma de los Elementales y Mysterio.', 
        fotoPrincipal: 'SpiderManLejosDeCasa.jpeg',
        genero: 'Genero: Acción, Aventura, Ciencia ficción',
        direccion: 'Direccion: Jon Watts',
        reparto: 'Reparto: Tom Holland, Zendaya, Jake Gyllenhaal',
        duracion: 'Duracion: 129 minutos',
        calificacion: 'Calificacion IMDb: 7.5/10',
        curiosidades: 'Esta película sigue los eventos de "Avengers: Endgame" y explora el viaje personal de Peter Parker tras la pérdida de Tony Stark.'
    },
    { 
        id: 19, 
        nombre: 'Thor 4',
        year: 'Año de lanzamiento: 2022', 
        descripcion: 'Sinopsis: Thor se encuentra en una nueva aventura intergaláctica mientras lucha por proteger su hogar y enfrenta enemigos poderosos.', 
        fotoPrincipal: 'Thor4.jpeg',
        genero: 'Genero: Acción, Aventura, Fantasía',
        direccion: 'Direccion: Taika Waititi',
        reparto: 'Reparto: Chris Hemsworth, Natalie Portman, Tessa Thompson',
        duracion: 'Duracion: 127 minutos',
        calificacion: 'Calificacion IMDb: 7.6/10',
        curiosidades: 'Esta película es la cuarta entrega de la saga de Thor en el Universo Cinematográfico de Marvel y presenta nuevos elementos y personajes.'
    },
    { 
        id: 20, 
        nombre: 'Vengadores 1',
        year: 'Año de lanzamiento: 2012', 
        descripcion: 'Sinopsis: Los héroes de Marvel, incluyendo a Iron Man, Capitán América, Hulk, Thor, la Viuda Negra y Ojo de Halcón, se unen para formar Los Vengadores y detener a Loki y su ejército invasor.', 
        fotoPrincipal: 'Vengadores1.jpeg',
        genero: 'Genero: Acción, Aventura, Ciencia ficción',
        direccion: 'Direccion: Joss Whedon',
        reparto: 'Reparto: Robert Downey Jr., Chris Evans, Scarlett Johansson',
        duracion: 'Duracion: 143 minutos',
        calificacion: 'Calificacion IMDb: 8.0/10',
        curiosidades: 'The Avengers marcó un hito en el cine de superhéroes al reunir a varios personajes de películas individuales en un solo filme.'
    },
    { 
        id: 21, 
        nombre: 'Vengadores 3', 
        year: 'Año de lanzamiento: 2018',
        descripcion: 'Sinopsis: Los Vengadores se unen para enfrentar a Thanos, un poderoso villano que busca reunir las Gemas del Infinito y desencadenar la destrucción en el universo.', 
        fotoPrincipal: 'Vengadores3.jpeg',
        genero: 'Genero: Acción, Aventura, Ciencia ficción',
        direccion: 'Direccion: Anthony Russo, Joe Russo',
        reparto: 'Reparto: Robert Downey Jr., Chris Hemsworth, Josh Brolin',
        duracion: 'Duracion: 149 minutos',
        calificacion: 'Calificacion IMDb: 8.4/10',
        curiosidades: 'Avengers: Infinity War es la culminación de diez años de películas del Universo Cinematográfico de Marvel.'
    },
    { 
        id: 22, 
        nombre: 'Vengadores 4',
        year: 'Año de lanzamiento: 2019', 
        descripcion: 'Sinopsis: Después de los eventos devastadores de Infinity War, los Vengadores restantes se reúnen para deshacer las acciones de Thanos y restaurar el equilibrio en el universo.', 
        fotoPrincipal: 'Vengadores4.jpeg',
        genero: 'Genero: Acción, Aventura, Ciencia ficción',
        direccion: 'Direccion: Anthony Russo, Joe Russo',
        reparto: 'Reparto: Robert Downey Jr., Chris Evans, Scarlett Johansson',
        duracion: 'Duracion: 181 minutos',
        calificacion: 'Calificacion IMDb: 8.4/10',
        curiosidades: 'Avengers: Endgame es la culminación de la Saga del Infinito del Universo Cinematográfico de Marvel.'
    },
    { 
        id: 23, 
        nombre: 'Venom', 
        year: 'Año de lanzamiento: 2018',
        descripcion: 'Sinopsis: Eddie Brock, un periodista, se fusiona con un simbionte alienígena llamado Venom, lo que le otorga poderes sobrenaturales y lo transforma en un antihéroe.', 
        fotoPrincipal: 'Venom.jpeg',
        genero: 'Genero: Acción, Ciencia ficción',
        direccion: 'Direccion: Ruben Fleischer',
        reparto: 'Reparto: Tom Hardy, Michelle Williams, Riz Ahmed',
        duracion: 'Duracion: 112 minutos',
        calificacion: 'Calificacion IMDb: 6.7/10',
        curiosidades: 'Venom es un personaje del universo de Spider-Man, pero esta película no es parte del Universo Cinematográfico de Marvel.'
    },
    { 
        id: 24, 
        nombre: 'Wolverine Inmortal', 
        year: 'Año de lanzamiento: 2013',
        descripcion: 'Sinopsis: Wolverine se encuentra en Japón y se enfrenta a una nueva y peligrosa amenaza mientras confronta sus propios demonios internos.', 
        fotoPrincipal: 'WolverineInmortal.jpeg',
        genero: 'Genero: Acción, Aventura, Ciencia ficción',
        direccion: 'Direccion: Direccion: James Mangold',
        reparto: 'Reparto: Reparto: Hugh Jackman, Tao Okamoto, Rila Fukushima',
        duracion: 'Duracion: Duracion: 126 minutos',
        calificacion: 'Calificacion IMDb: 6.7/10',
        curiosidades: 'Esta película se basa en el arco argumental del cómic japonés "Wolverine" y explora más el pasado del personaje.'
    }
    ];
    return {peliculas};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(peliculas: Pelicula[]): number {
    return peliculas.length > 0 ? Math.max(...peliculas.map(peli => peli.id)) + 1 : 11;
  }
}