import React, { useState } from "react";
import listOfUser from "../Jsons/testList";
import styles from "../css/Style.module.css";

function Search(userInfo) {
  const [search, setSearch] = useState("");
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [visibleSearch, setVisibleSearch] = useState(false);

  const handleClick = () => {
    setVisibleDetails(!visibleDetails);
    setVisibleSearch(!visibleSearch);
  };

  return (
    <div>
      <h3 className={styles.title}>Tests List</h3>
      <input
        className={styles.search}
        required
        type="text"
        placeholder="Search test"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {listOfUser
        .filter((user) => {
          if (search === "") {
            return user;
          } else if (user.name.toLowerCase().includes(search.toLowerCase())) {
            return user;
          }
        })
        .map((user, key) => {
          return (
            <div>
              <div
                className={styles["serch-form"]}
                onClick={handleClick}
                key={key}
              >
                <div className={styles.align}>
                  <h3>{user.name}</h3>
                  <div>{user.Description}</div>
                </div>
              </div>

            </div>
          );
        })}
    </div>
  );
}
export default Search;
