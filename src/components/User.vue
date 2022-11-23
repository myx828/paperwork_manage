<template>
  <div class="user">
    <div class="user_image">
      <van-image
        :src="getAvatarImg"
        round
      />
    </div>
    <p class="user_name">
      {{ userName }}
    </p>
    <slot name="rightRowIcon" />
    <slot name="envelopIcon" />
  </div>
</template>
<script>
export default {
  props: {
    userName: {
      type: String,
      default: ''
    },
    fontSize: {
      type: Number,
      default: 16
    }
  },
  data () {
    return {
      getAvatarImg: require('@assets/image/avatar.jpg')
    }
  }
}
</script>
<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
}

.user_image {
  width: 10.66667vw;
  height: 10.66667vw;
}

.user_name {
  flex: 1;
  padding: 2.66667vw;
  font-size: var(--fontSize) vw;
}
</style>
