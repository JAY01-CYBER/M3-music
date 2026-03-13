import React from 'react';
import { Card, CardContent, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import { queue } from '../data/mockData';

export default function QueuePanel() {
  return (
    <Card className="glass-panel queue-panel" elevation={0}>
      <CardContent>
        <Typography variant="h6" mb={1.5}>Up Next</Typography>
        <List dense disablePadding>
          {queue.map((track, idx) => (
            <React.Fragment key={track}>
              <ListItem disableGutters>
                <ListItemText
                  primaryTypographyProps={{ fontSize: 14 }}
                  secondaryTypographyProps={{ fontSize: 12 }}
                  primary={track}
                  secondary={idx === 0 ? 'Playing after current track' : 'Queued'}
                />
              </ListItem>
              {idx < queue.length - 1 && <Divider component="li" sx={{ opacity: 0.2 }} />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
