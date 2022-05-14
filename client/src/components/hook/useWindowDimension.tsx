import { useEffect, useState } from "react";

interface IProps {
  width: number;
  height: number;
}
function getWindowDimension(): IProps {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

function useWindowDimension() {
  const [windowDimension, setWindowDimension] = useState(getWindowDimension());

  const updateSize = (): void => {
    setWindowDimension(getWindowDimension());
  };

  useEffect(() => {
    window.onresize = updateSize;
  }, []);

  return windowDimension.width;
}

export default useWindowDimension;
