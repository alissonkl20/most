export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600">
              Vamos conversar sobre o seu projeto
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nome
                </label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Serviço de Interesse
                </label>
                <select 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Desenvolvimento Web</option>
                  <option>Design UI/UX</option>
                  <option>E-commerce</option>
                  <option>Consultoria</option>
                  <option>SEO & Marketing</option>
                  <option>Manutenção</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Mensagem
                </label>
                <textarea 
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Descreva seu projeto..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Enviar Mensagem
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex justify-center gap-6 text-gray-600">
                <a href="#" className="hover:text-blue-600 transition">📧 Email</a>
                <a href="#" className="hover:text-blue-600 transition">📱 WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
