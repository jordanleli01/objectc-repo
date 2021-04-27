let favmov1 = {
    name: "Pulp Fiction",
    year: "1994",
    director: "Quentin Tarantino",
    picture: "https://www.miramax.com/media/assets/Pulp-Fiction1.png"
};

let favmov2 = {
    name: "No Country For Old Men",
    year: "2007",
    director: " The Coen brothers",
    picture: "https://images-na.ssl-images-amazon.com/images/I/51U1qJ70-ML.jpg"
};

let favmov3 = {
    name: "City of God",
    year: "2002",
    director: "Fernando Meirelles and Kaitia Lund",
    picture: "https://e.snmc.io/i/300/s/c892ff5dea1ed023dc427a3ec720e8e9/4686600"
};

let favmovs = [favmov1, favmov2, favmov3];

let ol = document.querySelector("ol");

for(let i = 0; i < 3; i ++) {
    let li = document.createElement("li");
    li.innerHTML = "Name:" + favmovs[i].name + "<br>Year:" + favmovs[i].year + "<br>oirector:" + favmovs[i].director + "<br><br>";
    
    let img = document.createElement("img");
    img.src = favmovs[i].picture;

    li.appendChild(img);

    ol.appendChild(li);
}