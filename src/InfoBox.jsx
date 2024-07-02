import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}) {
    const IMG_URL = "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
    <div className="InfoBox">
    <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={IMG_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
          <p>Temperature = {info.temp}&deg;C</p>
          <p>humidity = {info.humidity}</p>
          <p>Min Temp = {info.minTemp}</p>
          <p>Max Temp = {info.maxTemp}</p>
          <p>
            Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
          </p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    </div>
    );
}