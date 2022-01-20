import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ErrorMsg = ({ setIsAlerted }) => {
  const errorHandling = () => {
    setIsAlerted(false);
  };

  return (
    <Stack
      sx={{
        width: "100%",
        background: "red",
        "&:hover": {
          backgroundColor: "red",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      spacing={2}
    >
      <Alert
        severity="error"
        variant="filled"
        action={
          <Button
            onClick={errorHandling}
            sx={{
              backgroundColor: "darkRed",
              "&:hover": {
                backgroundColor: "black",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            color="inherit"
            size="small"
          >
            Go Back
          </Button>
        }
      >
        Please enter a valid input. YYYY-MM-DD. ex: 2022-01-10
      </Alert>
    </Stack>
  );
};

export default ErrorMsg;
