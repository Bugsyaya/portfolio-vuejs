<template>
  <div id="project">
    <h1>{{repositoryOwner.repository.name}} ({{repositoryOwner.repository.id}})</h1>
  </div>
</template>

<script>
import * as api from '../api'

export default {
  name: 'Project',
  apollo: {
      repositoryOwner() {
        return {
          query:api.byProjectName,
          variables: {
            name: this.$route.params.name,
          },
        }
      }
  },
}
</script>

<style>
</style>
