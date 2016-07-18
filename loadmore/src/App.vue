<template>
<div id="app">
  <list :page="page"></list>
  <a class="button" @click="previous" v-link="{ name: 'page', params: { pageNum: page - 1} }">Go PRE</a>CURRENT:{{ page }}<a class="button" @click="next" v-link="{ name: 'page', params: { pageNum: page + 1} }">Go NEXT</a>
</div>
</template>

<script>
import list from './components/List'

export default {
  components: {
    list
  },
  data () {
    return {
      page: 1
    }
  },
  methods: {
    next () {
      this.page++
    },
      previous () {
    if (this.page > 1) {
      this.page--
    } else {
      alert("没有上一页!");
    }
  }
  },
}
</script>

<style scoped>
  .button {
    display: block;
    width: 100%;
    background: #212121;
    color: #fff;
    font-weight: bold;
    text-align: center;
    padding: 1em;
    cursor: pointer;
    text-decoration: none;
  }
  .button span {
    margin-left: 2em;
    font-size: .5rem;
    color: #d6d6d6;
  }
</style>
