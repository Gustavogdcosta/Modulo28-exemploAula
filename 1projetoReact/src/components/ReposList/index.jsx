import { useEffect, useState } from "react"
import '../perfil/Perfil.modules.css'
import './ReposList.modules.css'
import '../../global.css'

const ReposList=() => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect (() => {
        fetch('https://api.github.com/users/gustavogdcosta/repos') //get elementos da internet (repositórios do git hub)
        .then(res => res.json()) //recurso para armazenar a string importada pelo fetch
        .then(resJson =>{
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            },3000)}); //o setRepos (recurso que atualiza o campo juntamente com as modificações do usuário)
        //por causa do useState, recebe resJson, que por sua vez, tem os repositorios do git hub armazenados (por causa do fetch)
    },[])
    return (
        <div className="container">
        {estaCarregando && (<h1>Carregando...</h1>)} {/* Esta acão só vai acontecer quando a const (estaCarrengando) for verdadeira */}
        <ul className="list">
            { /*O método map() invoca a função callback passada por argumento para cada elemento do array e devolve um novo array como resultado,
            Isso significa que ele percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento. 
            Para cada chamada de retorno, o valor devolvido se torna o elemento do novo array.*/}
            {/* existem 2 listas, uma com as informações que passamos e uma que foi 
                    importada do  git hub, o .map relaciona as 2 e faz com que um atributo da primeira lista, escrita aqui no html,
                    faça referencia a um atributo da segunda lista, exemplo nome faz referencia ao repositorio.name (um 
                    atributo que possui o nome = "name") */}
            {repos.map(repositorio =>(  
                <li key={repositorio.id} className="listItem">
                    <div className="itemName">
                    <b className="itemNameBold">Nome:</b>
                    {repositorio.name}
                    </div>
                    <a className="itemLink" target="_blank" href={repositorio.html_url}> Visitar no github</a> 
                </li>
            ))}
        </ul>
        </div>
    )
}


export default ReposList;