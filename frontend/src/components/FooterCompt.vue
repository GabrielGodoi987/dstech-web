<template>
    <footer class="bg-secondary text-dark q-mt-xl">
        <div class="row justify-around">
            <!--=================================== primeira col da rol do footer ======================================-->
            <div class="col-md-3 q-mt-lg q-ml-md q-gutter-y-md">
                <div class="text-subtitle1 text-center text-weight-bold">&copy; 2023 DsTech - Todos os direitos reservados
                </div>
                <div class="text-subtitle2 text-center">Este site e todas as informações aqui contidas são completamente
                    fictícios e criados apenas para fins didáticos e de demonstração. Nenhuma parte das informações
                    apresentadas aqui é verdadeira ou representa uma entidade real.
                </div>
                <div class="text-subtitle2 text-center">
                    Agradecemos à nossa banca examinadora e a todos os professores que nos apoiaram ao longo do
                    desenvolvimento deste projeto fictício.
                </div>
            </div>
            <!-- fim da primeira coluna do footer -->
            <div class="col-md-3 q-mt-lg q-gutter-y-md">
                <div class="text-subtitle1 text-weight-bolder">Suporte e Contatos:</div>
                <div v-for="(j, index) in  footer.Support " :key="index">
                    <hr>
                    <q-btn flat color="transparent" text-color="dark" :label="j.name" :to="j.path" />
                    <q-list>
                        <q-item class="text-body1 text-weight-bolder" v-for="(items, index) in  j.redesSociais " :key="index"> 
                            <q-item-section :style="{color: items.color}">
                                <q-item-label style="cursor: pointer;">{{ items.name }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </div>
            </div>

            <div class="col-md-2 q-mt-lg">
                <div class="text-subtitle1 text-weight-bolder">Links:</div>
                <q-list separator v-for="( i, index ) in  footer.links " :key=" index ">
                    <q-item clickable class="text-center" :to=" i.path ">
                        <q-item-section>
                            <q-icon name="info" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>{{ i.name }}</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
        </div>
    </footer>
</template>

<style></style>


<script>

export default {
    setup() {
        let id = 1;
        const icons = [
            {
                id: id++,
                URL: "../assets/icons/facebook.png"
            },
            {
                id: id++,
                URL: "../assets/icons/instagram.png"
            },
            {
                id: id++,
                URL: "../assets/icons/twitter.png"
            },
            {
                id: id++,
                URL: "../assets/icons/youtube.png"
            }

        ];

        const footer = {
            links: [
                {
                    name: 'home',
                    path: '/'
                },
                {
                    name: 'sobre',
                    path: '/About'
                },
                {
                    name: 'contato',
                    path: '/Contacts'
                },
                {
                    name: 'portfólio',
                    path: '/Ports'
                }
            ],

            Support: [
                {
                    name: 'FAQ',
                    path: '/FaqPage'
                },
                {
                    name: 'Contate-nos',
                    path: '/Contacts'
                },
                {
                    name: 'Nossas redes Sociais',
                    redesSociais: [
                        {
                            name: 'Facebook',
                            color: '#4267B2'
                        },
                        {
                            name: 'Twitter',
                            color: '#657786'
                        },
                        {
                            name: 'Youtube',
                            color: '#FF0000'
                        },
                        {
                            name: 'Instagram',
                            color: '#F56040'
                        }
                    ]
                }
            ]
        }

        return {
            icons,
            footer
        }
    }
}
</script>