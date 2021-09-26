import { chatApi } from "../Api/Api";

const SET_CURRENT_CHAT = "SET_CURRENT_CHAT";
const ADD_SMS = "ADD_SMS";
let initialState = {
  usersData: [
    {
      id: 1,
      name: "Misha",
      lastMessage: "why do u write me",
      date: "26/12/2018",
      photo: "",
      messages: [
        {
          message: "Hello there, my name is Michael, what's ur name?",
          date: "26/12/2018",
          mine: false,
        },
        {
          message: "Hey there Michael, my name is Michael too",
          date: "26/12/2018",
          mine: true,
        },
        {
          message: "why do u write me?",
          date: "26/12/2018",
          mine: true,
        },
      ],
    },
    {
      id: 2,
      name: "Vasia",
      lastMessage: "how are u",
      date: "15/11/2019",
      photo: "",
      messages: [
        { message: "hello there", date: "15/11/2019", mine: false },
        { message: "how are u", date: "15/11/2020", mine: false },
      ],
    },
    {
      id: 3,
      name: "Kate",
      lastMessage: "this day of the week",
      date: "04/10/2017",
      photo: "",
      messages: [
        {
          message: "helloo my bratan, wha u been up 2?",
          date: "11/10/2017",
          mine: false,
        },
        { message: "this day of the week", date: "15/10/2017", mine: false },
      ],
    },
    {
      id: 4,
      name: "Eliza",
      lastMessage: "i know it for sure",
      date: "16/11/2017",
      photo: "",
      messages: [
        {
          message: "i'm the best amd u know it",
          date: "16/11/2017",
          mine: false,
        },
        { message: "i know it for sure", date: "22/01/2020", mine: true },
      ],
    },
    {
      id: 5,
      name: "Petro",
      lastMessage: "why u want to kill me",
      date: "05/11/2017",
      photo: "",
      messages: [
        { message: "hello there", date: "5/11/2017", mine: false },
        { message: "why u want to kill me", date: "10/12/2017", mine: false },
      ],
    },
    {
      id: 6,
      name: "Stiopa",
      lastMessage: "i'm having breakfast right now, cant u wait for 10 minutes",
      date: "15/01/2020",
      photo: "",
      messages: [
        {
          message:
            "Quicly come to the meeting room 1b,we have a big server issue",
          date: "15/01/2020",
          mine: false,
        },
        {
          message: "i'm having breakfast right now, cant u wait for 10 minutes",
          date: "19/01/2020",
          mine: true,
        },
      ],
    },
    {
      id: 7,
      name: "Adrian",
      lastMessage: "thanks , i like u too",
      date: "18/02/2017",
      photo: "",
      messages: [
        {
          message: "You are the worst, but i like u",
          date: "18/02/2017",
          mine: false,
        },
        { message: "thanks , i like u too", date: "19/03/2018", mine: true },
      ],
    },
    {
      id: 8,
      name: "Karl",
      lastMessage: "this day is so hard",
      date: "14/04/2013",
      photo: "",
      messages: [
        { message: "hello there", date: "14/04/2013", mine: false },
        { message: "this day is so hard", date: "16/05/2014", mine: true },
      ],
    },
    {
      id: 9,
      name: "Oleg",
      lastMessage: "blank space",
      date: "14/06/2019",
      photo: "",
      messages: [
        { message: "blank spaceeeee", date: "14/06/2019", mine: false },
        { message: "blank space", date: "15/07/2020", mine: true },
      ],
    },
    {
      id: 10,
      name: "Stefania",
      lastMessage: "man i like u",
      date: "12/08/2017",
      photo: "",
      messages: [
        { message: "never mind", date: "12/08/2017", mine: false },
        { message: "man i like u", date: "13/09/2017", mine: true },
      ],
    },
  ],
  currentName: "",
  currentMessages: "",
  currentId: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CHAT: {
      return {
        ...state,
        currentName: action.name,
        currentMessages: action.messages,
        currentId: action.id,
      };
    }
    case ADD_SMS: {
      let id = action.id;
      const userInf = state.usersData.map((el) => {
        if (el.id === id) {
          el.date = action.userDate;
          el.lastMessage = action.message;
          el.messages = [
            ...el.messages,
            { message: action.message, date: action.date, mine: action.mine },
          ];
        }
        return el;
      });
      return {
        ...state,
        ...state.usersData,
        usersData: userInf,
      };
    }
    default:
      return state;
  }
};
export const setCurrentChat = (name, messages, id) => {
  return {
    type: SET_CURRENT_CHAT,
    name,
    messages,
    id,
  };
};
export const addSms = (message, id, date, userDate, mine = true) => {
  return {
    type: ADD_SMS,
    message,
    id,
    date,
    userDate,
    mine,
  };
};

export const getJokesThunk = (date, id, userDate) => {
  return (dispatch) => {
    chatApi.getJoke().then((response) => {
      dispatch(addSms(response.data.value, id, date, userDate, false));
    });
  };
};

export default usersReducer;
