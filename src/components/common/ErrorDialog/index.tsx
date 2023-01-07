import { Button, Dialog, Portal, Text } from "react-native-paper";

interface ErrorDialogProps {
  error: Error | undefined;
  hideDialog: () => void;
}
export function ErrorDialog({ error, hideDialog }: ErrorDialogProps) {
  return (
    <Portal>
      <Dialog visible={Boolean(error)} onDismiss={hideDialog}>
        <Dialog.Title>Error</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">An error ocurred, please try again</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Close</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
