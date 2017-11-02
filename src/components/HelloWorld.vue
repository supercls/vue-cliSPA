<template>
  <div class="hello">
    <p>
      hello,我是{{msg}}组件
    </p>
    <img src="../assets/logo.png" class="logoimg">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.hello{
  text-align: center;
}
.hello img{
  margin: 5px auto;
}
</style>
