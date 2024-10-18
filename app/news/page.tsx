"use client"
import { useState, useEffect } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, MessageCircle, Share2, ThumbsUp, Twitter } from "lucide-react"

export default function LiveNewsFeed() {
  const [tickerNews, setTickerNews] = useState<string[]>([
    "À la une : Négociations de cessez-le-feu en cours",
    "Le Conseil de sécurité de l'ONU tiendra une réunion d'urgence",
    "L'aide humanitaire atteint les zones touchées",
  ])
  const [latestHeadlines, setLatestHeadlines] = useState([
    {
      id: 1,
      title: "Les efforts diplomatiques s'intensifient alors que le conflit entre dans sa troisième semaine",
      excerpt: "Les dirigeants mondiaux appellent à une désescalade immédiate alors que la crise humanitaire s'aggrave.",
      timestamp: "Il y a 10 minutes",
    },
    {
      id: 2,
      title: "Analyse : L'impact économique du conflit en cours",
      excerpt: "Les experts évaluent les répercussions mondiales et les conséquences économiques à long terme.",
      timestamp: "Il y a 1 heure",
    },
    {
      id: 3,
      title: "Sur le terrain : Témoignages de témoins oculaires depuis les lignes de front",
      excerpt: "Nos correspondants rapportent sur les derniers développements et l'impact sur les civils.",
      timestamp: "Il y a 2 heures",
    },
  ])
  const [comments, setComments] = useState([
    { id: 1, user: "Alex", text: "En espérant une résolution pacifique bientôt.", likes: 15 },
    { id: 2, user: "Sam", text: "Mes pensées vont à ceux qui sont touchés.", likes: 8 },
    { id: 3, user: "Jordan", text: "La situation humanitaire est préoccupante.", likes: 12 },
  ])

  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setTickerNews((prev) => [...prev.slice(1), prev[0]])
    }, 5000)

    return () => clearInterval(tickerInterval)
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Mises à jour en direct sur le conflit</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Actualités de dernière minute</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-2 rounded-md overflow-hidden">
                <div className="animate-marquee whitespace-nowrap">
                  {tickerNews.map((news, index) => (
                    <span key={index} className="mx-4 text-sm font-medium">
                      {news}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Derniers titres</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {latestHeadlines.map((headline) => (
                  <div key={headline.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <h3 className="text-lg font-semibold">{headline.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{headline.excerpt}</p>
                    <div className="flex justify-between items-center mt-2">
                      <Badge variant="secondary">{headline.timestamp}</Badge>
                      <Button variant="link" size="sm">
                        Lire l'article complet
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Carte des zones de conflit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <MapPin className="w-12 h-12 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Espace réservé pour la carte interactive</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mises à jour en direct</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="twitter" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="twitter">Twitter</TabsTrigger>
                  <TabsTrigger value="comments">Commentaires</TabsTrigger>
                </TabsList>
                <TabsContent value="twitter">
                  <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                    <div className="space-y-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex space-x-4">
                          <Avatar>
                            <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=User${i}`} />
                            <AvatarFallback>UN</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">@User{i}</p>
                            <p className="text-sm text-muted-foreground">
                              Dernière mise à jour sur la situation en cours. #ActualitésConflit
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>
                <TabsContent value="comments">
                  <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                    <div className="space-y-4">
                      {comments.map((comment) => (
                        <div key={comment.id} className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <Avatar>
                              <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${comment.user}`} />
                              <AvatarFallback>{comment.user[0]}</AvatarFallback>
                            </Avatar>
                            <p className="text-sm font-medium leading-none">{comment.user}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{comment.text}</p>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <ThumbsUp className="w-4 h-4 mr-1" />
                              {comment.likes}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              Répondre
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
              <div className="mt-4 flex space-x-2">
                <Input placeholder="Ajouter un commentaire..." />
                <Button>Publier</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Évolutions clés</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Négociations de cessez-le-feu en cours</li>
                <li>Corridors humanitaires établis</li>
                <li>Efforts d'aide internationale intensifiés</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Partager ce fil d'actualités</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Twitter className="w-4 h-4 mr-1" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-1" />
                  Partager
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
