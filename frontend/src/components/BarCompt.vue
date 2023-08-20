<template>
    <q-layout view="lHh lpR lFf">

        <q-header elevated class="bg-primary text-white" height-hint="98">
            <q-toolbar squared class="shadow-10">
                <q-btn class="lt-md" dense flat round icon="menu" @click="toggleLeftDrawer" />

                <div class="column" style="margin: 0 auto">
                    <q-toolbar-title class="text-center">
                        <q-avatar>
                            <q-icon name="person" />
                        </q-avatar>
                    </q-toolbar-title>
                    <q-tabs class="gt-sm text-secondary" align="center">
                        <q-route-tab>Segmento</q-route-tab>
                        <q-route-tab>Sobre</q-route-tab>
                        <q-route-tab>Contato</q-route-tab>
                        <q-route-tab>Portfólios</q-route-tab>
                        <q-btn outline color="secondary" label="Central" />
                    </q-tabs>
                </div>
            </q-toolbar>
        </q-header>

        <q-drawer class="lt-md" v-model="leftDrawerOpen" side="left" bordered>
            <!-- drawer content -->
            <q-tabs vertical class="bg-accent text-center text-secondary">
                <q-route-tab>Segmento</q-route-tab>
                <q-route-tab>Sobre</q-route-tab>
                <q-route-tab>Contato</q-route-tab>
                <q-route-tab>Portfólios</q-route-tab>
                <q-btn outline color="secondary" label="Central" />
            </q-tabs>
        </q-drawer>


    </q-layout>
</template>
  
<script>
import { ref } from 'vue'

export default {
    setup() {
        const leftDrawerOpen = ref(false)

        return {
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value
            }
        }
    }
}
</script>