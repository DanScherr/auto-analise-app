import { useEffect, useState } from "react";
import { HomeMount } from "./components/HomeMount";
import axios from "axios";


export default function Home(  ) {
    const [criacao, setCriacao] = useState({loading: true, data: []});

    // const API_CURRENT_URL = process.env.API_CURRENT_URL;

    const fetchAllCriacao = async () => {
        let data = [];
        try {
            const response = await axios.get(
                `/api/v1/criacao`, 
                {mode: 'no-cors'}
            )
            data=response.data.data;
            console.log(response)
        } catch (error) {
            console.log(error);
        };
        setCriacao({loading: false, data: data});
    };

    useEffect(()=>{
        fetchAllCriacao();
    }, []);

    useEffect(()=>{
        console.log(criacao);
    }, [criacao]);

    return (
        <HomeMount.Root />
    )
}