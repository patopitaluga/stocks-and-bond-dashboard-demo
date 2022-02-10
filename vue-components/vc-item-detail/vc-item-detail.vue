<script>
import { ref } from 'vue';

export default {
  props: {
    vpItem: Object,
  },
  setup() {
    const vdBuyAmount = ref(0);

    /**
     * Triggered on @click on the buy button.
     */
    const mtdBuy = () => {
      alert(1);
    };

    return {
      vdBuyAmount,
      mtdBuy,
    };
  },
};
</script>

<template>
  <section
    v-if="vpItem && vpItem.name"
    class="detail"
  >
    <p>{{ vpItem.type }}</p>
    <p>{{ vpItem.name }}</p>
    <p>Cotización: {{ $filters.fltrFormatMoney(vpItem.currentValue) }}/unidad</p>

    <p v-if="vpItem.amountSubscribed">Cantidad adquirida: {{ vpItem.amountSubscribed }} unidades</p>
    <p v-if="vpItem.amountSubscribed">Valor total: {{ $filters.fltrFormatMoney(vpItem.amountSubscribed * vpItem.currentValue) }} unidades</p>

    <div>
      <input
        type="number"
        v-model="vdBuyAmount"
      />
      <button
        v-if="vdBuyAmount > 0"
        type="button"
        @click="mtdBuy"
      >
        Comprar
      </button>
    </div>
  </section>
</template>

<style>
</style>
