<template>
    <q-layout view="lHh lpR lFf">
        <BarCompt bgColor="bg-secondary text-black" />
        <q-page-container class="row q-pa-md justify-center q-mt-xl text-center">
            <div class="gt-sm col-md-5 q-mt-xl">
                <q-card class="bg-secondary">
                    <div class="text-h6">Entre em contato conosco</div>
                    <q-form class="row justify-around" @submit="sendMessage()">
                        <div class="col-md-12 q-pa-md q-ml-md q-gutter-y-md">
                            <q-input v-model="name" label="Nome" color="dark" />
                            <q-input v-model="email" label="Email" color="dark" />
                            <q-input v-model="subject" label="Nome do Assunto" color="dark" />
                            <q-input v-model="content" type="textarea" label="escreva o assunto" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Por favor insira uma mensagen para nós',
                                val => val > 10 || 'sua mensagem deve ter mais de 100 caracteres'
                            ]" />
                            <q-btn bordered color="primary" label="Enviar" class="q-mt-xl" @click="sendMessage()" />
                        </div>
                    </q-form>
                </q-card>
            </div>

            <div class="lt-md q-mt-xl" style="width: 450px;">
                <q-card class="bg-secondary">
                    <div class="text-h6">Entre em contato conosco</div>
                    <q-form class="row justify-around">
                        <div class="q-pa-md q-ml-md q-gutter-y-md" style="width: 100%;">
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
                        <q-list class="col q-mt-lg">
                            <q-item v-for="(i, index) in contacts" :key="index" class="q-mt-md">
                                <q-item-section>
                                    <q-item-label>
                                        <q-btn flat :icon="i.icon" color="primary" size="12px" />
                                        <div class="text-subtitle2 text-weight-bold"> {{ i.name }}</div>
                                        <div class="text-subtitle2 text-weight-bold q-mb-sm">{{ i.content }}</div>
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
            const data = {
                name: name.value,
                email: email.value,
                subject: subject.value,
                content: content.value
            }
            if (name.value != "" && email.value != "" && subject.value != "" && content.value != "") {
                axios.post('http://localhost:3085/usersmessage', data).then((Response) => {
                    console.log(Response)
                }).catch((error) => {
                    console.log(error, data);
                })

                name.value = '';
                email.value = '';
                subject.value = '';
                content.value = '';
            } else {
                alert('teste')

            }

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