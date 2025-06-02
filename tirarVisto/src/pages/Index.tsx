import Button from "../components/Button";
import Footer from "../components/Footer";
import Label from "../components/Label";
import NavBar from "../components/NavBar";
import PacoteCard from "../components/PacoteCard";

function Index() {
  return (
    <body className="w-11/12 m-auto py-4">
      <main>
        <section className="flex flex-col md:flex-row gap-6 justify-between pb-4">
          <div className="md:w-7/12">
            <NavBar />

            <div className="flex flex-col gap-10">
              <div className="mb-6 pb-15 pt-6 pr-6 border-b-1 border-b-neutral-200">
                <h1 className="text-6xl font-semibold leading-18">
                  Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
                </h1>
              </div>

              <div className="flex justify-between items-end w-11/12">
                <div className="flex flex-col gap-6 w-6/12">
                  <p className="text-md text-neutral-500">
                    Com uma equipe altamente treinada, nós temos todos os
                    procedimentos para que seu processo seja o mais tranquilo e
                    rápido. Uma consultoria completa para você e sua família não
                    ter nenhuma preocupação na sua viagem.
                  </p>
                  <Button texto="Saiba mais &rarr;"></Button>
                </div>
                <div className="flex flex-col gap-4">
                  <img
                    className="bg-gray-400 h-25 w-10/12 rounded-2xl"
                    src="videoBruna.png"
                    alt="Video"
                  />
                  <div className="flex gap-4 pr-10">
                    <div>
                      <h2>Conheça a Bruna</h2>
                      <p className="text-sm text-neutral-500">Ver video</p>
                    </div>
                    <button className="bg-blue-950 w-8 h-8 rounded-full text-white">
                      &rarr;
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex  w-9/12 justify-between mb-15">
                <div className=" flex flex-col gap-4">
                  <h1 className="text-5xl font-normal">509</h1>
                  <p className="text-neutral-500">Vistos Tirados</p>
                </div>
                <div className=" flex flex-col gap-4">
                  <h1 className="text-5xl font-normal ">602</h1>
                  <p className="text-neutral-500">Passaportes Tirados</p>
                </div>
                <div className=" flex flex-col gap-4">
                  <h1 className="text-5xl font-normal">634</h1>
                  <p className="text-neutral-500">Famílias Felizes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[url(/heroPicture.png)] bg-cover bg-no-repeat p-10 rounded-2xl flex flex-col justify-between">
            <div className="flex justify-end">
              <Label texto="Tirar meu visto agora!" />
            </div>

            <div className="w-6/12 text-white">
              <h1 className="text-4xl font-semibold mb-5">
                Realize o seu sonho com a ajuda da Tirar Visto!
              </h1>
              <p className="mb-4">
                Com um serviço profissional, você não terá dor de cabeça para
                todo o processo do visto e entrevistas no consulado.
              </p>
            </div>
          </div>
        </section>

        <section className="md:-ml-20 md:w-screen bg-neutral-100">
          <div className="text-2xl  md:text-6xl py-20 md:px-16 m-auto font-normal">
            <h1>
              CONSULTORIA COMPLETA PARA <br /> TIRAR SEU VISTO O
            </h1>
            <h1 className="text-right italic">VOCÊ ESTA EM BOAS MÃOS!</h1>
          </div>
        </section>

        <section className="py-20 flex flex-col gap-16">
          <div>
            <Label texto="Veja como funciona"></Label>
            <div className="flex flex-col gap-10 md:flex-row md:gap-25 items-center">
              <h1 className="text-5xl font-semibold md:w-11/12 leading-15">
                Sua tranquilidade não tem preço!
              </h1>
              <p className="text-neutral-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-16">
            <img
              className="md:w-3/5 bg-gray-400 rounded-2xl"
              src="familia.png"
              alt="Familia em um aeroporto"
            />

            <div>
              <div className="py-5 border-b-1 border-neutral-300">
                <h1 className="text-5xl font-medium mb-5">Etapa Inicial</h1>
                <p className="text-neutral-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>

              <div className="py-5 border-b-1 border-neutral-300">
                <h1 className="mb-5 text-5xl font-medium">
                  Processo de Entrevista
                </h1>
                <button className="font-medium text-lg">+ Leia mais</button>
              </div>

              <div className="py-5 border-b-1 border-neutral-300">
                <h1 className="text-5xl font-medium mb-5">
                  Entrega de Documentos
                </h1>
                <button className="font-medium text-lg">+ Leia mais</button>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center gap-6 pb-20">
          <p className="text-sm w-fit bg-amber-400 py-2 px-4 rounded-3xl font-semibold hover:opacity-80 cursor-pointer">
            Top Destinos
          </p>

          <h1 className="text-5xl font-medium text-center">Destinos mais procurados</h1>

          <p className="md:w-2/6 text-lg text-neutral-500 text-center">
            Confira os destinos mais procurados por nossos clientes nos últimos
            meses, qual seria o seu novo destino?
          </p>

          <Button texto="Conheça mais" />

          <div className="flex flex-col items- gap-4">
            <div className="flex items-end gap-4">
              <div className="flex w-2/6 h-42 md:w-64 md:h-56 rounded-3xl p-4 items-end justify-center bg-[url(/indonesia.png)]">
                <p className="backdrop-blur-xs bg-white/20 rounded-full px-3 py-1 text-white">
                  Bali, Indonesia
                </p>
              </div>
              <div className="flex w-2/6 h-48 md:w-64 md:h-64 rounded-3xl p-4 items-end justify-center bg-[url(/novaYork.png)]">
                <p className="backdrop-blur-xs bg-white/20 rounded-full px-3 py-1 text-white text-sm">
                  Nova York, Estados Unidos
                </p>
              </div>
              <div className="flex w-2/6 h-42 md:w-64 md:h-56 rounded-3xl p-4 items-end justify-center bg-[url(/santorini.png)]">
                <p className="backdrop-blur-xs bg-white/20 rounded-full px-3 py-1 text-white">
                  Santorini, Grécia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex w-2/6 h-42 md:w-64 md:h-56 rounded-3xl p-4 items-end justify-center bg-[url(/paris.png)]">
                <p className="backdrop-blur-xs bg-white/20 rounded-full px-3 py-1 text-white">
                  Paris, França
                </p>
              </div>
              <div className="flex w-2/6 h-48 md:w-64 md:h-64 rounded-3xl p-4 items-end justify-center bg-[url(/cidadeDoCabo.png)]">
                <p className="backdrop-blur-xs bg-white/20 rounded-full px-3 py-1 text-white text-sm">
                  Cidade do Cabo, África do Sul
                </p>
              </div>
              <div className="flex w-2/6 h-42 md:w-64 md:h-56 rounded-3xl p-4 items-end justify-center bg-[url(/mumbai.png)]">
                <p className="backdrop-blur-xs bg-white/20 rounded-full px-3 py-1 text-white">
                  Mumbai, Índia
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <Label texto="Pacotes" />
          <div className="flex justify-between">
            <h1 className="text-5xl font-medium">Confira nossos pacotes</h1>
            <div className="flex gap-4">
              <button className="border-1 border-blue-950 w-11 h-11 rounded-full text-blue-950 cursor-pointer">
                &larr;
              </button>
              <button className="bg-blue-950 w-11 h-11 rounded-full text-white cursor-pointer">
                &rarr;
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <PacoteCard
              titulo="Passaporte"
              atendimento="On-line"
              tempo="45 dias"
              preco="890,00"
              imgSrc="passaporte.png"
              plano="Basic"
            />

            <PacoteCard
              titulo="Passaporte + Visto"
              atendimento="On-line + Presencial"
              tempo="25 dias"
              preco="1.290,00"
              imgSrc="passaporteVisto.png"
              plano="Basic"
            />

            <PacoteCard
              titulo="Consultoria completa"
              atendimento="Presencial Completo"
              tempo="10 dias"
              preco="1.890,00"
              imgSrc="consultoria.png"
              plano="Basic"
            />
          </div>
        </section>
      </main>

      <Footer />
    </body>
  );
}

export default Index;
