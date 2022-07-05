import Cookies from "js-cookie";

export const setCookie = (key: string, value: any): void => {
  if (typeof window !== "undefined") {
    Cookies.set(key, value, {
      expires: 1,
      path: "/",
    });
  }
};

export const conditionalScore = (score: number) => {
  if (score >= 89) {
    return "Sangat Baik";
  } else if (score >= 70) {
    return "Baik";
  } else if (score >= 60) {
    return "Cukup";
  } else if (score >= 50) {
    return "Kurang";
  } else {
    return "Sangat Kurang";
  }
};

export const removeCookie = (key: string): void => {
  if (typeof window !== "undefined") {
    Cookies.remove(key, {
      expires: 1,
    });
  }
};

export const getCookie = (key: any) => {
  // if (typeof window !== "undefined") {
  return Cookies.get(key);
  // }
  // return null;
};

export const handleChange = (e: any, state: any, setValue: any): void => {
  const { name, value } = e.target as HTMLInputElement;
  setValue({
    ...state,
    [name]: value,
  });
};
export const handleChangeQuestion = (e: any, state: any, index : number): void => {
  const { name, value } = e.target as HTMLInputElement;
  let newArr = [...state];
  newArr[index][name] = value;
};

export const handleChangeAnswer = (e: any, state: any, index : number, setAnswer : any, steps : any): void => {
  const { name, value } = e.target as HTMLInputElement;

  setAnswer({
    ...state,
    [index]: {
      ...state[index],
      [name]: value,
      question_id : steps[index].id,
    },
  })
};


export const addQuestion = (question : any, setQuestion : any) => {
  if (question.length >= 10) {
    alert("Jumlah Soal Maksimal 10");
    return;
  }
  const newQuestion: any = [...question];
  newQuestion.push({
    no: newQuestion.length + 1,
  });
  setQuestion(newQuestion);
};

export const deleteQuestion = (question : any, setQuestion : any) => {
  if (question.length <= 1) {
    alert("Jumlah Soal Minimal 1");
    return;
  }
  const newQuestion: any = [...question];
  newQuestion.pop();
  setQuestion(newQuestion);
};



export const colorArray : Array<string> = [
  "blue",
  "green",
  "purple",
  "red",
  "orange",
  "pink",
  "yellow",
  "cyan",
  "teal",
  "indigo",
  "violet",
  "gray",
  "green",
  "blue",
  "purple",
  "red",
  "orange",
  "pink",
  "yellow",
  "cyan",
  "teal",
  "indigo",
  "violet",
  "gray",
];


