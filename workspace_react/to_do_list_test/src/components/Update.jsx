import React, { useEffect, useState } from "react";
import edit from "./edit.png";
import del from "./delete.png";
import { use } from "react";
import styles from "./Update.module.css";

const Update = ({ item, toDoList, setToDoList }) => {
  // 수정할때 input등장 시키기
  const [isEdit, setIsEdit] = useState(false);
  // 수정 input태그 안의 내용 변경
  const [newText, setNewText] = useState("");

  const updateList = () => {
    setToDoList(
      toDoList.map((list, i) => {
        if (list.id === item.id) {
          list.text = newText;
        }
        return list;
      })
    );
  };

  return (
    <>
      {isEdit ? (
        <div className={styles.update_input_div}>
          <input
            type="text"
            name="newText"
            defaultValue={item.text}
            onChange={(e) => {
              setNewText(e.target.value);
            }}
          />
            <button
              type="button"
              onClick={(e) => {
                updateList();
                setIsEdit(false);
              }}
            >
              확인
            </button>
            <button
              type="button"
              onClick={(e) => {
                setIsEdit(false);
              }}
            >
              취소
            </button>
        </div>
      ) : (
        <div className={styles.list_div}>
          <p>{item.text}</p>
          <div>
            <img
              src={edit}
              onClick={(e) => {
                setIsEdit(true);
              }}
            />
            <img
              src={del}
              onClick={(e) => {
                setToDoList(
                  toDoList.filter((list) => {
                    return list.id !== item.id;
                  })
                );
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Update;
