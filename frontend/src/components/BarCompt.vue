<template>
    <q-header :class="bgColor">
        <q-toolbar class="justify-around text-weight-bold">
            <div class="lt-sm">
                <q-btn dense flat round icon="menu" @click="MobileMenu = !MobileMenu" />
            </div>
            <q-avatar>
                <div class="text-caption">LOGO</div>
            </q-avatar>
            <div class="gt-xs">
                <q-tabs>
                    <q-tab>Segmento</q-tab>
                    <q-tab>Sobre</q-tab>
                    <q-tab>Contato</q-tab>
                    <q-tab>Portfólio</q-tab>
                </q-tabs>
            </div>
            <q-btn rounded color="primary" label="Comece Agora" />
        </q-toolbar>

    </q-header>

    <q-drawer v-model="MobileMenu">
        <q-tabs vertical swipeable class="q-mt-xl q-gutter-xl">
            <q-tab>Segmento</q-tab>
            <br>
            <q-tab>Sobre</q-tab>
            <br>
            <q-tab>Contato</q-tab>
            <br>
            <q-tab>Portfólio</q-tab>
        </q-tabs>
    </q-drawer>
</template>
  
<script>
import { ref } from 'vue';

export default {
    props: {
        bgColor: String
    },
    setup(props) {

        const MobileMenu = ref(false);

        return {
            props,
            MobileMenu
        }
    }
}
</script>