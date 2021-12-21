import React from 'react'
import { AuthContext } from "../../context/AuthContext";
import 'bootstrap/dist/css/bootstrap.css';
import Topbar from '../../components/topbar/Topbar';

export default function ChangeDetails() {
 return (
  <> 
     <Topbar/>
     <div class="container ms-auto me-auto w-25">
     <form>
       <div class="form-group">
         <label for="exampleInputEmail1"></label>
         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter paswword"/>
       </div>
       <div class="form-group">
         <label for="exampleInputPassword1"></label>
         <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
       </div>
       <button type="submit" class="btn btn-primary">Submit</button>
     </form>
     </div>
    </>
    );
}
