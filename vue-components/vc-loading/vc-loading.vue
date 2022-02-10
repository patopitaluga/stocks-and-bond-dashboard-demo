<script>
export default {
};
</script>

<template>
  <div class="loading">
    <div class="loading__circle">
    </div>
  </div>
</template>

<style>
.loading {
  height: 50px;
  width: 50px;
}

.loading__circle {
  animation: spin 4s linear infinite;
  height: 25px;
  overflow: hidden;
  transform-origin: bottom center;
  width: 50px;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.loading__circle::after {
  box-sizing: border-box;
  border-radius: 50%;
  border: 5px blue solid;
  content: '';
  display: block;
  height: 50px;
  width: 50px;
}
</style>
