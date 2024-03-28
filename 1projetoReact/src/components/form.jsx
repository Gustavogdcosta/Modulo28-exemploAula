import { useEffect, useState } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0); // o useState substituiu o Jerryqueryselector?, de forma que para o react esta configuração vai pegar um valor escrito pelo usuário no codigo hmtl, e atribuirá à variavel materiaA
    const [materiaB, setMateriaB] = useState(0); 
    const [materiaC, setMateriaC] = useState(0); 
    const [nome, setNome] = useState('');

    useEffect (() => {
        console.log("O documento iniciou")
    },[])// usado pra quando o componente se inicia ou se finaliza

    useEffect(() =>{
        console.log('Houve alteração em alguma das matérias')
    }, [materiaA,materiaB, materiaC])//acionado quando algum item do array for alterado

    const aprovado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma/3;

        if (media >= 7 ) {
            return (<p>{nome} está aprovado(a) com media {media}</p>)
        } else {
            return (<p>{nome} foi reprovado(a) com {media}</p>)}
        }

    return (
        //onChange={especifica uma função que se houver uma mudança ira acontecer o que tiver aqui no dentro do cochetes}
        //onChagen={evento =>setMateriaA(evento.target.value) = Notação para que o setMateria A lá em cima receba o valor do que o usuário digitar no campo.
        //esta configuração também faz com que a reatividade aconteça, ou seja a ação do usuário irá mudar a interface imediatamente

        <form>
            <input type="text" placeholder="Digite seu nome" onChange={evento => setNome(evento.target.value)} />
            <input type="number" min="0" max="10" placeholder="Digite a nota da materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" min="0" max="10" placeholder="Digite a nota da materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))} /> 
            <input type="number" min="0" max="10" placeholder="Digite a nota da materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))} /> 
            {aprovado()}
        </form>
    )
}


export default Formulario;