type LabelProps = {
    texto: string
}

function Label({texto}:LabelProps){
    return(
        <button className="bg-amber-400 py-2 px-4 rounded-3xl font-semibold flex w-fit hover:opacity-80 cursor-pointer">
              {texto}
        </button>
    );
}

export default Label;