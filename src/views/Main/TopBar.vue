<template>
    <div class="tabBar">
        <router-link class="route" v-for="r in cacheRoutes" :to='r' :key="r.path" :class="isActive(r) ? 'active' : ''"
            @contextmenu.prevent.native="showMenu(r, $event)">
            <i :class="r.meta.icon"></i>
            {{ r.meta.title }}
            <i class="el-icon-close close" v-if="!isAffix(r)" @click.prevent.stop="handleClose(r)"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
       get
    }
}
</script>

<style lang="less">
.el-menu {
    width: 100%;
}
</style>