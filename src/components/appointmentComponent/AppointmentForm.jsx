import React,{Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../stylesMain.css';
import PropTypes from 'prop-types';



const AppointmentForm=({createAppointment}) =>{//crearcitas04
    //Crear State de Citas
    const [appointment, actualizeAppointment] = useState({
        mascot:'',
        owner:'',
        date:'',
        hours:'',
        symptoms:''
    });
    //Crear el State de Error
    const [error,actulizeError]=useState(false);




    const actualizeState=e=>{
        actualizeAppointment({...appointment, [e.target.name]:e.target.value});      
    }
    //Extraer valores
    const {mascot, owner, date, hours, symptoms}=appointment;//js
    //Cuando el usuario precione  Agregar Cita
    const submitAppointment=e=>{
        e.preventDefault();
       
        if(mascot.trim()==='' || owner.trim()==='' || date.trim()==='' || hours.trim()==='' || symptoms.trim()===''){
            actulizeError(true);
            return;       
        }
        actulizeError(false);
        appointment.id=uuidv4();

        //Validar
        //Eliminar el mensaje previo
        //Asignar un id
        //Crear la cita //crearcitas05
        createAppointment(appointment);
        //Reiniciar el form
        actualizeAppointment({
            mascot:'',
            owner:'',
            date:'',
            hours:'',
            symptoms:''
        })
    }
    
    return (
        <Fragment>
            <div className="myBgf04 p-4">
                <h2 className="text-3xl text-center  font-semibold pt-4 pb-4 text-white ">CREAR CITA</h2>
                <form action="#" 
                className="w-full max-w-sm sm:max-w-xl"
                onSubmit={submitAppointment}
                >
                    {/* <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                            htmlFor="apodo">
                                apodo de mascota
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            type="text"
                            name="apodo"                      
                            placeholder="Apodo de mascota"
                            onChange={actualizeState}
                            value={null}
                            />
                        </div>
                    </div> */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                            htmlFor="mascot">
                                Nombre Mascota
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            type="text"
                            name="mascot"                      
                            placeholder="Nombre de Mascota"
                            onChange={actualizeState}
                            value={mascot}
                            />
                            {error?<span className="block text-red-500 text-sm text-right pt-1">* Este campo es obligatorio</span>:null}
                        </div>

                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                            htmlFor="owner">
                            Nombre Dueño
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            type="text"
                            name="owner"
                            placeholder="Nombre del propietario"
                            onChange={actualizeState}
                            value={owner}
                            />
                            {error?<span className=" block text-red-500 text-sm text-right pt-1">* Este campo es obligatorio</span>:null}
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                            htmlFor="date">
                            Fecha
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            type="date"
                            name="date"
                            onChange={actualizeState}
                            value={date}
                            />
                            {error?<span className=" block text-red-500 text-sm text-right pt-1">* Este campo es obligatorio</span>:null}
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                            htmlFor="time">
                            Hora
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            type="time"
                            name="hours"
                            onChange={actualizeState}
                            value={hours}
                            />
                            {error?<span className=" block text-red-500 text-sm text-right pt-1">* Este campo es obligatorio</span>:null}
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                            htmlFor="symptoms">
                            Sintomas
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            type="textarea"
                            name="symptoms"
                            onChange={actualizeState}
                            value={symptoms}
                            />
                            {error?<span className=" block text-red-500 text-sm text-right pt-1">* Este campo es obligatorio</span>:null}
                        </div>
                
                    </div>
                
                    <div className="md:flex md:items-center mb-6">
                        
                        <div className="md:w-1/3"></div>
                        <label className="md:w-2/3 block text-gray-500 font-bold">
                            <input className="mr-2 leading-tight" type="checkbox"/>
                            <span className="text-sm">
                                Enviame tu información!
                            </span>
                        </label>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                        <button 
                        className="shadow bg-blue-800 hover:bg-blue-700  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                        type="submit">
                            Agregar Cita
                        </button>
                        </div>
                    </div>
                    
                    
                
                </form>
                
            </div>
           
        </Fragment>
    );
}
AppointmentForm.propTypes={
    createAppointment: PropTypes.func.isRequired
}
export default AppointmentForm;