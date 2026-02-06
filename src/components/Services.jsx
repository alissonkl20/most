import { useEffect } from "react";

const services = [
  {
    id: 1,
    title: "Desenvolvimento Web Full Stack",
    description: "Criação de sites e aplicações web modernas, responsivas e otimizadas, utilizando tecnologias de ponta e práticas recomendadas do mercado.",
    icon: "💻",
    price: "A partir de R$ 2.000"
  },
  {
    id: 2,
    title: "Chatbot e Automação de Processos",
    description: "Implementação de chatbots inteligentes e automação de processos empresariais para aumentar a eficiência operacional e a produtividade.",
    icon: "🤖",
    price: "A partir de R$ 1.500"
  },
  {
    id: 3,
    title: "Manutenção e Correção de Bugs",
    description: "Serviços especializados de suporte técnico, correção de erros, atualizações de segurança e manutenção preventiva de sistemas.",
    icon: "🛠️",
    price: "A partir de R$ 3.500"
  },
  {
    id: 4,
    title: "Desenvolvimento Backend",
    description: "Criação de APIs robustas, arquitetura de sistemas escaláveis, otimização de desempenho e integração com bancos de dados.",
    icon: "📊",
    price: "R$ 150/hora"
  },
  {
    id: 5,
    title: "Desenvolvimento Frontend",
    description: "Desenvolvimento de interfaces modernas e intuitivas, com foco em experiência do usuário, acessibilidade e compatibilidade entre navegadores.",
    icon: "🚀",
    price: "A partir de R$ 1.000"
  },
  {
    id: 6,
    title: "Integração com Modelos de Linguagem",
    description: "Consultoria especializada em integração de modelos de linguagem, testes automatizados e melhoria contínua de processos de desenvolvimento.",
    icon: "🧪",
    price: "A partir de R$ 2.500"
  }
]

export default function Services() {
  useEffect(() => {}, []); // Removida a lógica de animação de luz

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-200 mb-4">
            Meus Serviços
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Ofereço soluções completas para o seu negócio digital
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card bg-black p-4 rounded-xl shadow-lg border border-gray-300 flex flex-col items-center text-center group transition-all transform scale-95 hover:scale-105 hover:shadow-2xl hover:brightness-125"
              style={{
                background: "black"
              }}
            >
              <div className="text-6xl mb-4 text-blue-500 group-hover:animate-pulse">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-200 mb-2">
                {service.title}
              </h3>
              <p className="text-white mb-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                {service.description}
              </p>
              <p className="text-orange-500 font-semibold text-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
