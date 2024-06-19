import React, { useEffect, useState } from 'react';
import "../css/Applypopups.css";

const Applypopup = ({show, onClose}) => {

    

    const [temperiod,setTemperiod] = useState(false)

    const[claimdata,setClaimdata] = useState
    ({
        "claimPeriod":"",
        "claimYear":"",
        "claimAmount":""
    });

    const [declaration, setDeclation]=useState({
        "declaration1":false,
        "declaration2":false
    });

    const{ claimPeriod , claimYear , claimAmount }=claimdata

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    let year, prev;

    if(currentMonth<6){
        year = currentYear-1;
        prev = currentYear-1;
    }else{
        year = currentYear;
        prev = year-1;
    }

    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        // const tempClaim = claimdata;
        // claimdata['claimPeriod'] = value;
        // setClaimdata(tempClaim);
        // setTemperiod(value);
        setClaimdata({ ...claimdata, [name]: value });
        // console.log(tempClaim); 
    }

    useEffect(()=> {
        console.log(claimdata);
        console.log(declaration);
    },[claimdata])

    const declarationCheck = (e) => {
        const {name} = e.target;
        setDeclation({...declaration, [name]:true});
    }

    const submitdata = () => { 

    }

  if(!show){
    return null;
  }

  return (
    <>
        <div className='container align-items-start popcard'>
            {/* <h1 style={{background:'red'}}> claimdata : { claimdata.claimPeriod &&  claimdata.claimPeriod }</h1> */}
            {/* <h1 style={{background:'red'}}> tempperiod : { temperiod }</h1> */}

            <div className='content '>
                <span className=''><h3>Select the details</h3></span>
                
                
                <div className='mt-3'>
                    <span className='selections'>Select Claim period - </span>
                    <input
                        className="form-check-input" 
                        type="radio" 
                            name='claimPeriod' 
                            id='claimPeriod1' 
                            value={"January to June"}
                            checked={claimPeriod === "January to June"}
                            onChange={(e)=> handleInputChange(e)} 
                            />
                            
                    <label htmlFor="" className='radio-label'>January to June</label>
                    
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name='claimPeriod' 
                        id='claimPeriod2' 
                        value={"July to December"}
                        checked = {claimPeriod === "July to December"}
                        onChange={(e)=> handleInputChange(e)}
                        />
                        
                    <label htmlFor="claimPeriod" className='radio-label'>July to December</label>
                </div>


                <div className='mt-3'>
                    <span>Select claim year - </span>
                    <input 
                        className="form-check-input" 
                        type="radio" 
                        name='claimYear' 
                        id='claimYear' 
                        value={year} 
                        
                        onChange={(e)=> handleInputChange(e)}/>
                        <label htmlFor="">
                            {year}
                        </label>
                    <input 
                        className="form-check-input mr-2" 
                        type="radio" 
                        name='claimYear' 
                        id='claimYear' 
                        value={prev}
                        
                        onChange={(e)=> handleInputChange(e)}/>
                    <label htmlFor="">
                        {prev}
                    </label>
                </div>
                <div className='input-group input-group-sm  mt-3'>
                    <span className='input-group-text' htmlFor="">Enter Amount : </span>
                    <input className='ammount' type="text" name='claimAmount' id='claimAmount' required value={claimAmount} onChange={(e)=> handleInputChange(e)}/> 
                </div>
                {isNaN(claimAmount)
                    &&
                    <div><p className='error-msg'>Enter an amount</p></div>}
                <div className='form-check mt-3'>
                    <input className='form-check-input' type="checkbox" name='declaration1' id='declaration1' value="" onChange={(e) => declarationCheck(e)}/>
                    <label className='form-check-label'>I hereby certify that I have spent &#8360;{claimAmount} towards the purchse of 
                        newspapers at my residence for the months from {claimPeriod === 'January to June'?"January":"July"} {claimYear}&nbsp;to 
                         &nbsp;{claimPeriod === 'January to June'?'June':'December'} {claimYear}.
                    </label>
                </div>
                <div className='form-check mt-3'>
                    <input className="form-check-input" type="checkbox" name='declaration2' id='declaration2' value={true} onChange={(e) => declarationCheck(e)}/>
                    <label className='form-check-label'>I further declare that (i) Newspaper(s) in respect of which reimbursement is claimPeriod
                        is / are purchased by me and (ii) amount for which reimbursement is being claimed has actually been paid by me and has  not /
                        will ot be claimed from any other source.
                    </label>
                </div>
            </div>
            <button onClick={onClose}>&times; close</button>
            <button onClick={submitdata} >submit &crarr;</button>
        </div>
    </>
  )
}

export default Applypopup