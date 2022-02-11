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
      if (!vdBuyAmount.value) return;

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
          vdBuyAmount.value = 0;
          vdSellAmount.value = 0;
          vdNotifyAction.value = 'Operación realizada.';
          setTimeout(() => { vdNotifyAction.value = ''; }, 2000);

          emit('operation');
        })
        .catch((_err) => {
          console.log(_err);
          vdNotifyAction.value = 'La operación no se pudo realizar.';
          setTimeout(() => { vdNotifyAction.value = ''; }, 2000);
        });
    };

    /**
     * Triggered on @click on the sell button.
     */
    const mtdSell = () => {
      if (!vdSellAmount.value) return;

      vdNotifyAction.value = 'Operación en proceso…';
      fetch('/api/sell', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemId: _props.vpItem._id,
          amount: Number(vdSellAmount.value),
        }),
      })
        .then(async(_responseRaw) => {
          vdBuyAmount.value = 0;
          vdSellAmount.value = 0;
          vdNotifyAction.value = 'Operación realizada.';
          setTimeout(() => { vdNotifyAction.value = ''; }, 2000);

          emit('operation');
        })
        .catch((_err) => {
          console.log(_err);
          vdNotifyAction.value = 'La operación no se pudo realizar.';
          setTimeout(() => { vdNotifyAction.value = ''; }, 2000);
        });
    };

    /**
     * Triggered on @change on the sell amount input.
     */
    const mtdDisallowMaxSell = () => {
      if (vdSellAmount.value > _props.vpItem.amountSubscribed)
        vdSellAmount.value = _props.vpItem.amountSubscribed;
    };

    /**
     * To display the type stock/bond as string.
     *
     * @param {string} _type -
     *
     */
    const fltrDisplayType = (_typeEnum) => {
      switch (_typeEnum) {
        case 'stock':
          return 'Acción';
        case 'bond':
          return 'Bono';
        default:
          return '';
      }
    };

    return {
      vdNotifyAction,
      vdBuyAmount,
      vdSellAmount,
      fltrDisplayType,
      mtdDisallowMaxSell,
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
    <p class="detail__subtitle">{{ fltrDisplayType(vpItem.type) }}</p>
    <p class="detail__title">{{ vpItem.name }}</p>

    <hr/>

    <p><strong>Cotización:</strong> {{ $filters.fltrFormatMoney(vpItem.currentValue) }} / unidad</p>

    <p
      v-if="vdNotifyAction"
      class="detail__notification"
    >{{ vdNotifyAction }}</p>

    <div v-if="!vdNotifyAction">
      <p v-if="vpItem.amountSubscribed"><strong>Cantidad adquirida</strong>: {{ vpItem.amountSubscribed }} unidades</p>
      <p v-if="vpItem.amountSubscribed"><strong>Valor total</strong>: {{ $filters.fltrFormatMoney(vpItem.amountSubscribed * vpItem.currentValue) }}</p>

      <hr/>

      <div style="margin-top: 16px;">
        <p class="detail__subtitle">Comprar</p>
        <input
          type="number"
          v-model="vdBuyAmount"
          min="0"
        />
        <button
          v-if="vdBuyAmount > 0"
          class="btn"
          type="button"
          @click="mtdBuy"
        >
          Realizar compra
        </button>
      </div>

      <div
        v-if="vpItem.amountSubscribed"
        style="margin-top: 16px;"
      >
        <p class="detail__subtitle">Vender</p>
        <input
          type="number"
          v-model="vdSellAmount"
          min="0"
          :max="vpItem.amountSubscribed"
          @change="mtdDisallowMaxSell"
        />
        <button
          v-if="vdSellAmount > 0"
          class="btn"
          type="button"
          @click="mtdSell"
        >
          Realizar venta
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../../src/mixins.scss';

.detail {
  @include widget;
}

.detail__subtitle {
  @include subtitle;
}

.detail__title {
  @include title;
}

.detail__notification {
  border: 1px black solid;
  font-size:  14px;
  font-weight: bold;
  padding: 8px;
  margin-bottom: 8px;
  margin-top: 8px;
}
</style>
