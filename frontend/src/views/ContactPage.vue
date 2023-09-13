<template>
    <q-layout view="lHh lpR lFf">
        <BarCompt bgColor="bg-secondary text-black"/>
        <q-page-container class="row q-pa-md justify-center q-mt-xl text-center">
            <div class="col-md-4 q-mt-xl">
                <q-card class="bg-secondary">
                    <div class="text-h6">Entre em contato conosco</div>
                    <q-form class="row justify-center">
                        <div class="col-md-8 q-mt-lg">
                            <q-input label="Nome" color="dark"/>
                        </div>
                    </q-form>
                </q-card>
            </div>
            <div class="col-md-4 q-mt-xl">
                <q-card>
                    <div class="text-h6">Entre em contato</div>
                </q-card>
            </div>
        </q-page-container>
        <FooterCompt />
    </q-layout>
</template>

<script>
import BarCompt from '@/components/BarCompt.vue';
import FooterCompt from '@/components/FooterCompt.vue';

export default {
    components: { BarCompt, FooterCompt }
}
</script>