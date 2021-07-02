import React,{Fragment} from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appointment,dropAppointment}) => {
    return ( 
    <Fragment>
        
        <div className="mt-4 text-white">
            <p className="pt-1 pb-1">Mascota: <span className="font-bold">{appointment.mascot}</span> </p>
            <p className="pt-1 pb-1">Dueño: <span className="font-bold">{appointment.owner}</span> </p>
            <p className="pt-1 pb-1">Fecha: <span className="font-bold">{appointment.date}</span> </p>
            <p className="pt-1 pb-1">Hora: <span className="font-bold">{appointment.hours}</span> </p>
            <p className="pt-1 pb-1">Síntomas: <span className="font-bold">{appointment.symptoms}</span> </p>
            <button 
                className="mt-2 shadow bg-red-800 hover:bg-red-700  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                type="submit"
                // onClick={dropAppointment(appointment.id)} no function
                onClick={()=>dropAppointment(appointment.id)}
                >
                    Eliminar Cita
                </button>
        </div>
            
        
         
    </Fragment>
     );
}
 Appointment.propTypes={
     appointment: PropTypes.object.isRequired,
    dropAppointment: PropTypes.func.isRequired
 }
export default Appointment;