<template>
    <q-layout view="lHh lpR lFf">
        <BarCompt bgColor="bg-transparent text-black" />
        <!-- parte do banner, da página principal -->
        <div class="row bg-secondary justify-center">
            <!-- lado de texto e interação de usuário -->
            <div class="col-md-6 q-mt-xl q-pa-xl">
                <div class="text-h2 text-weight-bolder">DsTech:</div>
                <div class="text-h4 text-weight-bolder">além de códigos, transformando sonhos</div>
                <div class="text-h6 text-weight-regular q-mt-xl">
                    Transformamos visões empresariais em realidade com interfaces tecnológicas sob medida. Descubra como
                    nossa expertise impulsiona setores diversos, da saúde ao varejo. Junte-se à revolução tecnológica hoje
                    mesmo!
                </div>
            </div>
            <!-- segundo lado do banner, com imagem em tamanho completo a div -->
            <div class="col-md-6">
                <q-img src="../assets/pexels-lukas-574073.jpg" style="width: 100%; height: 100%;" />
            </div>
        </div>





        <q-page-container class="row justify-around q-mt-xl bg-secondary">
            <div class="col-md-6">
                <q-img src="../assets/pexels-elvis-2528118.jpg" ratio="1" />
            </div>
            <div class="col-md-5 q-gutter-y-xl q-mt-xl">
                <div class="text-h6 text-weight-bolder q-mt-lg">Conheça a Nossa <strong class="text-yellow">EPR</strong>
                    Revolucionária - Transformando Empresas,
                    Potencializando Sucesso!</div>
                <div class="text-h6 text-weight-regular text-center">Na DsTech, apresentamos a você uma visão completamente
                    nova de gestão
                    empresarial com nossa solução de EPR de última geração. Imagine um sistema que sincroniza cada aspecto
                    da
                    sua operação, eliminando o trabalho manual redundante e impulsionando a eficiência a novos patamares.
                </div>

                <div class="text-h6 text-weight-regular text-center">Prepare-se para otimizar seus processos financeiros,
                    aprimorar a cadeia
                    de suprimentos e fortalecer sua estratégia de recursos humanos, tudo isso com um único sistema
                    abrangente.
                    Nossa EPR é a chave para desbloquear o potencial oculto da sua empresa.</div>

                <div class="text-h6 text-weight-regular text-center">Curioso para explorar mais? Clique no botão abaixo e
                    embarque na
                    jornada para uma gestão empresarial simplificada, inteligente e mais lucrativa. Seu futuro empresarial
                    aguarda, e a DsTech está pronta para acompanhá-lo nessa transformação extraordinária.</div>
                <div class="text-center q-gutter-x-xl">
                    <q-btn rounded label="Saiba Mais" color="primary" />
                    <q-btn rounded label="Fale Conosco" color="accent" />
                </div>
            </div>
        </q-page-container>


        <q-page-container class="row justify-around bg-secondary q-mt-xl q-mb-xl">
            <div class="col-md-3 text-center q-gutter-y-lg q-mb-xl" v-for="i in PlanList.Steps" :key="i.id">
                <div class="text-h6 text-weight-bolder">{{ i.id }}° Passo: {{ i.title }}</div>
                <div class="text-subtitle2 text-weight-bold">{{ i.information }}</div>
                <div class="text-body1">{{ i.Description }}</div>
            </div>
        </q-page-container>

        
        <!-- parte de planos da página Home -->
        <q-page-container>
            <div class="text-h4 text-center">Conheça os nossos planos</div>
            <div class="row justify-around q-mt-xl">
                <di class="col-sm-3" v-for="i in PlanList.plans" :key="i.id">
                    <q-card class="q-mb-xl">
                        <q-card-section>
                            <div class="text-h5 text-center">{{ i.title }} </div>
                        </q-card-section>
                        <q-separator color="dark" inset />
                        <q-card-section>
                            <div class="text-h6 text-weight-bolder">Descrição:</div>
                            <div class="text-subtitle1 text-weight-bold text-primary">{{ i.Description }}</div>
                        </q-card-section>
                        <q-card-section>
                            <q-list>
                                <q-item-label class="text-weight-bolder" header>Benefícios</q-item-label>
                                <q-item>
                                    <q-item-section avatar top>
                                        <q-avatar icon="info" />
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label lines="1">{{ i.Benefits[0] }}</q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-card-section>
                        <q-card-section>
                            <q-btn flat color="primary" label="Ler Mais..." @click="OpenaDialog(i.id)" />
                        </q-card-section>
                    </q-card>
                </di>
            </div>
        </q-page-container>
        <!-- ====================================== Dialog que abre ao clicar em Ler mais em todos os cards de planos ==================================================== -->
        <q-dialog v-model="dialog">
            <div class="row">
                <q-card class="col">
                    <div class="text-center text-h6 text-weight-bolder">o nosso Plano {{ showDialog.title }} disponibiliza
                        os seguintes
                        Benefícios</div>
                    <ul v-for="(items, index) in showDialog.Benefits" :key="index">
                        <li>{{ items }}</li>
                    </ul>
                    <q-card-section>
                        <div class="text-body1">
                            Achou que o Plano {{ showDialog.title }} combina com você?<br>
                            clique no botão <b class="bg-primary text-white">contato</b> e tenha agora o melhor software
                            para o sucesso
                            e realização dos seus sonhos
                        </div>
                    </q-card-section>
                    <q-card-section class="q-mt-md text-center">
                        <q-btn outline color="primary" label="Contato" />
                    </q-card-section>
                </q-card>

            </div>
        </q-dialog>


    </q-layout>
</template>

<script>
import BarCompt from '@/components/BarCompt.vue';
import * as PlanList from '../../HomeConfig/PlanListConfig';
import { onMounted, ref } from 'vue';
export default {
    setup() {
        onMounted(() => {
            console.log(PlanList.plans);
        })

        // configuração dos planos com dialog e array de objetos externos
        const dialog = ref(false);
        const showDialog = ref(null);

        const OpenaDialog = (id) => {
            showDialog.value = PlanList.plans.find((plan) => plan.id == id);
            dialog.value = !dialog.value
        }

        return {
            PlanList,
            OpenaDialog,
            dialog,
            showDialog,
        }
    },
    components: { BarCompt }
}
</script>