import { Box } from "@mui/material";
import ImageFileCard from "./ImageFileCard.tsx";
//import img1 from "../assets/logo1.jpg";
import img2 from "C:\\Users\\Kacper\\Downloads\\plakat1.png";


export default function FilesCompartment(){
    //const image =  require("C:\\Users\\Kacper\\Downloads\\plakat1.png");


    return(
        <>
            <Box sx={{
                height: '92vh',
                maxHeight: "93vh",
                overflow: 'auto',
                backgroundColor: "#9e9e9e"
            }}>
                <Box
                    sx={{
                        gridArea: 'header',
                        display: 'flex',
                        flexDirection: 'row',

                    }}
                >
                    {/*<img src={img2}/>*/}
                    <ImageFileCard CardTitle={"archiwum.jpg"} CardPic={img2}/>
                    <ImageFileCard CardTitle={"zdjecie.jpg"} CardPic={"https://cdn-img1.imgworlds.com/assets/a8f48ba2-9603-4e2b-ac2d-60ce06efa566.jpg?key=home-gallery"}/>
                    <ImageFileCard CardTitle={"zdjęcie1.jpg"} CardPic={"https://www.bottega7.com/media/filer_public_thumbnails/filer_public/f5/98/f5986e4f-b733-4ab8-aa3b-0d474d257464/copertina_img-theme-park_v2.jpg__1200x700_q100_crop_subsampling-2_upscale.jpg"}/>
                    <ImageFileCard CardTitle={"zdjęcie2.png"} CardPic={"https://cdn-img1.imgworlds.com/assets/a8f48ba2-9603-4e2b-ac2d-60ce06efa566.jpg?key=home-gallery"}/>
                </Box>

            </Box>
        </>
    )
}