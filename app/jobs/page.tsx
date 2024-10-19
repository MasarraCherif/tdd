"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from 'lucide-react';
import Image from 'next/image'; // Import Image component for logo and flag

export default function JobConnectMainPage() {
  const [jobType, setJobType] = useState('all');
  const [location, setLocation] = useState('');
  const [industry, setIndustry] = useState('all');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Section pour l'arrière-plan */}
      <div className="absolute inset-0">
        <Image
          src="/assests/tra.png" // Chemin vers votre image de fond
          alt="Arrière-plan"
          layout="fill" // Remplit l'élément parent
          objectFit="cover" // Couvre tout l'élément sans déformation
          style={{ opacity: 0.5 }} // Réglez l'opacité à 50%
        />
      </div>

      <main className="flex-grow relative z-10"> {/* Ajoutez z-10 pour le superposer à l'image de fond */}
        <section className="bg-white text-gray-800 py-20 shadow-md">
          <div className="container mx-auto px-4 text-center">
            {/* Ajout du logo et du drapeau en haut */}
            <div className="flex justify-center mb-8">
              <Image
                src="/assests/logo.png" // Chemin correct vers le logo
                alt="Logo"
                width={150} // Ajustez la taille si nécessaire
                height={150} // Ajustez la taille si nécessaire
              />
              <Image
                src="/assests/tn.png" // Chemin vers le drapeau
                alt="Tunisie"
                width={150} // Ajustez la taille si nécessaire
                height={150} // Ajustez la taille si nécessaire
                className="ml-4" // Marge à gauche pour l'espace entre le logo et le drapeau
              />
            </div>
            <h2 className="text-4xl font-bold mb-4">Mettez en valeur vos compétences, décrochez votre emploi de rêve</h2>
            <p className="text-lg mb-8">Créez votre profil et connectez-vous avec des employeurs dès aujourd'hui !</p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white" size="lg">Créez votre profil</Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Tableau des emplois</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 mt-8">
              <div>
                <Label htmlFor="jobType">Type d'emploi</Label>
                <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Tous les types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Types</SelectLabel>
                      <SelectItem value="all">Tous les types</SelectItem>
                      <SelectItem value="fullTime">Temps plein</SelectItem>
                      <SelectItem value="partTime">Temps partiel</SelectItem>
                      <SelectItem value="contract">Contrat</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="location">Emplacement</Label>
                <Input 
                  id="location" 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)} 
                  placeholder="Entrez l'emplacement" 
                />
              </div>
              <div>
                <Label htmlFor="industry">Industrie</Label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Toutes les industries" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Industries</SelectLabel>
                      <SelectItem value="all">Toutes les industries</SelectItem>
                      <SelectItem value="tech">Technologie</SelectItem>
                      <SelectItem value="healthcare">Santé</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                  <Search className="mr-2" />
                  Rechercher des emplois
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((job) => (
                <Card key={job} className="shadow-lg transition-transform transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-gray-800">Développeur logiciel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">TechCorp Inc. • New York, NY</p>
                    <p className="mb-4">Nous recherchons un développeur logiciel talentueux pour rejoindre notre équipe...</p>
                    <Button variant="outline">Postuler maintenant</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Forum communautaire</h2>
            <Tabs defaultValue="recent">
              <TabsList className="flex justify-center space-x-4 mb-4">
                <TabsTrigger value="recent" className="bg-gray-200 text-gray-700 hover:bg-gray-300">Discussions récentes</TabsTrigger>
                <TabsTrigger value="popular" className="bg-gray-200 text-gray-700 hover:bg-gray-300">Sujets populaires</TabsTrigger>
              </TabsList>
              <TabsContent value="recent">
                <div className="space-y-4">
                  {[1, 2, 3].map((post) => (
                    <Card key={post} className="shadow-md">
                      <CardHeader>
                        <CardTitle className="text-gray-800">Conseils pour réussir votre prochain entretien</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-2">Publié par John Doe • il y a 2 heures</p>
                        <p>Voici quelques stratégies que j'ai trouvées utiles pour préparer des entretiens d'embauche...</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="popular">
                <div className="space-y-4">
                  {[1, 2, 3].map((post) => (
                    <Card key={post} className="shadow-md">
                      <CardHeader>
                        <CardTitle className="text-gray-800">Comment j'ai décroché mon emploi de rêve dans la technologie</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-2">Publié par Jane Smith • il y a 1 semaine</p>
                        <p>Après des mois de recherche, j'ai enfin reçu une offre de mon entreprise de rêve. Voici comment j'ai fait...</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
}
