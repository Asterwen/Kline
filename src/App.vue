<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
button,
textarea,
p,
blockquote,
th,
td {
    margin: 0;
    padding: 0;
}

body {
    background: rgba(249,249,249,1);
    color: #555;
    font-size: 14px;
    font-family: Verdana, Arial, Helvetica, sans-serif;
}
html,body{
  height: 100%;
}
#app{
  height: 100%;
}
td,
th,
caption {
    font-size: 14px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: normal;
    font-size: 100%;
}

address,
caption,
cite,
code,
dfn,
em,
strong,
th,
i,
b,
strong {
    font-style: normal;
    font-weight: normal;
}

a {
    color: #555;
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

img {
    border: none;
    vertical-align: middle;
}

ol,
ul,
li {
    list-style: none;
}

input,
textarea,
select,
button {
    font: 14px Verdana, Helvetica, Arial, sans-serif;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

html {
    overflow-y: scroll;
}

.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

.clearfix {
    *zoom: 1;
}
</style>
