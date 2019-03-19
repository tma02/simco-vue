<template>
  <div id="warehouse">
    <h1><font-awesome-icon icon="warehouse" /> Warehouse</h1>
    <p>
      Your warehouse holds all commodities and resources you own that are not currently in transit.
    </p>
    <table>
      <tr>
        <th>Asset</th>
        <th>Type</th>
        <th>Amount</th>
      </tr>
      <tr>
        <td>Iron ore</td>
        <td>Resource</td>
        <td>100 tons</td>
      </tr>
      <tr>
        <td>Coal</td>
        <td>Resource</td>
        <td>94 tons</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Warehouse',
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}
td {
  border-top: 1px solid #CCC;
}
th, td {
  padding: 4px 12px;
}
#warehouse {
  border: 1px solid #CCC;
  width: calc(100% - 48px);
  margin-left: 24px;
  margin-top: 24px;
  background-color: #FFF;
}
#warehouse>h1 {
  padding-bottom: 24px;
  border-bottom: 1px solid #CCC;
}
</style>
