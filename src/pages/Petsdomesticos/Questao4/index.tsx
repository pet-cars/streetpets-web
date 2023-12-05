import '../style.css'
import Header from '../../../components/Header';
// import React from 'react';
import { NavLink } from "react-router-dom"


export default function Question4() {

    // const isRadioSelected = (value: string): boolean => true;

    // const handleRadioClick = (e:React.ChangeEvent<HTMLInputElement>): void => console.log('click')

    return(
        <>
        <Header/>
        <main>
            <div className=''>
            <h1 className="title-cadastro"><span>Preencha</span> os <em>Dados</em> </h1>
                <div className='form-cadastro'>
                    <h1 className='text-form'> Qual o porte do seu bichinho?</h1>
                        <div className='radio-group'>
                        <label htmlFor="radio" className='container'>
                                <input type="radio" 
                                    name="react-radio-bnt" 
                                    value="radio1" 
                                    // checked={isRadioSelected('radio1')} 
                                    // onChange={handleRadioClick}
                                />
                                PEQUENO
                                <span className='checkmark'></span>
                            </label>
                            
                            <label htmlFor="radio" className='container'>
                                <input type="radio" 
                                    name="react-radio-bnt" 
                                    value="radio2" 
                                    // checked={isRadioSelected('radio2')} 
                                    // onChange={handleRadioClick}
                                    
                                />
                                MÉDIO
                                <span className='checkmark'></span>
                            </label>
                            <label htmlFor="radio" className='container'>
                                <input type="radio" 
                                    name="react-radio-bnt" 
                                    value="radio3" 
                                    // checked={isRadioSelected('radio3')} 
                                    // onChange={handleRadioClick}
                                    
                                />
                                GRANDE
                                <span className='checkmark'></span>
                            </label>
                        </div> 
                    <div>
                    <button className='button button1' type='button'>    
                        <NavLink to="/Dashboard/Pets">
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