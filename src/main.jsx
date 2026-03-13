import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CssBaseline,
  IconButton,
  LinearProgress,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slider,
  Stack,
  ThemeProvider,
  Typography,
  alpha,
  createTheme,
} from '@mui/material';
import {
  Album,
  Explore,
  Favorite,
  GraphicEq,
  Home,
  LibraryMusic,
  PauseCircle,
  PlayCircle,
  QueueMusic,
  Search,
  SkipNext,
  SkipPrevious,
  TrendingUp,
  Whatshot,
} from '@mui/icons-material';
import './styles.css';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    mode: 'dark',
    primary: { main: '#a8c7fa' },
    secondary: { main: '#d0bcff' },
    background: {
      default: '#0b1020',
      paper: '#13192d',
    },
  },
  shape: {
    borderRadius: 24,
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
});

const navItems = [
  { icon: <Home />, label: 'Home' },
  { icon: <Explore />, label: 'Explore' },
  { icon: <LibraryMusic />, label: 'Library' },
  { icon: <Favorite />, label: 'Liked' },
  { icon: <QueueMusic />, label: 'Queue' },
];

const cards = [
  { title: 'Neon Skyline', subtitle: 'Future Bass Mix', listeners: '1.2M plays', progress: 82 },
  { title: 'Velvet Pulse', subtitle: 'Lo-fi Deluxe', listeners: '910K plays', progress: 54 },
  { title: 'Golden Hour Echoes', subtitle: 'Chill Pop', listeners: '2.1M plays', progress: 96 },
  { title: 'Analog Infinity', subtitle: 'Synthwave', listeners: '740K plays', progress: 41 },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="app-shell">
        <Box className="ambient ambient-a" />
        <Box className="ambient ambient-b" />

        <Card className="glass-panel sidebar" elevation={0}>
          <CardContent>
            <Typography variant="h5" mb={2}>
              M3 Music
            </Typography>
            <List>
              {navItems.map((item) => (
                <ListItemButton key={item.label} className="nav-button">
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
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

        <Box className="main-content">
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
            <Typography variant="h4">YouTube Music Client</Typography>
            <IconButton className="search-btn">
              <Search />
            </IconButton>
          </Stack>

          <Card className="glass-panel hero" elevation={0}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6">Now Playing</Typography>
                <GraphicEq color="primary" />
              </Stack>
              <Typography variant="h4" mb={0.5}>
                Electric Bloom
              </Typography>
              <Typography color="text.secondary" mb={3}>
                Aurora Lane • Premium Track
              </Typography>
              <Slider defaultValue={37} sx={{ mb: 2 }} />
              <Stack direction="row" spacing={2} alignItems="center">
                <IconButton>
                  <SkipPrevious />
                </IconButton>
                <IconButton color="primary">
                  <PauseCircle sx={{ fontSize: 48 }} />
                </IconButton>
                <IconButton>
                  <SkipNext />
                </IconButton>
              </Stack>
            </CardContent>
          </Card>

          <Typography variant="h6" mt={4} mb={2}>
            Premium Picks
          </Typography>
          <Box className="card-grid">
            {cards.map((card, index) => (
              <Card key={card.title} className="glass-panel music-card" elevation={0}>
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
                  <Typography fontWeight={700}>{card.title}</Typography>
                  <Typography variant="body2" color="text.secondary" mb={1.5}>
                    {card.subtitle}
                  </Typography>
                  <LinearProgress variant="determinate" value={card.progress} sx={{ mb: 1 }} />
                  <Typography variant="caption" color="text.secondary">
                    {card.listeners}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(<App />);
