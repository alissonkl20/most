const projects = [
  {
    id: 1,
    title: "E-commerce Fashion",
    description: "Loja virtual completa com mais de 500 produtos",
    image: "/assets/ps.jpg",
    tags: ["React", "Node.js", "Stripe"]
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Painel administrativo com visualização de dados em tempo real",
    image: "/assets/ps.jpg",
    tags: ["React", "D3.js", "Firebase"]
  },
  {
    id: 3,
    title: "Landing Page SaaS",
    description: "Página de conversão para produto SaaS B2B",
     image: "/assets/ps.jpg",
    tags: ["Next.js", "Tailwind", "Framer"]
  },
  {
    id: 4,
    title: "App Delivery",
    description: "Aplicativo de delivery com rastreamento em tempo real",
    image: "/assets/ps.jpg",
    tags: ["React Native", "Firebase", "Maps API"]
  }
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Portfólio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Alguns dos projetos que já desenvolvi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="h-66 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
