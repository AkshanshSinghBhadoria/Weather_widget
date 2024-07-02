import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';

export default function InfoBox({info}) {
    let RAINY_URL = "https://plus.unsplash.com/premium_photo-1671816261720-02d6f60148eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhaW5pbmd8ZW58MHx8MHx8fDA%3D";
    let CLOUDY_URL = "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdWR5fGVufDB8fDB8fHww";
    let HOT_URL = "https://images.unsplash.com/12/sun-trees.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1bm55JTIwZGF5fGVufDB8fDB8fHww";
    let COLD_URL = "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
    

    return (
    <div className="InfoBox">
    <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 70 
            ? RAINY_URL 
            : info.humidity > 40
            ? CLOUDY_URL
            : info.humidity > 15 
            ?  HOT_URL 
            : COLD_URL
        }

        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 70 
            ? <ThunderstormRoundedIcon /> 
            : info.humidity > 15 
            ?  <WbSunnyRoundedIcon /> 
            : <AcUnitRoundedIcon/>
          }
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