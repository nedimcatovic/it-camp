var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Bill Gates",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Bill Gates",
    title: "Mockingjay",
    readingStatus: false,
  },
];

for (i = 0; i < library.length; i++) {
  if (library[i].readingStatus === true) {
    console.log(library[i].title);
  } else {
    console.log("Does not read");
  }
}
