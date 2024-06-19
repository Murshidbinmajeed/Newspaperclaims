import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../css/Newspaperclaims.css";
import Applypopup from './Applypopup';


const Newspaperclaims = () => {
    const [showpopup, setShowpopup] = useState(false);
    const[employee,setEmployee] = useState({});
    const [claimData,setClaimData]=useState({
        "sapId":"",
        "payLevel":"",
        "group":"",
        "claimPeriod":"",
        "claimYear":"",
        "claimAmount":""
    });
    
    const {sapId,payLevel,group,claimPeriod,claimYear,claimAmount}=claimData;

    const togglePopup = () => {
        setShowpopup(!showpopup);
    };

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
        <div className='col justify-content-center'>
        <div className='row justify-content-center card'>
            <div className='cardheader'>
                <span className='span'></span>
            </div>
            <div className='cardbody'>
                <div className='row1'>
                    <div className='col1'><span className='spanH'><strong>Name </strong></span></div>
                    <div className='col1'><span className='spanC'>{employee.firstname} {employee.middlename} {employee.lastname}</span></div>
                </div>
                <div className='row1'>
                    <div className='col1'><span className='spanH'><strong>SAP ID </strong></span></div>
                    <div className='col1'><span className='spanC'>{employee.personnelno}</span></div>
                </div>
                <div className='row1'>
                    <div className='col1'><span className='spanH'><strong>Department</strong></span></div>
                    <div className='col1'><span className='spanC'>{employee.dept}</span></div>
                </div>
                <div className='row1'>
                    <div className='col1'><span className='spanH'><strong>Designation</strong></span></div>
                    <div className='col1'><span className='spanC'>{employee.position}</span></div>
                </div>
                <div className='row1'>
                    <div className='col1'><span className='spanH'><strong>Pay Scale & Basic Pay</strong></span></div>
                    <div className='col1'><span className='spanC'>{employee.payscalegroup}</span></div>
                </div>
                <div className='row1'>
                    <div className='col1'><span className='spanH'><strong>Date of Joining</strong></span></div>
                    <div className='col1'><span className='spanC'>{employee.joiningdate}</span></div>
                </div>
                <button className='btn btn-primary   apply-btn' onClick={togglePopup}>Apply</button>
            </div>
        </div>
        <div className='row'>
            <Applypopup claimdata={claimData} show={showpopup} onClose={togglePopup}></Applypopup>
        </div>
        </div>
    </>
  )
}

export default Newspaperclaims