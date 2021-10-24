<template>
  <div id="navigation">
    <a-menu mode="vertical" @click="handleClick">
      <a-menu-item key="profil" ref="/profil">
        <a href="/">
          <a-icon type="user" />
          Bugsyaya
        </a>
      </a-menu-item>
      <a-menu-item key="projects" ref="/projects">
        <a href="/projects">
          <a-icon type="appstore" />
          <span>Projets</span>
        </a>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
export default {
    data () {
      return {
      }
    },
    created () {
    },
    methods: {
      handleClick(e) {
        console.log('click ', e);
      },
    },
};
</script>
<style>
#navigation {
  height: 100vh;
}

ul {
height: 100%;
}
</style>
