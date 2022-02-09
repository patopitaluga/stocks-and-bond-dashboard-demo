<script>
export default {
  props: {
    vpItems: Array,
  },
  data() {
    return {
      greeting: 'Hello World!'
    }
  }
}
</script>

<template>
  <section class="my-investments">
    <p>Mis inversiones</p>
    <p>Caja de ahorro</p>

    <p>Bonos</p>
    <ul
      v-for="_eachItem in vpItems"
      :key="_eachItem.name"
    >
      <li>{{ _eachItem.name }}</li>
    </ul>

    <p>Acciones</p>
    <ul>
      <li>Coca Cola (x unidades)</li>
    </ul>
  </section>
</template>

<style>
.my-investments {
  background: #eee;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 8px 16px;
}
</style>
