import React, { useEffect, useState } from 'react';
import { Message } from '@joy-advanced/api-interfaces';
import { ListingItem } from '@joy-advanced/components';
import { Box } from '@mui/joy';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <Box sx={{ width: 400 }}>
      <ListingItem
        title="cool"
        description="something"
        image={{
          src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800',
          alt: 'cool',
        }}
      />
    </Box>
  );
};

export default App;
