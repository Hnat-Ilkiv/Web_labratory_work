const ITEMS_LIST = document.getElementById("items_container");
const divResult = document.getElementById("countDivResult");
const saveButton = document.getElementById("save_button");
let sortFlag = false;

let items_list = [
    {
        title: "Funny people #1",
        used_spase_mb: 846,
        video_time_s: 1743
    },
    {
        title: "Funny dog #2",
        used_spase_mb: 97,
        video_time_s: 485
    },
    {
        title: "Funny dog #1",
        used_spase_mb: 53,
        video_time_s: 365
    },
    {
        title: "Funny animals #3",
        used_spase_mb: 96,
        video_time_s: 593
    },
    {
        title: "Funny animals #2",
        used_spase_mb: 14,
        video_time_s: 382
    }
];

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    show_items(items_list);
});
  
function show_items(items_list) {
    ITEMS_LIST.innerHTML = 
    (items_list.length > 0) ? items_list.map(item =>
        `
        <li>
        <div class="preview_video"></div>
        <h3>${item.title}</h3>
        <p>Space: ${item.used_spase_mb} MB </p>
        <p>Time: ${~~(item.video_time_s / 60)} m ${item.video_time_s % 60} s</p>
        <button onclick="editeItems('${item.title}')">Edite Video</button>
        </li>
        `
    ).join("") : "";
}

function createItems() {
    const name = document.getElementById("video_name_create_input").value;
    if(items_list.some(item => item.title == name)){
        alert("An element with that name already exists.")
    }
    else if (name == "") {
        alert("Name is missing.")
    }
    else {
        const size = document.getElementById("used_spase_mb_create_input").value;
        const time = document.getElementById("video_time_s_create_input").value;
        const new_item = {
            title: name,
            used_spase_mb: size,
            video_time_s: time
        };

        items_list.push(new_item);

        document.getElementById('create_modal').style.display='none';
        show_items(items_list);
    }
}

function editeItems(item_name) {
    let element = items_list.find(item => item.title == item_name);

    saveButton.innerHTML = `<button class="manager_button" onclick="saveItems('${element.title}')">Save</button>`

    document.getElementById('edite_modal').style.display='block';
    document.getElementById('video_name_edite_input').value = element.title;
    document.getElementById('used_spase_mb_edite_input').value = element.used_spase_mb;
    document.getElementById('video_time_s_edite_input').value = element.video_time_s;
}

function saveItems(item_name){
    const name = document.getElementById("video_name_edite_input").value;
    const size = document.getElementById("used_spase_mb_edite_input").value;
    const time = document.getElementById("video_time_s_edite_input").value;

    let element = items_list.find(item => item.title == item_name);

    element.title = null;
    if(items_list.some(item => item.title == name)){
        element.title = item_name;
        alert("An element with that name already exists.")
    }
    else if (name == "") {
        alert("Name is missing.")
    }
    else {
        element.used_spase_mb = size;
        element.video_time_s = time;

        document.getElementById('edite_modal').style.display='none';
        saveButton.innerHTML = ``;
        show_items(items_list);
    }
}

function searchItems() {
    console.log("search items")
    const inputContainer = document.getElementById("inputSearchId").value.toLowerCase();

      show_items(items_list.filter((item) => {
        return item.title.toLowerCase().includes(inputContainer);
      }));
}

function sortItems() {
    console.log("sort items");
    
    if (sortFlag) {
        sortFlag = false;
        show_items(items_list);
    }
    else {
        sortFlag = true;
        show_items(items_list.slice().sort((a, b) => {
            const titleA = a.title.toUpperCase();
            const titleB = b.title.toUpperCase();

            if (titleA < titleB) {
                return -1;
            }
            if (titleA > titleB) {
                return 1;
            }

            return 0;
        }));
    }
}

function countItemsSpase() {
    console.log("count items spase");
    divResult.innerHTML = `
    <p>Used storage: ${items_list.reduce((total, item) => total + item.used_spase_mb, 0)} MB</p>
    `;
}
