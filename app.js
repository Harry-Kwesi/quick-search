const listContainer = document.querySelector(".data-list");
const searchInput = document.querySelector(".searchInput input");

async function fetchData() {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // Create an ordered list
    const ul = document.createElement("ul");

    // Function to create and append a list item
    function createListItem(text) {
      const listItem = document.createElement("li");
      listItem.textContent = text;
      ul.appendChild(listItem);
    }

    // Function to filter and update the displayed list
    function updateList() {
      const searchTerm = searchInput.value.toLowerCase(); // Get the search term
      ul.innerHTML = ""; // Clear the existing list items

      // Filter the data based on the search term and create list items
      const artists = data.Reggae;
      artists.forEach((item) => {
        const itemText = item.toLowerCase();
        if (itemText.includes(searchTerm)) {
          createListItem(item); // Use the reusable function
        }
      });
    }

    // Initial list display
    updateList();

    // Listen for input events on the search input field
    searchInput.addEventListener("input", updateList);

    // Append the unordered list to the container element
    listContainer.appendChild(ul);
  } catch (error) {
    console.error("There was a problem with the fetch operation", error);
  }
}

fetchData();

// const listContainer = document.querySelector(".data-list");
// const searchInput = document.querySelector(".searchInput input");

// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json"
//     );
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();

//     //Create an ordered list
//     const ul = document.createElement("ul");

//     // Loop through the JSON data and create list items
//     const artists = data.Reggae;
//     artists.forEach((artist) => {
//       const listItem = document.createElement("li");
//       listItem.textContent = artist;
//       ul.appendChild(listItem);
//     });

//     // Function to filter and update the displayed list
//     function updateList() {
//       const searchTerm = searchInput.value.toLowerCase(); // Get the search term
//       ul.innerHTML = ""; // Clear the existing list items

//       // Filter the data based on the search term and create list items
//       artists.forEach((item) => {
//         const itemText = item.toLowerCase(); // Convert item text to lowercase for case-insensitive search
//         if (itemText.includes(searchTerm)) {
//           const listItem = document.createElement("li");
//           listItem.textContent = item; // Modify this to display the appropriate JSON property
//           ul.appendChild(listItem);
//         }
//       });
//     }

//     // Initial list display
//     updateList();

//     // Listen for input events on the search input field
//     searchInput.addEventListener("input", updateList);

//     //Append the unordered list to the container element
//     listContainer.appendChild(ul);
//   } catch (error) {
//     console.error("There was a problem with the fetch operation", error);
//   }
// }

// fetchData();
