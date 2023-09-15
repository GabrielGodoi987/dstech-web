<template>
    <q-layout view="lHh lpR lFf">
        <BarCompt bgColor="bg-secondary text-black" />
        <q-page-container class="row q-pa-md justify-center q-mt-xl text-center">
            <div class=" col-md-5 q-mt-xl">
                <q-card class="bg-secondary">
                    <div class="text-h6">Entre em contato conosco</div>
                    <q-form class="row justify-around">
                        <div class="col-md-8 q-pa-md q-ml-md q-gutter-y-md">
                            <q-input v-model="name" label="Nome" color="dark" />
                            <q-input v-model="email" label="Email" color="dark" />
                            <q-input v-model="subject" label="Nome do Assunto" color="dark" />
                            <q-input v-model="content" type="textarea" label="escreva o assunto" />
                            <q-btn bordered color="primary" label="Enviar" class="q-mt-xl" @click="sendMessage()" />
                        </div>
                    </q-form>
                </q-card>
            </div>
            <div class="col-md-4 q-mt-xl">
                <q-card>
                    <div class="text-h6">Entre em contato</div>
                    <div class="text-caption">entre em contato e agende agora um estudo de caso ou conheça os nosso planos
                    </div>
                    <div class="row justify-center">
                        <q-list class="col q-mt-lg" style="max-width: 500px">
                            <q-item v-for="(i, index) in contacts" :key="index" class="q-mt-md">
                                <q-item-section>
                                    <q-item-label>
                                        <q-btn flat :icon="i.icon" color="primary" size="12px" />
                                        <div class="text-subtitle2 text-weight-bold"> {{ i.name }}</div>
                                        <div class="text-subtitle2 text-weight-bold">{{ i.content }}</div>
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </div>
                </q-card>
            </div>
        </q-page-container>
        <FooterCompt />
    </q-layout>
</template>

<script>
import BarCompt from '@/components/BarCompt.vue';
import FooterCompt from '@/components/FooterCompt.vue';
import axios from 'axios';

import { ref } from 'vue';

export default {
    setup() {

        const contacts = [
            {
                name: 'Endereço:',
                content: 'Rua Augusta, N° 791',
                icon: 'fa-solid fa-location-dot'
            },
            {
                name: 'Telefone:',
                content: '+55 11 1234-5678',
                icon: 'fa-solid fa-phone'
            },
            {
                name: 'Email:',
                content: 'DsTech@gmail.com',
                icon: 'fa-solid fa-envelope'
            },
            {
                name: 'Whatsapp Empresarial:',
                content: '+55 11 99999-9999',
                icon: 'fa-brands fa-whatsapp'
            }

        ]
        const name = ref('');
        const email = ref('');
        const subject = ref('');
        const content = ref('');


        function sendMessage() {
            axios.post('http://localhost:3085//teste',
                {
                    name: name.value,
                    email: email.value,
                    subject: subject.value,
                    content: content.value
                }).then((Response) => {
                    console.log(Response)
                }).catch((error) => {
                    console.log(error)
                })

            name.value = '';
            email.value = '';
            subject.value = '';
            content.value = '';
          
            alert('botão está functionando')

        }

        return {
            contacts,
            name,
            email,
            subject,
            content,
            sendMessage
        }

    },
    components: { BarCompt, FooterCompt }
}
</script>