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
    <p>Inversiones disponibles</p>
    <loading v-if="!vpItems">
    </loading>
    <ul
      class="my-investments__list"
      v-for="_eachItem in vpItems"
      :key="_eachItem.name"
    >
      <li class="my-investments__items">
        <span>{{ _eachItem.name }}</span>
        <span class="my-investments__items__subscribed">{{ $filters.fltrFormatMoney(_eachItem.currentValue) }}/unidad</span>
      </li>
    </ul>
  </section>
</template>

<style>
.other-investments {
  background: #eee;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 8px 16px;
}
</style>
