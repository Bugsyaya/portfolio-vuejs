<template>
  <div id="profil">
    <img :src="profil.avatar_url" alt="profil"/>
    <div>
        <p>{{profil.name}}</p>
        <p>{{profil.company}}</p>
        <p>Création {{profil.created_at}}</p>
        <p>MAJ : {{profil.updated_at}}</p>
        <p>Abonnés : {{profil.followers}}</p>
        <p>Abonnement : {{profil.following}}</p>
    </div>
    <div>
        <!-- {{profilProject?.files?.readme.html_url}} -->
    </div>
  </div>
</template>
<script>
import * as api from '../api'
export default {
  name: 'Profil',
  data () {
    return {
      profil: [],
      profilProject: {}
    }
  },
  created () {
    this.getProfil()
    this.getProfilProject()
  },
  methods : {
    getProfil() {
      api.getProfil().then(response => {
        this.profil = response.data
      })
    },
    getProfilProject() {
      api.getProfilProject().then(response => {
        this.profilProject = response.data
      })
    }
  }
}
</script>

<style>
#profil {
    display: flex;
}
</style>
