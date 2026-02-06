export default function Hero() {
  return (
    <section className="bg-black text-orange-600 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Olá, sou Alisson
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Desenvolvedor Freelancer | QA | RPA
          </p>
          <p className="text-lg mb-8 text-orange-600">
            Transformo ideias em soluções digitais incríveis. Sou desenvolvedor freelancer full stack, especializado na criação de chatbots de autoatendimento, sites e portfólios profissionais para empresas e autônomos.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#services" 
              className="bg-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Ver Serviços
            </a>
            <a 
              href="#contact" 
              className="border-2 border-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-black transition"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
