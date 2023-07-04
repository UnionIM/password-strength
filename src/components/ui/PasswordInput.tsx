import React, { ChangeEvent, useState } from "react";
import PasswordStrengthIndicator from "./Indicator/PasswordStrengthIndicator";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const PasswordInput = () => {
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = React.useState(false);

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl>
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        label="Password"
        type={showPassword ? "text" : "password"}
        onChange={passwordHandler}
        value={password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <PasswordStrengthIndicator password={password} margin={"10px 0 0 0"} />
    </FormControl>
  );
};

export default PasswordInput;
