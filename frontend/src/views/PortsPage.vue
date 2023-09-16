<template>
    <q-layout view="lHh lpR lFf">
        <BarCompt bgColor="bg-secondary text-black"/>
        <q-page-container>
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