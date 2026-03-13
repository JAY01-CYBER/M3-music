import React from 'react';
import { Avatar, Box, Card, CardContent, LinearProgress, Stack, Typography, alpha, useTheme } from '@mui/material';
import { Album, PlayCircle, TrendingUp } from '@mui/icons-material';
import { mixes } from '../data/mockData';

export default function MixGrid() {
  const theme = useTheme();

  return (
    <>
      <Typography variant="h6" mt={4} mb={2}>Premium Picks</Typography>
      <Box className="card-grid">
        {mixes.map((mix, index) => (
          <Card key={mix.title} className="glass-panel music-card" elevation={0}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={2}>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: alpha(theme.palette.primary.main, 0.2),
                    color: 'primary.main',
                    width: 52,
                    height: 52,
                  }}
                >
                  {index % 2 ? <TrendingUp /> : <Album />}
                </Avatar>
                <PlayCircle color="primary" />
              </Stack>
              <Typography fontWeight={700}>{mix.title}</Typography>
              <Typography variant="body2" color="text.secondary" mb={1.5}>{mix.subtitle}</Typography>
              <LinearProgress variant="determinate" value={mix.progress} sx={{ mb: 1 }} />
              <Typography variant="caption" color="text.secondary">{mix.plays}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}
