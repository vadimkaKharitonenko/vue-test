<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

  #app {
    max-width: 600px;
    margin: 0 auto;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-smooth: always;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility!important;
    font-smoothing: antialiased!important;
    text-shadow: rgba(0, 0, 0, .01) 0 0 0.5px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -webkit-font-variant-ligatures: none;
    -webkit-font-smoothing: antialiased!important;
    font-synthesis: none;
    -moz-font-feature-settings: 'kern';
  }

  body {
    margin: 0;
    overflow-x: hidden;
    font-family: 'OpenSansLight', sans-serif;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
  }

  a {
    color: unset;
    text-decoration: unset;
  }

  input {
    margin: 0;
    font-family: 'OpenSansLight', sans-serif;
    font-size: 18px;
    border: none;
  }

  @font-face {
    font-family: 'OpenSansLight';
    src: url('./assets/fonts/OpenSansLight.eot');
    src: url('./assets/fonts/OpenSansLight.eot') format('embedded-opentype'),
    url('./assets/fonts/OpenSansLight.woff2') format('woff2'),
    url('./assets/fonts/OpenSansLight.woff') format('woff'),
    url('./assets/fonts/OpenSansLight.ttf') format('truetype'),
    url('./assets/fonts/OpenSansLight.svg#OpenSansLight') format('svg');
  }

  .header {
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding: 16px 0;
    border-bottom: 1px solid #c1bdbd;
    background-color: white;
  }

</style>
