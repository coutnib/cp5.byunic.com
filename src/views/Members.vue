<template>
<div>
  <h3>Check your story here before you post it!</h3>
  <form>
    <input placeholder="Title" class="title">
    <p></p>
    <input placeholder="Post your story here" class="storybox">
    <p></p>
  </form>
  </div>
</template>

<style scoped>
.storybox {
  width: 100%;
  height: 10em;
  text-align: center;
}
.title {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

input {
  display: block;
}

h3 {
 text-align: center;
}
</style>
