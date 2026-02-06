# 🤖 Bot de Auto-Atendimento WhatsApp

Sistema de atendimento automatizado via WhatsApp para apresentação e venda de serviços.

## 📋 Funcionalidades

- ✅ Menu interativo de serviços
- ✅ Detalhamento de cada serviço
- ✅ Solicitação de orçamento
- ✅ Encaminhamento para atendimento humano
- ✅ Respostas automáticas 24/7

## 🚀 Como Usar

### 1. Instalar Dependências

```bash
cd whatsapp-bot
npm install
```

### 2. Executar o Bot

```bash
npm start
```

### 3. Escanear QR Code

Após executar o comando, um QR Code será exibido no terminal. Escaneie com seu WhatsApp:

1. Abra o WhatsApp no celular
2. Vá em **Configurações** > **Aparelhos Conectados**
3. Clique em **Conectar um aparelho**
4. Escaneie o QR Code exibido no terminal

### 4. Bot Está Pronto!

Quando aparecer a mensagem "✅ Bot WhatsApp está pronto e conectado!", o bot já está funcionando.

## 💬 Como Funciona o Atendimento

### Menu Principal
O cliente pode iniciar a conversa com:
- `oi`
- `olá`
- `menu`

### Opções Disponíveis

**1️⃣** - Ver todos os serviços disponíveis

**2️⃣** - Desenvolvimento Web Full Stack (R$ 2.000+)

**3️⃣** - Chatbot e Automação de Processos (R$ 1.500+)

**4️⃣** - Manutenção e Correção de Bugs (R$ 3.500+)

**5️⃣** - Desenvolvimento Backend (R$ 150/hora)

**6️⃣** - Desenvolvimento Frontend (R$ 1.000+)

**7️⃣** - Solicitar orçamento personalizado

**8️⃣** - Falar com atendente humano

## 📁 Estrutura de Arquivos

```
whatsapp-bot/
├── bot.js           # Lógica principal do bot
├── services.js      # Dados dos serviços
├── package.json     # Dependências
└── README.md        # Documentação
```

## ⚙️ Personalização

### Alterar Serviços

Edite o arquivo `services.js` para adicionar, remover ou modificar serviços.

### Alterar Mensagens

Edite as funções em `bot.js`:
- `sendWelcomeMessage()` - Mensagem de boas-vindas
- `sendServicesList()` - Lista de serviços
- `sendServiceDetails()` - Detalhes do serviço
- `sendBudgetRequest()` - Solicitação de orçamento
- `sendHumanContact()` - Contato humano

### Adicionar E-mail ou Telefone

No arquivo `bot.js`, função `sendHumanContact()`, altere:

```javascript
📧 Ou envie um e-mail para:
seu-email@dominio.com

📱 WhatsApp: (11) 99999-9999
```

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **whatsapp-web.js** - Biblioteca para integração com WhatsApp
- **qrcode-terminal** - Exibição de QR Code no terminal

## 📌 Requisitos

- Node.js 14 ou superior
- WhatsApp instalado no celular
- Conexão com internet estável

## ⚠️ Observações Importantes

1. **Mantenha o terminal aberto** - O bot funciona enquanto o terminal estiver rodando
2. **Não faça logout** - Se desconectar o WhatsApp Web, precisará escanear o QR Code novamente
3. **Primeira execução** - Na primeira vez, uma pasta `.wwebjs_auth` será criada para salvar a sessão
4. **Sessão persistente** - Após a primeira conexão, não precisará escanear o QR Code novamente

## 🔄 Desenvolvimento

Para rodar em modo desenvolvimento com auto-reload:

```bash
npm run dev
```

## 📊 Logs

O bot exibe logs de todas as mensagens recebidas e ações realizadas no console.

## 🆘 Solução de Problemas

### Bot não conecta
- Verifique sua conexão com internet
- Certifique-se que o WhatsApp está instalado no celular
- Tente deletar a pasta `.wwebjs_auth` e reconectar

### QR Code não aparece
- Aguarde alguns segundos
- Reinicie o bot (Ctrl+C e execute novamente)

### Mensagens não são respondidas
- Verifique se o bot está com status "ready" no console
- Teste enviando "menu" para reiniciar

## 📞 Próximos Passos (Melhorias Futuras)

- [ ] Integração com banco de dados
- [ ] Sistema de agendamento
- [ ] Envio de arquivos/imagens
- [ ] Respostas mais inteligentes com IA
- [ ] Dashboard de métricas
- [ ] Múltiplos atendentes
- [ ] Horário de funcionamento

## 📝 Licença

ISC

---

**Desenvolvido para automatizar o atendimento e melhorar a experiência do cliente** 🚀
