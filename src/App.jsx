import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import Sidebar from './components/Sidebar';
import NowPlaying from './components/NowPlaying';
import MixGrid from './components/MixGrid';
import QueuePanel from './components/QueuePanel';

export default function App() {
  return (
    <Box className="app-shell">
      <Box className="ambient ambient-a" />
      <Box className="ambient ambient-b" />

      <Sidebar />

      <Box className="main-content">
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h4">YouTube Music Client</Typography>
          <IconButton className="search-btn">
            <Search />
          </IconButton>
        </Stack>

        <Box className="content-grid">
          <Box>
            <NowPlaying />
            <MixGrid />
          </Box>
          <QueuePanel />
        </Box>
      </Box>
    </Box>
  );
}
