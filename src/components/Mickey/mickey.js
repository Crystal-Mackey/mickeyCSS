import React from "react";
import ReactDOM from 'react-dom';



const Mickey = function mickey() {
      return (    <div id="mickey">
      <div class="ear left"></div>
      <div class="ear right"></div>
      <div class="head"></div>
      <div class="face">
          <div class="front left"></div>
          <div class="front right"></div>
          <div class="cheek left"></div>
          <div class="cheek right"></div>
          <div class="chin"></div>
          <div class="mouth-wrapper">
              <div class="mouth">
                  <div class="tong1"></div>
                  <div class="tong2"></div>
              </div>
              <div class="lip"></div>
              <div class="line left"></div>
              <div class="line right"></div>
          </div>
          <div class="eyes">
              <div class="eye left">
                  <div class="pupil"></div>
                  <div class="eyelid-top"></div>
                  <div class="eyelid-bottom"></div>
              </div>
              <div class="eye right">
                  <div class="pupil"></div>
                  <div class="eyelid-top"></div>
                  <div class="eyelid-bottom"></div>
              </div>
          </div>
          <div class="topnose"></div>
          <div class="nose"></div>
      </div>
  </div>);
    }
  


 export default Mickey;