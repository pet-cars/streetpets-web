import '../style.css'
import Header from '../../../components/Header';
// import React from 'react';
import { NavLink } from "react-router-dom"
import "../style.css"



export default function OptionFive() {
    
    // const isRadioSelected = (value: string): boolean => true;
    
    // const handleRadioClick = (e:React.ChangeEvent<HTMLInputElement>): void => console.log('click')

    return(
        <>
        <Header/>
        <main>
            <div className=''>
            <h1 className="title-cadastro"><span>Preencha</span> os <em>Dados</em> </h1>
                <div className='form-cadastro'>
                    <h1 className='text-form'> Este bichinho é Gato ou Cachorro?</h1>
                        <div className='radio-group'>
                            <label htmlFor="radio" className='container'>
                                <input type="radio" 
                                    name="react-radio-bnt" 
                                    value="radio1" 
                                    // checked={isRadioSelected('radio1')} 
                                    // onChange={handleRadioClick}
                                />
                                GATO
                                <span className='checkmark'></span>
                            </label>
                            
                            <label htmlFor="radio" className='container'>
                                <input type="radio" 
                                    name="react-radio-bnt" 
                                    value="radio2" checked
                                    // checked={isRadioSelected('radio2')} 
                                    // onChange={handleRadioClick}
                                    
                                />
                                CACHORRO
                                <span className='checkmark'></span>
                            </label>
                            
                        </div> 
                    <div>

                    <button className='button button1' type='button'>    
                        <NavLink to="/Dashboard/pets">
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