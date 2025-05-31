import Button from "./Button";

type PacoteCardProps ={
    titulo:string
    atendimento:string,
    tempo:string,
    plano:string,
    imgSrc:string,
    preco:string
}

function PacoteCard( {titulo,atendimento,tempo,plano,imgSrc,preco}: PacoteCardProps) {
  return (
    <div className="border-1 border-neutral-300 w-5/12 rounded-2xl p-3 flex flex-col gap-5">
      <img
        className="h-72 bg-gray-400 rounded-lg"
        src={imgSrc}
        alt="Imagem"
      />
      <div className="flex gap-2">
        <p className={`border-1 ${plano=="Basic" ? "opacity-100" : "opacity-50"} border-neutral-500 w-fit px-4 rounded-2xl`}>
          Basic
        </p>
        <p className={`border-1 ${plano=="Premium" ? "opacity-100" : "opacity-50"} border-neutral-500 w-fit px-4 rounded-2xl`}>
          Premium
        </p>
      </div>
      <h1 className="text-xl font-medium">{titulo}</h1>
      <div className="flex gap-24 border-b-1 border-neutral-400 pb-4">
        <div>
          <h3 className="font-medium">Atendimento</h3>
          <p className="text-neutral-500">{atendimento}</p>
        </div>
        <div>
          <h3 className="font-medium">Tempo</h3>
          <p className="text-neutral-500">{tempo}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-neutral-500">A partir de</p>
          <h1 className="font-medium text-2xl">R$ {preco}</h1>
        </div>
        <Button texto="Contratar"/>
      </div>
    </div>
  );
}

export default PacoteCard;
