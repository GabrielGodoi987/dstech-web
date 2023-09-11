<template>
  <q-layout view="lHh lpR lFf">
    <BarCompt bgColor="bg-secondary text-weight-bold text-black" />

    <q-page-container class="text-center q-mt-xl q-gutter-y-md">
      <div class="text-h1 text-weight-bolder">Sobre nós</div>

      <q-img src="../assets/Meeting.jpg" style="max-height: 600px;" />
    </q-page-container>

    <q-page-container class="bg-secondary q-mt-xl">
      <div class="row justify-around">
        <div class="col-md-5 q-gutter-y-lg">
          <div class="text-h2">Quem Somos?</div>
          <div class="text-h6 text-weight-regular">
            Somos uma equipe apaixonada e dedicada de profissionais com vasta experiência no campo da tecnologia da
            informação. Fundada em 2023, nossa empresa nasceu da visão de criar soluções inovadoras que simplificam a vida
            das empresas e impulsionam o sucesso de nossos clientes.
          </div>
        </div>
        <div class="col-md-5">
          <div class="text-h6 text-weight-regular">
            O que nos diferencia, incluindo a nossa solução <b class="text-accent">ERP</b>, é nossa abordagem centrada no
            cliente e a capacidade de
            atender às suas necessidades dentro de soluções possíveis. Estamos comprometidos em entender as necessidades
            exclusivas de cada cliente e fornecer soluções personalizadas, incluindo a implementação e otimização de um
            ERP,
            que realmente funcionem
          </div>
        </div>
      </div>
    </q-page-container>

    <q-page-container class="text-center q-mt-xl">
      <div class="row justify-center">
        <div class="col-md-10 q-pa-md q-gutter-y-xl">
          <div class="text-h2 text-weight-bold">O que é uma <b class="text-accent">EPR</b></div>
          <div class="text-h6 text-weight-regular">
            Um ERP (Enterprise Resource Planning) é um sistema integrado que ajuda as empresas a gerenciar todas as suas
            operações de forma eficiente. Ele automatiza tarefas, coordena departamentos e fornece informações precisas
            para
            tomada de decisões estratégicas. É como um assistente confiável que simplifica o gerenciamento de uma empresa.
          </div>
        </div>
      </div>
    </q-page-container>

    <q-page-container class="q-mt-xl q-pa-md bg-secondary">
      <div class="row justify-center">
        <div class="col-md-8 q-gutter-xl text-center">
          <div class="text-h2 text-weight-bold">Como um <b class="text-accent">EPR</b> funciona? </div>
          <div class="text-h6 text-weight-regular">
            Um ERP (Enterprise Resource Planning) é um sistema integrado que ajuda as empresas a gerenciar todas as suas
            operações de forma eficiente. Ele automatiza tarefas, coordena departamentos e fornece informações precisas
            para
            tomada de decisões estratégicas. É como um assistente confiável que simplifica o gerenciamento de uma
            empresa.Um ERP é o sistema central de uma empresa, coletando dados de todos os departamentos para fornecer uma
            visão unificada e em tempo real das operações. Isso elimina a necessidade de planilhas separadas, sistemas
            isolados e processos manuais demorados. Um ERP pode realizar diversas tarefas, como rastrear finanças,
            gerenciar estoques, processar folhas de pagamento e pedidos, além de prever a demanda. Também facilita o
            acesso rápido e fácil às informações para colaboração e eficiência aprimoradas entre os departamentos.
          </div>
        </div>
      </div>
    </q-page-container>


    <q-page-container>

    </q-page-container>



    <q-page-container class="bg-secondary q-mt-xl">
      <div class="row justify-around text-center">
        <div class="col-md-4 q-gutter-y-xl q-mt-lg">
          <div class="text-h3 text-weight-bolder">Nossa Missão</div>
          <div class="text-h5">
            Na DsTech, nossa missão é capacitar empresas a atingir seu máximo potencial por meio de soluções de software
            inovadoras e personalizadas. Estamos comprometidos em oferecer as ferramentas tecnológicas necessárias para
            impulsionar a eficiência, a produtividade e o crescimento sustentável de nossos clientes.
          </div>
        </div>
        <div class="col-md-4 text-center">
          <q-img src="../assets/Banner_teste.png" />
        </div>
      </div>
    </q-page-container>

    <FooterCompt />
  </q-layout>
</template>

<script>
import BarCompt from '@/components/BarCompt.vue';
import FooterCompt from '@/components/FooterCompt.vue';
export default {
  setup() {

  },
  components: { BarCompt, FooterCompt }
}

</script>