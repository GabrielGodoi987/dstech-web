<template>
    <q-layout view="lHh lpR lFf">
        <BarCompt />

        <q-page-container>
            <div class="row bg-dark">
                <div class="col-md-8 q-gutter-y-lg q-mt-xl">
                    <div class="text-h4 text-secondary text-center text-weight-bold">Bem vindo a DsTech: Inovação além do
                        códgo,
                        transformando empresas</div>
                    <div class="row justify-center">
                        <div class="col-sm-7 text-center text-subtitle1 text-white">Transformamos visões empresariais em
                            realidade com
                            interfaces tecnológicas sob
                            medida. Descubra como nossa expertise impulsiona setores diversos, da saúde ao varejo. Junte-se
                            à
                            revolução tecnológica hoje mesmo!
                        </div>
                    </div>
                </div>

                <div class="col-md-4 bg-primary">
                    <div class="q-pa-md">
                        <q-parallax height="280">
                            <template v-slot:media>
                                <video width="720" height="440" poster="https://cdn.quasar.dev/img/polina.jpg" autoplay loop
                                    muted>
                                    <source type="video/webm" src="https://cdn.quasar.dev/img/polina.webm">
                                </video>
                            </template>

                            <div class="column">
                                <h3 class="text-white">aaaaaaaaaa</h3>
                                <q-btn color="dark">teste</q-btn>
                            </div>
                        </q-parallax>
                    </div>
                </div>

            </div>
        </q-page-container>


        <q-page-container class="q-pa-md">

        </q-page-container>
    </q-layout>
</template>

<script>
import BarCompt from '@/components/BarCompt.vue';

export default {
    components: { BarCompt }
}
</script>