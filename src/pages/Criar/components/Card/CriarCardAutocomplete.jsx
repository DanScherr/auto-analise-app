import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function CriarCardAutocomplete( {value, setValue} ) {

    const options = listOfFeelings.map((option) => {
        const firstLetter = option.label[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
    });

    // const hangleChangeValue = (e) => {
    //   setValue(e.target.defaultValue);
    // };

    //to get the value on every input change
    const onInputChange = (event,value) => {
      console.log(value)
      //response from api
      setValue(value);
      };
      
      //to select input tags
      const onSelectTag = (e, value) => {
        setValue(value)
      }

    return (
        <>
            {/** Big */}
            <Autocomplete
                disablePortal
                id="combo-box-criar-card-autocomplete"
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                renderInput={(params) => 
                    <TextField /*value={value} onSelect={hangleChangeValue}*/ {...params} label="Selecione sentimentos" />
                }
                sx={{ display: { xs: 'none', md: 'flex' }}}
                onChange={onSelectTag} // click on the show tags
                onInputChange={onInputChange}
            />
            {/** Small */}
            <Autocomplete
                disablePortal
                id="combo-box-criar-card-autocomplete"
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                renderInput={(params) => 
                    <TextField  {...params} label="Sentimentos" />
                }
                sx={{ display: { xs: 'flex', md: 'none' }}}
                
            />
        </>
    )
};

// List of Feelings
const listOfFeelings = [
    { label: 'Abandonado', id: 0 },
    { label: 'Abusado', id: 1 },
    { label: 'Atacado', id: 2 },
    { label: 'Traído', id: 3 },
    { label: 'Intimidado', id: 4 },
    { label: "Diminuído", id: 5 },
    { label: 'Manipulado', id: 6 },
    {
      label: 'Rejeitado', id: 7,
    },
    { label: 'Pressionado', id: 8 },
    { label: 'Provocado', id: 9 },
    {
      label: 'Não-apreciado',
      id: 10,
    },
    {
      label: 'Não-ouvido',
      id: 11,
    },
    { label: 'Não-visto', id: 12 },
    { label: 'Usado', id: 13 },
    {
      label: 'Alerta',
      id: 14,
    },
    { label: "Vivo", id: 15 },
    { label: 'Atônito', id: 16 },
    { label: 'Divertido', id: 17 },
    { label: 'Animado', id: 18 },
    {
      label: 'Estimulado',
      id: 19,
    },
    { label: 'Surpreso', id: 20 },
    { label: 'Feliz', id: 21 },
    { label: 'Calmo', id: 22 },
    { label: "Despreocupado", id: 23 },
    { label: 'Satisfeito', id: 24 },
    { label: 'Confiante', id: 25 },
  ];