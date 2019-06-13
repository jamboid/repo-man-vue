<template>
  <section class="cp_ResultsList">
    <RepoCard v-for="result in results" :repoData="result" :key="result.index"></RepoCard>
  </section>
</template>

<script>
import RepoCard from "../RepoCard/RepoCard.vue";

export default {
  name: "ResultsList",
  components: {
    RepoCard,
  },
  computed: {
    results () {
      return this.$store.getters.getSearchResults;
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "ResultsList.scss";
</style>
