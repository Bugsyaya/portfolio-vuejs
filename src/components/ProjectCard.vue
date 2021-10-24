<template>
    <a :href="link">
        <a-card class="project" hoverable>
            <h1>{{project.name}}</h1>
            <p>Création : {{project.createdAt}}</p>
            <p>MAJ : {{project.updatedAt}}</p>
            <p class="description">{{project.description}}</p>
            <a-tag v-for="language in project.languages.nodes"  :key="language" color="orange">
                {{language.name}}
            </a-tag>
            <div class="container">
                <div v-if="project.forkCount !== 0" class="fork">
                    <a-icon type="fork" />
                    <p>{{project.forkCount}}</p>
                </div>
                <div v-if="project.stargazerCount !== 0" class="star">
                    <a-icon type="star" />
                    <p>{{project.stargazerCount}}</p>
                </div>
            </div>
        </a-card>
    </a>
</template>
<script>
export default {
  name: 'Projects',
  props: {
    project: Object
  },
  data () {
    return {
      link: '/projects/',
    }
  },
  created () {
    this.getLink()
  },
  methods : {
    getLink() {
      this.link += this.project.name
    }
  }
}
</script>

<style>
    .project {
        height: 100%;
    }

    .description {
        font-weight: 300;
    }

    .container {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .star {
        justify-content: end;
    }

    .star, .fork {
        display: flex;
        align-items: center;
        width: 100%;
    }

    p {
        margin: 0 !important;
    }

    i {
        margin-right: 5px;
    }
</style>