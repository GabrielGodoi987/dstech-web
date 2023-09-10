let id = 1;
const plans = [
    {
        id: id++,
        title: 'Standard',
        Description: 'Este é o plano perfeito para quem está começando e deseja uma solução de software básica para impulsionar seu negócio.',
        Benefits: [
            'Software personalizado para necessidades essenciais.',

            'Suporte por e-mail em horário comercial.',

            'Atualizações regulares para melhorias.',

            'Recursos de treinamento online.',
        ]
    },
    {
        id: id++,
        title: 'Advanced',
        Description: 'Nosso plano Medium é projetado para empresas que desejam um suporte mais abrangente e recursos adicionais.',
        Benefits: [
            'Software altamente personalizado para necessidades exclusivas.',
            'Suporte técnico prioritário 24/7.',
            'Monitoramento constante e intervenção proativa.',
            'Treinamento avançado e workshops.',
            'Atualizações de software personalizadas.',
            'Consultoria para otimização de processos.'
        ]
    },
    {
        id: id++,
        title: 'Medium',
        Description: 'Nosso plano Medium é projetado para empresas que desejam um suporte mais abrangente e recursos adicionais.',
        Benefits: [
            'Software personalizado com recursos avançados.',
            'Suporte técnico completo por telefone e e-mail.',
            'Monitoramento proativo do sistema.',
            'Treinamento personalizado.',
            'Atualizações de software personalizadas.'
        ]
    }

];

let identifier = 1;

const Steps = [
    {
        id: identifier++,
        title: ' Segmento ',
        information: 'Descubra o seu caminho para o sucesso!',
        Description: 'Antes de começarmos a moldar o seu software personalizado, é crucial entender o seu segmento empresarial. Escolha com sabedoria, pois isso abrirá as portas para soluções feitas sob medida que impulsionarão o seu negócio.'
    },
    {
        id: identifier++,
        title: 'escolha a solução desejada',
        information: 'Vamos fazer acontecer!',
        Description: ' Explore nossas soluções personalizadas e encontre a que melhor atende às suas necessidades. Cada seleção é um passo em direção à realização dos seus objetivos empresariais. Vamos começar a construir o software que você merece.'
    },
    {
        id: identifier++,
        title: 'Fale conosco',
        information: 'Vamos fazer acontecer!',
        Description: 'Sua visão é nossa prioridade. Entre em contato conosco e agende uma conversa. Nossa equipe de especialistas está pronta para ouvir suas ideias e transformá-las em soluções reais. Juntos, vamos criar um futuro de sucesso.'
    },
];


module.exports = { plans, Steps };