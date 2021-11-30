import React from 'react'
import './Home.css'
import img from '../img/Eboook.png'
import Form from './Form'
function Home() {




  
  return (
    <div className="modalBackground"  >
            
            <div className='modalContainer'  >
              <div className='DivC'>
              <div className='DRigthe'>
                    <img src={img} alt='' className='img'/>
              </div>
                    <div className='Dleft'>
                       <div className='content'>
                            <h1 className='Titel'>
                            Secrets to Raising Capital: How to get the money you need for your business the fastest and easiest way possible 
                            </h1>
                                <p className='description'>
                                Secrets to Raising Capital is the definitive guide on how to get funding for your business. Unlike other books on raising capital, it is not a list of lenders, investment bankers and investors nor is it filled with instructions on how to value your business or the difference between angel investors and private equity funds. The content of Secrets to Raising Capital is unique. The challenge faced by the business looking to obtain funding is convincing the money source to actually make the loan or the investment.
                                </p>
                       </div>
                       
                          <Form/>
                       </div>
                    
                    
              </div>
            
            </div>
    </div>
  );
}

export default Home;