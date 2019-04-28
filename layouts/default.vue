<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
html, body {
  height: 100%;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.stretched-link:hover {
  text-decoration: none;
  color: rgb(33, 37, 41);
}
.stretched-link {
  text-decoration: none;
  color: rgb(33, 37, 41);
}
.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: auto;
  content: "";
  background-color: rgba(0, 0, 0, 0);
}
.with-shadow {
  box-shadow: 0 6px 20px rgba(180, 180, 180, 0.5);
}
.with-shadow:hover {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
.footer {
  min-height: 5vh;
  background-color: #f5f5f5;
  flex: 1;
}
.content {
  display: flex;
  min-height: 100vh;
  background-color: #f9f9f9;
}
</style>
