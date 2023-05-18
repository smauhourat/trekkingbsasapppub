import React from 'react';
import CountUp from 'react-countup';

const Company = props => {

  return (
    <>
        <section className="company">
            <div className="darklight-overlay">
                <div className="company-inner">
                    <div className="company-container">
                        <h1 className="large">Trekking Buenos Aires</h1>
                        <div className="m-1"></div>
                        <p className="small2">
                            Somos un grupo de amigos, y amigos de amigos, sin intenciones de lucro que hacemos caminos de
                            trekking, los inventamos y los conquistamos!!!!
                        </p>
                        <p className="small2">
                            Nuestros caminos incluyen espinas, piedras, ríos, vados, barro y montaña, en muchos lugares no hay
                            senderos, los hacemos nosotros!!
                        </p>
                        <ul className="list-inline">
                            <li className="list-inline-item m-3">
                                <h1 className="medium"><i className="fas fa-walking"></i></h1>
                                <h2> + <CountUp end={350} duration="1" /></h2>
                                <div>Amigos Satisfechos</div>
                            </li>
                            <li className="list-inline-item m-3">
                                <h1 className="medium"><i className="fas fa-smile"></i></h1>
                                <h2><CountUp end={100} duration="2" /> % </h2>
                                <div>Diversion asegurada</div>
                            </li>
                            <li className="list-inline-item m-3">
                                <h1 className="medium"><i className="fas fa-star"></i></h1>
                                <h2><CountUp end={70} duration="3" /></h2>
                                <div>Puntajes obtenidos</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Company;
