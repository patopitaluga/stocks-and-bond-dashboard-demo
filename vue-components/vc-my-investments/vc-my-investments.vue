<script>
import loading from '../vc-loading/vc-loading.vue';

export default {
  components: {
    'loading': loading,
  },
  props: {
    vpSavings: Number,
    vpInvestments: Array,
  },
  data() {
    return {
      greeting: 'Hello World!'
    };
  },
};
</script>

<template>
  <section class="my-investments">
    <button
      class="my-investments__title"
      type="button"
      @click="$emit('showtotal')"
    >Mis inversiones</button>

    <loading v-if="!vpSavings">
    </loading>
    <p
      v-if="vpSavings"
      class="my-investments__subtitle"
    >Caja de ahorro</p>
    <p>{{ $filters.fltrFormatMoney(vpSavings) }}</p>

    <p
      v-if="vpInvestments && vpInvestments.length > 0"
      class="my-investments__subtitle"
    >Mi portfolio</p>
    <ul
      class="my-investments__list"
      v-for="_eachItem in vpInvestments"
      :key="_eachItem.name"
    >
      <li class="my-investments__items">
        <button
          class="my-investments__items__name"
          type="button"
          @click="$emit('selected', _eachItem)"
        >{{ _eachItem.name }}</button>
        <button
          class="my-investments__items__subscribed"
          type="button"
          @click="$emit('selected', _eachItem)"
        >({{ _eachItem.amountSubscribed }} unidades)</button>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
@import '../../src/mixins.scss';

.my-investments {
  @include widget;
}

.my-investments__title {
  @include title;
  // it's a button
  border: 0;
  cursor: pointer;
  background: 0;
  padding: 0;
}

.my-investments__subtitle {
  @include subtitle;
}

.my-investments__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.my-investments__items {
  display: flex;
  padding-bottom: 4px;
  padding-top: 4px;
}

.my-investments__items__name {
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0;
  text-align: left;
}

.my-investments__items__subscribed {
  background: transparent;
  border: 0;
  cursor: pointer;
  margin-left: auto;
  margin-right: 0;
  min-width: 95px;
  padding: 0;
  text-align: right;
}
</style>
