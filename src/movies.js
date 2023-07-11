
    const movies = [
        {
            "id": 1,
            "title": "Beetlejuice",
            "year": "1988",
            "runtime": "92",
            "genres": [
                "Comedy",
                "Fantasy"
            ],
            "director": "Tim Burton",
            "actors": "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
            "plot": "A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house.",
            "posterUrl": "https://i0.wp.com/www.filmspourenfants.net/wp-content/uploads/2019/11/beetlejuice-a.jpg?fit=333%2C500&ssl=1"
        },
        {
            "id": 2,
            "title": "The Cotton Club",
            "year": "1984",
            "runtime": "127",
            "genres": [
                "Crime",
                "Drama",
                "Music"
            ],
            "director": "Francis Ford Coppola",
            "actors": "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
            "plot": "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
        },
        {
            "id": 3,
            "title": "The Shawshank Redemption",
            "year": "1994",
            "runtime": "142",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Frank Darabont",
            "actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
            "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "posterUrl": "https://i.ytimg.com/vi/19THOH_dvxg/movieposter_en.jpg"
        },
        {
            "id": 4,
            "title": "Crocodile Dundee",
            "year": "1986",
            "runtime": "97",
            "genres": [
                "Adventure",
                "Comedy"
            ],
            "director": "Peter Faiman",
            "actors": "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
            "plot": "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
        },
        {
            "id": 5,
            "title": "Valkyrie",
            "year": "2008",
            "runtime": "121",
            "genres": [
                "Drama",
                "History",
                "Thriller"
            ],
            "director": "Bryan Singer",
            "actors": "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
            "plot": "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
            "posterUrl": "https://m.media-amazon.com/images/I/51gAGDbXeYL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            "id": 66,
            "title": "The Pianist",
            "year": "2002",
            "runtime": "150",
            "genres": [
                "Biography",
                "Drama",
                "War"
            ],
            "director": "Roman Polanski",
            "actors": "Adrien Brody, Emilia Fox, Michal Zebrowski, Ed Stoppard",
            "plot": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
            "posterUrl": "https://pics.filmaffinity.com/El_pianista-978132965-large.jpg"
        },
        {
            "id": 7,
            "title": "City of God",
            "year": "2002",
            "runtime": "130",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Fernando Meirelles, Kátia Lund",
            "actors": "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
            "plot": "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
        },
        {
            "id": 8,
            "title": "Memento",
            "year": "2000",
            "runtime": "113",
            "genres": [
                "Mystery",
                "Thriller"
            ],
            "director": "Christopher Nolan",
            "actors": "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
            "plot": "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
            "posterUrl": "https://pics.filmaffinity.com/Memento-230609861-large.jpg"
        },
        {
            "id": 9,
            "title": "The Intouchables",
            "year": "2011",
            "runtime": "112",
            "genres": [
                "Biography",
                "Comedy",
                "Drama"
            ],
            "director": "Olivier Nakache, Eric Toledano",
            "actors": "François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot",
            "plot": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
            "posterUrl": "https://www.lab111.nl/wp-content/uploads/2020/11/The-Untouchables-1987-.jpeg"
        },
        {
            "id": 10,
            "title": "Stardust",
            "year": "2007",
            "runtime": "127",
            "genres": [
                "Adventure",
                "Family",
                "Fantasy"
            ],
            "director": "Matthew Vaughn",
            "actors": "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
            "plot": "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"
        },
        {
            "id": 11,
            "title": "Apocalypto",
            "year": "2006",
            "runtime": "139",
            "genres": [
                "Action",
                "Adventure",
                "Drama"
            ],
            "director": "Mel Gibson",
            "actors": "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
            "plot": "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg"
        },
        {
            "id": 12,
            "title": "Taxi Driver",
            "year": "1976",
            "runtime": "113",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Martin Scorsese",
            "actors": "Diahnne Abbott, Frank Adu, Victor Argo, Gino Ardito",
            "plot": "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4ebbd087d8084e2368ea008e70ab5c0286871e65944cef98a46c30de6dc65576._RI_V_TTW_.jpg"
        },
        {
            "id": 13,
            "title": "No Country for Old Men",
            "year": "2007",
            "runtime": "122",
            "genres": [
                "Crime",
                "Drama",
                "Thriller"
            ],
            "director": "Ethan Coen, Joel Coen",
            "actors": "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
            "plot": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"
        },
        {
            "id": 68,
            "title": "Casablanca",
            "year": "1942",
            "runtime": "102",
            "genres": [
                "Drama",
                "Romance",
                "War"
            ],
            "director": "Michael Curtiz",
            "actors": "Humphrey Bogart, Ingrid Bergman, Paul Henreid, Claude Rains",
            "plot": "In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications.",
            "posterUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b3/CasablancaPoster-Gold.jpg"
        },
        {
            "id": 15,
            "title": "Looper",
            "year": "2012",
            "runtime": "119",
            "genres": [
                "Action",
                "Crime",
                "Drama"
            ],
            "director": "Rian Johnson",
            "actors": "Joseph Gordon-Levitt, Bruce Willis, Emily Blunt, Paul Dano",
            "plot": "In 2074, when the mob wants to get rid of someone, the target is sent into the past, where a hired gun awaits - someone like Joe - who one day learns the mob wants to 'close the loop' by sending back Joe's future self for assassination.",
            "posterUrl": "https://resizing.flixster.com/tjLAK669Vn_WsLu2TSoA2bAAMfE=/206x305/v2/https://flxt.tmsimg.com/assets/p9076140_p_v12_ao.jpg"
        },
        {
            "id": 33,
            "title": "Rear Window",
            "year": "1954",
            "runtime": "112",
            "genres": [
                "Mystery",
                "Thriller"
            ],
            "director": "Alfred Hitchcock",
            "actors": "James Stewart, Grace Kelly, Wendell Corey, Thelma Ritter",
            "plot": "A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "id": 17,
            "title": "The Third Man",
            "year": "1949",
            "runtime": "93",
            "genres": [
                "Film-Noir",
                "Mystery",
                "Thriller"
            ],
            "director": "Carol Reed",
            "actors": "Joseph Cotten, Alida Valli, Orson Welles, Trevor Howard",
            "plot": "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg"
        },
        {
            "id": 18,
            "title": "The Beach",
            "year": "2000",
            "runtime": "119",
            "genres": [
                "Adventure",
                "Drama",
                "Romance"
            ],
            "director": "Danny Boyle",
            "actors": "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
            "plot": "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
            "id": 36,
            "title": "Reservoir Dogs",
            "year": "1992",
            "runtime": "99",
            "genres": [
                "Crime",
                "Drama",
                "Thriller"
            ],
            "director": "Quentin Tarantino",
            "actors": "Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn",
            "plot": "After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjE5ZDJiZTQtOGE2YS00ZTc5LTk0OGUtOTg2NjdjZmVlYzE2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
        },
        {
            "id": 37,
            "title": "The Shining",
            "year": "1980",
            "runtime": "146",
            "genres": [
                "Drama",
                "Horror"
            ],
            "director": "Stanley Kubrick",
            "actors": "Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers",
            "plot": "A family heads to an isolated hotel for the winter where an evil and spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2e66017e084cf945ed9fda16a22dd688823b81f91baff260c02007efcb10f9ea._RI_TTW_.jpg"
        },
        {
            "id": 19,
            "title": "Scarface",
            "year": "1983",
            "runtime": "170",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Brian De Palma",
            "actors": "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio",
            "plot": "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg"
        }
    ]
    

module.exports = movies;