// Por padrão, a pasta onde serão criado componentes(módulos do jsx) se chama components

import './perfil.css'

const Perfil = () => {
    const usuario = { //aqui é onde será escrito a parte JS
        nome: 'Gustavo',
        avatar: 'https://github.com/Gustavogdcosta.png'
    }

    return (//aqui é onde será escrito a parte html
        <div class>
            <img className='perfil-avatar' src={usuario.avatar} alt="Foto perfil github gustavogdcosta" />
            <h3 className='perfil-titulo'>{usuario.nome}</h3>
        </div>
    )
}

export default Perfil;