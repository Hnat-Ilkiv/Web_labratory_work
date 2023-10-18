const ITEMS_LIST = document.getElementById("items_container");

let items_list = [
    {
        title: "Funny cat #1",
        used_spase_mb: 24,
        video_time_s: 98
    },
    {
        title: "Funny cat #2",
        used_spase_mb: 48,
        video_time_s: 467
    },
    {
        title: "Funny cat #3",
        used_spase_mb: 74,
        video_time_s: 573
    },
    {
        title: "Funny dog #1",
        used_spase_mb: 53,
        video_time_s: 365
    },
    {
        title: "Funny dog #2",
        used_spase_mb: 97,
        video_time_s: 485
    }
];

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    show_items(items_list);
});
  
function show_items(items_list) {
    ITEMS_LIST.innerHTML = 
    (items_list.length > 0) ? items_list.map((item) => 
        `
        <li>
        <div class="preview_video"></div>
        <h3>${item.title}</h3>
        <p>Space: ${item.used_spase_mb} MB <p>
        <p>Time: ${~~(item.video_time_s / 60)} m ${item.video_time_s % 60} s<p>
        </li>
        `
    ).join("") : "";
    
    // if (items_list.length > 0) {
    //     ITEMS_LIST.innerHTML = items_list.map((item) => 
    //     `
    //     <li>
    //     <div class="preview_video"></div>
    //     <h3>${item.title}</h3>
    //     <p>Space: ${item.used_spase_mb} MB <p>
    //     <p>Time: ${~~(item.video_time_s / 60)} m ${item.video_time_s % 60} s<p>
    //     </li>
    //     `).join("");
    // }
}

function searchItems() {
    const inputContainer = document.getElementById("inputSearchId").value.toLowerCase();

      show_items(items_list.filter((item) => {
        return item.title.toLowerCase().includes(inputContainer);
      }));
}

function sortItems() {
    console.log("sort items");
}

function countItemsSpase() {
    consloe.log("count items spase");
}