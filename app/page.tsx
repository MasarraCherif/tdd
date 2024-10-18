import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unis pour un avenir meilleur
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Notre ambition est une politique ambitieuse pour la prospérité de la France. Ensemble, bâtissons un pays meilleur pour tous.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="color-red-500">Découvrez notre vision</Button>
                </div>
              </div>
              <Image
                alt="Hero Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="https://cdn.cmsfly.com/67125dd3666ef20012e521ef/images/photo1616891169764e028f01a9d33-a_abi.jpeg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Vers un avenir plus vert</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Ensemble, nous pouvons créer un avenir plus durable. Nos politiques environnementales visent à protéger
                    notre planète pour les générations futures.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Image
                  alt="Nature"
                  className="aspect-square overflow-hidden rounded-xl object-cover object-center sm:aspect-[4/5]"
                  height="300"
                  src="https://cdn.cmsfly.com/67125dd3666ef20012e521ef/images/photo1474376962954d8a681cc53b2-XTZFf.jpeg"
                  width="300"
                />
                <Image
                  alt="Architecture"
                  className="aspect-square overflow-hidden rounded-xl object-cover object-center sm:aspect-[4/5]"
                  height="300"
                  src="https://cdn.cmsfly.com/67125dd3666ef20012e521ef/images/photo16982226546715267e0847e20-COE6P.jpeg"
                  width="300"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Notre vision</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  Notre vision est celle d'une France forte, inclusive et innovante. Nous nous engageons à relever les défis
                  d'aujourd'hui et de demain, en mettant l'accent sur le développement durable, l'éducation, la santé et
                  l'économie.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="outline">En savoir plus</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Vision éthique</h3>
                  <p className="text-sm text-gray-500">
                    Nous promouvons une société juste et équitable, où chacun a sa place et peut s'épanouir.
                  </p>
                </CardContent>
                <CardFooter className="p-4">
                  <Link className="text-sm text-blue-500 hover:underline" href="#">
                    En savoir plus →
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Vision sociale</h3>
                  <p className="text-sm text-gray-500">
                    Nous œuvrons pour un système social qui protège et soutient tous les citoyens.
                  </p>
                </CardContent>
                <CardFooter className="p-4">
                  <Link className="text-sm text-blue-500 hover:underline" href="#">
                    En savoir plus →
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Vision économique</h3>
                  <p className="text-sm text-gray-500">
                    Nous encourageons une économie dynamique et inclusive, source de prospérité pour tous.
                  </p>
                </CardContent>
                <CardFooter className="p-4">
                  <Link className="text-sm text-blue-500 hover:underline" href="#">
                    En savoir plus →
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Vision politique</h3>
                  <p className="text-sm text-gray-500">
                    Nous défendons une démocratie forte et participative, au service de l'intérêt général.
                  </p>
                </CardContent>
                <CardFooter className="p-4">
                  <Link className="text-sm text-blue-500 hover:underline" href="#">
                    En savoir plus →
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
