import { useEffect, useState } from "react";
import { HomeMount } from "./components/HomeMount";
import axios from "axios";


export default function Home(  ) {
    const [criacao, setCriacao] = useState({loading: true, data: []});

    useEffect(()=>{
        fetchAllCriacao(setCriacao);
    }, []);

    useEffect(()=>{
        console.log(criacao);
    }, [criacao]);

    return (
        <HomeMount.Root />
    );
};

const fetchAllCriacao = async (func) => {
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
    func({loading: false, data: data});
};