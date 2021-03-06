import "antd/dist/antd.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div id="register-modal-container" />
      <div id="plan-modal-container" />
    </>
  );
}

export default MyApp;
