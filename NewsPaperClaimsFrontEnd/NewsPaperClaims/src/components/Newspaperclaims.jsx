import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../css/Newspaperclaims.css";


const Newspaperclaims = () => {
    const[employee,setEmployee] = useState({});
    const currentYear = new Date().getFullYear();
    

    useEffect(() => {
        const getEmplloyee = async () => {
            const res =await axios.get(`http://10.99.1.3:9090/dashboard/api/v1/employee/10000637`,
                {ValidityState: () =>{
                    return true;
                }}
            );
            setEmployee(res.data);
            if(res.status === 200){
                setEmployee(res.data[0]);
                console.log(employee);
            }
        }
        getEmplloyee();

    },[]);

  return (
    <>
        <div className='card'>
            <div className='cardheader'>
                <p>Details</p>
            </div>
            <div className='cardbody'>
                <div className='row'>
                    <div className='col'><span className='spanH'><strong>Name </strong></span></div>
                    <div className='col'><span className='spanC'>{employee.firstname} {employee.middlename} {employee.lastname}</span></div>
                </div>
                <div className='row'>
                    <div className='col'><span className='spanH'><strong>SAP ID </strong></span></div>
                    <div className='col'><span className='spanC'>{employee.personnelno}</span></div>
                </div>
                <div className='row'>
                    <div className='col'><span className='spanH'><strong>Department</strong></span></div>
                    <div className='col'><span className='spanC'>{employee.dept}</span></div>
                </div>
                <div className='row'>
                    <div className='col'><span className='spanH'><strong>Designation</strong></span></div>
                    <div className='col'><span className='spanC'>{employee.position}</span></div>
                </div>
                <div className='row'>
                    <div className='col'><span className='spanH'><strong>Pay Scale & Basic Pay</strong></span></div>
                    <div className='col'><span className='spanC'>{employee.payscalegroup}</span></div>
                </div>
                <div className='row'>
                    <div className='col'><span className='spanH'><strong>Date of Joining</strong></span></div>
                    <div className='col'><span className='spanC'>{employee.joiningdate}</span></div>
                </div>
                <button>apply</button>
            </div>
        </div>
    </>
  )
}

export default Newspaperclaims