import React from "react";

export const Task = ({ className, title, onDelete }) => {
  return (
    <div className={className}>
      <p>{title}</p>
      <span className="task__delete" onClick={onDelete}>
        X
      </span>
    </div>
  );
};
