/**
 * This file will be processed by webpack and loaded on the browser.
 * Will be used in index.html
 */
import { createApp } from 'vue';
import myInvestments from '../vue-components/vc-my-investments/vc-my-investments.vue';
import otherInvestments from '../vue-components/vc-other-investments/vc-other-investments.vue';
import total from '../vue-components/vc-total/vc-total.vue';

const showMeTheMoneyApp = createApp({
  components: {
    'my-investments': myInvestments,
    'other-investments': otherInvestments,
    'total': total,
  },
  setup() {
    const vdHelloWorld = 'hello world';

    return {
      vdHelloWorld,
    };
  },
});

showMeTheMoneyApp.mount('#app-container');

