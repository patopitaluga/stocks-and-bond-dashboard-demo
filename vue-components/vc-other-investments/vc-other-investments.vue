<script>
import loading from '../vc-loading/vc-loading.vue';

export default {
  components: {
    'loading': loading,
  },
  props: {
    vpItems: Array,
  },
};
</script>

<template>
  <section class="other-investments">
    <p class="other-investments__title">Inversiones disponibles</p>
    <loading v-if="!vpItems">
    </loading>
    <ul
      class="other-investments__list"
      v-for="_eachItem in vpItems"
      :key="_eachItem.name"
    >
      <li class="other-investments__items">
        <button
          class="other-investments__items__name"
          type="button"
          @click="$emit('selected', _eachItem)"
        >{{ _eachItem.name }}</button>
        <button
          class="other-investments__items__value"
          type="button"
          @click="$emit('selected', _eachItem)"
        >{{ $filters.fltrFormatMoney(_eachItem.currentValue) }} / unidad</button>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
@import '../../src/mixins.scss';

.other-investments {
  @include widget;
}

.other-investments__title {
  @include title;
}

.other-investments__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.other-investments__items {
  display: flex;
  margin-bottom: 8px;
}

.other-investments__items__name {
  background: transparent;
  border: 0;
  cursor: pointer;
  margin-left: 0;
  margin-right: auto;
  padding: 0;
  text-align: left;
}

.other-investments__items__value {
  background: transparent;
  border: 0;
  color: #333;
  cursor: pointer;
  margin-left: auto;
  margin-right: 0;
  min-width: 105px;
  padding: 0 0 0 8px;
  text-align: right;
}
</style>
