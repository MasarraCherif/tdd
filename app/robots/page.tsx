"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image"; // Importer Image

export default function RobotsMedecine() {
  const doctors = [
    {
      name: "Dr. Sophie Martin",
      specialization: "Chirurgie robotique",
      experience: "15 ans",
      skills: ["Chirurgie mini-invasive", "Télé-chirurgie", "Recherche en IA médicale"],
      avatar: "/placeholder.svg?height=100&width=100"
    },
    {
      name: "Dr. Thomas Dubois",
      specialization: "Radiologie interventionnelle",
      experience: "12 ans",
      skills: ["Imagerie 3D", "Biopsies guidées par robot", "Analyse d'images par IA"],
      avatar: "/placeholder.svg?height=100&width=100"
    },
    {
      name: "Dr. Émilie Leclerc",
      specialization: "Neurochirurgie",
      experience: "20 ans",
      skills: ["Chirurgie assistée par robot", "Planification préopératoire 3D", "Neuro-navigation"],
      avatar: "/placeholder.svg?height=100&width=100"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Jean Dupont",
      quote: "L'automatisation en santé est prometteuse, mais nous devons rester vigilants quant à ses limites et toujours privilégier le jugement humain dans les décisions critiques.",
      role: "Chirurgien cardiaque"
    },
    {
      name: "Dr. Marie Rousseau",
      quote: "Les robots nous permettent d'être plus précis dans certaines interventions, mais ils ne remplaceront jamais l'empathie et l'intuition d'un médecin expérimenté.",
      role: "Oncologue"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <Image
        src="/assests/ia.png"
        alt="IA"
        layout="fill"
        objectFit="cover"
        className="opacity-30" // Augmenté pour rendre l'image plus claire
      />
      <main className="container mx-auto py-12 relative z-10 space-y-12">
        <section className="text-center">
          <h2 className="text-4xl font-semibold mb-4 text-gray-800">L'ère des robots en médecine</h2>
          <div className="flex justify-center space-x-4 mb-6">
            <Image src="/assests/logo.png" alt="Logo" width={100} height={100} className="max-w-full h-auto" />
            <Image src="/assests/tn.png" alt="Drapeau Tunisien" width={100} height={100} className="max-w-full h-auto" />
          </div>
          <p className="text-lg text-gray-700">
            L'intégration des robots dans le domaine médical transforme rapidement la façon dont les soins sont dispensés. 
            Cette révolution technologique promet une précision accrue et de nouvelles possibilités, mais soulève également 
            des questions importantes sur la sécurité des patients et le rôle futur des médecins.
          </p>
        </section>

        <Tabs defaultValue="avantages" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="avantages" className="text-gray-600 hover:text-gray-800">Avantages</TabsTrigger>
            <TabsTrigger value="risques" className="text-gray-600 hover:text-gray-800">Risques et Limites</TabsTrigger>
          </TabsList>
          <TabsContent value="avantages">
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-900">Avantages de l'Assistance Robotique</CardTitle>
                <CardDescription className="text-gray-600">Comment les robots améliorent les soins médicaux</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Précision accrue dans les interventions chirurgicales complexes</li>
                  <li>Réduction des temps d'opération et de récupération pour les patients</li>
                  <li>Possibilité de réaliser des interventions à distance (télé-chirurgie)</li>
                  <li>Analyse rapide et précise de grandes quantités de données médicales</li>
                  <li>Assistance dans le diagnostic précoce de certaines pathologies</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="risques">
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-900">Risques et Limites</CardTitle>
                <CardDescription className="text-gray-600">Les défis de l'automatisation en médecine</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Risque d'erreurs dues à des défaillances techniques ou des bugs logiciels</li>
                  <li>Dépendance excessive à la technologie au détriment du jugement clinique</li>
                  <li>Problèmes de confidentialité et de sécurité des données des patients</li>
                  <li>Coûts élevés d'acquisition et de maintenance des équipements robotiques</li>
                  <li>Manque de flexibilité face à des situations médicales imprévues</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Nos Médecins Qualifiés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={doctor.avatar} alt={doctor.name} />
                      <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-gray-900">{doctor.name}</CardTitle>
                      <CardDescription className="text-gray-700">{doctor.specialization}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p><strong>Expérience :</strong> {doctor.experience}</p>
                  <div className="mt-2">
                    <strong>Compétences :</strong>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {doctor.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Témoignages de Médecins</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-gray-900">{testimonial.name}</CardTitle>
                  <CardDescription className="text-gray-700">{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote className="italic text-gray-900">"{testimonial.quote}"</blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
