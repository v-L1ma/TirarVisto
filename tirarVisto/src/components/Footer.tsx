import Button from "./Button";

function Footer(){
    return(
<footer className="pt-20">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-6 w-4/12 ">
            <h1 className="text-5xl">Está com alguma <br /> dúvida?</h1>
            <p>
              Entre em contato através do nosso canal direto ao cliente através
              do botão abaixo
            </p>
            <Button texto="Central de Atendimento"/>
          </div>

          <div className="flex items-center h-fit w-4/12 justify-between pb-4 border-b-1">
            <p className="text-3xl">Receba novidades</p>
            <button className="text-5xl">&#8599;</button>
          </div>
        </div>

        <div className="flex py-10 justify-between border-b-1 border-neutral-300">
          <div className="flex flex-col gap-4">
            <p>Siga em nossa redes:</p>

            <div className="flex gap-4">          
                <p className="border-1 border-neutral-600 w-fit px-4 rounded-2xl">Instagram</p>
                <p className="border-1 border-neutral-600 w-fit px-4 rounded-2xl">X</p>
                <p className="border-1 border-neutral-600 w-fit px-4 rounded-2xl">Facebook</p>
                <p className="border-1 border-neutral-600 w-fit px-4 rounded-2xl">Youtube</p>
            </div>
          </div>

          <div className="flex justify-between gap-40">
            <ul className="flex flex-col gap-2">
              <li>Empresa</li>
              <li className="text-neutral-500">Home</li>
              <li className="text-neutral-500">Quem somos</li>
              <li className="text-neutral-500">Serviços</li>
              <li className="text-neutral-500">Contato</li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li>Novidades</li>
              <li className="text-neutral-500">Passaporte</li>
              <li className="text-neutral-500">Visto</li>
              <li className="text-neutral-500">Entrevista</li>
              <li className="text-neutral-500">Polícia Federal</li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li>Suporte</li>
              <li className="text-neutral-500">FAQ</li>
              <li className="text-neutral-500">Contato</li>
              <li className="text-neutral-500">
                Dúvidas
                <br />
                Frequentes
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-5">
          <p>© 2025 Tirar Visto - Todos os Direitos Reservados</p>
        </div>
      </footer>
    );
}

export default Footer;