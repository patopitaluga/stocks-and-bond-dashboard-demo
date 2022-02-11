<script>
import { computed, onMounted, ref, watch } from 'vue';

import { initPieChart } from './vc-total__pie-chart';

export default {
  props: {
    vpPortfolio: Array,
  },
  setup(_props) {
    const cptdTotal = computed(() => {
      if (!_props.vpPortfolio) return '';
      return _props.vpPortfolio
        .reduce((_sum, _eachInvestment) => _sum + _eachInvestment.currentValue, 0);
    });

    watch(() => _props.vpPortfolio, (_newVal) => { // Since the prop might be empty initially because of race condition.
      initPieChart(_newVal);
    });
    window.addEventListener('resize', () => initPieChart(_props.vpPortfolio));

    onMounted(() => {
      if (_props.vpPortfolio && _props.vpPortfolio.length > 0)
        initPieChart(_props.vpPortfolio);
    });

    return {
      cptdTotal,
    };
  },
};
</script>

<template>
  <section class="total">
    <p class="total__title">Valor total cartera</p>
    <p style="font-size: 18px;">{{ $filters.fltrFormatMoney(cptdTotal) }}</p>
    <div>
      <div
        id="piechart"
        class="total__pie-chart"
      ></div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../../src/mixins.scss';

.total {
  @include widget;
}

.total__title {
  @include title;
}

.total__pie-chart {
  aspect-ratio: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: 450px;
  width: 100%;
}
</style>
