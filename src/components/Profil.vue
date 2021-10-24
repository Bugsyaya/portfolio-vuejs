<template>
  <div id="profil">
    <img :src="user.avatarUrl" alt="profil"/>
    <div>
        <p>{{user.name}}</p>
        <p>{{user.company}}</p>
        <p>Création {{user.createdAt}}</p>
        <p>MAJ : {{user.updatedAt}}</p>
        <p>Abonnés : {{user.followers.totalCount}}</p>
        <p>Abonnement : {{user.following.totalCount}}</p>
    </div>
    <div>
        {{user.bio}}
    </div>
  </div>
</template>
<script>
import * as api from '../api'
export default {
  name: 'Profil',
  apollo: {
    user: api.user,
  }
}
</script>

<style>
#profil {
    display: flex;
}
</style>
