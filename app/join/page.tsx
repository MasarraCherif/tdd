"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Check } from "lucide-react"

export default function JoinUs() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Rejoignez-nous</h1>
          <p className="text-xl md:text-2xl mb-8">Avec TDD - Tunisie de Demain, façonnez l'avenir de la Tunisie.</p>
          <Button className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-3 rounded-full">
            Adhérer Maintenant
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About the Party */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-800">À propos de TDD - Tunisie de Demain</h2>
          <p className="text-lg mb-8">
            Nous sommes dédiés à construire une Tunisie progressive, sécurisée et prospère. Notre vision est ancrée dans l'innovation, la durabilité et l'unité nationale.
          </p>
        </div>
      </section>

      {/* Why Vote for Us */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-800">Pourquoi voter pour nous ?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Solutions innovantes</h3>
              <p>Nous proposons des approches novatrices pour relever les défis de demain.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Développement durable</h3>
              <p>Notre engagement envers un avenir écologique et économiquement viable.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Sécurité nationale</h3>
              <p>Priorité à la protection de nos citoyens et de nos intérêts nationaux.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Unité et progrès</h3>
              <p>Nous travaillons pour une Tunisie unie, progressiste et inclusive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-red-800">Votez pour Nous!</h2>
          {formSubmitted ? (
            <div className="text-center text-green-700">
              <Check className="mx-auto h-16 w-16 mb-4" />
              <p className="text-xl">Merci de nous rejoindre ! Ensemble, construisons l'avenir de la Tunisie.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="text" placeholder="Nom" required />
              <Input type="email" placeholder="Email" required />
              <Textarea placeholder="Commentaire (optionnel)" />
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                Rejoindre le mouvement
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}