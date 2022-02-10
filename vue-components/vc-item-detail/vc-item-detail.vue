<script>
import { ref } from 'vue';

export default {
  props: {
    vpItem: Object,
  },
  setup(_props, { emit }) {
    const vdBuyAmount = ref(0);
    const vdSellAmount = ref(0);
    const vdNotifyAction = ref('');

    /**
     * Triggered on @click on the buy button.
     */
    const mtdBuy = () => {
      vdNotifyAction.value = 'Operación en proceso…';
      fetch('/api/buy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemId: _props.vpItem._id,
          amount: Number(vdBuyAmount.value),
        }),
      })
        .then(async(_responseRaw) => {
          vdNotifyAction.value = 'Operación realizada.';
          setTimeout(() => { vdNotifyAction.value = ''; }, 2000);

          emit('operation');
        })
        .catch((_err) => {
          console.log(_err);
        });
    };

    /**
     * Triggered on @click on the sell button.
     */
    const mtdSell = () => {
      vdNotifyAction.value = 'Operación en proceso…';
      fetch('/api/sell', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemId: _props.vpItem._id,
          amount: Number(vdBuyAmount.value),
        }),
      })
        .then(async(_responseRaw) => {
          vdNotifyAction.value = 'Operación realizada.';
          setTimeout(() => { vdNotifyAction.value = ''; }, 2000);

          emit('operation');
        })
        .catch((_err) => {
          console.log(_err);
        });
    };

    return {
      vdNotifyAction,
      vdBuyAmount,
      vdSellAmount,
      mtdSell,
      mtdBuy,
      mtdSell,
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

    <p
      v-if="vdNotifyAction"
      class="detail__notification"
    >{{ vdNotifyAction }}</p>

    <div v-if="!vdNotifyAction">
      <p v-if="vpItem.amountSubscribed">Cantidad adquirida: {{ vpItem.amountSubscribed }} unidades</p>
      <p v-if="vpItem.amountSubscribed">Valor total: {{ $filters.fltrFormatMoney(vpItem.amountSubscribed * vpItem.currentValue) }} unidades</p>

      <p>Comprar</p>
      <input
        type="number"
        v-model="vdBuyAmount"
      />
      <button
        v-if="vdBuyAmount > 0"
        type="button"
        @click="mtdBuy"
      >
        Realizar compra
      </button>

      <div v-if="vpItem.amountSubscribed">
        <p>Vender</p>
        <input
          type="number"
          v-model="vdSellAmount"
        />
        <button
          v-if="vdSellAmount > 0"
          type="button"
          @click="mtdSell"
        >
          Realizar venta
        </button>
      </div>
    </div>
  </section>
</template>

<style>
.detail__notification {
  border: 1px black solid;
  font-size:  14px;
  font-weight: bold;
  padding: 8px;
  margin-bottom: 8px;
  margin-top: 8px;
}
</style>
