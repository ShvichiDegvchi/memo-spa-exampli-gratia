<docs></docs>

<template>
  <header
    class="app-header"
    itemscope
    itemtype="https://schema.org/WPHeader"
    role="banner"
  >
    <div>
      <div class="app-header__logo">
        <Logo :name="$props.name" />
      </div>
      <div
        class="app-header__btn"
      >
        <transition name="fade">
          <Button v-if="$route.path.indexOf('memos') === -1" />
        </transition>
        <Counter />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from './Logo';
import Button from './CreatButton';
import Counter from './Counter';

export default {
  name: '',
  title: '',
  components: {
    Logo,
    Button,
    Counter,
  },
  filter: {},
  props: {
    'name': {
      type: String,
      default: 'メモアプ'
    },
  },
  data: function() {
    return {};
  },
  computed: {},
  watch: {},
  beforeCreate: function() {},
  created: function() {},
  beforeMount: function() {},
  mounted: function() {
    this.$nextTick(function() {});
  },
  beforeUpdate: function() {},
  updated: function() {},
  activated: function() {},
  deactivated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@use "sass:math";

.app-header {
  box-shadow: 0 #{math.div(3, 10)}rem #{math.div(6, 10)}rem rgba(#000, .16), 0 #{math.div(3, 10)}rem #{math.div(6, 10)}rem rgba(#000, .23);

  > div {
    padding: .8rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    @media (max-width: 640px) {
      width: #{math.div(140, 3.2)}vw;
      height: #{math.div(48, 3.2)}vw;
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    gap: 0 .8rem;
  }

  button {
    @media (max-width: 640px) {
      width: 4.6rem;
      height: 4.6rem;
    }
  }
}
</style>
