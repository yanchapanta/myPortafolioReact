import React, { Fragment } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

import image01 from '../sources/imgProject/01ana.jpg';
import image02 from '../sources/imgProject/02karen.jpg';
import image03 from '../sources/imgProject/03milton.jpg';
import image04 from '../sources/imgProject/04saart.jpg';

function Projects(props) {
	return (
		<Fragment>
			<section className="container mx-auto my-4 mx-4 ">
				<h1>Lista de proyectos</h1>
				<article className="grid grid-cols-4 gad-4 bg-blue-200 text-center text-blue-800">
					<div className="box-border border-4 w-500 h-200 ">
						<hgroup className="p-4" >
							<h2 className='text-xl'>
							Gestor de Citas
							</h2>
							<h3 className='text-xs p-1'>
							Bussines Appointment S.A
							</h3>
						</hgroup>
						<img src={image01} alt="image01" />
						<button className="bg-blue-500 text-white font-bold py-2 px-4 m-4 rounded hover:bg-blue-700">
                        <Link to="/appAppointment">Ver más!</Link>
						</button>
					</div>
					<div className="box-border border-4 w-500 h-200 ">
                        <h3 className='text-xl p-4'>
						Proyecto dos
                        </h3>
						<img src={image02} alt="imagen" />
						<button className="bg-blue-500 text-white font-bold py-2 px-4 m-4  rounded hover:bg-blue-700">
							Ver más!
						</button>
                        
                        <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" />
					</div>
					<div className="box-border border-4 w-500 h-200 ">
                        <h3 className='text-xl p-4'>
						Proyecto tres
                        </h3>
						<img src={image03} alt="imagen" />
						<button className="bg-blue-500 text-white font-bold py-2 px-4 m-4  rounded hover:bg-blue-700">
							Ver más!
						</button>
					</div>
					<div className="box-border border-4 w-500 h-200 ">
                        <h3 className='text-xl p-4'>
						Proyecto cuatro
                        </h3>
						<img src={image04} alt="imagen" />
						<button className="bg-blue-500 text-white font-bold py-2 px-4 m-4 rounded hover:bg-blue-700 active:border-0 focus:border-0">
							Ver más!
                           
						</button>
					</div>
				</article>
			</section>
		</Fragment>
	);
}

export default Projects;
