export const handleChange = (e: any, state: any, setValue: any) => {
  const { name, value } = e.target as HTMLInputElement;
  setValue({
    ...state,
    [name]: value,
  });
};
