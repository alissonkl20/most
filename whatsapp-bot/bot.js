import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;
import qrcode from 'qrcode-terminal';
import services from './services.js';

// Configurações
const OWNER_NUMBER = '5546999420574@c.us'; // Seu número para receber notificações

// Inicializa o cliente WhatsApp
const client = new Client({
    authStrategy: new LocalAuth()
});

// Armazena o estado da conversa de cada usuário
const userStates = new Map();

// Gera QR Code para autenticação
client.on('qr', (qr) => {
    console.log('📱 Escaneie o QR Code abaixo com seu WhatsApp:');
    qrcode.generate(qr, { small: true });
});

// Quando conectado
client.on('ready', () => {
    console.log('✅ Bot WhatsApp está pronto e conectado!');
    console.log('🤖 Aguardando mensagens...');
});

// Processamento de mensagens
client.on('message', async (message) => {
    const userId = message.from;
    const userMessage = message.body.trim().toLowerCase();

    // Ignora mensagens de grupos e status
    if (message.from.includes('@g.us') || message.isStatus) {
        return;
    }

    console.log(`📨 Mensagem recebida de ${userId}: ${message.body}`);

    // Notifica o dono sobre a nova mensagem (exceto se for do próprio dono)
    if (userId !== OWNER_NUMBER) {
        try {
            const contact = await message.getContact();
            const notificationText = `🔔 *Nova Mensagem Recebida*\n\n👤 De: ${contact.pushname || contact.number}\n📱 Número: ${userId.replace('@c.us', '')}\n💬 Mensagem: ${message.body}`;
            await client.sendMessage(OWNER_NUMBER, notificationText);
        } catch (error) {
            console.error('Erro ao enviar notificação:', error);
        }
    }

    // Comandos principais
    if (userMessage === 'oi' || userMessage === 'olá' || userMessage === 'ola' || userMessage === 'menu' || userMessage === '/start') {
        await sendWelcomeMessage(message);
        return;
    }

    // Listar serviços
    if (userMessage === '1' || userMessage.includes('serviços') || userMessage.includes('servicos')) {
        await sendServicesList(message);
        return;
    }

    // Detalhes de um serviço específico (2-6 corresponde aos IDs dos serviços)
    if (['2', '3', '4', '5', '6'].includes(userMessage)) {
        const serviceId = parseInt(userMessage) - 1; // Ajusta o índice
        await sendServiceDetails(message, serviceId);
        return;
    }

    // Solicitar orçamento
    if (userMessage === '7' || userMessage.includes('orçamento') || userMessage.includes('orcamento')) {
        await sendBudgetRequest(message);
        return;
    }

    // Falar com humano
    if (userMessage === '8' || userMessage.includes('atendente') || userMessage.includes('humano')) {
        await sendHumanContact(message);
        return;
    }

    // Resposta padrão para mensagens não reconhecidas
    await message.reply('Desculpe, não entendi sua mensagem. 😊\n\nDigite *menu* para ver as opções disponíveis.');
});

// Função de boas-vindas
async function sendWelcomeMessage(message) {
    const welcomeText = `
👋 *Olá! Seja bem-vindo(a)!*

Sou o assistente virtual e estou aqui para ajudá-lo(a).

*Como posso ajudar?*

1️⃣ Ver Serviços Disponíveis
7️⃣ Solicitar Orçamento
8️⃣ Falar com Atendente

_Digite o número da opção desejada_
    `.trim();

    await message.reply(welcomeText);
}

// Função para listar todos os serviços
async function sendServicesList(message) {
    let serviceText = `
📋 *NOSSOS SERVIÇOS*

Confira nossos serviços disponíveis:
    `.trim();

    services.forEach((service, index) => {
        serviceText += `\n\n*${index + 2}️⃣ ${service.icon} ${service.title}*\n${service.price}`;
    });

    serviceText += `\n\n_Digite o número do serviço para mais detalhes_\n\n7️⃣ Solicitar Orçamento\n8️⃣ Falar com Atendente`;

    await message.reply(serviceText);
}

// Função para enviar detalhes de um serviço específico
async function sendServiceDetails(message, serviceId) {
    if (serviceId < 0 || serviceId >= services.length) {
        await message.reply('Serviço não encontrado. Digite *1* para ver todos os serviços.');
        return;
    }

    const service = services[serviceId];
    const detailText = `
${service.icon} *${service.title}*

📝 *Descrição:*
${service.description}

💰 *Investimento:*
${service.price}

━━━━━━━━━━━━━━━━

*O que deseja fazer?*

1️⃣ Ver Outros Serviços
7️⃣ Solicitar Orçamento
8️⃣ Falar com Atendente
    `.trim();

    await message.reply(detailText);
}

// Função para solicitar orçamento
async function sendBudgetRequest(message) {
    const budgetText = `
💼 *SOLICITAR ORÇAMENTO*

Para solicitar um orçamento personalizado, por favor envie as seguintes informações:

📌 Serviço desejado
📌 Descrição do projeto
📌 Prazo desejado
📌 Orçamento disponível (opcional)

Ou digite *8* para falar diretamente com um atendente.
    `.trim();

    await message.reply(budgetText);
}

// Função para contato com humano
async function sendHumanContact(message) {
    const contactText = `
👤 *ATENDIMENTO HUMANO*

Um de nossos atendentes entrará em contato com você em breve!

⏰ Horário de atendimento:
Segunda a Sexta: 9h às 18h

📧 Ou envie um e-mail para:
contato@seudominio.com

Obrigado pela preferência! 🙏
    `.trim();

    await message.reply(contactText);
}

// Tratamento de erros
client.on('auth_failure', () => {
    console.error('❌ Falha na autenticação');
});

client.on('disconnected', (reason) => {
    console.log('⚠️ Cliente desconectado:', reason);
});

// Inicializa o bot
console.log('🚀 Iniciando Bot WhatsApp...');
client.initialize();
