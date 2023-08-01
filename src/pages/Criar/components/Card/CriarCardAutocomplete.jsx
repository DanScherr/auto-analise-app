import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function CriarCardAutocomplete(  ) {

    const options = listOfFeelings.map((option) => {
        const firstLetter = option.label[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
    });

    
    return (
        <>
            {/** Big */}
            <Autocomplete
                disablePortal
                id="combo-box-criar-card-autocomplete"
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                renderInput={(params) => 
                    <TextField {...params} label="Selecione sentimentos" />
                }
                sx={{ display: { xs: 'none', md: 'flex' }}}
            />
            {/** Small */}
            <Autocomplete
                disablePortal
                id="combo-box-criar-card-autocomplete"
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                renderInput={(params) => 
                    <TextField {...params} label="Sentimentos" />
                }
                sx={{ display: { xs: 'flex', md: 'none' }}}
            />
        </>
    )
};

// List of Feelings
const listOfFeelings = [
    { label: 'Abandonado', id: 0 },
    { label: 'Abusado', year: 1 },
    { label: 'Atacado', year: 2 },
    { label: 'Traído', year: 3 },
    { label: 'Intimidado', year: 4 },
    { label: "Diminuído", year: 5 },
    { label: 'Manipulado', year: 6 },
    {
      label: 'Rejeitado', year: 7,
    },
    { label: 'Pressionado', year: 8 },
    { label: 'Provocado', year: 9 },
    {
      label: 'Não-apreciado',
      year: 10,
    },
    {
      label: 'Não-ouvido',
      year: 11,
    },
    { label: 'Não-visto', year: 12 },
    { label: 'Usado', year: 13 },
    {
      label: 'Alerta',
      year: 14,
    },
    { label: "Vivo", year: 15 },
    { label: 'Atônito', year: 16 },
    { label: 'Divertido', year: 17 },
    { label: 'Animado', year: 18 },
    {
      label: 'Estimulado',
      year: 19,
    },
    { label: 'Surpreso', year: 20 },
    { label: 'Feliz', year: 21 },
    { label: 'Calmo', year: 22 },
    { label: "Despreocupado", year: 23 },
    { label: 'Satisfeito', year: 24 },
    { label: 'Confiante', year: 25 },
  ];