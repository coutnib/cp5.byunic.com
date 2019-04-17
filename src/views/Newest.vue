<template>
<div class="newest">
  <newest-story :photos="photos" />
</div>
</template>

<script>
// @ is an alias to /src
import NewestStory from '@/components/NewestStory.vue'

export default {
  name: 'home',
  components: {
    NewestStory
  },
  computed: {
    photos() {
      return this.$store.state.photos;
    }
  },
  async created() {
    await this.$store.dispatch("getAllPhotos");
  },
}
</script>
