import { useState } from 'react'
import './styles.css'
import aviao from '../../assets/images/aviaozinho.png'
import face from '../../assets/images/face.png'
import insta from '../../assets/images/insta.png'
import local from '../../assets/images/local.png'

import emailjs from "@emailjs/browser"

const emailTemplate = import.meta.env.VITE_EMAIL_TEMPLATE
const emailService = import.meta.env.VITE_EMAIL_SERVICE
const publicKey = import.meta.env.VITE_PUBLIC_KEY

export default function Footer() {
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const templateParams = {
            message: message
        }

        emailjs.send(
            `${emailService}`,
            `${emailTemplate}`,
            templateParams,
            `${publicKey}`
        ).then(() => {
            setMessage("")
        })
    }

    return(
        <footer>
            <div className='content'>
                <div className='contato'>
                    <div>
                        <h2><span>Entre</span> em <em>contato</em> conosco</h2>
                        <p>Caso tenha alguma duvida ou sujestão<br/>não exite em nos contar</p>

                        <form className='form' onSubmit={handleSubmit}>
                            <input className='sugestao' 
                                type="text" 
                                value={message}
                                required
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder='Tire suas duvidas aqui'
                            />
                            <button type="submit" className='botao-enviar'>
                                <img className='aviao' src={aviao}/>
                            </button>
                        </form>
                            <div className='midias'>
                                <a href='https://www.facebook.com/' target='_blank'><img className='img-midias' src={face} alt="facebook da prefeitura"/></a>
                                <a href='https://www.instagram.com/' target='_blank'><img className='img-midias' src={insta} alt="intagram da prefeitura" /></a>
                                <a href='https://www.google.com.br/maps/place/Central+de+Penas+e+Medidas+Alternativas+Ribeir%C3%A3o+Pires/@-23.7118486,-46.411408,21z/data=!4m6!3m5!1s0x94ce6cef692e20ff:0xc0256e3c2925a4c9!8m2!3d-23.7117419!4d-46.411265!16s%2Fg%2F11b6vhs9vs?entry=ttu' target='_blank'><img className='img-midias' src={local} alt="localização da secretaria da proteção a flora aninal" /></a>
                            </div>
                        </div>
                    
                    <div>
                        <div className='ongs'>
                            <h2><span>ONGS</span> parceiras</h2>
                            <ul>
                                <li>Primeira</li>
                                <li>segunda</li>
                                <li>terceira</li>
                            </ul>
                        </div>
                    </div>
                </div>
               


                <div className='direitos_autorais'>
                    <p>Todos os direitos reservados, {new Date().getFullYear()} &copy;</p>
                </div>
            </div>
        </footer>
    )
}