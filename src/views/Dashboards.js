import React from "react";
import User from "../views/User"
const Dashboard = ()=>{
    return(
    <>
        <div className="details">
        <div className="recentOrders">
            <div className="cardHeader">
                <h2>Attendance records</h2>
                <a href="" className="bb"> see All</a>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Status</td>
                            <td>Activity</td>
                            <td>Recorded By</td>
                            <td>Time Attendance</td>
                            <td>Invoice</td>
                            <td>Payment Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Feb 15, 10:30Am</td>
                            <td><span className="status present">present</span></td>
                            <td>Html</td>
                            <td>KAMUSHABA</td>
                            <td>Feb 15, 10:30Am</td>
                            <td>no processed</td>
                            <td><span className="payment status clam ">Clam</span></td>
                            
                        </tr> <tr>
                            <td>Feb 16, 11:30Am</td>
                            <td><span className="status absent">absent</span></td>
                            <td>Figma</td>
                            <td>KAMUSHABA</td>
                            <td>Feb 16, 11:30Am</td>
                            <td>no processed</td>
                            <td><span className="payment status clam ">Clam</span></td>
                           
                        </tr>
                        <tr>
                            <td>Feb 17, 10:30Am</td>
                            <td><span className="status communicated">communicated</span></td>
                            <td>Html</td>
                            <td>KAMUSHABA</td>
                            <td>Feb 17, 10:30Am</td>
                            <td><span className="invoice NYCTRANSAPORT-pdf">TRANSAPORT-pdf</span></td>
                            <td><span className="payment status clam ">Clam</span></td>
                            
                        </tr>
                        <tr>
                            <td>Feb 18, 11:30Am</td>
                            <td><span className="status present">present</span></td>
                            <td>Css</td>
                            <td>KAMUSHABA</td>
                            <td>Feb 18, 11:30Am</td>
                            <td><span className="invoice NYCTRANSAPORT-pdf">TRANSAPORT-pdf</span></td>
                            <td><span className="payment status clam ">Clam</span></td>
                           
                        </tr>
                        <tr>
                            <td>Feb 18, 9:31Am</td>
                            <td><span className="status present">present</span></td>
                            <td>frontend</td>
                            <td>KAMUSHABA</td>
                            <td>Feb 18, 9:31Am</td>
                            <td><span className="invoice NYCTRANSAPORT-pdf">TRANSAPORT-pdf</span></td>
                            <td><span className="payment status clam ">Clam</span></td>
                           
                        </tr>
                        <tr>
                            <td>Feb 19, 9:30Am</td>
                            <td><span className="status present">present</span></td>
                            <td>backend</td>
                            <td>KAMUSHABA</td>
                            <td>Feb 19, 9:30Am</td>
                            <td><span className="invoice NYCTRANSAPORT-pdf">TRANSAPORT-pdf</span></td>
                            <td><span className="payment status clam ">Clam</span></td>
                           
                        </tr>
                        <tr>
                            <td>Feb 20, 8:30Am</td>
                            <td><span className="status communicated">communicated</span></td>
                            <td>backend</td>
                            <td>KAMUSHABA</td>
                            <td>Feb 20, 8:30Am</td>
                            <td><span className="invoice NYCTRANSAPORT-pdf">TRANSAPORT-pdf</span></td>
                            <td><span className="payment status clam ">Clam</span></td>
                           
                        </tr>
                        
                    </tbody>
                </table>
            </div>
           
    </div>
 


    </>    
    )
}
export default Dashboard;