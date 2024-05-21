import { useNavigate} from 'react-router-dom';
import $ from 'jquery';
//import ImageFileCard from "../Components/ImageFileCard.tsx";
//import { grid } from '@mui/system';
//import Box from "@mui/material/Box";
//import img1 from  "./../assets/logo1.jpg";
import FilePageHeader from "../Components/FilePageHeader.tsx";
import FilesCompartment from "../Components/FilesCompartment.tsx";
import {useState} from "react";


function FilesPage(){
    const navigate = useNavigate();
    //let results;

    $.ajax({
        url: 'http://localhost:8000/CheckIfLoggedIn.php',
        type: "POST",
        success : function (result){
            if (result != true){
                navigate('/');
            }else {
                //navigate('/2');
                //alert(result);
            }
        }
    });
    //$.ajax({
    //    url: 'http://localhost:8000/fileList.php',
    //    type: "POST",
    //    success : function (result){
    //        //alert(result);
    //        //results = result
    //    }
    //});

    const [username1, setusername] = useState("")

    $.ajax({
        type: "POST",
        url: 'http://localhost:8000/GetUserData.php',
        success : function (result) {
            setusername(result)
        }
    });



    return(
        <>
            <FilePageHeader username={username1}/>
            <FilesCompartment>

            </FilesCompartment>


        </>
    )


}


export default FilesPage;