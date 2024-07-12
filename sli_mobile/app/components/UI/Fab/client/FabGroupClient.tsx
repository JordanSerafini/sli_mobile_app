import * as React from 'react';
import { FAB, Portal, useTheme } from 'react-native-paper';

const FabPerso = () => {
  const [state, setState] = React.useState({ open: false });
  const theme = useTheme();

  const onStateChange = ({ open }: { open: boolean }) => setState({ open });

  const { open } = state;

  return (
    <Portal>
      <FAB.Group
        open={open}
        visible
        icon={open ? 'account' : 'plus'}
        color={"white"} 
        actions={[
          { icon: 'plus', onPress: () => console.log('Pressed add'), color: theme.colors.primary },
          { icon: 'star', label: 'Star', onPress: () => console.log('Pressed star'), color: theme.colors.primary },
          { icon: 'email', label: 'Email', onPress: () => console.log('Pressed email'), color: theme.colors.primary },
          { icon: 'account-plus', label: 'Ajout', onPress: () => console.log('Pressed notifications'), color: theme.colors.primary },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
           
          }
        }}
        fabStyle={{ backgroundColor: theme.colors.primary }} 
      />
    </Portal>
  );
};

export default FabPerso;