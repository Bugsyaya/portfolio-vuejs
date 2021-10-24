<template>
  <div id="grid-projects">
    <div class="project" v-for="project in repositoryOwner.repositories.nodes" :key="project.id">
      <ProjectCard :project="project"/>
    </div>
  </div>
</template>

<script>
import * as api from '../api'
import ProjectCard from './ProjectCard.vue'
export default {
  name: 'Projects',
  apollo: {
    repositoryOwner: api.allProject,
  },
  components: {
    ProjectCard
  },
}
</script>

<style>
  #grid-projects {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 30px;
    column-gap: 20px;
  }
</style>
