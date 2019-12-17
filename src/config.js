//objects passed as props to components

const intro = {
  pitch:
    "Hi, welcome to my porfolio. Take a look around to get a glimpse into who I am and what I do.",
  name: "Brooklyn Rauckman",
  projects: "My Projects",
  about:
    "I enjoy solving problems and bringing ideas to life. I am a lifelong learner, eager to take on a new professional challenge."
};

const projects = [
  {
    app: "https://confident-euler-0c7809.netlify.com/",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=400&w=400",
    caption:
      "Search for sustainable swaps. See how much you could save. Save swaps and share your list with your friends.",
    id: "swaps"
  },
  {
    app: "https://competent-rosalind-8f9dcf.netlify.com/",
    thumbnail:
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=400&w=400",
    caption:
      "Explore mind-blowing comparisons involving objects in outer space. Add your name to the guest galaxy, and see who else has joined.",
    id: "space"
  },
  {
    app: "https://reverent-mcclintock-1d3ef5.netlify.com/",
    thumbnail:
      "https://images.unsplash.com/photo-1566107222733-864261c6ae3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400",
    caption:
      "This is a flexible goal tracking app. Users can log in with google, add/remove custom challenges, and mark challanges as acheived.",
    id: "goals"
  },
  {
    app: "",
    thumbnail:
      "https://images.unsplash.com/photo-1494888427482-242d32babc0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400",
    caption:
      "(Under Construction): This project will calculate age of early retirement based on user input.",
    id: "calculator"
  }
];

export default {
  intro: intro,
  projects: projects
};
