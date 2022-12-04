import React, { Component } from "react";
import styles from "./css/Style.module.css";

class Login extends Component {
  myInput = React.createRef();
  goToShop = (e) => {
    console.log(this.props);
    e.preventDefault();
    const urlPath = this.myInput.current.value;
    this.props.history.push(`/results/${urlPath}`);
  };
  render() {
    return (
      <div className={styles.login}>
        <form className={styles["shop-form"]} onSubmit={this.goToShop}>
          <p>See My Result</p>
          <div className={styles.result}>
            <input
              className="shop-input"
              type="text"
              placeholder="UserId"
              ref={this.myInput}
              required
            />
            <button className={styles["button-shop"]} type="submit">
              Go
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
