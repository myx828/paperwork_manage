<!-- <template>
  <div id="app">
    <van-nav-bar
      :title="currentTitle"
      @NavBarTitle="getCurrentTitle"
    />
    <component :is="componentList[activedPath]" />
  </div>
</template>
<script>
import Home from ''
import User from ''
export default {
  components: {
    Home,
    User
  },
  data () {
    return {
      currentTitle: '',
      searchCondition: {},
      activedPath: 'home',
      componentList: {
        home: Home,
        user: User
      }
    }
  },
  methods: {
    getCurrentTitle (val) {
      this.currentTitle = val
    }
  }
}
</script> -->
