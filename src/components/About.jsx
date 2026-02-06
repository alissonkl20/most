import minhaFoto from "/assets/lor.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Sobre Mim
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={minhaFoto}
                alt="Minha Foto" 
                className="rounded-[50%] h-[490px] w-[390px] object-cover shadow-lg"
              />
            </div>
            
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Sou um desenvolvedor freelancer com mais de 2 anos de experiência em soluções tecnológicas personalizadas. 
                Especializado em <strong>desenvolvimento de APIs REST</strong>, criação de <strong>sites profissionais e portfólios</strong>, 
                implementação de <strong>chatbots inteligentes</strong> e <strong>automação de processos</strong> (RPA).
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Minha abordagem combina criatividade, tecnologia de ponta e foco estratégico 
                nos resultados do cliente, entregando soluções que agregam valor real ao negócio.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Especialidades Técnicas:</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Spring Boot', 'Flask', 'RPA', 'QA', 'APIs REST'].map((skill) => (
                      <span 
                        key={skill}
                        className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
