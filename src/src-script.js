/**
 * This file will be processed by webpack and loaded on the browser.
 * Will be used in index.html
 */
// import { createApp } from 'vue';
// import { createApp } from 'vue/dist/vue.esm-bundler';
import { createApp } from 'vue';

const Counter = {
  setup() {
    const vdHelloWorld = 'hello world';

    return {
      vdHelloWorld,
    };
  },
};

console.log(Counter);
createApp(Counter).mount('#app-container');

