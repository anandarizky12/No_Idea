import Cookies from "js-cookie";

export const setCookie = (key: string, value: any): void => {
  if (typeof window !== "undefined") {
    Cookies.set(key, value, {
      expires: 1,
      path: "/",
    });
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



export const colorArray = [
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

