"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PhoneOff, Clock, Users, Brain, Activity } from "lucide-react";

export default function PhoneAddictionAwareness() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 relative overflow-hidden">
      <Image
        src="/assests/smart.png"
        alt="Smartphone"
        layout="fill"
        className="object-cover opacity-50"
        priority
      />
      
      <header className="flex justify-center items-center space-x-4 mb-8 relative z-10">
        <Image src="/assests/tn.png" alt="Drapeau Tunisien" width={100} height={60} />
        <h1 className="text-5xl font-bold text-white">L'impact des smartphones sur notre vie</h1>
        <Image src="/assests/logo.png" alt="Logo" width={100} height={60} />
      </header>
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8"></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={<Clock className="h-8 w-8 text-blue-500" />}
              title="Temps d'écran quotidien"
              value="3h42"
              description="Temps moyen passé sur un smartphone par jour"
            />
            <StatCard
              icon={<Users className="h-8 w-8 text-green-500" />}
              title="Interactions sociales"
              value="-30%"
              description="Réduction des interactions sociales en personne"
            />
            <StatCard
              icon={<Brain className="h-8 w-8 text-purple-500" />}
              title="Santé mentale"
              value="58%"
              description="Des utilisateurs ressentent de l'anxiété sans leur téléphone"
            />
            <StatCard
              icon={<Activity className="h-8 w-8 text-red-500" />}
              title="Productivité"
              value="-40%"
              description="Baisse de productivité due aux distractions du smartphone"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">Témoignages</h2>
          <Tabs defaultValue="story1" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="story1">Marie, 28 ans</TabsTrigger>
              <TabsTrigger value="story2">Thomas, 35 ans</TabsTrigger>
              <TabsTrigger value="story3">Sophie, 42 ans</TabsTrigger>
            </TabsList>
            <TabsContent value="story1">
              <Card>
                <CardHeader>
                  <CardTitle>Marie, 28 ans</CardTitle>
                  <CardDescription>Étudiante en master</CardDescription>
                </CardHeader>
                <CardContent>
                  "J'ai réalisé que je passais plus de temps à scroller sur mon téléphone qu'à parler à mes amis en face à face. Ça m'a fait un choc. J'ai décidé de limiter mon utilisation et j'ai redécouvert le plaisir des vraies conversations."
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="story2">
              <Card>
                <CardHeader>
                  <CardTitle>Thomas, 35 ans</CardTitle>
                  <CardDescription>Cadre en entreprise</CardDescription>
                </CardHeader>
                <CardContent>
                  "Mon addiction au smartphone affectait ma vie de famille. J'étais physiquement présent mais mentalement absent. Depuis que j'ai mis en place des règles d'utilisation, je me sens plus connecté à mes enfants et à ma femme."
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="story3">
              <Card>
                <CardHeader>
                  <CardTitle>Sophie, 42 ans</CardTitle>
                  <CardDescription>Professeure des écoles</CardDescription>
                </CardHeader>
                <CardContent>
                  "Je voyais mes élèves de plus en plus distraits et isolés à cause de leurs téléphones. J'ai décidé d'instaurer des moments sans écran en classe et j'ai vu une nette amélioration dans leurs interactions et leur concentration."
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">Conseils pour se déconnecter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Défi de déconnexion</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Essayez de passer une journée entière sans votre smartphone. Planifiez des activités alternatives et observez comment vous vous sentez.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Zones sans téléphone</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Désignez certains espaces chez vous comme "zones sans téléphone", par exemple la table à manger ou la chambre à coucher.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Activités de pleine conscience</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Pratiquez la méditation ou le yoga pour vous reconnecter à vous-même et à votre environnement sans distractions numériques.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-8">Prêt à relever le défi ?</h2>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <PhoneOff className="mr-2 h-4 w-4" /> Commencer ma détox digitale
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Votre plan de détox digitale personnalisé</DialogTitle>
                <DialogDescription>
                  Félicitations pour avoir pris cette décision importante ! Voici quelques étapes pour commencer votre détox digitale :
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="col-span-4">1. Définissez un objectif réaliste (par exemple, réduire votre temps d'écran de 30% cette semaine)</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="col-span-4">2. Installez une application de suivi du temps d'écran</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="col-span-4">3. Créez des "zones sans téléphone" chez vous</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="col-span-4">4. Planifiez des activités alternatives (lecture, sport, méditation)</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="col-span-4">5. Partagez votre objectif avec un ami pour plus de motivation</span>
                </div>
              </div>
              <DialogTrigger asChild>
                <Button className="w-full">Je commence maintenant !</Button>
              </DialogTrigger>
            </DialogContent>
          </Dialog>
        </section>
      </main>
    </div>
  );
}

function StatCard({ icon, title, value, description }: { icon: React.ReactNode; title: string; value: string; description: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}