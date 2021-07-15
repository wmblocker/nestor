// Mocking server responses for hack day
const PRODUCT_MANAGER = "Project Manager";
const SOFTWARE_ENGINEER = "Software Engineer";
const SOFTWARE_ENGINEERING_MANAGER = "Software Engineering Manager";
const DATA_SCIENTIST = "Data Scientist";

const _mentors = [
  { name: "Amita Paul", jobTitle: PRODUCT_MANAGER },
  { name: "William Blocker", jobTitle: SOFTWARE_ENGINEER },
  { name: "Matiwos Birdo", jobTitle: SOFTWARE_ENGINEER },
  { name: "Oren Levy", jobTitle: SOFTWARE_ENGINEERING_MANAGER },
  { name: "Alejandra Budar", jobTitle: DATA_SCIENTIST },
  { name: "Christopher Harris", jobTitle: SOFTWARE_ENGINEER },
];

export default {
  getMentors(cb) {
    setTimeout(() => cb(_mentors), 100);
  },
};
