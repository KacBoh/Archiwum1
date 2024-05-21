import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import StockImage from "./../assets/ImageFileIcon.png";

interface props{
    CardPic? : any;
    CardTitle : String;
}

//let stockImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png";


function ImageFileCard({CardPic = StockImage, CardTitle = "Zdjęcie"}:props){

    return(
        <Card
            sx={{
                maxWidth: 250,
                maxHeight: 300,
                margin: 1,
                alignItems: 'center',
                minWidth: 150,
            }}>
            <CardActionArea>
                <CardMedia
                    component={"img"}
                    height = "200"
                    width = "150"
                    image = {CardPic}
                    alt = "Img File"
                    sx = {{
                        maxHeight:240,

                    }}

                />
                <CardContent sx = {{padding: 0}}>
                    <Typography gutterBottom variant = "h6" component ="div" sx = {{margin: 1}}>
                        {CardTitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions >
                <Button size = "small" color = "primary" variant={"outlined"}>
                    Pobierz
                </Button>
                <Button size = "small" color = "error" variant={"contained"} sx={{}}>
                    Usuń
                </Button>
            </CardActions>
        </Card>
    )
}

export default ImageFileCard;