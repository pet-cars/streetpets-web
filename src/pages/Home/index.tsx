import "./styles.css"

import banner2 from '../../assets/images/banner-2.png'
import b1 from '../../assets/images/b1.png'
import b2 from '../../assets/images/b2.png'
import b3 from '../../assets/images/b3.png'
import sobre from '../../assets/images/sobre.png'

export default function Home() {
    return (
        <>
            <main className="main-home">
            <section className="cont">
                <ul>
                    <li className="title1">
                    BEM VINDO!
                   </li>
                    <li className="title2">
                    <span>Participe</span> da nossa <em>pesquisa,</em> <br/> 
                    <em>Cadastre</em> um <span>bichinho!</span> 
                    </li>
                    <li className="title3">
                    Responda ao nosso formulário de censo para a contribuição da coleta de dados 
                    sobre a situação dos cães e gatos da cidade de Ribeirão Pires 
                    </li>
                </ul>
                <img src={banner2} alt="banner" className="foto" />
            </section>

            <section className="beneficios">
                <h2 className="titulo-beneficios">Conheça os <span>benefícios</span> do <em>censo</em></h2>

                <div className="os-beneficios">
                    <div className="card">
                        <h3>Saúde e bem estar<br/> dos animais</h3>
                        <img className="b" src={b1}/>
                        <div className="border"/>
                        <p className="text-b">A saúde e bem-estar animal são fundamentais para preservar o equilíbrio ecológico e promover a harmonia entre as espécies. </p>
                    </div>

                    <div className="card">
                        <h3>Importancia da<br/> pesquisa</h3>
                        <img className="b" src={b2}/>
                        <div className="border"/>
                        <p className="text-b">A posse de dados sobre os animais permite a impementação de políticas eficazes de controle populacional, saúde e proteção animal, garantindo uma convivência segura e saudável entre seres humanos e animais</p>
                    </div>

                    <div className="card">
                        <h3>Melhoras para a <br/>comunidade</h3>
                        <img className="b" src={b3}/>
                        <div className="border"/>
                        <p className="text-b">Tendo uma maior quantidade de informações dos animais é possivel ter um controle maior sobre diversas doenças trasmitidas pelos animais</p>
                    </div>
                </div>    
            </section>
            
            <section className="sobre">
                <h2 className="titulo-sobre"><em>Sobre</em> o <span>Projeto</span></h2>
                <div className="sobre-content">
                    <img className="img-sobre" src={sobre}/>

                    <div className="text-sobre">
                        <p>A situação de todos os animais da Cidade de Ribeirão Pires é de extrema importância para o bem-estar e segurança tanto dos animais quanto dos seres humanos, nosso aplicativo armazenará os dados dos bichinhos. Esse tipo de levantamento é fundamental para entender a quantidade e a diversidade dos animais, bem como as condições em que vivem.</p>
                        <p>Uma das principais razões para realizar essa pesquisa é a prevenção de doenças. Com essa informação, é possível monitorar a propagação de doenças e tomar medidas preventivas, tais como a vacinação em massa, para evitar que animais saudáveis sejam infectados. Além disso, o censo permite identificar animais doentes ou feridos, o que permite uma intervenção rápida para fornecer assistência médica adequada.</p>
                        <p>Outra razão importante para o censo é o controle da população de animais, especialmente para aqueles que vivem em ambientes urbanos. O excesso de cães e gatos pode levar a problemas de saúde pública, como a disseminação de doenças, e pode também causar problemas de segurança, como mordidas de cães e ataques de animais selvagens. Ao monitorar a população de animais, as autoridades podem implementar medidas para reduzir o número de animais abandonados e promover a adoção responsável. </p>
                        <p>Portanto, o censo da situação de todos os animais de uma determinada cidade é uma ferramenta importante para conscientização pública sobre o bem-estar animal. Ao destacar a importância dos animais na cidade e os desafios que enfrentam, as autoridades podem promover uma cultura de respeito e cuidado pelos animais.</p>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}