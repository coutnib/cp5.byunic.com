<template>
<div id="app">
  <div class="pure-menu">
    <img class="logoimg" src="../public/delight.png">
    <span class="pure-menu-heading">Granny Writers</span>
    <ul class="pure-menu-list">
    <li class="pure-menu-item">
      <router-link to="/newest" class="pure-menu-link">Welcome</router-link>
    </li>
      <li class="pure-menu-item">
        <router-link to="/" class="pure-menu-link">All Stories</router-link>
      </li>
      <li class="pure-menu-item">
        <router-link to="/mypage" class="pure-menu-link">Profile</router-link>
      </li>
      <li class="pure-menu-item">
        <router-link to="/members" class="pure-menu-link">Checker</router-link>
      </li>
    </ul>
  </div>
  <div class="ghfooter">
      <a href="https://github.com/coutnib/cp5.byunic.com.git">GitHub</a>
    </div>
  <div class="content">
    <router-view />
  </div>
</div>
</template>

<style>
/* https://color.adobe.com/Ventana-Azul-color-theme-2159606/?showPublished=true */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 18px;
  display: flex;
  min-height: 100%;
  background-color: #FFDDD4;
}
.logoimg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1em;
  max-width: 20%;
  height: auto;
}
.pure-menu {
  /* To limit the menu width to the content of the menu: */
  /* display: inline-block; */
  /* Or set the width explicitly: */
  text-align: left;
  background: #C9CEFF;
  max-width: 15em;
}

.pure-menu-heading {
  color: #fff;
  font-size: 1.2em;
  padding: 20px 20px;
  background-color: #C9CEFF;
  margin-bottom: 10px;
}

.pure-menu-link {
  color: #fff;
  padding: 10px 20px;
  font-weight: 800;
}

.pure-menu-link:hover {
  background: #707FB3;
}

.pure-menu-link.router-link-exact-active {
  background: #FFDDD4;
  color: #707FB3;
}

.content {
  margin: 50px 100px;
}

html {
  height: 100%;
  box-sizing: border-box;
}

body {
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  /* https://css-tricks.com/box-sizing/ */
}

.error {
  color: #F2385A;
}

.pure-button-primary {
  background-color: #36B1BF;
}

/* Modals */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h1 {
  margin-bottom: 30px;
  font-size: 1.5em;
}

.modal-body {
  margin: 0;
}

.modal-body input {
  margin-bottom: 20px;
  height: 30px;
}

.modal-footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.modal-default-button {
  float: right;
}

.ghfooter {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #E5E5E5;
  color: #8D857A;
  text-align: center;
  max-height: 5%;
  font-size: .5em;
  margin-bottom: 0;
}

/*
  * The following styles are auto-applied to elements with
  * transition="modal" when their visibility is toggled
  * by Vue.js.
  *
  * You can easily play with the modal transition by editing
  * these styles.
  */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
