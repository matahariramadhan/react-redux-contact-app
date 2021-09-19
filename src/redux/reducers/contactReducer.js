const initState = [
  {
    id: 0,
    name: "Matahari Ramadhan",
    email: "ramadhan.matahari24@gmail.com",
    phoneNumber: "01205495007",
  },
  {
    id: 1,
    name: "Muhtar Bangsat",
    email: "muhtarbangsat@gmail.com",
    phoneNumber: "0123456789",
  },
];

const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "UPDATE_CONTACT":
      return action.payload;
    case "DELETE_CONTACT":
      return action.payload;
    default:
      return state;
  }
};

export default contactReducer;
