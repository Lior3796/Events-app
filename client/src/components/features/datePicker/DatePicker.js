import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useRef } from 'react';
export const DatePicker = () => {
    const startRef = useRef();
    const handleChange = (e) => {

    }
    return (
        <div className="datePicker-container">
            <TextField
                ref={startRef}
                onChange={(e) => handleChange(e)}
                id="date"
                label="Start-date"
                defaultValue={new Date().getUTCDate()}
                type="date"
                sx={{ width: 200, ml: 1 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="date"
                label="end-date"
                type="date"
                sx={{ width: 220, ml: 1 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    );
}
