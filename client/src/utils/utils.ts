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

export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  state: any,
  setValue: any
): void => {
  const { name, value } = e.target as HTMLInputElement;
  setValue({
    ...state,
    [name]: value,
  });
};
