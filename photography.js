let base_url = "public/photography/";
let file_map = {
    "San Diego": [
        [base_url + "san-diego/bird-forward.jpg", 'medium'],
        [base_url + "san-diego/seals.jpg", 'medium'],
        [base_url + "san-diego/sd-park.jpg", 'large'],
        [base_url + "san-diego/seagull-flowers.jpg", 'medium'],
        [base_url + "san-diego/seal-splash.jpg", 'large'],
        [base_url + "san-diego/surfer.jpg", 'medium'],
        [base_url + "san-diego/seals-basking.jpg", 'large'],
        [base_url + "san-diego/wall-of-birds.jpg", 'medium'],
        [base_url + "san-diego/yellow-bird.jpeg", 'medium'],
        [base_url + "san-diego/hummingbird.jpg", 'large'],
        [base_url + "san-diego/koala.jpg", 'medium'],
        [base_url + "san-diego/flamingos.jpg", 'medium'],
        [base_url + "san-diego/ocean-view.jpg", 'medium'],
        [base_url + "san-diego/fluffy-bird.jpg", 'medium'],

    ],
    "NYC": [
        [base_url + "nyc/buses.jpg", 'medium'],
        [base_url + "nyc/central-park.jpeg", 'medium'],
        [base_url + "nyc/city-morning.jpg", 'large'],
        [base_url + "nyc/tower.jpeg", 'large'],
        [base_url + "nyc/nyc-building.jpg", 'large'],
        [base_url + "nyc/moon.jpg", 'medium'],
        [base_url + "nyc/pizza-store.jpg", 'medium'],
        [base_url + "nyc/traffic.jpg", 'large'],
        [base_url + "nyc/chinatown.jpg", 'large'],
        [base_url + "nyc/looking-up.jpg", 'large'],
        [base_url + "nyc/soccer.jpg", 'medium'],

    ],
    "Iceland": [
        [base_url + "iceland/glacier.jpg", 'medium'],
        [base_url + "iceland/svartifoss.jpg", 'medium'],
        [base_url + "iceland/puffin-sunny.jpg", 'medium'],
        [base_url + "iceland/valley.jpg", 'medium'],
        [base_url + "iceland/thermal-features.jpg", 'medium'],
        [base_url + "iceland/black-cliffs.jpg", 'large'],
        [base_url + "iceland/godafoss.jpg", 'medium'],
        [base_url + "iceland/glacier-reflection.jpg", 'medium'],

        [base_url + "iceland/rainbow.jpg", 'medium'],
        [base_url + "iceland/horses.jpg", 'medium'],
        [base_url + "iceland/black-sand-water.jpg", 'medium'],
        [base_url + "iceland/flowers-closeup.jpg", 'large'],
        [base_url + "iceland/sunset-glacier.jpg", 'medium'],
        [base_url + "iceland/town.jpg", 'medium'],
        [base_url + "iceland/sunny-beach.jpg", 'medium'],
        [base_url + "iceland/puffin-dark.jpg", 'medium'],
        [base_url + "iceland/black-sand-shore.jpg", 'medium'],
        [base_url + "iceland/sheep.jpg", 'medium'],
        [base_url + "iceland/mountain.jpg", 'medium'],

    ],
    "Portugal": [
        [base_url + "portugal/fairyland.jpg", 'large'],
        [base_url + "portugal/ocean-cliffs.jpg", 'medium'],
        [base_url + "portugal/palace.jpg", 'large'],
        [base_url + "portugal/palace-tower.jpg", 'large'],
        [base_url + "portugal/peacock.jpeg", 'medium'],
        [base_url + "portugal/stairs.jpg", 'large'],
        [base_url + "portugal/fireworks.jpg", 'large'],
        [base_url + "portugal/viewing-the-viewpoint.jpg", 'medium'],
        [base_url + "portugal/yellow-walls.jpg", 'large'],
        [base_url + "portugal/horse.jpg", 'medium'],
        [base_url + "portugal/bookstore.jpg", 'large'],
        [base_url + "portugal/blue-tiles.jpg", 'large'],
        [base_url + "portugal/church-ceiling.jpg", 'large'],
        [base_url + "portugal/ducks.jpg", 'large'],
        [base_url + "portugal/night-lightpaint.jpg", 'medium'],
        [base_url + "portugal/local-dog.jpg", 'large'],
        [base_url + "portugal/between-buildings.jpg", 'large'],
        [base_url + "portugal/castle.jpg", 'large'],
        [base_url + "portugal/sandpiper.jpg", 'medium'],
        [base_url + "portugal/bridge.jpeg", 'large'],
        [base_url + "portugal/train-station.jpg", 'large'],
        [base_url + "portugal/shadow-in-field.jpg", 'large'],
        [base_url + "portugal/bird-and-statue.jpg", 'medium'],

    ],
    "Night in DC": [
        [base_url + "night-in-dc/car-1.jpg", 'medium'],
        [base_url + "night-in-dc/neon-sign.jpg", 'large'],
        [base_url + "night-in-dc/night_duck.jpg", 'large'],
        [base_url + "night-in-dc/store-reflections.jpg", 'xlarge'],
        [base_url + "night-in-dc/empty.jpg", 'medium'],
        [base_url + "night-in-dc/streetlights.jpg", 'large'],
        [base_url + "night-in-dc/car-2.jpg", 'medium'],

    ],
    "Summer": [
        [base_url + "summer/porch.jpg", 'large'],
        [base_url + "summer/grand-teton.jpg", 'medium'],
        [base_url + "summer/mckeldin.jpg", 'large'],
        [base_url + "summer/bubbles.jpg", 'medium'],
        [base_url + "summer/waterfall.jpg", 'large'],
        [base_url + "summer/heron.jpg", 'large'],
        [base_url + "summer/lichen.jpg", 'medium'],
        [base_url + "summer/female-blackbird.jpg", 'medium'],

    ],
};

function renderGallery(category) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = '';

    file_map[category].forEach(([url, size]) => {
        let item = document.createElement("div");
        item.style.backgroundImage = `url(${url})`;
        item.classList.add('photoItem--' + size);
        console.log('photoItem--' + size);
        item.classList.add('photoItem');

        // let desc = document.createElement("div");
        // desc.innerHTML = "help";
        // desc.classList.add('photoItem__details');
        // item.appendChild(desc);

        item.onclick = function() {
            let modal = document.createElement("div");
            let modalImg = document.createElement("img");
            let caption = document.createElement("div");
            let close = document.createElement("span");
            modal.classList.add('modal');
            close.classList.add('close');
            modalImg.classList.add('modal-content');
            caption.classList.add('modal-caption');

            modal.style.display = "block";
            modalImg.src = url;
            caption.innerHTML = url;
            close.innerHTML = "&times;";
            
            close.onclick = function() { 
                modal.style.display = "none";
            }
            
            modal.appendChild(close);
            modal.appendChild(modalImg);
            modal.appendChild(caption);

            let body = document.getElementById("body");
            body.appendChild(modal);
            
        }
        
        let src = document.getElementById("gallery");
        src.appendChild(item);
    });

}

Object.keys(file_map).forEach((category) => {
    var inputElement = document.createElement("input");
    inputElement.type = "button";
    inputElement.value = category;
    inputElement.addEventListener('click', function(){
        renderGallery(category);
        document.getElementById("button-selection").innerHTML = category;
    });

    let button_list = document.getElementById("button-list");
    button_list.appendChild(inputElement);
});


renderGallery("San Diego");