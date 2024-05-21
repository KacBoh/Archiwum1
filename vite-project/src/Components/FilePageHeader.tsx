import { AppBar, Typography, Button, Grid } from "@mui/material";
import {useNavigate} from "react-router-dom";

interface props{
    username: String,

}
//let results = "";
//$.ajax({
//    type: "POST",
//    url: 'http://localhost:8000/GetUserData.php',
//    success : function (result) {
//        results = result;
//        //alert(result);
//    }
//})


function FilePageHeader({username = "urzytkownik"}: props){
    const navigate = useNavigate();

    const HandleLogoutClick = ()=>{
        if (confirm("Na pewno?")){
            $.ajax({
                type: "POST",
                url: 'http://localhost:8000/Logout.php',
                success : function (result) {
                    if (result != true) {
                        navigate('/');
                    } else {
                        //navigate('/2');
                        //alert(result);
                    }
                }
            })
        }
    }




    return(
        <>
            <AppBar position="static" color="primary" sx={{
                margin: 0,
                flexDirection: "row",
                height: "8vh",
                padding: "5px "
            }}>
                <Typography variant="h4" sx={{padding: "5px"}}>
                    Archiwum
                </Typography>
                <Grid container justifyContent="flex-end">
                    <Typography variant="h4" sx={{padding: "5px", marginRight: "1vw"}}>
                        {username}
                    </Typography>
                    <Button variant="contained" color="error" sx={{borderRadius: "10px"}} onClick={HandleLogoutClick}>
                        Wyloguj się
                    </Button>
                </Grid>

            </AppBar>
        </>


    )
}

export default FilePageHeader;