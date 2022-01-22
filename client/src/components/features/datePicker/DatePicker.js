import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export const DatePicker = () => {

    return (
        <div className="datePicker-container">
            <TextField
                id="date"
                label="Start-date"
                defaultValue={new Date().getUTCDate()}
                type="date"
                sx={{ width: 200 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="date"
                label="end-date"
                type="date"
                sx={{ width: 220 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    );
}
