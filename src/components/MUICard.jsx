import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Food1 from "../img/Food1.jpg";

function MUICard() {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 150 }}
          image={Food1}
          title="Tatlı"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tatlı
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            eum?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Bilgi</Button>
          <Button size="small">Sipariş Ver</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default MUICard;
