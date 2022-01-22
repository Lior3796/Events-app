import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

export const AutocompleteBox = ({ cities }) => {
    const [value, setValue] = useState(null);

    const defaultProps = {
        options: cities,
        getOptionLabel: (option) => option.LocalizedName,
    };
    const flatProps = {
        options: cities.map((option) => option.LocalizedName),
    };

    return (
        <Stack spacing={1} sx={{ width: 300 }}>
            <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                disableCloseOnSelect
                renderInput={(params) => (
                    <TextField {...params} label="disableCloseOnSelect" variant="standard" />
                )}
            />
        </Stack>

    )
}
