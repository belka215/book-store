import { FC } from "react";
import "./index.scss";

export const Spinner: FC = () => {
  return (
    <div className="spinner">
      <div className="spinner__spin"></div>
    </div>
  );
};