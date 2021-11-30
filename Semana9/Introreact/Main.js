function Main({subtitulo, tituloPadre, actualizarTitulo, mostrarInfo}) {
    console.log("Estos son los props",props);

    return (<main>
        <div>
            <h2>Subtitulos</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>El titulo de App es(props.tituloPadre)</p>
            <button onCLick={() => {props.actualizarTitulo("Titulo desde Main")}}>
                Actualizar desde Main
            </button>
        </div>
    </main>);
}

export default Main;