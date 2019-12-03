<template>
  <div class="home">
    <tabs-menu :tabs="tabs"></tabs-menu>
  </div>
</template>

<script>
import TabsMenu from '@/components/TabsMenu';

export default {
  name: 'home',
  components: {
    TabsMenu,
  },
  data() {
    return {
      tabs: [
        { name: 'Proizvod', icon: 'fas fa-shopping-cart' },
        { name: 'Lek', icon: 'fas fa-capsules' },
        { name: 'Tip pakovanja', icon: 'fas fa-box-open' },
      ],
    };
  },
};
</script>
