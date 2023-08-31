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
                    <q-btn rounded label="Saiba Mais" color="primary"/>
                    <q-btn rounded label="Fale Conosco" color="accent"/>
                </div>
            </div>
        </q-page-container>
    </q-layout>
</template>

<script>
import BarCompt from '@/components/BarCompt.vue';

export default {
    components: { BarCompt }
}
</script>