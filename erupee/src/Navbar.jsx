// Navbar.js
import React from 'react';
import { NavLink} from 'react-router-dom';
import styles from "./style.module.css";
import './neumorphism.css';
  
const Navbar = () => {
  
  return (
 
    <div className="nav-wrapper position-relative">
        <ul className="nav nav-pills nav-fill flex-column flex-sm-row">
          <li className="nav-item">
            <NavLink className="nav-link mb-sm-3 mb-md-0 active" data-toggle="tab" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" id="payment"><g fill="none" fill-rule="evenodd"><path fill="#F4F4F4" d="M111.999 0H8C3.582 0 0 3.59 0 8.008v59.984C0 72.415 3.591 76 8.001 76H112c4.419 0 8.001-3.59 8.001-8.008V8.008C120 3.585 116.409 0 111.999 0Z"></path><path fill="#2C97DE" d="M112.822 24.104h-3.151l-.005.001h-.002c-.721 0-1.453.538-1.658 1.222-.008.028-.022.054-.029.083l-.205.911-4.329 19.107c-.1.431-.167.713-.187.786l.009.01c-.15.668.262 1.22.939 1.283l.009.012h3.27c.717 0 1.444-.533 1.655-1.209.01-.032.026-.063.034-.096l4.722-20.805-.007-.002c.16-.712-.31-1.303-1.065-1.303ZM96.659 42.882a9.298 9.298 0 0 1-1.383.694c-.65.255-1.267.389-1.837.389-.876 0-1.548-.12-2.003-.378-.456-.245-.694-.67-.687-1.278 0-.703.167-1.248.511-1.675.348-.411.863-.742 1.503-.99.636-.21 1.418-.382 2.321-.506.803-.099 2.391-.277 2.594-.278.203-.002.338-.11.248.416-.04.23-.499 2.062-.709 2.895-.061.25-.402.614-.558.711 0 0 .156-.097 0 0Zm6.23-12.88c-1.336-.728-3.428-1.095-6.29-1.095-1.416 0-2.838.11-4.265.327-1.048.156-1.156.182-1.807.32-1.339.283-1.545 1.589-1.545 1.589l-.43 1.722c-.244 1.102.4 1.056.687.97.585-.171.902-.342 2.094-.605 1.14-.252 2.345-.44 3.306-.433 1.41 0 2.481.15 3.194.44.713.303 1.066.818 1.066 1.556.002.175.007.34-.058.486-.059.134-.171.265-.508.31-2.012.116-3.456.294-5.195.541-1.715.236-3.217.639-4.471 1.197-1.338.578-2.34 1.351-3.029 2.331-.672.984-1.01 2.176-1.01 3.58 0 1.328.489 2.41 1.436 3.25.96.83 2.206 1.24 3.715 1.24.943-.006 1.681-.072 2.21-.2a11.32 11.32 0 0 0 1.697-.567c.45-.183.937-.448 1.45-.781.515-.334.87-.571 1.327-.862l.017.027-.129.552c0 .006-.008.008-.008.014l.004.01c-.147.665.264 1.218.94 1.283l.008.012h.06l.002.003c.45 0 1.99-.001 2.71-.003h.503c.033 0 .037-.01.05-.018.69-.082 1.352-.63 1.508-1.287L104.7 35.1c.06-.255.106-.549.134-.887.032-.34.07-.622.059-.825.006-1.53-.67-2.66-2.003-3.388Zm-15.487-2.463c-.439-.832-1.101-1.501-1.94-2.023-.859-.52-1.88-.883-3.062-1.094-1.169-.2-2.559-.314-4.142-.318l-7.369.004c-.758.013-1.503.593-1.678 1.307l-4.954 20.993c-.18.714.312 1.308 1.057 1.304l3.536-.006c.75.006 1.513-.584 1.69-1.298l1.196-5.094c.167-.714.93-1.312 1.692-1.302h1.005c4.312 0 7.656-.862 10.05-2.58 2.388-1.726 3.59-3.99 3.59-6.806-.007-1.23-.222-2.265-.67-3.087ZM79.8 34.405c-1.055.747-2.536 1.122-4.442 1.122h-.876c-.758.009-1.248-.588-1.068-1.304l1.056-4.455c.158-.705.927-1.305 1.675-1.299l1.157-.006c1.352.006 2.363.226 3.061.664.686.443 1.02 1.13 1.025 2.045.002 1.395-.528 2.468-1.588 3.233"></path><path fill="#265697" d="M62.61 28.907c-.67 0-1.55.532-1.967 1.175 0 0-4.488 7.538-4.929 8.291-.24.405-.482.148-.522-.003-.033-.183-1.391-8.238-1.391-8.238-.153-.649-.845-1.206-1.71-1.203l-2.798.004c-.674 0-1.095.53-.945 1.17 0 0 2.14 11.878 2.556 14.672.208 1.545-.021 1.819-.021 1.819l-2.774 4.737c-.406.643-.183 1.169.488 1.169l3.243-.003c.671 0 1.561-.523 1.96-1.167l12.477-20.672s1.193-1.766.092-1.75c-.75.01-3.758 0-3.758 0ZM39.189 42.882a9.345 9.345 0 0 1-1.382.693c-.65.254-1.27.39-1.839.39-.873 0-1.547-.122-2.002-.378-.455-.246-.695-.67-.687-1.28 0-.7.168-1.247.512-1.674.347-.412.86-.743 1.5-.99.638-.21 1.423-.381 2.323-.505.803-.099 2.393-.276 2.595-.28.202 0 .337-.11.247.417-.04.229-.498 2.063-.709 2.896-.063.25-.404.614-.558.711 0 0 .154-.097 0 0Zm6.231-12.881c-1.337-.727-3.428-1.094-6.29-1.094-1.416 0-2.838.11-4.266.326-1.05.155-1.155.182-1.806.32-1.34.284-1.546 1.589-1.546 1.589l-.43 1.723c-.243 1.1.402 1.055.688.97.583-.172.902-.342 2.094-.606 1.139-.251 2.345-.439 3.305-.433 1.41 0 2.481.15 3.194.44.713.303 1.064.82 1.064 1.556.005.176.009.342-.055.485-.06.136-.173.266-.51.31-2.01.118-3.453.296-5.194.543-1.716.236-3.217.639-4.472 1.196-1.338.578-2.338 1.353-3.026 2.332-.674.984-1.011 2.176-1.013 3.58 0 1.327.49 2.41 1.437 3.25.96.83 2.206 1.24 3.715 1.24.943-.006 1.68-.073 2.21-.2.524-.13 1.095-.312 1.696-.567.452-.183.937-.45 1.451-.782.513-.333.87-.57 1.33-.861l.013.027-.128.551c-.001.005-.008.009-.008.015l.005.009c-.147.667.262 1.219.94 1.283l.008.013h.059l.001.004 2.71-.004h.504c.034 0 .038-.011.049-.018.692-.085 1.352-.632 1.51-1.287L47.23 35.1c.058-.254.105-.548.131-.885.034-.343.072-.623.062-.825.006-1.531-.67-2.662-2.004-3.39Zm-16.088-2.462c-.439-.832-1.101-1.501-1.94-2.023-.859-.52-1.88-.883-3.062-1.094-1.169-.2-2.559-.314-4.142-.318l-7.369.004c-.758.013-1.503.593-1.678 1.307L6.186 46.408c-.18.714.312 1.308 1.057 1.304l3.536-.006c.75.006 1.514-.584 1.69-1.298l1.196-5.094c.167-.714.93-1.312 1.692-1.302h1.005c4.312 0 7.656-.862 10.05-2.58 2.389-1.726 3.59-3.99 3.59-6.806-.007-1.23-.222-2.265-.67-3.087Zm-7.601 6.866c-1.056.747-2.537 1.122-4.443 1.122h-.876c-.758.009-1.248-.588-1.068-1.304l1.057-4.455c.157-.705.926-1.305 1.674-1.299l1.158-.006c1.351.006 2.362.226 3.06.664.686.443 1.02 1.13 1.025 2.045.003 1.395-.527 2.468-1.587 3.233"></path></g></svg></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" to="/login">Login</NavLink>
          </li>
 
          <li className="nav-item">
            <NavLink className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" to="/deposit">Deposit</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" to="/withdraw">Withdraw</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" to="/transfer">Transfer</NavLink>
          </li>
        </ul>
      </div>
  );
};

export default Navbar;
