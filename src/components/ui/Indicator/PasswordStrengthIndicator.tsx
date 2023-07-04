import React, { FC } from "react";
import { Box, Grid, styled } from "@mui/material";

interface IPasswordStrengthIndicator {
  password: string;
  margin: string;
}

const PasswordIndicatorBar = styled("div")({
  backgroundColor: "gray",
  height: "5px",
  width: "33%",
  borderRadius: "5px",
});
const PasswordFilledIndicatorBar = styled("div")({
  height: "5px",
  width: "100%",
  borderRadius: "5px",
});

const PasswordStrengthIndicator: FC<IPasswordStrengthIndicator> = ({
  password,
  margin,
}) => {
  const symbolsRegExp = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const easyIndicator = () => {
    if (password.length) {
      return "red";
    }
    return "gray";
  };
  const mediumIndicator = () => {
    if (password.length) {
      if (password.length < 8) {
        return "red";
      } else {
        if (/[0-9]/.test(password) || symbolsRegExp.test(password)) {
          return "yellow";
        }
      }
    }
    return "gray";
  };
  const hardIndicator = () => {
    if (password.length) {
      if (password.length < 8) {
        return "red";
      } else {
        if (/[0-9]/.test(password) && symbolsRegExp.test(password)) {
          return "green";
        }
      }
    }
    return "gray";
  };

  return (
    <Box>
      <Grid container sx={{ gap: "5px", flexWrap: "unset", margin: margin }}>
        <PasswordIndicatorBar>
          <PasswordFilledIndicatorBar
            sx={{ backgroundColor: easyIndicator() }}
          />
        </PasswordIndicatorBar>
        <PasswordIndicatorBar>
          <PasswordFilledIndicatorBar
            sx={{ backgroundColor: mediumIndicator() }}
          />
        </PasswordIndicatorBar>
        <PasswordIndicatorBar>
          <PasswordFilledIndicatorBar
            sx={{ backgroundColor: hardIndicator() }}
          />
        </PasswordIndicatorBar>
      </Grid>
    </Box>
  );
};

export default PasswordStrengthIndicator;
