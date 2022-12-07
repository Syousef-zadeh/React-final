import React, { Component } from "react";
import styles from "../css/Style.module.css";
import Footer from "./Footer";
import Header from "./Header";

class Login extends Component {
  myInput = React.createRef();
  goToShop = (e) => {
    console.log(this.props);
    e.preventDefault();
    const urlPath = this.myInput.current.value;
    this.props.history.push(`/login/${urlPath}`);
  };
  render() {
    return (
      <div>
        <Header />
        <div className={styles.login}>
          <form className={styles["shop-form"]} onSubmit={this.goToShop}>
            <p>Login as an Admin</p>
            <div className={styles.result}>
              <input
                className="shop-input"
                type="text"
                placeholder="UserId"
                ref={this.myInput}
                required
              />
              <button className={styles["button-shop"]} type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Login;
