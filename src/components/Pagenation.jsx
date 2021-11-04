import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination() {
  return (
    <Stack spacing={1} className="pagination">
      <Pagination count={6} />
    </Stack>
  );
}
