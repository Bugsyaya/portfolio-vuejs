<template>
    <a :href="link">
        <a-card class="project" hoverable>
            <h1>{{project.name}}</h1>
            <p>Création : {{project.created_at}}</p>
            <p>MAJ : {{project.updated_at}}</p>
            <p class="description">{{project.description}}</p>
            <a-tag v-if="project.language" color="orange">
                {{project.language}}
            </a-tag>
            <div class="container">
                <div v-if="project.forks !== 0" class="fork">
                    <a-icon type="fork" />
                    <p>{{project.forks_count}}</p>
                </div>
                <div v-if="project.stargazers_count !== 0" class="star">
                    <a-icon type="star" />
                    <p>{{project.stargazers_count}}</p>
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