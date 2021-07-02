import React,{Fragment, useState, useEffect} from 'react';
import AppointmentForm from './appointmentComponent/AppointmentForm';
import Appointment from './appointmentComponent/Appointment';


function AppAppointment() {
    //get citas del localStorage
    let beginesAppointments=JSON.parse(localStorage.getItem('appointments'));
    if(!beginesAppointments){
        beginesAppointments=[];
    }
    //Arreglo citas
    const [appointments,saveAppointments]=useState(beginesAppointments);//crearcitas01

    //Modifica cuando el state cambia
    useEffect(()=>{
        let beginesAppointments=JSON.stringify(localStorage.getItem('appointments'));
        if(beginesAppointments){
            localStorage.setItem('appointments',JSON.stringify(appointments));
        }else{
            localStorage.setItem('appointments',JSON.stringify([]));

        }
    },[appointments])
    //Función que toma las citas actules y agrega las nuevas
    const createAppointment=appointment=>{//crearcitas02
        saveAppointments([...appointments,appointment]);
    }
    //Función eliminar cita
    const dropAppointment=(id)=>{
        const newAppointment= appointments.filter(appointment=>appointment.id!==id);
        saveAppointments(newAppointment);
    }
    //Mensaje condicional
    const title=appointments.length===0?"NO HAY CITAS":"ADMINISTRA TUS CITAS";
    return (
        <Fragment>
                <section className="container mx-auto my-4 mx-4 ">
                    <h1 className="font-extrabold text-center">ADMINISTRADOR DE PACIENTES</h1>
                    <div className="flex flex-row gap-4">
                        <div className="flex-grow">
                        {/*crearcitas03 */}
                            <AppointmentForm
                            createAppointment={createAppointment}
                            />  
                        </div>
                        <div className="flex-grow myBgf04 p-4">
                        <h2 className="text-3xl text-center  font-semibold pt-4 pb-4 text-white ">{title}</h2>
                        {
                            appointments.map(appointment=>(
                                <Appointment
                                key={appointment.id}
                                appointment={appointment}
                                dropAppointment={dropAppointment}
                                />
                            ))
                        }
                        </div>
                    </div>

                </section>
        </Fragment>
    );
}

export default AppAppointment;