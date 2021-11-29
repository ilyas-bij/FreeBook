import React from 'react'
import './Home.css'
function Home() {




  const img = "https://user-images.githubusercontent.com/41929050/61567051-13938600-aa33-11e9-8ae7-0b5c19aafab4.jpeg";
  return (
    <div className="modalBackground"  >
            
            <div className='modalContainer'  >
              <div className='DivC'>
              <div className='DRigthe'></div>
                    <div className='Dleft'>
                       <div className='content'>
                            <h1 className='Titel'>Gastro Obscura: A Food Adventurer's Guide (Atlas Obscura) </h1>
                                <p className='description'>
                                A Feast of Wonder!
                                Created by the ever-curious minds behind Atlas Obscura,
                                this breathtaking guide transforms our sense of what people around the world eat and drink.
                                Covering all seven continents, Gastro Obscura serves up a loaded plate of incredible ingredients,
                                food adventures, and edible wonders. Ready for a beer made from fog in Chile? Sardinia’s “Threads of God” pasta?
                                Egypt’s 2000-year-old
                                </p>
                       </div>
                       
                            <form>
                            <div className="form-group">
                                        
                                            <input type="text"  placeholder='Enter your name'/>
                                            <input type="text"  placeholder='Enter your Email'/>
                            </div>
                                
                                </form>
                                <button>git ite now</button>
                       </div>
                    
                    
              </div>
            
            </div>
    </div>
  );
}

export default Home;