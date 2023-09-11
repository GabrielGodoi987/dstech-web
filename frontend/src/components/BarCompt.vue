<template>
    <q-header :class="bgColor">
        <q-toolbar class="justify-around text-weight-bold">
            <div class="lt-sm">
                <q-btn dense flat round icon="menu" @click="MobileMenu = !MobileMenu" />
            </div>
            <q-avatar>
                <div class="text-caption"><router-link to="/">LOGO</router-link></div>
            </q-avatar>
            <div class="gt-xs">
                <q-tabs>
                    <!-- <q-tab>Segmento</q-tab> -->
                    <q-route-tab to="/About">Sobre</q-route-tab>
                    <q-route-tab to="/Contacts">Contato</q-route-tab>
                    <q-route-tab to="/PortsPage">Portfólio</q-route-tab>
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

        // será usado em uma diretiva para que apareça o menu mobile 
        const MobileMenu = ref(false);

        return {
            props,
            MobileMenu
        }
    }
}
</script>