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

export const timer = (date : string) =>{

  if(!date){
    return "Tidak ada batas waktu"
  }
  let countDownDate = new Date(date).getTime();

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

    // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval();
    return "Waktu Habis" 
  }

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  let time = days + "d " + hours + "h "+ minutes + "m " 
  // + seconds + "s "

  return time;


}

export const getAverage = (scores_min : number, scores_max : number , arr : any)=>{
    let total = 0
    for (let i = 0 ; i < arr.length ; i++){
      if(arr[i].score >= scores_min && arr[i].score <= scores_max ){
        total += 1
      }
    }

    return Math.round((total/arr.length) * 100)
    // return total > 0 ? Math.round((100 * arr.length) / (total * (arr.length > 1 ? 10 : 0))) == Infinity ? 100 : Math.round((100 * arr.length) / (total * (arr.length > 1 ? 10 : 0))) : 0;
}

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

  console.log(question)
  const newQuestion: any = question.length >= 1 ? [...question] : [{
    no: 1,
    question_0: null,
    answer_key_0: null,
    }];
  
  if(question.length < 1) return   setQuestion(newQuestion);
  newQuestion.push({
    no: newQuestion.length + 1,
  });
  setQuestion(newQuestion);

};

export const deleteQuestion = (question : any, setQuestion : any) => {
  if (question.length <= 0) {
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


