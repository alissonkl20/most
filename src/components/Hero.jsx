export default function Hero() {
  return (
    <section className="bg-black text-orange-600 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Oie, sou Samuel Delgado
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Engenheiro de Software, apaixonado por tecnologia e focado em criar soluções robustas, escaláveis e inovadoras, com mais de 4 anos de experiência.
          </p>
          <p className="text-lg mb-8 text-orange-600">
           Atuando na criação de soluções fullstack com React, Node.js, TypeScript, JavaScript, banco de dados relacional e não relacional, entregando projetos de alta qualidade e desempenho.
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
