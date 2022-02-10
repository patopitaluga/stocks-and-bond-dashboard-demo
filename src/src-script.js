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
import itemDetail from '../vue-components/vc-item-detail/vc-item-detail.vue';

const showMeTheMoneyApp = createApp({
  components: {
    'my-investments': myInvestments,
    'other-investments': otherInvestments,
    'total': total,
    'item-detail': itemDetail,
  },
  setup() {
    const vdUserSavings = ref(null); // Number
    const vdUserInvestments = ref(null); // Array
    const vdAvailableInvestments = ref(null); // Array
    const vdDisplayingItem = ref(null); // Array

    /**
     * Triggered on mounted and on @operation (buy/sale) in the detail component.
     */
    const mtdFetchPortfolio = () => {
      vdUserSavings.value = null; // to display loading again if already fetched
      vdUserInvestments.value = null;
      fetch('/api/user-portfolio', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async(_responseRaw) => {
          const responseObject = await _responseRaw.json();
          vdUserSavings.value = responseObject.savings;
          vdUserInvestments.value = responseObject.investments;
          // if already displaying one item, update it
          if (vdDisplayingItem && vdDisplayingItem.value && vdDisplayingItem.value._id)
            vdDisplayingItem.value = responseObject.investments.find((_eachInvestment) => _eachInvestment._id === vdDisplayingItem.value._id);
        })
        .catch((_err) => {
          console.log(_err);
        });
    };

    /**
     * Triggered on mounted
     */
    const fetchAvailableInvestments = () => {
      fetch('/api/available-investments', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(async(_responseRaw) => {
          const responseArray = await _responseRaw.json();
          vdAvailableInvestments.value = responseArray;
        })
        .catch((_err) => {
          console.log(_err);
        });
    };

    onMounted(() => {
      mtdFetchPortfolio();
      fetchAvailableInvestments();
    });

    /**
     * Triggered on @selected on the my investments or available investments components.
     *
     * @param {object} _itemToBeDisplayed
     */
    const mtdShowDetail = (_itemToBeDisplayed) => {
      vdDisplayingItem.value = _itemToBeDisplayed;
    };

    return {
      vdUserSavings,
      vdUserInvestments,
      vdAvailableInvestments,
      vdDisplayingItem,
      mtdShowDetail,
      mtdFetchPortfolio,
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
    let valueAsString = (_value / 100).toFixed(2).replace('.', ',');
    const parts = valueAsString.split(',');
    const integerPart = String(parts[0])
    let intergerPartWithThousandSeparator = '';
    let countUp = 0;
    for (let r = integerPart.length - 1; r >= 0; r--) {
      const thousandSeparator = (countUp > 0 && countUp % 3 === 0) ? '.' : ''
      intergerPartWithThousandSeparator = integerPart[r] + thousandSeparator + intergerPartWithThousandSeparator;
      countUp++;
    }
    return '$ ' + intergerPartWithThousandSeparator  + ',' + String(parts[1]);
  },
};

showMeTheMoneyApp.mount('#app-container');

