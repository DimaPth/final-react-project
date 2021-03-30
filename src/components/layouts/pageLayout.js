import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";

export const PageLayout = ({ children, title }) => {
    return (
      <Box mt={2} p={5}>
        <Box p={4}>
          {children}
        </Box>
      </Box>
    );
};