import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PagePagination({ pagination, onChange }) {
  const pageCount = pagination
    ? Math.ceil(pagination.count / pagination.limit)
    : 0;

  return (
    <Stack spacing={1} className="pagination">
      <Pagination count={pageCount} onChange={(_, page) => onChange(page)} />
    </Stack>
  );
}
