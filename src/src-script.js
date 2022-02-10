/**
 * This file will be processed by webpack and loaded on the browser.
 * Will be used in index.html
 */
import { createApp } from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue';

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
    const vdUserSavings = ref(null); // Number
    const vdUserInvestments = ref(null); // Array

    /**
     * Triggered on mounted
     */
    const fetchInitialData = () => {
      fetch('/api/user-portfolio', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async(_responseRaw) => {
          const responseArray = await _responseRaw.json();
          vdUserSavings.value = responseArray.savings;
          vdUserInvestments.value = responseArray.investments;
        })
        .catch((_err) => {
          console.log(_err);
        });
    };

    onMounted(() => {
      fetchInitialData();
    });

    return {
      vdUserSavings,
      vdUserInvestments,
    };
  },
});

showMeTheMoneyApp.config.globalProperties.$filters = {
  /**
   * Format money
   *
   * @param {number} _value - In cents.
   * @return {string}
   */
  fltrFormatMoney(_value) {
    if (!_value) return '';
    return '$' + (_value / 100).toFixed(2).replace('.', ',');
  },
};

showMeTheMoneyApp.mount('#app-container');

