document.getElementById('fetchButton').addEventListener('click', () => {
    fetchData()
        .then((data) => {
            document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        })
        .catch((error) => {
            document.getElementById('output').textContent = `Error: ${error}`;
        });
});

function fetchData() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}


/*document.getElementById('fetchButton').addEventListener('click', async () => {
    try {
        const data = await fetchData();
        document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('output').textContent = `Error: ${error}`;
    }
});

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
*/


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemen = document.getElementById("sidemenu");

function openmenu(){
    sidemen.style.right="0";
}

function closemenu(){
    sidemen.style.right="-200px";
}