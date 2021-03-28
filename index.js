var myMovies = [
  {
    name: "Dragon Ball Super: Broly",
    year: "2018",
    director: "Tatsuya Nagamine",
    picture: "movie1.jpg",
  },
  {
    name: "Spider-Man 3",
    year: "Sam Raimi",
    director: "Blaah Blaah",
    picture: "movie2.jpg",
  },
  {
    name: "Sonic the Hedgehog",
    year: "2020",
    director: "Jeffrey Fowler",
    picture: "movie3.jpg",
  },
  {
    name: "A Silent Voice",
    year: "2016",
    director: "Naoko Yamada",
    picture: "movie4.jpg",
  },
  {
    name: "Demon Slayer: Kimetsu no Yaiba the Movie: Mugen Train",
    year: "2020",
    director: "Haruo Sotozaki",
    picture: "movie5.jpg",
  },
];

var list_items = myMovies.map((movie) => {
  var item = `<li>Name: ${movie["name"]}<br>
                  Year: ${movie["year"]}<br>
                  Name: ${movie["director"]}<br>
                  <img src="${movie["picture"]}"/><br>
              </li><br>`;
  return item;
});

var content = "";
list_items.forEach((item) => {
  content += item;
});

document.getElementById("mylist").innerHTML = content;
