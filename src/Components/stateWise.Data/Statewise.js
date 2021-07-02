import React,{useEffect, useState} from 'react'

const Statewise = () => {

    const [Data, setdata]= useState();
    const getCovidData = async()=>{
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        setdata(actualData.Statewise);
    }
    useEffect(() => {
        getCovidData();
      }, [])
    return (
        <>
       <div className="container">
        <div className= "heading">
        <h1 className="mb-5 text-center"><span>INDIA</span>COVID-19 DASHBOARD</h1>
        <div className="table-responsive">
             <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                    <th>State</th>  
                    <th>Confirmed</th>
                    <th>deaths</th>
                    <th>active</th>
                    <th>updated</th>
                </tr>
            </thead>
            <tbody>
             {
                Data.map((curElem, ind)=>{
                        return(
                        <tr>
                            <th>{curElem.state}</th>  
                             <td>{curElem.confirmed}</td>
                             <td>{curElem.deaths}</td>
                               <td>{curElem.active}</td>
                             <td>{curElem.updated}</td>
                            </tr>
                        )
                    })
            }

            </tbody>
             </table>
        </div>
        </div>
       </div>
        </>
    )
}

export default Statewise;
