import React from 'react';
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from '@mui/material';
import Stack from '@mui/material/Stack';

export const PaginationPage = ({ setPage }) => {
    const changePage = (item) => {
        setPage(item.page);
        return < PaginationItem {...item} />
    }
    return (
        <Stack sx={{ position: "absolute", bottom: "10px", left: "40%" }} spacing={2}>
            <Pagination renderItem={(item) => changePage(item)} count={7} variant="outlined">
            </Pagination>
        </Stack>
    );
}
