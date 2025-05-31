type ButtonProps = {
    texto: string;
}

function Button({texto}:ButtonProps){
    return(
        <button className="bg-blue-950 text-white h-fit w-fit px-4 py-1 rounded-2xl font-medium">
          {texto}
        </button>
    );
}

export default Button;