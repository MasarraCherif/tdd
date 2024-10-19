import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar sans boutons */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-around">
        
        </div>
      </nav>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] relative">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    OSER AUJOURD'HUI , REUSSIRE DEMAIN
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Notre ambition est une politique ambitieuse pour la prospérité de la France. Ensemble, bâtissons un pays meilleur pour tous.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <span className="bg-red-500 text-white p-2 rounded">Découvrez notre vision</span>
                </div>
              </div>
              <div>
                <Image
                  src="/assests/police.png" // Correct path to the image
                  alt="Police"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="flex justify-center my-8">
              <Image
                src="/assests/tn.png" // Path to the new image
                alt="Tunisie"
                width={200}
                height={200}
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container flex justify-between px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Vers un avenir plus vert</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Ensemble, nous pouvons créer un avenir plus durable. Nos politiques environnementales visent à protéger notre planète pour les générations futures.
                </p>
              </div>
            </div>
            <Image
                  src="/assests/avenir.png" // Path to the new image
                  alt="Avenir"
                  width={300}
                  height={300}
                  className="rounded-md"
                />

          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2 flex items-center">
                <Image
                  src="/assests/logo.png" // Path to the logo
                  alt="Logo"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Notre vision</h2>
              </div>
              <p className="max-w-[900px] text-gray-500 md:text-xl">
                Notre vision est celle d'une TUNISIE forte, inclusive et innovante. Nous nous engageons à relever les défis d'aujourd'hui et de demain, en mettant l'accent sur le développement durable, l'éducation, la santé et l'économie.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <span className="bg-red-500 text-white p-2 rounded">En savoir plus</span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Nos engagements</h2>
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
