// Por padrão, a pasta onde serão criado componentes(módulos do jsx) se chama components

import './Perfil.modules.css'

const Perfil = () => {
    const usuario = { //aqui é onde será escrito a parte JS
        nome: 'Gustavo Costa',
        avatar: 'https://github.com/Gustavogdcosta.png'
    }

    return (//aqui é onde será escrito a parte html
        <header className='header'>
            <img className='perfil-avatar' src={usuario.avatar} alt="Foto perfil github gustavogdcosta" />
            <h1 className='perfil-titulo'>{usuario.nome}</h1>
        </header>
    )
}
export default Perfil;