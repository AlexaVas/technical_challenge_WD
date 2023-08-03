/** @format */

import axios from "axios";
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { BlogCard } from "./BlogCard";

function HomePage() {

    const API_URL = "http://localhost:5005/";

    console.log("hey");

    const [allPhones, setAllPhones] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [click, setClick] = useState(false);
    const [id, setId] = useState();
    const [details, setDetails] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      axios.get(`${API_URL}phones/`)
      .then((response) => {
        
        setAllPhones(response.data);
        allPhones && setIsLoading(false);
      
      })
      .catch((error)=> console.log(error));
    }, []);


    
    useEffect(() => {
      
      if((typeof id) === "number") {
        axios
        .get(`${API_URL}phones/${id}`)
        .then((response) => {
          setDetails(response.data);
          
          
        })
        .catch((error) => console.log(error));}
    }, [id]);


    console.log(isLoading);
    console.log(details);


    
    if (isLoading) return <p>Loading..</p>;

    return (
      <div>
        <Card>
          {details ? (
            <div>
              <Typography variant="lead" color="gray" className="font-normal">
                {details[0].description}
              </Typography>
              <p onClick={() => setDetails("")}>OK</p>
            </div>
          ) : (
            <p></p>
          )}
        </Card>
        {allPhones.map((phone, phoneIndex) => (
          <div className="flex justify-center">
            <Card
              onClick={() => setId(phone.id)}
              key={phoneIndex}
              className="overflow-hidden lg:py-15 m-8">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none">
                <img src={`${phone.imageFileName}`} alt={`${phone.name}`} />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray">
                  {phone.name}
                </Typography>
                {/*  */}
              </CardBody>
              <CardFooter className="flex items-center justify-between">
                <Typography className="font-normal">
                  {phone.manufacturer}
                </Typography>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    );
 
    



}




export default HomePage;
