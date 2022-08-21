import React from "react";
import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div>
      <div class={style.center}>
        <div class={style.ring}></div>
        <span class={style.loading}>loading...</span>
      </div>
    </div>
  );
};

export default Loading;
