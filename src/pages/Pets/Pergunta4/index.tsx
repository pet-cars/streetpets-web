import '../style.css'
import Header from '../../../components/Header';
// import React from 'react';
import { NavLink } from "react-router-dom"
import "../style.css"



export default function OptionFour() {
    
    // const isRadioSelected = (value: string): boolean => true;
    
    // const handleRadioClick = (e:React.ChangeEvent<HTMLInputElement>): void => console.log('click')

    return(
        <>
        <Header/>
        <main>
            <div className=''>
            <h1 className="title-cadastro"><span>Preencha</span> os <em>Dados</em> </h1>
                <div className='form-cadastro'>
                    <h1 className='text-form'> O animal que você encontrou, possui algum machucado ou deficiência física?</h1>
                        <div className='radio-group'>
                            <label htmlFor="radio" className='container'>
                                <input type="radio" 
                                    name="react-radio-bnt" 
                                    value="radio1" 
                                    // checked={isRadioSelected('radio1')} 
                                    // onChange={handleRadioClick}
                                />
                                SIM
                                <span className='checkmark'></span>
                            </label>
                            
                            <label htmlFor="radio" className='container'>
                                <input type="radio" 
                                    name="react-radio-bnt" 
                                    value="radio2" 
                                    // checked={isRadioSelected('radio2')} 
                                    // onChange={handleRadioClick}
                                    
                                />
                                NÃO
                                <span className='checkmark'></span>
                            </label>
                            
                        </div> 
                    <div>

                    <button className='button button1'type='button'>    
                        <NavLink to="/OptionFive">
                            Proxima
                        </NavLink>
                    </button>
                    </div>
                </div>
            </div>

        </main>
        </>
    );
}