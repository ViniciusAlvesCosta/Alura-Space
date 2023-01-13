import logo from './logo.png'
import search from './search.png'


export default function Cabecalho() {
    return (
        <header>
            <img src={logo} alt="Logo do Alura Space"></img>
            <div>
                <input type="text" placeholder="O que você procura?"></input>
                <img src={search} alt="Ícone de lupa"></img>
            </div>
        </header>
    )
}