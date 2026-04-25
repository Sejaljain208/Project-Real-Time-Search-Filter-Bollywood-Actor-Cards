// Array of user objects (each user has name, image, and bio)
const users = [
    {
        name: "amitabh bachchan",
        pic: "https://i.pinimg.com/736x/69/2f/f9/692ff9dd08fdaf579da152db7648df9e.jpg",
        bio: "Most popular actor in Bollywood."
    },
    {
        name: "shahrukh khan",
        pic: "https://i.pinimg.com/736x/b6/03/7d/b6037de906fd65e2352bdadc4b6dd24d.jpg",
        bio: "Shahrukh Khan is a Bollywood actor and producer."
    },
    {
        name: "salman khan",
        pic: "https://i.pinimg.com/736x/ee/83/ac/ee83ace4b8ac56cc90bfba714609040d.jpg",
        bio: "Salman Khan is a famous Bollywood actor."
    },
    {
        name: "amir khan",
        pic: "https://i.pinimg.com/736x/09/84/47/098447bda3c7490faaba552082389f44.jpg",
        bio: "Aamir Khan is a versatile actor and director."
    },
    {
        name: "akshay kumar",
        pic: "https://i.pinimg.com/736x/d7/d7/df/d7d7dff42f38d37fcb64acdc014797fa.jpg",
        bio: "Fitness king and popular Bollywood actor."
    },
    {
        name: "ranveer singh",
        pic: "https://i.pinimg.com/736x/fc/88/58/fc885825c5d0fb6e3842baddf430b497.jpg",
        bio: "Ranveer Singh is known for energetic performances."
    }
];

// Selecting the container where all cards will be displayed
const cardsContainer = document.querySelector(".cards");

// Selecting the input field for real-time search
const inp = document.querySelector(".inp");

// Function to display users on screen
function showUser(arr) {

    // Clear old cards before showing new ones
    cardsContainer.innerHTML = "";

    // Loop through each user in array
    arr.forEach(user => {

        // Create outer card div
        const card = document.createElement("div");
        card.classList.add("card");

        // Create image element
        const img = document.createElement("img");
        img.src = user.pic;
        img.alt = user.name;
        img.classList.add("bg-img");

        // Create blurred background layer
        const blurredLayer = document.createElement("div");
        blurredLayer.classList.add("blurred-layer");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;

        // Create content container
        const content = document.createElement("div");
        content.classList.add("content");

        // Create heading for user name
        const heading = document.createElement("h3");
        heading.textContent = user.name;

        // Create paragraph for user bio
        const para = document.createElement("p");
        para.textContent = user.bio;

        // Add heading and paragraph inside content div
        content.append(heading, para);

        // Add image, blurred layer, and content inside card
        card.append(img, blurredLayer, content);

        // Finally add card inside cards container
        cardsContainer.appendChild(card);
    });
}

// Show all users when page loads first time
showUser(users);

// Add real-time search functionality
inp.addEventListener("input", () => {

    // Get input value, convert to lowercase, remove extra spaces
    const value = inp.value.toLowerCase().trim();

    // Filter users whose name includes typed text
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(value)
    );

    // Show only filtered users
    showUser(filteredUsers);
});