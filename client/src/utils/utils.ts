import Cookies from "js-cookie";

export const setCookie = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    Cookies.set(key, value, {
      expires: 1,
      path: "/",
    });
  }
};

export const removeCookie = (key: string) => {
  if (typeof window !== "undefined") {
    Cookies.remove(key, {
      expires: 1,
    });
  }
};

export const getCookie = (key: any) => {
  if (typeof window !== "undefined") {
    return Cookies.get(key);
  }
  return null;
};

export const handleChange = (e: any, state: any, setValue: any) => {
  const { name, value } = e.target as HTMLInputElement;
  setValue({
    ...state,
    [name]: value,
  });
};
