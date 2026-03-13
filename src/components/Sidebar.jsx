import React from 'react';
import { Card, CardContent, List, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import { Explore, Favorite, Home, LibraryMusic, QueueMusic, Whatshot } from '@mui/icons-material';
import { navItems } from '../data/mockData';

const icons = [<Home />, <Explore />, <LibraryMusic />, <Favorite />, <QueueMusic />];

export default function Sidebar() {
  return (
    <Card className="glass-panel sidebar" elevation={0}>
      <CardContent>
        <Typography variant="h5" mb={2}>M3 Music</Typography>
        <List>
          {navItems.map((label, idx) => (
            <ListItemButton key={label} className="nav-button">
              {icons[idx]}
              <ListItemText sx={{ ml: 1.5 }} primary={label} />
            </ListItemButton>
          ))}
        </List>
        <Card className="glass-panel trend-card" elevation={0}>
          <CardContent>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <Whatshot color="secondary" />
              <Typography fontWeight={700}>Trending Now</Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              Synthwave Sundays is up 27% today.
            </Typography>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
