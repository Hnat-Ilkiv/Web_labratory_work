const ITEMS_LIST = document.getElementById("items_container");
const divResult = document.getElementById("countDivResult");
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
    },
    {
        title: "Funny animals #1",
        used_spase_mb: 74,
        video_time_s: 573
    },
    {
        title: "Funny cat #3",
        used_spase_mb: 74,
        video_time_s: 573
    },
    {
        title: "Funny cat #2",
        used_spase_mb: 48,
        video_time_s: 467
    },
    {
        title: "Funny cat #1",
        used_spase_mb: 24,
        video_time_s: 98
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