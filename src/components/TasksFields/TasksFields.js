import React from "react";

export const TasksFields = ({
  className,
  onChangeTitle,
  onChangeDescription,
  valueTitle,
  valueDescription,
}) => {
  return (
    <>
      <input
        type="text"
        className={className}
        value={valueTitle}
        placeholder="Título de la tarea"
        onChange={onChangeTitle}
      />
      <textarea
        type="text"
        className={className}
        value={valueDescription}
        placeholder="Descripción"
        onChange={onChangeDescription}
      ></textarea>
    </>
  );
};
