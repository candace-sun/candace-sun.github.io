let base_url = "public/photography-compressed/";
let file_map = {
    "Iceland": [
        ["iceland/glacier.jpg", 'medium'],
        ["iceland/svartifoss.jpg", 'medium'],
        ["iceland/puffin-sunny.jpg", 'medium'],
        ["iceland/valley.jpg", 'medium'],
        ["iceland/thermal-features.jpg", 'medium'],
        ["iceland/black-cliffs.jpg", 'large'],
        ["iceland/godafoss.jpg", 'medium'],
        ["iceland/glacier-reflection.jpg", 'medium'],

        ["iceland/rainbow.jpg", 'medium'],
        ["iceland/horses.jpg", 'medium'],
        ["iceland/black-sand-water.jpg", 'medium'],
        ["iceland/flowers-closeup.jpg", 'large'],
        ["iceland/sunset-glacier.jpg", 'medium'],
        ["iceland/town.jpg", 'medium'],
        ["iceland/sunny-beach.jpg", 'medium'],
        ["iceland/puffin-dark.jpg", 'medium'],
        ["iceland/black-sand-shore.jpg", 'medium'],
        ["iceland/sheep.jpg", 'medium'],
        ["iceland/mountain.jpg", 'medium'],

    ],
    "San Diego": [
        ["san-diego/bird-forward.jpg", 'medium'],
        ["san-diego/seals.jpg", 'medium'],
        ["san-diego/sd-park.jpg", 'large'],
        ["san-diego/seagull-flowers.jpg", 'medium'],
        ["san-diego/seal-splash.jpg", 'large'],
        ["san-diego/surfer.jpg", 'medium'],
        ["san-diego/seals-basking.jpg", 'large'],
        ["san-diego/wall-of-birds.jpg", 'medium'],
        ["san-diego/yellow-bird.jpeg", 'medium'],
        ["san-diego/hummingbird.jpg", 'large'],
        ["san-diego/koala.jpg", 'medium'],
        ["san-diego/flamingos.jpg", 'medium'],
        ["san-diego/ocean-view.jpg", 'medium'],
        ["san-diego/fluffy-bird.jpg", 'medium'],

    ],
    "NYC": [
        ["nyc/buses.jpg", 'medium'],
        ["nyc/central-park.jpeg", 'medium'],
        ["nyc/city-morning.jpg", 'large'],
        ["nyc/tower.jpeg", 'large'],
        ["nyc/nyc-building.jpg", 'large'],
        ["nyc/moon.jpg", 'medium'],
        ["nyc/pizza-store.jpg", 'medium'],
        ["nyc/traffic.jpg", 'large'],
        ["nyc/chinatown.jpg", 'large'],
        ["nyc/looking-up.jpg", 'large'],
        ["nyc/soccer.jpg", 'medium'],

    ],
    "Portugal": [
        ["portugal/fairyland.jpg", 'large'],
        ["portugal/ocean-cliffs.jpg", 'medium'],
        ["portugal/palace.jpg", 'large'],
        ["portugal/palace-tower.jpg", 'large'],
        ["portugal/peacock.jpeg", 'medium'],
        ["portugal/stairs.jpg", 'large'],
        ["portugal/fireworks.jpg", 'large'],
        ["portugal/viewing-the-viewpoint.jpg", 'medium'],
        ["portugal/yellow-walls.jpg", 'large'],
        ["portugal/horse.jpg", 'medium'],
        ["portugal/bookstore.jpg", 'large'],
        ["portugal/blue-tiles.jpg", 'large'],
        ["portugal/church-ceiling.jpg", 'large'],
        ["portugal/ducks.jpg", 'large'],
        ["portugal/night-lightpaint.jpg", 'medium'],
        ["portugal/local-dog.jpg", 'large'],
        ["portugal/between-buildings.jpg", 'large'],
        ["portugal/castle.jpg", 'large'],
        ["portugal/sandpiper.jpg", 'medium'],
        ["portugal/bridge.jpeg", 'large'],
        ["portugal/train-station.jpg", 'large'],
        ["portugal/shadow-in-field.jpg", 'large'],
        ["portugal/bird-and-statue.jpg", 'medium'],

    ],
    "Night in DC": [
        ["night-in-dc/car-1.jpg", 'medium'],
        ["night-in-dc/neon-sign.jpg", 'large'],
        ["night-in-dc/night_duck.jpg", 'large'],
        ["night-in-dc/store-reflections.jpg", 'xlarge'],
        ["night-in-dc/empty.jpg", 'medium'],
        ["night-in-dc/streetlights.jpg", 'large'],
        ["night-in-dc/car-2.jpg", 'medium'],

    ],
    "Summer": [
        ["summer/porch.jpg", 'large'],
        ["summer/grand-teton.jpg", 'medium'],
        ["summer/mckeldin.jpg", 'large'],
        ["summer/bubbles.jpg", 'medium'],
        ["summer/waterfall.jpg", 'large'],
        ["summer/heron.jpg", 'large'],
        ["summer/lichen.jpg", 'medium'],
        ["summer/female-blackbird.jpg", 'medium'],

    ],
};

function renderGallery(category) {
    document.getElementById("button-selection").innerHTML = category;

    const gallery = document.getElementById("gallery");
    gallery.innerHTML = '';

    file_map[category].forEach(([url, size]) => {
        let item = document.createElement("div");
        let min_url = url.replace('.','-min.');
        item.style.backgroundImage = `url(${base_url + min_url})`;
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
            modalImg.src = base_url + min_url;
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
    });

    let button_list = document.getElementById("button-list");
    button_list.appendChild(inputElement);
});


renderGallery("Iceland");