import React from 'react';
import { Card, CardContent, IconButton, Slider, Stack, Typography } from '@mui/material';
import { GraphicEq, PauseCircle, SkipNext, SkipPrevious } from '@mui/icons-material';

export default function NowPlaying() {
  return (
    <Card className="glass-panel hero" elevation={0}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Now Playing</Typography>
          <GraphicEq color="primary" />
        </Stack>
        <Typography variant="h4" mb={0.5}>Electric Bloom</Typography>
        <Typography color="text.secondary" mb={3}>Aurora Lane • Premium Track</Typography>
        <Slider defaultValue={37} sx={{ mb: 2 }} />
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton><SkipPrevious /></IconButton>
          <IconButton color="primary"><PauseCircle sx={{ fontSize: 48 }} /></IconButton>
          <IconButton><SkipNext /></IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
