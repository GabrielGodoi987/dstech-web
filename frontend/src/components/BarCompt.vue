<template>
    <q-header :class="bgColor">
        <q-toolbar class="justify-around text-weight-bold">
            <q-avatar>
                <div class="text-caption">LOGO</div>
            </q-avatar>
            <q-tabs>
                <q-tab>Segmento</q-tab>
                <q-tab>Sobre</q-tab>
                <q-tab>Contato</q-tab>
                <q-tab>Portfólio</q-tab>
            </q-tabs>

            <q-btn rounded color="primary" label="Comece Agora" />
        </q-toolbar>
    </q-header>
</template>
  
<script>

export default {
    props: {
        //bgColor: String
    },
    setup() {

        const bgColor = "bg-transparent text-black";

        return {
            bgColor
        }
    }
}
</script>