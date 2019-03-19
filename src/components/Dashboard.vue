<template>
  <div id="dashboard">
    <div id="hero-boxes">
      <div>
        <div class="label"><font-awesome-icon icon="hand-holding-usd" /> Capital:</div>
        <h1>$100</h1>
      </div>
      <div>
        <div class="label"><font-awesome-icon icon="university" /> Net Worth:</div>
        <h1>$1.00B</h1>
      </div>
      <div>
        <div class="label"><font-awesome-icon icon="briefcase" /> Orders (24h):</div>
        <h1>100</h1>
      </div>
      <div>
        <div class="label"><font-awesome-icon icon="certificate" /> Reputation:</div>
        <h1>0</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style scoped>
#dashboard {
  width: calc(100% - 48px);
  margin-left: 24px;
  margin-top: 24px;
}
#hero-boxes {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
#hero-boxes>div {
  border: 1px solid #CCC;
  width: 20%;
  height: 100px;
  font-size: 20px;
}
.label {
  width: 100%;
}
h1 {
  margin: 0;
}
</style>
