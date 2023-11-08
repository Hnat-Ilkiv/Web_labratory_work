const itemPlace = document.getElementById("items_container");
const divResult = document.getElementById("countDivResult");
const saveButton = document.getElementById("save_button");

let itemList = [];


async function displayItem() {
    await getItemList();
    itemPlace.innerHTML = (itemList.length  > 0) ?
                          itemList.map(item =>
                              `
                              <li>
                              <div class="preview_video"></div>
                              <h3>${item.title}</h3>
                              <p>Space: ${item.spaseMb} MB </p>
                              <p>Time: ${~~(item.timeSecond / 60)} m ${item.timeSecond % 60} s</p>
                              <button onclick="editeItems('${item.id}')">Edite Video</button>
                              </li>
                              `).join("") :
                          "";
}

function getItemList() {
    return fetch('http://localhost:3000/item')
        .then(response => response.json())
        .then(data => {
            itemList = data;
            console.log("Data stored in itemList:", itemList);
        })
        .catch(error => console.error('Error:', error));
}

function createItems() {
    const name = document.getElementById("video_name_create_input").value.trim();
    const size = document.getElementById("used_spase_mb_create_input").value;
    const time = document.getElementById("video_time_s_create_input").value;

    if (itemList.some(item => item.title === name)) {
        alert("An element with that name already exists.");
    } else if (!name) {
        alert("Name is missing.");
    } else {
        const newItem = {
            title: name,
            spaseMb: size,
            timeSecond: time
        };

        fetch('http://localhost:3000/item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                itemList.push(data.newItem);
                document.getElementById('create_modal').style.display = 'none';
                displayItem();
            })
            .catch(error => console.error('Error:', error));
    }
}

function editeItems(elementId) {
    let element = itemList.find(item => item.id === elementId);

    saveButton.innerHTML = `<button class="manager_button" onclick="saveItems('${element.id}')">Save</button>`

    document.getElementById('edite_modal').style.display='block';
    document.getElementById('video_name_edite_input').value = element.title;
    document.getElementById('used_spase_mb_edite_input').value = element.spaseMb;
    document.getElementById('video_time_s_edite_input').value = element.timeSecond;
}

function saveItems(item_id) {
    const name = document.getElementById("video_name_edite_input").value.trim();
    const size = document.getElementById("used_spase_mb_edite_input").value;
    const time = document.getElementById("video_time_s_edite_input").value;

    if (!name) {
        alert("Name is missing or contains only spaces.");
    } else {
        fetch(`http://localhost:3000/item/${item_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: name,
                spaseMb: size,
                timeSecond: time
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // оновлення локальних даних або виклик інших функцій
            })
            .catch(error => console.error('Error:', error));
    }
}


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    displayItem();
});

// function createItems() {
//     const name = document.getElementById("video_name_create_input").value;
//     if(items_list.some(item => item.title == name)){
//         alert("An element with that name already exists.")
//     }
//     else if (name == "") {
//         alert("Name is missing.")
//     }
//     else {
//         const size = document.getElementById("used_spase_mb_create_input").value;
//         const time = document.getElementById("video_time_s_create_input").value;
//         const new_item = {
//             title: name,
//             used_spase_mb: size,
//             video_time_s: time
//         };
//
//         items_list.push(new_item);
//
//         document.getElementById('create_modal').style.display='none';
//         show_items(items_list);
//     }
// }
//
// function editeItems(item_name) {
//     let element = items_list.find(item => item.title == item_name);
//
//     saveButton.innerHTML = `<button class="manager_button" onclick="saveItems('${element.title}')">Save</button>`
//
//     document.getElementById('edite_modal').style.display='block';
//     document.getElementById('video_name_edite_input').value = element.title;
//     document.getElementById('used_spase_mb_edite_input').value = element.used_spase_mb;
//     document.getElementById('video_time_s_edite_input').value = element.video_time_s;
// }
//
// function saveItems(item_name){
//     const name = document.getElementById("video_name_edite_input").value;
//     const size = document.getElementById("used_spase_mb_edite_input").value;
//     const time = document.getElementById("video_time_s_edite_input").value;
//
//     let element = items_list.find(item => item.title == item_name);
//
//     element.title = null;
//     if(items_list.some(item => item.title == name)){
//         element.title = item_name;
//         alert("An element with that name already exists.")
//     }
//     else if (name == "") {
//         alert("Name is missing.")
//     }
//     else {
//         element.used_spase_mb = size;
//         element.video_time_s = time;
//
//         document.getElementById('edite_modal').style.display='none';
//         saveButton.innerHTML = ``;
//         show_items(items_list);
//     }
// }
//
// function searchItems() {
//     console.log("search items")
//     const inputContainer = document.getElementById("inputSearchId").value.toLowerCase();
//
//       show_items(items_list.filter((item) => {
//         return item.title.toLowerCase().includes(inputContainer);
//       }));
// }
//
// function sortItems() {
//     console.log("sort items");
//         show_items(items_list.slice().sort((a, b) => {
//             const titleA = a.title.toUpperCase();
//             const titleB = b.title.toUpperCase();
//
//             if (titleA < titleB) {
//                 return -1;
//             }
//             if (titleA > titleB) {
//                 return 1;
//             }
//
//             return 0;
//         }));
//     }
// }
//
function countItemsSpase() {
    console.log("count items spase");
    divResult.innerHTML = `
    <p>Used storage: ${itemList.reduce((total, item) => total + Number(item.spaseMb), 0)} MB</p>
    `;
}
//
// // Виконуємо GET-запит
// fetch('http://localhost:3000/items')
//   .then(response => response.json())
//   .then(data => {
//     // Зберігаємо отримані дані у змінну items_list
//     items_list = data;
//     // Виконуємо додаткову обробку, якщо необхідно
//     console.log("Отримані дані:", items_list);
//   })
//   .catch(error => {
//     // Обробка помилок
//     console.error('Помилка:', error);
//   });
//
// // Приклад запиту POST
// const data = { title: 'My New Video', used_spase_mb: 200, video_time_s: 300 };
// fetch('http://localhost:3000/items', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Success:', data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
