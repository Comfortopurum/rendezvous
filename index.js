  const events = [
    {
      image: "images/Rectangle 3.svg",
      title: "ISWISS Live Show",
      date: "SAT, OCT 5th • 9pm",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "images/Rectangle 3 (1).svg",
      title: "Music Night",
      date: "FRI, OCT 12th • 7pm",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      image: "images/Rectangle 3 (2).svg",
      title: "Comedy Fest",
      date: "SUN, OCT 20th • 8pm",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  
  const container = document.getElementById("events-container");

  
  events.forEach((event) => {
    
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow";

    
    const imgWrapper = document.createElement("div");
    imgWrapper.className = "relative h-64";
    const img = document.createElement("img");
    img.src = event.image;
    img.alt = event.title;
    img.className = "absolute inset-0 w-full h-full object-contain";
    imgWrapper.appendChild(img);

    
    const content = document.createElement("div");
    content.className = "p-6";

    const title = document.createElement("h3");
    title.className = "font-bold mb-2";
    title.textContent = event.title;

    const date = document.createElement("h3");
    date.className = "text-sm mb-2";
    date.textContent = event.date;

    const desc = document.createElement("p");
    desc.className = "text-gray-600 text-sm mb-4";
    desc.textContent = event.description;

    
    const button = document.createElement("button");
    button.className = "text-purple-900 font-semibold hover:text-purple-700 transition-colors flex items-center gap-2";
    button.innerHTML = `
      View details
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    `;

    
    content.appendChild(title);
    content.appendChild(date);
    content.appendChild(desc);
    content.appendChild(button);

   
    card.appendChild(imgWrapper);
    card.appendChild(content);

    
    container.appendChild(card);
  });

