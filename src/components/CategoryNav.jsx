import { Container, Box, Button } from "@mui/material/";
import { Link } from "react-router-dom";

export default function CategoryNav() {
    return (
        <Container maxWidth="lg">
            <Box display="flex" justifyContent="center" alignItems="center"
                sx={{
                    p: 3,
                }}
            >
                <Button size="small" color="primary" component={Link} to={`/category/new`}
                    sx={{
                        p: 1,
                    }}>
                    new
                </Button>
                <Button size="small" color="primary" component={Link} to={`/category/used`}
                    sx={{
                        p: 1,
                    }}>
                    used
                </Button>
            </Box>
        </Container>
    )
}